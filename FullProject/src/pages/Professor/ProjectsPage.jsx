import React, { useState, useEffect } from "react";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`/api/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="page-container">
      <aside className="sidebar">
        <h2 className="sidebar-title">القائمة</h2>
        <nav className="nav-links">
          <a href="/community">المجتمع</a>
          <a href="/library">المكتبة</a>
          <a href="/projects" className="active">مشاريع الطلاب</a>
        </nav>
      </aside>

      <main className="main-content">
        <h1 className="page-title">مشاريع الطلاب</h1>

        <div className="projects-grid">
          {projects.length === 0 ? (
            <p className="no-projects">لا توجد مشاريع حالياً.</p>
          ) : (
            projects.map((project) => (
              <div key={project.id} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-student">الطالب: {project.studentName}</p>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
