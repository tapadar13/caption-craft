import { useState } from "react";
import VideoInput from "./components/VideoInput";
import CaptionInput from "./components/CaptionInput";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [captions, setCaptions] = useState([]);

  const addCaption = (text, startTime, endTime) => {
    setCaptions([
      ...captions,
      {
        id: captions.length + 1,
        text,
        startTime: parseFloat(startTime),
        endTime: parseFloat(endTime),
      },
    ]);
  };

  const removeCaption = (id) => {
    setCaptions(captions.filter((caption) => caption.id !== id));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto font-sans">
      <h1 className="text-4xl font-bold mb-8 text-center">Video Caption App</h1>
      <VideoInput setVideoUrl={setVideoUrl} />
      <VideoPlayer videoUrl={videoUrl} captions={captions} />
      <CaptionInput
        addCaption={addCaption}
        removeCaption={removeCaption}
        captions={captions}
      />
    </div>
  );
};

export default App;
