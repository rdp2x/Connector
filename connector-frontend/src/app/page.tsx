"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const Page = () => {
  const [inputText, setInputText] = useState(""); // Stores user input
  const [modifiedText, setModifiedText] = useState(""); // Stores backend response

  const sendToBackend = async () => {
    try {
      const response = await fetch("http://localhost:8080/modify-text", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: inputText,
      });

      const result = await response.text();
      setModifiedText(result); // Update UI with backend response
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
        <div className="shadow-lg rounded-lg p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center text-white mb-4">
            Connector
          </h1>
          <textarea
            rows={5}
            className="w-full p-3 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            onClick={sendToBackend}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send to Backend
          </button>
        </div>

        {/* Display modified text */}
        {modifiedText && (
          <div className="mt-6 p-4 bg-white rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-semibold text-gray-800">
              Modified Text:
            </h2>
            <p className="mt-2 text-gray-700">{modifiedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
