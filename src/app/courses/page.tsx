import { notFound } from "next/navigation";
import { getCourseBySlug } from "@/lib/courseData";
import { getLessonsByCourseId } from "@/lib/lessonData";
import LessonList from "@/components/LessonList";
import { Course, Lesson } from "@/types/course";

type PageProps = {
  params: { slug: string };
};

export default function CoursePage({
  params,
}: PageProps) {
  const course: Course | null =
    getCourseBySlug(params.slug);

  if (!course) {
    notFound();
  }

  const lessons: Lesson[] =
    getLessonsByCourseId(course.id);

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      
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
