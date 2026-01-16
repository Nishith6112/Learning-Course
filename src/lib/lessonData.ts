import lessons from "@/data/lessons.json";
import { Lesson } from "@/types/course";


export function getLessonsByCourseId(
  courseId: string 
  
): Lesson[]{
  return (lessons as Lesson[]).filter(
    (lesson) => lesson.courseId === courseId
  );
} 