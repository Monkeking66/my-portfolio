import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import "./App.css"; 


const App = () => {
  return (
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
  );
};

export default App;
