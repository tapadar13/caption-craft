import { useState } from "react";
import VideoInput from "./components/VideoInput";
import CaptionInput from "./components/CaptionInput";
import VideoPlayer from "./components/VideoPlayer";
import Header from "./components/Header";

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
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="p-6 max-w-3xl mx-auto font-sans">
        <Header />
        <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-4 mb-4">
          <p className="border border-gray-300 dark:border-gray-600 rounded-2xl py-1 px-4 text-black dark:text-white text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out">
            1,589 captions added so far
          </p>
          <h1 className="sm:text-5xl text-2xl max-w-[708px] font-bold mb-4">
            <span className="text-transparent bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text mb-3">
              CaptionCraft
            </span>
            <br />
            <div className="flex flex-col items-center mt-4">
              <span className="text-xl text-black dark:text-white">
                Transform Your Videos with Captivating Captions,
              </span>
              <span className="text-xl text-black dark:text-white">
                One at a Time
              </span>
            </div>
          </h1>
        </main>

        <VideoInput setVideoUrl={setVideoUrl} />
        <VideoPlayer videoUrl={videoUrl} captions={captions} />
        <CaptionInput
          addCaption={addCaption}
          removeCaption={removeCaption}
          captions={captions}
        />
      </div>
    </div>
  );
};

export default App;
