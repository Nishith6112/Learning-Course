import { notFound } from "next/navigation";
import { getCourseBySlug } from "@/lib/courseData";
import lessons from "@/data/lessons.json";
import { Course, Lesson } from "@/types/course";

type PageProps = {
  params: Promise<{
    slug: string;
    lessons: string;
  }>;
};

export default async function LessonPage({ params }: PageProps) {
  const { slug, lessons } = await params;

  const course: Course | null = getCourseBySlug(slug);
  if (!course) {
    notFound();
  }

  const lesson = (lessonsData as Lesson[]).find(
    (l) =>
      l.courseId === course.id &&
      l.slug === lessons
  );

  if (!lesson) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
   
      <header>
        <p className="text-sm text-gray-500">
          {course.title}
        </p>
        <h1 className="text-3xl font-bold">
          {lesson.title}
        </h1>
      </header>

      {lesson.videoUrl && (
        <div className="aspect-video w-full overflow-hidden rounded-xl border">
          <iframe
            src={lesson.videoUrl}
            title={lesson.title}
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      )}

      <article className="prose max-w-none">
        <p>{lesson.content}</p>
      </article>
    </main>
  );
}

const lessonsData = lessons as Lesson[];
