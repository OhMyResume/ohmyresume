import React from "react";
import { IconArrowLeft, IconEdit } from "@tabler/icons-react";
import { ScrollArea } from "./scroll-area";
import { Input } from "./input";
import { Textarea } from "./textarea";

export const Edit = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  return (
    <div className="h-full flex flex-col justify-between py-4">
      <div className="flex items-center gap-2 h-8 capitalize font-semibold">
        <IconArrowLeft
          onClick={() => {
            setOpen(false);
          }}
          className="h-5 w-5"
        />
        Edit <IconEdit />
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4">
          {/* Name input */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <Input type="text" placeholder="John Smith" className="w-full" />
          </div>

          {/* About textarea */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">About</label>
            {/* <textarea
              className="w-full p-2 border rounded"
              rows="4"
              placeholder="An emerging technologist and indie hacker..."
            ></textarea> */}
            <Textarea
              placeholder="An emerging technologist and indie hacker..."
              className="resize-none"
            />
          </div>

          {/* Socials inputs */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Socials</label>
            {/* TODO: Add inputs for GitHub, LinkedIn, Website, Email, Phone */}
            <Input type="text" placeholder="GitHub" className="w-full" />
          </div>

          {/* Experiences inputs */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Experiences
            </label>
            {/* TODO: Add inputs for company, jobTitle, date, description */}
            <Input type="text" placeholder="Google" className="w-full" />
          </div>

          {/* Projects inputs */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Projects</label>
            {/* TODO: Add inputs for projectName, date, description, links */}
            <Input type="text" placeholder="Project 1" className="w-full" />
          </div>

          {/* Education inputs */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Education</label>
            {/* TODO: Add inputs for college, graduationDate, degree, activities, description */}
            <Input type="text" placeholder="Harvard" className="w-full" />
          </div>

          {/* Skills inputs */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Skills</label>
            <Input
              type="text"
              placeholder="Java, C++, Angular, React, Redux"
              className="w-full"
            />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};
