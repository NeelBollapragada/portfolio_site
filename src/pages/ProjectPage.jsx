import React from "react";
import Navbar from "../components/Navbar";
import { projects } from "../assets/data/projects";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  const formatMarkdown = (str) => {
    // Replace links first: [text](url)
    const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
    const boldPattern = /\*\*(.*?)\*\*/g;
    const italicPattern = /\*(.*?)\*/g;
    const codePattern = /`([^`]+)`/g;

    let parts = [];
    let lastIndex = 0;

    // Master regex that matches any of them
    const master = new RegExp(
      `${linkPattern.source}|${boldPattern.source}|${italicPattern.source}|${codePattern.source}`,
      "g"
    );

    let match;
    while ((match = master.exec(str)) !== null) {
      if (match.index > lastIndex) {
        parts.push(str.slice(lastIndex, match.index)); // normal text
      }

      if (match[1] && match[2]) {
        // link
        parts.push(
          <a
            key={match.index}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
          >
            {match[1]}
          </a>
        );
      } else if (match[3]) {
        // bold
        parts.push(<strong key={match.index}>{match[3]}</strong>);
      } else if (match[4]) {
        // italic
        parts.push(<em key={match.index}>{match[4]}</em>);
      } else if (match[5]) {
        // code
        parts.push(
          <code
            key={match.index}
            className="font-mono bg-gray-300 px-2 rounded dark:bg-gray-700"
          >
            {match[5]}
          </code>
        );
      }

      lastIndex = master.lastIndex;
    }

    if (lastIndex < str.length) {
      parts.push(str.slice(lastIndex)); // remaining text
    }

    return parts;
  };

  if (!project) {
    console.error("Project not found for slug:", slug);
  }

  return (
    <div className="flex min-h-screen bg-slate-100 pb-20 dark:bg-slate-950">
      <div className="mx-auto w-5xl mt-6">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl text-center font-bold mb-4 dark:text-white">
            {project.title}
          </h1>
          <div className="mx-auto">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-2xl w-fit text-blue-600 hover:text-blue-800 hover:underline underline-offset-4 font-bold mb-3 dark:text-blue-400 dark:hover:text-blue-600"
            >
              GitHub Repo
            </a>
          </div>
          <div className="h-[1px] bg-black mb-6 dark:bg-white" />
          <h3 className="text-2xl font-bold pl-4 mb-4 dark:text-white">
            Overview
          </h3>
          <p className="text-lg px-4 text-justify mb-6 dark:text-white">
            {formatMarkdown(project.overview)}
          </p>
          {/* <div className="h-[1px] bg-black mb-4" /> */}
          {project.stack && (
            <>
              <h3 className="text-2xl font-bold pl-4 mb-4 dark:text-white">
                Tech Stack
              </h3>
              <ul className="list-disc list-inside text-lg px-6 mb-6">
                {Object.keys(project.stack).map((key) => (
                  <li key={key} className="dark:text-white">
                    <span className="font-semibold dark:text-white">
                      {key}
                      {project.stack[key].length > 1 ? ":" : ""}
                    </span>{" "}
                    {project.stack[key]}
                  </li>
                ))}
              </ul>
            </>
          )}
          {project.custom &&
            project.custom.order.map((key) => {
              if (key.startsWith("h3")) {
                return (
                  <h3
                    key={project.custom[key]}
                    className="text-2xl font-bold pl-4 mb-4 dark:text-white"
                  >
                    {project.custom[key]}
                  </h3>
                );
              }

              if (key.startsWith("p")) {
                return (
                  <p
                    key={project.custom[key]}
                    className="text-lg px-4 text-justify mb-6 dark:text-white"
                  >
                    {formatMarkdown(project.custom[key])}
                  </p>
                );
              }

              switch (key) {
                case "ul":
                  return (
                    <ul
                      key={project.custom[key]}
                      className="list-disc list-inside text-lg px-6 mb-6"
                    >
                      {project.custom[key].map((item, index) => (
                        <li key={index} className="dark:text-white">
                          {formatMarkdown(item)}
                        </li>
                      ))}
                    </ul>
                  );
                case "gallery":
                  return (
                    <div
                      key="gallery"
                      className="flex overflow-x-scroll w-5xl px-6 no-scrollbar mb-6"
                    >
                      {project.custom[key].map((imgSrc, index) => (
                        <img
                          key={index}
                          src={imgSrc}
                          className="flex-shrink-0 h-128 rounded-3xl mr-8"
                        />
                      ))}
                    </div>
                  );
              }
            })}
          <h3 className="text-2xl font-bold pl-4 mb-4 dark:text-white">
            Usage
          </h3>
          <ol className="list-decimal list-inside text-lg px-6 mb-6 marker:font-semibold">
            {project.usage.map((item, index) => (
              <li key={index} className="dark:text-white">
                {formatMarkdown(item)}
              </li>
            ))}
          </ol>
          {project.future && (
            <>
              <h3 className="text-2xl font-bold pl-4 mb-4 dark:text-white">
                Future Improvements
              </h3>
              <ul className="list-disc list-inside text-lg px-6 mb-6">
                {project.future.map((item, index) => (
                  <li key={index} className="dark:text-white">
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
