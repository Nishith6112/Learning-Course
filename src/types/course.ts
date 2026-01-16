export type Course = {
  id: string;
  title: string;
  slug: string;
  description: string;
};

export type Lesson = {
  courseId: string;
  slug: string;
  title: string;
  videoUrl: string;
  content: string;
};
