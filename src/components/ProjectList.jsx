import React from "react";
import ProjectListing from "./ProjectListing";

const ProjectList = () => {
  const projects = [
    {
      title: "Fridge Tracker App",
      stack: "React Native, Appwrite, SQLite, ExpressJS, NativeWind",
      image: "",
    },
    {
      title: "C++ Compiler",
      stack: "C++, C",
      image: "",
    },
    {
      title: "Movie App",
      stack: "React Native, Appwrite, NativeWind, TMDB API",
      image: "",
    },
    {
      title: "Jobs Portal",
      stack: "ReactJS, JSON Server, TailWindCSS",
      image: "",
    },
    {
      title: "Notes App",
      stack: "React Native, Appwrite",
      image: "",
    },
    {
      title: "Chrome Dino Game",
      stack: "HTML, CSS, JavaScript",
      image: "",
    },
    {
      title: "Weather App",
      stack: "HTML, CSS, JavaScript, OpenWeather API",
      image: "",
    },
    {
      title: "Image Search App",
      stack: "HTML, CSS, JavaScript, Unsplash API",
      image: "",
    },
    {
      title: "Gmail Clone",
      stack: "ReactJS, Redux, Firebase, Material UI",
      image: "",
    },
    {
      title: "Netflix Clone",
      stack: "ReactJS, Redux, Firebase, Stripe, Material UI, TMDB API",
      image: "",
    },
  ];

  return (
    <div className="flex h-screen bg-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-4 gap-15 mt-20 mb-10">
          {projects.map((item) => (
            <ProjectListing key={item.title} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
