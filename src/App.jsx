import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";

import initialProjects from "./data/projects";

import "./App.css";

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");

  function handleAddProject(newProject) {
    setProjects((previousProjects) => [
      newProject,
      ...previousProjects,
    ]);
  }

  const filteredProjects = projects.filter((project) => {
    const search = searchTerm.toLowerCase();

    return (
      project.title.toLowerCase().includes(search) ||
      project.category.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search) ||
      project.technologies.some((technology) =>
        technology.toLowerCase().includes(search)
      )
    );
  });

  return (
    <div className="app-container">
      <Header />

      <main>
        <Hero />

        <section className="portfolio-section" id="projects">
          <div className="section-heading">
            <p className="section-tag">OUR CREATIVE WORK</p>
            <h2>Featured Projects</h2>
            <p>
              Discover a collection of projects showcasing creativity,
              innovation, and technical excellence.
            </p>
          </div>

          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <ProjectList projects={filteredProjects} />
        </section>

        <ProjectForm onAddProject={handleAddProject} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
