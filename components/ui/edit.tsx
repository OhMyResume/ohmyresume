"use client";
import React, { useEffect } from "react";
import { IconArrowLeft, IconEdit } from "@tabler/icons-react";
import { ScrollArea } from "./scroll-area";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { useUserDataStore } from "@/app/hooks/resumeStore";

export const Edit = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const { userData, updateUserData } = useUserDataStore();

  // useEffect(() => {
  //   console.log("userdata", userData);
  // }, [userData]);

  return (
    <div className="h-full flex flex-col justify-between py-4">
      <div className="flex items-center gap-2 h-8 capitalize font-semibold">
        {/* Existing code */}
        <IconArrowLeft
          onClick={() => setOpen(false)}
          className="cursor-pointer"
        />
      </div>
      <div className="p-4">
        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <Input
            type="text"
            value={userData.name || ""}
            onChange={(e) => updateUserData("name", e.target.value)}
            placeholder="John Smith"
            className="w-full"
          />
        </div>

        {/* About Textarea */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">About</label>
          <Textarea
            value={userData.about || ""}
            onChange={(e) => updateUserData("about", e.target.value)}
            placeholder="An emerging technologist and indie hacker..."
            className="resize-none"
          />
        </div>

        {/* Socials */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Socials</label>
          <Input
            type="text"
            value={userData.socials[0]?.url || ""}
            onChange={(e) =>
              updateUserData("socials", [
                { ...userData.socials[0], url: e.target.value },
              ])
            }
            placeholder="GitHub"
            className="w-full"
          />
        </div>

        {/* Similar approach for other inputs */}
      </div>
    </div>
  );
};
