import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </>
  );
};

export default App;
