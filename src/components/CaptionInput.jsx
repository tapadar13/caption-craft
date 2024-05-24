import { useState } from "react";
import { FaClock } from "react-icons/fa";

const CaptionInput = ({ addCaption, removeCaption, captions }) => {
  const [text, setText] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addCaption(text, startTime, endTime);
    setText("");
    setStartTime("");
    setEndTime("");
  };

  return (
    <section aria-labelledby="caption-input-heading">
      <h2 id="caption-input-heading" className="sr-only">
        Caption Input
      </h2>
      <p className="text-gray-500 mt-2 mb-2 flex items-center">
        <FaClock className="mr-2" aria-hidden="true" />
        <span>
          You can add multiple captions by entering the text, start time, and
          end time, then clicking "Add Caption". Repeat for each caption you
          want to add.
        </span>
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="caption-text" className="sr-only">
          Caption Text
        </label>
        <input
          id="caption-text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter caption text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <div className="flex gap-4">
          <label htmlFor="start-time" className="sr-only">
            Start Time
          </label>
          <input
            id="start-time"
            type="number"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            placeholder="Start Time (seconds)"
            className="w-full ml-0 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <label htmlFor="end-time" className="sr-only">
            End Time
          </label>
          <input
            id="end-time"
            type="number"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            placeholder="End Time (seconds)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Add Caption
        </button>
      </form>
      <div className="mt-4 space-y-2">
        {captions.map((caption) => (
          <div
            key={caption.id}
            className="flex justify-between items-center border border-gray-300 p-2 rounded-lg"
          >
            <div className="text-gray-700 flex-1">
              <div>{caption.text}</div>
              <div className="text-sm text-gray-500">
                Start: {caption.startTime}s, End: {caption.endTime}s
              </div>
            </div>
            <button
              onClick={() => removeCaption(caption.id)}
              className="ml-4 px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaptionInput;
