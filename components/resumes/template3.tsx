"use client";
import { useUserDataStore } from "@/app/hooks/resumeStore";
import { Skeleton } from "../ui/skeleton";
import React from "react";

const Template3 = () => {
  const { userData } = useUserDataStore();

  return (
    <div className="w-[800px] bg-white p-8">
      {/* Header */}
      <div className="text-2xl font-bold mb-4">
        {userData.name ? userData.name : <Skeleton className="h-6 w-64" />}
      </div>

      {/* Contact Info */}
      <div className="text-sm space-y-2 mb-8">
        <p>GitHub: github.com/vishakh-abahayan</p>
        <p>LinkedIn: linkedin.com/vishakh-abahayan</p>
        <p>Website: vishakhabahayan.com</p>
        <p>Email: hey@vishakhabhayan.com</p>
        <p>Phone: +919999999999</p>
      </div>

      {/* About */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-2">About</h2>
        <p className="text-sm">
          {userData.about ? userData.about : <Skeleton className="h-12 w-80" />}
        </p>
      </div>

      {/* Experience */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4">Experience</h2>

        <div className="flex justify-between mb-2">
          <h3 className="text-base font-bold">Software Engineer, Microsoft</h3>
          <span className="text-sm">Jun. 2021 – Present</span>
        </div>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>
            Developed permissions management on dashboards and reports for all
            users on PowerBI.
          </li>
          <li>
            Integrated Easy Sharing to share reports on Microsoft Teams,
            increasing usage by 15%.
          </li>
          <li>
            Implemented Report data snapshots to share report views, addressing
            the #1 requested feature.
          </li>
          <li>
            Led user experience decision making for date parsing and Easy
            Sharing error messaging.
          </li>
          <li>
            Maintained consistent permission handling regarding folder roles,
            individual roles, and organization roles.
          </li>
        </ul>

        <div className="flex justify-between mt-6 mb-2">
          <h3 className="text-base font-bold">
            Software Development Engineer, Amazon.com
          </h3>
          <span className="text-sm">Mar. 2020 – May 2021</span>
        </div>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>
            Developed Amazon checkout and payment services to handle 10 Million
            daily global transactions.
          </li>
          <li>
            Integrated Iframes for credit cards and bank accounts, securing 80%
            of traffic from CSRF attacks.
          </li>
          <li>
            Led Your Transactions implementation for showcasing consumer
            transactions and reducing costs by $25 Million.
          </li>
          <li>
            Recovered Saudi Arabia checkout failure impacting 4000+ customers
            due to incorrect form redirection.
          </li>
        </ul>
      </div>

      {/* Projects */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4">Projects</h2>

        <div className="mb-2">
          <h3 className="text-base font-bold">NinjaPrep.io (React)</h3>
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>
              Platform for coding practice with built-in code editor and
              solutions in React.
            </li>
            <li>
              Utilized Nginx to reverse proxy IP addresses on Digital Ocean
              hosts.
            </li>
            <li>
              Developed using Styled-Components for 95% CSS styling ensuring
              proper scoping.
            </li>
            <li>
              Implemented Docker to run user-submitted code with less than 2.2s
              runtime.
            </li>
          </ul>
        </div>

        <div className="mb-2">
          <h3 className="text-base font-bold">HeatMap (JavaScript)</h3>
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>
              Visualized Google Takeout location data using Google Maps API and
              heatmap code.
            </li>
            <li>
              Handled 5mb of location history data reliably using local file
              system storage.
            </li>
            <li>
              Implemented Express routing and jQuery to parse Google Map and
              implement heatmap overlay.
            </li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4">Education</h2>

        <div className="flex justify-between mb-2">
          <h3 className="text-base font-bold">
            New York University, College of Arts and Sciences
          </h3>
          <span className="text-sm">Aug. 2019</span>
        </div>
        <p className="text-sm mb-2">Bachelor of Arts in Computer Science</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>
            Coursework: Operating Systems, iOS Programming, Cybersecurity,
            Algorithms, Multicore Programming
          </li>
          <li>Honors: Gates Millennium Scholar (2015)</li>
        </ul>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-lg font-bold mb-4">Skills</h2>
        <p className="text-sm">Java, C++, Angular, React, Redux</p>
      </div>
    </div>
  );
};

export default Template3;
