"use client";
import React from "react";
import { PlaceholdersAndVanishInput } from "./placeholders-and-vanish-input";
import { IconArrowLeft } from "@tabler/icons-react";

interface ChatWindowProps {
  setOpen: (open: boolean) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ setOpen }) => {
  const placeholders = [
    "What is your name?",
    "What is your objective?",
    "What is your experience?",
    "What is your education?",
    "What is your skills?",
    "What is your projects?",
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 h-8 capitalize font-semibold">
        <IconArrowLeft
          onClick={() => {
            setOpen(false);
          }}
          className="h-5 w-5"
        />
        Chat window
      </div>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default ChatWindow;
