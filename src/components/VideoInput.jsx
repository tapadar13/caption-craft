import { useState } from "react";
import { FaLink } from "react-icons/fa";

const VideoInput = ({ setVideoUrl }) => {
  const [url, setUrl] = useState("");

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    setVideoUrl(e.target.value);
  };

  return (
    <div className="mb-4 relative">
      <FaLink
        className="absolute left-3 top-[16px] text-gray-400"
        aria-hidden="true"
      />
      <label htmlFor="video-url" className="sr-only">
        Video URL
      </label>
      <input
        id="video-url"
        type="text"
        value={url}
        onChange={handleUrlChange}
        placeholder="Enter video URL (e.g., https://www.youtube.com/watch?v=videoid)"
        className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};

export default VideoInput;
