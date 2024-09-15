"use client";
import React, { useState } from "react";

const Template1 = () => {
  const [resumeData, setResumeData] = useState({
    name: "Andree Rocher",
    title: "PROFESSIONAL TITLE",
    contact: "Philadelphia, PA | 705.555.0121 | andree@example.com",
    objective:
      "To obtain a challenging data scientist position in a dynamic and innovative organization where I can use my technical and analytical skills.",
    experience: [
      {
        company: "FlueroGen | Data Scientist",
        period: "20XX – 20XX",
        achievements: [
          "Increased customer retention by 20%",
          "Reduced fraudulent charges by 50%",
          "Improved product recommendations and increased sales",
          "Drove business decisions and reduced operational costs",
        ],
      },
      {
        company: "Pantheros Labs | Junior Data Scientist",
        period: "20XX – 20XX",
        achievements: [
          "Cleaned and preprocessed data",
          "Conducted statistical tests for decision support",
          "Developed machine learning models for prediction",
          "Collaborated on A/B tests, increased click-through",
        ],
      },
    ],
    education: [
      {
        school: "Jasper University, MS Data Science",
        details: "Major: Data Science | Minor: Machine Learning",
        year: "20XX",
      },
      {
        school: "Bellows College, BS Mathematics",
        details: "Major: Mathematics | Minor: Computer Science",
        year: "20XX",
      },
    ],
    skills: ["Management", "Problem solving", "Communication", "Leadership"],
  });

  return (
    <svg width="800" height="1000">
      <rect width="100%" height="100%" fill="#ffffff" />

      <text x="40" y="60" fontSize="36" fontWeight="bold" fill="#333333">
        {resumeData.name}
      </text>
      <text x="40" y="90" fontSize="18" fill="#555555">
        {resumeData.title}
      </text>
      <text x="40" y="120" fontSize="14" fill="#777777">
        {resumeData.contact}
      </text>

      <text x="40" y="160" fontSize="18" fontWeight="bold" fill="#333333">
        Objective
      </text>
      <text x="40" y="185" fontSize="14" fill="#555555">
        <tspan x="40" dy="0">
          {resumeData.objective.slice(0, 60)}
        </tspan>
        <tspan x="40" dy="20">
          {resumeData.objective.slice(60)}
        </tspan>
      </text>

      <text x="40" y="240" fontSize="18" fontWeight="bold" fill="#333333">
        Experience
      </text>
      {resumeData.experience.map((job, index) => (
        <g key={index} transform={`translate(0, ${280 + index * 140})`}>
          <text x="40" fontSize="16" fontWeight="bold" fill="#444444">
            {job.company}
          </text>
          <text x="700" fontSize="14" textAnchor="end" fill="#666666">
            {job.period}
          </text>
          {job.achievements.map((achievement, i) => (
            <text key={i} x="60" y={30 + i * 20} fontSize="14" fill="#555555">
              • {achievement}
            </text>
          ))}
        </g>
      ))}

      <text x="40" y="600" fontSize="18" fontWeight="bold" fill="#333333">
        Education
      </text>
      {resumeData.education.map((edu, index) => (
        <g key={index} transform={`translate(0, ${630 + index * 60})`}>
          <text x="40" fontSize="16" fontWeight="bold" fill="#444444">
            {edu.school}
          </text>
          <text x="700" fontSize="14" textAnchor="end" fill="#666666">
            {edu.year}
          </text>
          <text x="40" y="20" fontSize="14" fill="#555555">
            {edu.details}
          </text>
        </g>
      ))}

      <text x="40" y="780" fontSize="18" fontWeight="bold" fill="#333333">
        Skills &amp; abilities
      </text>
      {resumeData.skills.map((skill, index) => (
        <text
          key={index}
          x="60"
          y={810 + index * 20}
          fontSize="14"
          fill="#555555"
        >
          • {skill}
        </text>
      ))}
    </svg>
  );
};

export default Template1;
