import { useState } from "react";

const VideoInput = ({ setVideoUrl }) => {
  const [url, setUrl] = useState("");

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    setVideoUrl(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={url}
        onChange={handleUrlChange}
        placeholder="Enter video URL (e.g., https://www.youtube.com/watch?v=videoid)"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};

export default VideoInput;
