"use client";
import React, { useEffect, useState } from "react";
import { IconArrowLeft, IconEdit } from "@tabler/icons-react";
import { ScrollArea } from "./scroll-area";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { useUserDataStore } from "@/app/hooks/resumeStore";
import { Badge } from "@/components/ui/badge";

export const Edit = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const { userData, updateUserData } = useUserDataStore();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="h-full flex flex-col justify-between py-4">
      <div className="flex items-center gap-2 h-8 capitalize font-semibold">
        <div className="flex gap-3">
          <IconArrowLeft
            onClick={() => setOpen(false)}
            className="cursor-pointer"
          />
          <span>Edit</span>
        </div>
      </div>
      <div className="p-4">
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
        {/* social*/}
        <div className="flex flex-col">
          <label className="block text-sm font-medium mb-1">Social</label>
          <div className="flex gap-1 py-2 flex-wrap">
            {userData?.socials?.map((social, index) => (
              <Badge className="">{"rgnruihgu"}</Badge>
            ))}
          </div>
          <div>
            <Input type="text" placeholder="Type" />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">About</label>
          <Textarea
            value={userData.about || ""}
            onChange={(e) => updateUserData("about", e.target.value)}
            placeholder="An emerging technologist and indie hacker..."
            className="resize-none"
          />
        </div>
      </div>
    </div>
  );
};
