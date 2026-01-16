import { NextResponse } from "next/server";
import lessons from "@/data/lessons.json";


  export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const courseId = searchParams.get("courseId");
    const slug = searchParams.get("slug");


  let result = lessons;

  if (courseId) {
    result = result.filter(l => l.courseId === courseId);
  }

  if (slug) {
    result = result.filter(l => l.slug === slug);
  }

  return NextResponse.json({
    success: true,
    data: result
  });
}
