
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Course } from "@/types/course";

type Props = {
  course: Course;
};

export default function CourseCard({ course }: Props) {
  return (
    <article className="border rounded-xl p-5 hover:shadow-md transition space-y-3">
      <h2 className="text-xl font-semibold">
        {course.title}
      </h2>

      <p className="text-gray-600 text-sm">
        {course.description}
      </p>

      <Link
        href={`/courses/${course.slug}`}
        className="group inline-flex items-center gap-2 mt-3 text-sm font-medium text-gray-900 hover:text-black"
      >
        <span>View Course</span>

        <ExternalLink
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </Link>
    </article>
  );
}
