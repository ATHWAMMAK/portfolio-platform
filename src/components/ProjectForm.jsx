import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    technologies: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newProject = {
      id: Date.now(),
      title: formData.title.trim(),
      category: formData.category.trim(),
      description: formData.description.trim(),
      image: formData.image.trim() || "https://placehold.co/600x400?text=New+Project",
      technologies: formData.technologies
        .split(",")
        .map((technology) => technology.trim())
        .filter(Boolean),
    };

    onAddProject(newProject);

    setFormData({
      title: "",
      category: "",
      description: "",
      image: "",
      technologies: "",
    });
  }

  return (
    <section className="form-section" id="add-project">
      <h2>Add a New Project</h2>

      <p>Showcase your latest creative work.</p>

      <form onSubmit={handleSubmit} className="project-form">
        <input
          type="text"
          name="title"
          placeholder="Project title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Project category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Describe your project"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="url"
          name="image"
          placeholder="Project image URL (optional)"
          value={formData.image}
          onChange={handleChange}
        />

        <input
          type="text"
          name="technologies"
          placeholder="Technologies (e.g. React, CSS, JavaScript)"
          value={formData.technologies}
          onChange={handleChange}
          required
        />

        <button type="submit" className="primary-button">
          Add Project +
        </button>
      </form>
    </section>
  );
}

export default ProjectForm;
