"use client";

import Background from "@/components/animations/background";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import Loader from "@/components/Loader";
import toast, { Toaster } from "react-hot-toast";

export default function ChatPage() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState(
    "Hello, I am your AI assistant. How may I help you today?"
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1-0528:free",
          messages: [
            {
              role: "user",
              content: `You are Stack Worth's AI assistant. This app helps users estimate their potential salary based on their tech skills. 
Users log in via GitHub, select their development type (e.g., frontend), choose programming languages, frameworks, databases, and specify their experience. 
Your job is to assist users with questions about this app. If a user asks something unrelated, respond with "I don't know about that."
Keep responses short and concise. User: ${prompt}`,
            },
          ],
        }),
      });

      if (!res.ok) {
        if (res.status === 429) {
          toast.error(
            "You are sending too many requests. Wait a few seconds..."
          );
        } else {
          toast.error("Something went wrong. Try again.");
        }
        setLoading(false);
        return;
      }

      const data = await res.json();
      const content =
        data?.choices?.[0]?.message?.content?.trim() ||
        data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

      setResponse(content || "No response");
      setPrompt("");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Background />
      <Toaster />
      <div className="w-full h-full grid place-items-center z-20 relative">
        <h1 className="text-3xl font-bold mt-32 sm:mt-24 mb-3">
          <span className="text-green-400">Stack Worth</span> Chatbot
        </h1>
        <p className="mb-16 sm:mb-10">Ask the AI your question</p>

        <form
          onSubmit={handleSubmit}
          className="mb-4 w-full flex items-center justify-center mt-6 sm:mt-12"
        >
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="rounded-2xl border text-black font-semibold border-[#555] bg-white opacity-50 backdrop-blur-3xl outline-none px-3 py-2 w-[60%]"
            placeholder="Ask something..."
          />
          <Button
            className="bg-green-500 hover:bg-green-400 rounded-2xl ml-2 px-2"
            type="submit"
          >
            Send
            <IoMdSend />
          </Button>
        </form>

        {loading ? (
          <div className="h-full w-full absolute top-[60%] right-[50%] translate-x-[50%] translate-y-[50%]">
            <Loader small={true} />
          </div>
        ) : (
          <div className="w-[80%] h-full grid place-items-center">
            <p className="w-auto max-w-[70%] bg-white text-black rounded-3xl mt-20 p-4 text-center shadow-[#777] shadow-2xl">
              {response}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
