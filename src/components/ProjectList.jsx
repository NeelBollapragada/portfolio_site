import React from "react";
import ProjectListing from "./ProjectListing";
import fridgeTrackerMerged from "../assets/images/fridge-tracker-merged.png";
import cppCompiler from "../assets/images/compiler.png";
import movieApp from "../assets/images/movie-app-merged.png";
import jobsPortal from "../assets/images/jobs-portal-1.png";
import notesApp from "../assets/images/notes-app-merged.png";
import dinoGame from "../assets/images/dino-game.png";
import weatherApp from "../assets/images/weather-app.png";
import imageSearchApp from "../assets/images/image-search.png";
import gmailClone from "../assets/images/gmail-clone.png";
import netflixClone from "../assets/images/netflix-clone-3.png";

const ProjectList = () => {
  const projects = [
    {
      title: "Fridge Tracker App",
      slug: "fridge-tracker-app",
      stack: "React Native, Appwrite, SQLite, ExpressJS, NativeWind",
      image: fridgeTrackerMerged,
    },
    {
      title: "C++ Compiler",
      slug: "cpp-compiler",
      stack: "C++, C",
      image: cppCompiler,
    },
    {
      title: "Movie App",
      slug: "movie-app",
      stack: "React Native, Appwrite, NativeWind, TMDB API",
      image: movieApp,
    },
    {
      title: "Jobs Portal",
      slug: "jobs-portal",
      stack: "ReactJS, JSON Server, TailWindCSS",
      image: jobsPortal,
    },
    {
      title: "Notes App",
      slug: "notes-app",
      stack: "React Native, Appwrite",
      image: notesApp,
    },
    {
      title: "Chrome Dino Game",
      slug: "chrome-dino-game",
      stack: "HTML, CSS, JavaScript",
      image: dinoGame,
    },
    {
      title: "Weather App",
      slug: "weather-app",
      stack: "HTML, CSS, JavaScript, OpenWeather API",
      image: weatherApp,
    },
    {
      title: "Image Search App",
      slug: "image-search-app",
      stack: "HTML, CSS, JavaScript, Unsplash API",
      image: imageSearchApp,
    },
    {
      title: "Gmail Clone",
      slug: "gmail-clone",
      stack: "ReactJS, Redux, Firebase, Material UI",
      image: gmailClone,
    },
    {
      title: "Netflix Clone",
      slug: "netflix-clone",
      stack: "ReactJS, Redux, Firebase, Stripe, Material UI, TMDB API",
      image: netflixClone,
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100 pb-20 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-15 mt-20 mb-32 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((item) => (
            <ProjectListing key={item.title} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
