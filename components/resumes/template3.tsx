import React from "react";

const Template3 = () => (
  <svg
    width="800"
    height="1100"
    viewBox="0 0 800 1100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="100%" height="100%" fill="#ffffff" />

    {/* Header */}
    <text
      x="40"
      y="50"
      fontSize="24"
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
    >
      John Smith
    </text>

    {/* Contact Info */}
    <g fontSize="12" fontFamily="Arial, sans-serif" fill="#000000">
      <text x="40" y="80">
        GitHub: github.com/vishakh-abahayan
      </text>
      <text x="40" y="100">
        LinkedIn: linkedin.com/vishakh-abahayan
      </text>
      <text x="40" y="120">
        Website: vishakhabahayan.com
      </text>
      <text x="40" y="140">
        Email: hey@vishakhabhayan.com
      </text>
      <text x="40" y="160">
        Phone: +919999999999
      </text>
    </g>

    {/* About */}
    <text
      x="40"
      y="200"
      fontSize="16"
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
    >
      About
    </text>
    <text
      x="40"
      y="220"
      fontSize="12"
      fontFamily="Arial, sans-serif"
      width="720"
    >
      <tspan x="40" dy="0">
        An emerging technologist and indie hacker, known for creating simple yet
        powerful tools that enhance
      </tspan>
      <tspan x="40" dy="15">
        productivity and efficiency. With a background in full-stack
        development, And a passion for developing
      </tspan>
      <tspan x="40" dy="15">
        innovative solutions that address real-world problems.
      </tspan>
    </text>

    {/* Experience */}
    <text
      x="40"
      y="280"
      fontSize="16"
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
    >
      Experience
    </text>

    <text
      x="40"
      y="300"
      fontSize="14"
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
    >
      Software Engineer, Microsoft
    </text>
    <text
      x="700"
      y="300"
      fontSize="12"
      fontFamily="Arial, sans-serif"
      textAnchor="end"
    >
      Jun. 2021 – Present
    </text>
    <text x="60" y="320" fontSize="12" fontFamily="Arial, sans-serif">
      <tspan x="60" dy="0">
        • Developed permissions management on dashboards and reports for all
        users on PowerBI
      </tspan>
      <tspan x="60" dy="15">
        • Integrated Easy Sharing to share reports on Microsoft Teams to
        increase consumer product usage by 15%
      </tspan>
      <tspan x="60" dy="15">
        • Implemented Report data snapshots to share report views with other
        users to address #1 requested feature
      </tspan>
      <tspan x="60" dy="15">
        • Led user experience decision making for date parsing and Easy Sharing
        error messaging
      </tspan>
      <tspan x="60" dy="15">
        • Maintained consistent permission handling regarding folder roles,
        individual roles, and organization roles
      </tspan>
    </text>

    <text
      x="40"
      y="420"
      fontSize="14"
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
    >
      Software Development Engineer, Amazon.com
    </text>
    <text
      x="700"
      y="420"
      fontSize="12"
      fontFamily="Arial, sans-serif"
      textAnchor="end"
    >
      Mar. 2020 – May 2021
    </text>
    <text x="60" y="440" fontSize="12" fontFamily="Arial, sans-serif">
      <tspan x="60" dy="0">
        • Developed Amazon checkout and payment services to handle traffic of 10
        Million daily global transactions
      </tspan>
      <tspan x="60" dy="15">
        • Integrated Iframes for credit cards and bank accounts to secure 80% of
        all consumer traffic and prevent CSRF,
      </tspan>
      <tspan x="60" dy="15">
        {" "}
        cross-site scripting, and cookie-jacking
      </tspan>
      <tspan x="60" dy="15">
        • Led Your Transactions implementation for JavaScript front-end
        framework to showcase consumer transactions
      </tspan>
      <tspan x="60" dy="15">
        {" "}
        and reduce call center costs by $25 Million
      </tspan>
      <tspan x="60" dy="15">
        • Recovered Saudi Arabia checkout failure impacting 4000+ customers due
        to incorrect GET form redirection
      </tspan>
    </text>

    {/* Projects */}
    <text
      x="40"
      y="540"
      fontSize="16"
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
    >
      Projects
    </text>

    <text
      x="40"
      y="560"
      fontSize="14"
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
    >
      NinjaPrep.io (React)
    </text>
    <text x="60" y="580" fontSize="12" fontFamily="Arial, sans-serif">
      <tspan x="60" dy="0">
        • Platform to offer coding problem practice with built-in code editor
        and written + video solutions in React
      </tspan>
      <tspan x="60" dy="15">
        • Utilized Nginx to reverse proxy IP address on Digital Ocean hosts
      </tspan>
      <tspan x="60" dy="15">
        • Developed using Styled-Components for 95% CSS styling to ensure proper
        CSS scoping
      </tspan>
      <tspan x="60" dy="15">
        • Implemented Docker with Seccomp to safely run user-submitted code with
        &lt;2.2s runtime
      </tspan>
    </text>

    <text
      x="40"
      y="660"
      fontSize="14"
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
    >
      HeatMap (JavaScript)
    </text>
    <text x="60" y="680" fontSize="12" fontFamily="Arial, sans-serif">
      <tspan x="60" dy="0">
        • Visualized Google Takeout location data of location history using
        Google Maps API and Google Maps heatmap
      </tspan>
      <tspan x="60" dy="15">
        {" "}
        code with React
      </tspan>
      <tspan x="60" dy="15">
        • Included local file system storage to reliably handle 5mb of location
        history data
      </tspan>
      <tspan x="60" dy="15">
        • Implemented Express to include routing between pages and jQuery to
        parse Google Map and implement
      </tspan>
      <tspan x="60" dy="15">
        {" "}
        heatmap overlay
      </tspan>
    </text>

    {/* Education */}
    <text
      x="40"
      y="780"
      fontSize="16"
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
    >
      Education
    </text>

    <text
      x="40"
      y="800"
      fontSize="14"
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
    >
      New York University, College of Arts and Sciences
    </text>
    <text
      x="700"
      y="800"
      fontSize="12"
      fontFamily="Arial, sans-serif"
      textAnchor="end"
    >
      Aug. 2019
    </text>
    <text x="40" y="820" fontSize="12" fontFamily="Arial, sans-serif">
      Bachelor of Arts in Computer Science
    </text>
    <text x="60" y="840" fontSize="12" fontFamily="Arial, sans-serif">
      <tspan x="60" dy="0">
        • Coursework: Operating Systems, iOS Programming, Cybersecurity,
        Algorithms, Multicore Programming
      </tspan>
      <tspan x="60" dy="15">
        • Honors: Gates Millennium Scholar (2015)
      </tspan>
    </text>

    {/* Skills */}
    <text
      x="40"
      y="900"
      fontSize="16"
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
    >
      Skills
    </text>
    <text x="40" y="920" fontSize="12" fontFamily="Arial, sans-serif">
      Java, C++, Angular, React, Redux
    </text>
  </svg>
);

export default Template3;
