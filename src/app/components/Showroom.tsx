import React, { useState, useRef, useEffect } from 'react';

interface Video {
  id: number;
  src: string;
  title: string;
}

const VideoStackPlayer: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [videos] = useState<Video[]>([
    {
      id: 1,
      src: "/videos/unal-tesisat-reklam.mp4",
      title: "Ünal Tesisat Reklamı",
    },
    {
      id: 2,
      src: "/videos/neomotion-col-reklam.mp4",
      title: "Elephants Dream",
    }
  ]);

  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [userPlayed, setUserPlayed] = useState(false); // Kullanıcı oynatmaya bastı mı?

  // Intersection Observer for visibility detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle video playing only (no load, so it doesn't reset)
  useEffect(() => {
    if (mainVideoRef.current) {
      if (userPlayed && isVisible) {
        mainVideoRef.current.muted = false;
        mainVideoRef.current.play().catch(() => {});
      } else {
        mainVideoRef.current.pause();
      }
    }
    if (nextVideoRef.current) {
      nextVideoRef.current.play().catch(() => {});
    }
  }, [currentIndex, isVisible, userPlayed]);

  const handleNextVideoClick = () => {
    setUserPlayed(false); // Sıradaki videoya geçince tekrar buton gözüksün
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePlayClick = () => {
    setUserPlayed(true);
  };

  const nextIndex = currentIndex < videos.length - 1 ? currentIndex + 1 : 0;

  return (
    <div ref={containerRef} className="w-full max-w-full mx-auto">
      <div className="mb-4">
        <div
          className="cursor-pointer transition-all duration-300 hover:scale-105 w-4/5 rounded-3xl mx-auto h-28 overflow-hidden border-2 border-white shadow-lg"
          onClick={handleNextVideoClick}
        >
          <video
            ref={nextVideoRef}
            key={`next-${videos[nextIndex].id}`}
            src={videos[nextIndex].src}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
      
      <div className="relative w-full min-h-[400px] aspect-video bg-black rounded-3xl overflow-hidden">
        <VideoWithFallback
          ref={mainVideoRef}
          key={`main-${videos[currentIndex].id}`}
          src={videos[currentIndex].src}
          className="w-full h-full object-cover"
          autoPlay={false}
          muted={true}
          loop
          playsInline
        />
        {/* Oynat butonu */}
        {!userPlayed && (
          <button
            onClick={handlePlayClick}
            className="absolute inset-0 flex items-center justify-center z-10 bg-black/30 hover:bg-black/50 transition-colors w-full h-full"
            aria-label="Oynat"
          >
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="36" cy="36" r="36" fill="white" fillOpacity="0.85" />
              <polygon points="30,24 54,36 30,48" fill="#111" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoStackPlayer;

// Fallback video component
const VideoWithFallback = React.forwardRef<HTMLVideoElement, React.VideoHTMLAttributes<HTMLVideoElement>>(
  (props, ref) => {
    const [error, setError] = useState(false);
    if (error) {
      return (
        <div className="flex items-center justify-center w-full h-full bg-black text-white text-lg">
          Video yüklenemedi.
        </div>
      );
    }
    return <video {...props} ref={ref} onError={() => setError(true)} />;
  }
);