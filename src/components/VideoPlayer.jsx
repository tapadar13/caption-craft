import { useState, useEffect, useRef } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoUrl, captions }) => {
  const [error, setError] = useState("");
  const [hasAttemptedLoad, setHasAttemptedLoad] = useState(false);

  const playerRef = useRef(null);

  const isYouTubeUrl =
    videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");

  useEffect(() => {
    if (videoUrl) {
      setHasAttemptedLoad(true);
      setError("");
    }
  }, [videoUrl]);

  const handleTimeUpdate = () => {
    if (!playerRef.current) return;
    const currentTime = playerRef.current.getCurrentTime();
    captions.forEach((caption) => {
      const captionElement = document.getElementById(`caption-${caption.id}`);
      if (currentTime >= caption.startTime && currentTime < caption.endTime) {
        displayCaptionIncrementally(caption, currentTime, captionElement);
      } else {
        captionElement.style.display = "none";
      }
    });
  };

  const displayCaptionIncrementally = (
    caption,
    currentTime,
    captionElement
  ) => {
    const duration = caption.endTime - caption.startTime;
    const timeElapsed = currentTime - caption.startTime;
    const words = caption.text.split(" ");
    const totalWords = words.length;
    const wordsToShow = Math.ceil((timeElapsed / duration) * totalWords);
    captionElement.style.display = "block";
    captionElement.innerText = words.slice(0, wordsToShow).join(" ");
  };

  const onPlayerReady = (event) => {
    playerRef.current = event.target;
  };

  const onPlayerStateChange = (event) => {
    if (event.data === 1) {
      setInterval(handleTimeUpdate, 100);
    }
  };

  const renderYouTubeEmbed = (url) => {
    const videoIdMatch = url.match(/[?&]v=([^&]+)/);
    if (!videoIdMatch) {
      setError("Invalid YouTube URL");
      return null;
    }
    const videoId = videoIdMatch[1];
    return (
      <YouTube
        videoId={videoId}
        opts={{ width: "100%", height: "480" }}
        onReady={onPlayerReady}
        onStateChange={onPlayerStateChange}
        title="YouTube video player"
      />
    );
  };

  if (error && hasAttemptedLoad) {
    return (
      <div className="text-red-500 dark:text-red-400" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="relative">
      {videoUrl && (
        <>
          {isYouTubeUrl ? (
            renderYouTubeEmbed(videoUrl)
          ) : (
            <video
              src={videoUrl}
              controls
              className="w-full dark:bg-gray-800"
              ref={playerRef}
              onTimeUpdate={handleTimeUpdate}
              onError={() => setError("Invalid video URL")}
            >
              <track kind="captions" />
            </video>
          )}
          <div className="absolute bottom-10 left-0 w-full text-center text-white">
            {captions.map((caption) => (
              <div
                key={caption.id}
                id={`caption-${caption.id}`}
                className="hidden bg-black bg-opacity-50"
              ></div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
