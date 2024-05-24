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
    <div>
      <p className="text-gray-500 mt-2 mb-2 flex items-center">
        <FaClock className="mr-2" />
        You can add multiple captions by entering the text, start time, and end
        time, then clicking "Add Caption". Repeat for each caption you want to
        add.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter caption text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <div className="flex space-x-4">
          <input
            type="number"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            placeholder="Start Time (seconds)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
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
    </div>
  );
};

export default CaptionInput;
