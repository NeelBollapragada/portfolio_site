import React from "react";
import { Link } from "react-router-dom";

const ProjectListing = ({ data: { title, slug, stack, image } }) => {
  return (
    <Link
      to={`/projects/${slug}`}
      className="bg-white rounded-xl shadow-md relative flex flex-col h-full hover:shadow-xl hover:-translate-y-4 ease-in-out transition-all duration-200 focus:outline-none focus:ring-2 dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-700"
    >
      <img
        className="rounded-t-xl h-32 border-b-1 border-slate-700"
        src={image}
        alt={`${title} image`}
      />
      <h2 className="p-4 flex flex-col text-base font-semibold dark:text-white">
        {title}
      </h2>
      <div className="px-4 pb-2 text-xs dark:text-white">{stack}</div>
    </Link>
  );
};

export default ProjectListing;
