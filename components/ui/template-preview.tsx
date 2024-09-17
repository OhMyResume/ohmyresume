import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { ScrollArea } from "./scroll-area";

import { ReactNode } from "react";
import Image from "next/image";

interface TemplatePreviewProps {
  children: ReactNode;
}

export const TemplatePreview = ({ children }: TemplatePreviewProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="md:max-w-xl sm:max-w-md absolute z-[9999]">
        <ScrollArea className="md:max-w-xl sm:max-w-md sm:max-h-96">
          <DialogHeader>
            <DialogTitle className="py-4">Preview Templates</DialogTitle>
          </DialogHeader>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              // <div
              //   key={item}
              //   className="bg-gray-300 h-40 w-40 rounded-lg"
              // ></div>
              <Image
              src={`/images/rs1.svg`}
              alt="Logo"
              width={150}
              height={150}
              className="rounded-lg border border-gray-300"
              ></Image>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
