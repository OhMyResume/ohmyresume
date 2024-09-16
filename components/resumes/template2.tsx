import React from "react";

const Template2 = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold">Your Name</h1>
        <div className="flex justify-center space-x-4 mt-2 text-blue-600">
          <span className="flex items-center">
            {/* SVG Icon for username */}
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
            @username
          </span>
          <span className="flex items-center">
            {/* SVG Icon for website */}
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14z" />
            </svg>
            mysite.com
          </span>
          <span className="flex items-center">
            {/* SVG Icon for email */}
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm14 0H2l6 4.5L14 4z" />
            </svg>
            email@mysite.com
          </span>
          <span className="flex items-center">
            {/* SVG Icon for phone number */}
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 1 .168-.012h8.356c.089 0 .12.003.168.012.067.012.123.04.17.084.046.045.07.105.082.173.013.049.016.08.016.156V4.63c0 .075-.003.106-.016.155-.012.068-.036.128-.082.173-.047.045-.103.072-.17.084a.678.678 0 0 1-.168.012H3.822c-.089 0-.12-.003-.168-.012a.313.313 0 0 1-.17-.084.303.303 0 0 1-.082-.173c-.013-.049-.016-.08-.016-.155V1.641c0-.075.003-.106.016-.155a.303.303 0 0 1 .082-.173.313.313 0 0 1 .17-.084zm9.052 9.487c.375.375.625.875.625 1.418v1.691c0 1.211-.916 2.105-2.106 2.105a9.297 9.297 0 0 1-4.606-1.47c-.4-.25-.75-.5-1.25-.875-.5-.375-1-.625-1.625-1.125-.625-.5-1.625-1.25-2.625-2.5-1.5-1.625-1.5-4.625 0-6.125C4.3 1.7 7.875 1.7 10.25 4.125c2.5 2.625 2.5 6.25 0 8.75zM8 7.75a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5z" />
            </svg>
            +00 000 0000
          </span>
        </div>
      </header>

      {/* Summary Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-sm">
          This CV can also be automatically compiled and published using GitHub
          Actions. For details,{" "}
          <a href="#" className="text-blue-600">
            click here
          </a>
          .
        </p>
      </section>

      {/* Work Experience Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Work Experience</h2>

        <div className="mb-4">
          <h3 className="font-semibold">Designation</h3>
          <span className="text-sm text-gray-600">Jan 2021 - present</span>
          <p className="text-sm">
            Long log of blah blah blah that will wrap when the table fills the
            column with long long line of blah.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Designation</h3>
          <span className="text-sm text-gray-600">Mar 2019 - Jan 2021</span>
          <p className="text-sm">
            Long log of blah blah blah that will wrap when the table fills the
            column with long long line of blah.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Projects</h2>

        <div className="mb-4">
          <h3 className="font-semibold">Some Project</h3>
          <a href="#" className="text-blue-600 text-sm">
            Link to Demo
          </a>
          <p className="text-sm">
            Long log of blah blah blah that will wrap when the table fills the
            column with long long line of blah.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Education</h2>
        <table className="w-full table-auto text-left text-sm">
          <tbody>
            <tr>
              <td>2003 - present</td>
              <td>PhD (Subject) at University</td>
              <td>(GPA: 4.0/4.0)</td>
            </tr>
            <tr>
              <td>2023 - 2027</td>
              <td>Bachelor's Degree at College</td>
              <td>(GPA: 4.0/4.0)</td>
            </tr>
            <tr>
              <td>2022</td>
              <td>Class 12th Some Board</td>
              <td>(Grades)</td>
            </tr>
            <tr>
              <td>2021</td>
              <td>Class 10th Some Board</td>
              <td>(Grades)</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Publications Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Publications</h2>
        <p className="text-sm">
          Last Name, First Name and First Name Other Last Name (Sept. 2021).
          "Paper: This is the name of paper". In <em>Some Journal</em> 99.18,
          pp. 2200-2300. URL:{" "}
          <a href="#" className="text-blue-600">
            https://some-link.com
          </a>
          .
        </p>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-xl font-semibold">Skills</h2>
        <p className="text-sm">
          Some Skills: This, That, Some of this and that etc.
        </p>
        <p className="text-sm">
          Some More Skills: Also some more of this, Some more that, And some of
          this and that etc.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-6">
        Last updated: March 27, 2024
      </footer>
    </div>
  );
};

export default Template2;
