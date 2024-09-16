import React from "react";
import Template1 from "@/components/resumes/template1";
import Template2 from "@/components/resumes/template2";
import Template3 from "@/components/resumes/template3";

export const Page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-300 py-4">
      {/* <Template1 /> */}
      {/* <Template2 /> */}
      <Template3 />
    </div>
  );
};

export default Page;
