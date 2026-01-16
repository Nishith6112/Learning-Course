"use client";

export default function VideoPlayer({ videoUrl }: { videoUrl: string }) {
  return (
    <div className="aspect-video w-full rounded overflow-hidden">
      <iframe
        src={videoUrl}
        className="w-full h-full"
        allowFullScreen
      />
    </div>
  );
}
