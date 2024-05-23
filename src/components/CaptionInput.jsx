import { useState } from "react";

const CaptionInput = ({ addCaption }) => {
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
      <p className="text-gray-500 mb-2">
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
          className="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Add Caption
        </button>
      </form>
    </div>
  );
};

export default CaptionInput;
