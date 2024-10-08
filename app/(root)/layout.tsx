"use client";
import React, { use, useEffect, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconMessages, IconTemplate, IconEdit } from "@tabler/icons-react";
import Image from "next/image";
import ChatWindow from "@/components/ui/chat-window";
import { TemplatePreview } from "@/components/ui/template-preview";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Edit } from "@/components/ui/edit";

export const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [open, setOpen] = useState(false);
  const [chatopen, setchatopen] = useState(false);
  const [isanimating, setisanimating] = useState(true);
  const [isEditOpen, setisEditOpen] = useState(false);

  useEffect(() => {
    if (chatopen || isEditOpen) {
      setisanimating(false);
    } else {
      setisanimating(true);
    }
  }, [chatopen, isEditOpen]);

  const links = [
    //chat
    {
      label: "Chat",
      href: "#",
      icon: (
        <IconMessages
          onClick={() => {
            setchatopen(true);
          }}
          className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0"
        />
      ),
    },
    {
      label: "Template",
      href: "#",
      icon: (
        <TemplatePreview>
          <IconTemplate className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        </TemplatePreview>
      ),
    },
    {
      label: "Edit",
      href: "#",
      icon: (
        <IconEdit
          onClick={() => {
            setisEditOpen(!isEditOpen);
          }}
          className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0"
        />
      ),
    },
  ];

  return (
    <main className="min-h-screen flex max-sm:flex-col">
      <Sidebar open={open} setOpen={setOpen} animate={isanimating}>
        <SidebarBody className="justify-between gap-10 h-screen">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden py-2">
            <>
              <Image
                src={"/images/omr_logo.png"}
                alt="Logo"
                width={50}
                height={50}
              ></Image>
            </>
            {!chatopen && !isEditOpen ? (
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            ) : chatopen ? (
              <ChatWindow setOpen={setchatopen} />
            ) : (
              <Edit setOpen={setisEditOpen} />
            )}
          </div>
          {/* <div>
            <SidebarLink
              link={{
                label: "User name",
                href: "#",
                icon: (
                  <Image
                    src={"/images/omr_logo.png"}
                    alt="Logo"
                    width={50}
                    height={50}
                  ></Image>
                ),
              }}
            />
          </div> */}
        </SidebarBody>
      </Sidebar>
      <ScrollArea className="overflow-y-scroll h-screen w-full">
        {children}
      </ScrollArea>
    </main>
  );
};

export default Layout;
