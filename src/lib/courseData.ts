
import courses from "@/data/courses.json";
import { Course } from "@/types/course";

export function getAllCourses(): Course[] {
  return courses as Course[];
}


export function getCourseBySlug(slug: string): Course | null {
  return (
    (courses as Course[]).find(
      (course) => course.slug === slug
    ) ?? null
  );
}