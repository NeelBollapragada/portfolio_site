import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-1 bg-slate-100 dark:bg-slate-950 justify-center items-center">
      <div className="max-w-5xl">
        <div className="flex flex-col justify-center items-center mt-48">
          <h1 className="text-9xl font-medium dark:text-white">404</h1>
          <h3 className="text-2xl font-medium mt-2 dark:text-white">
            Uh oh! Page doesn't exist
          </h3>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
