import type { VideoConfig } from "@/site.config";

interface VideoEmbedProps {
  video: VideoConfig;
  background?: boolean;
  className?: string;
}

function getYouTubeEmbedUrl(src: string): string {
  const match = src.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/
  );
  const id = match ? match[1] : src;
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&showinfo=0&rel=0`;
}

function getVimeoEmbedUrl(src: string): string {
  const match = src.match(/vimeo\.com\/(\d+)/);
  const id = match ? match[1] : src;
  return `https://player.vimeo.com/video/${id}?autoplay=1&muted=1&loop=1&background=1`;
}

export default function VideoEmbed({
  video,
  background = false,
  className = "",
}: VideoEmbedProps) {
  if (video.type === "self-hosted") {
    return (
      <video
        className={className}
        autoPlay={background}
        muted={background}
        loop={background}
        controls={!background}
        playsInline
        poster={video.poster}
      >
        <source src={video.src} type="video/mp4" />
      </video>
    );
  }

  const embedUrl =
    video.type === "youtube"
      ? getYouTubeEmbedUrl(video.src)
      : getVimeoEmbedUrl(video.src);

  if (background) {
    return (
      <iframe
        className={className}
        src={embedUrl}
        allow="autoplay; fullscreen"
        title="Background video"
        style={{ border: 0 }}
      />
    );
  }

  return (
    <div className="relative w-full aspect-video">
      <iframe
        className="absolute inset-0 w-full h-full rounded-2xl"
        src={video.type === "youtube"
          ? `https://www.youtube.com/embed/${video.src.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/)?.[1] || video.src}`
          : `https://player.vimeo.com/video/${video.src.match(/vimeo\.com\/(\d+)/)?.[1] || video.src}`
        }
        allow="autoplay; fullscreen"
        title="Video"
        style={{ border: 0 }}
      />
    </div>
  );
}
