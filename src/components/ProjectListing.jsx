import React from "react";
import { Link } from "react-router-dom";

const ProjectListing = ({ data: { title, stack, image } }) => {
  return (
    <Link
      to={`/projects/${title.toLowerCase().split(" ").join("-")}`}
      className="bg-white rounded-xl shadow-md relative flex flex-col h-full hover:shadow-xl transition-shadow duration-200 focus:outline-none focus:ring-2"
    >
      <img
        className="rounded-t-xl h-32 border-b-1 border-slate-700"
        src={image}
        alt={`${title} image`}
      />
      <h2 className="p-4 flex flex-col text-base font-semibold">{title}</h2>
      <div className="px-4 pb-2 text-xs">{stack}</div>
    </Link>
  );
};

export default ProjectListing;
