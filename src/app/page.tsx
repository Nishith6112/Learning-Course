'use client';

import { motion } from 'framer-motion';
import CourseCard from '@/components/CourseCard';
import { getAllCourses } from '@/lib/courseData';
import type { Course } from '@/types/course';

export default function Home() {
  const courses: Course[] = getAllCourses();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <section className="mb-10 text-center">
        <motion.div
            whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}>
          <h1 className="text-3xl font-bold">
            
            Explore Our Courses</h1>
        </motion.div>
        <p className="mt-2 text-gray-600">
          Learn new skills with structured lessons.
        </p>
      </section>

      <motion.section
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {courses.length > 0 ? (
          courses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No courses available.
          </p>
        )}
      </motion.section>
    </main>
  );
}


