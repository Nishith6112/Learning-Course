'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Lesson } from '@/types/course';

type Props = {
  lessons: Lesson[];
  courseSlug: string;
};

export default function LessonList({ lessons, courseSlug }: Props) {
  if (lessons.length === 0) {
    return (
      <p className="text-gray-500 text-sm">
        No lessons available.
      </p>
    );
  }

  return (
    <ul className="space-y-3">
      {lessons.map((lesson) => (
        <motion.li
          key={lesson.slug}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 450 }}
        >
          <Link
            href={`/courses/${courseSlug}/${lesson.slug}`}
            className="block rounded-lg border p-4 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <h3 className="font-medium">{lesson.title}</h3>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
