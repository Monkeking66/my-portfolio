import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import Loader3D from "./components/Loader3D"; // Import 3D Loader
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Match 3D loader time
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader3D onFinish={() => setIsLoading(false)} />
      ) : (
        <div className="container">
          <Header />
          <About />
          <section className="projects">
            <h2>Projects</h2>
            <ProjectCard
              title="Blog Platform"
              description="Built with Node.js, Express.js, and EJS for dynamic content."
              link="#"
              image="https://via.placeholder.com/400"
            />
            <ProjectCard
              title="Anime Discovery App"
              description="Integrated AniList API to fetch and display trending anime."
              link="#"
              image="https://via.placeholder.com/400"
            />
          </section>
          <Contact />
        </div>
      )}
    </>
  );
};

export default App;
