import { useState } from "react";
import VideoInput from "./components/VideoInput";
import CaptionInput from "./components/CaptionInput";

const App = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [captions, setCaptions] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addCaption = (text, startTime, endTime) => {
    const newCaption = {
      id: nextId,
      text,
      startTime: parseFloat(startTime),
      endTime: parseFloat(endTime),
    };
    setCaptions([...captions, newCaption]);
    setNextId(nextId + 1);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">Video Caption App</h1>
      <VideoInput setVideoUrl={setVideoUrl} />
      <CaptionInput addCaption={addCaption} />
    </div>
  );
};

export default App;
