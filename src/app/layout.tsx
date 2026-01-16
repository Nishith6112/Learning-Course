import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn Programming",
  description: "Learn programming with structured courses and videos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">

        <header className="border-b bg-white">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-black">
              LearnCode
            </Link>

            <div className="space-x-6 text-sm font-medium">
              <Link
                href="/courses"
                className="hover:text-black text-gray-700"
              >
                Courses
              </Link>
            </div>
          </nav>
        </header>

        <main className="min-h-screen max-w-7xl mx-auto px-6 py-8">
          {children}
        </main>

        <footer className="border-t bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} LearnCode. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
