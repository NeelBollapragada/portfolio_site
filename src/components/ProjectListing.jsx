import React from "react";

const ProjectListing = ({ data: { title, stack, image } }) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative flex flex-col h-full">
      <div className="p-4 flex flex-col h-full">{title}</div>
    </div>
  );
};

export default ProjectListing;
