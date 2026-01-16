import { notFound } from "next/navigation";
import { getCourseBySlug } from "@/lib/courseData";
import { getLessonsByCourseId } from "@/lib/lessonData";
import LessonList from "@/components/LessonList";
import { Course } from "@/types/course";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params;

  const course: Course | null = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const lessons = getLessonsByCourseId(course.id);

  return (
    <main className="max-w-5xl mx-auto p-8 space-y-6">
      <header className="border rounded-xl p-6">
        <h1 className="text-3xl font-bold">
          {course.title}
        </h1>
        <p className="mt-2 text-gray-600">
          {course.description}
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Lessons
        </h2>

       <LessonList
  lessons={lessons}
  courseSlug={course.slug}
/>
      </section>
    </main>
  );
}
