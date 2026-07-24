"use client";

import { useState } from "react";
import content from "../data/content.json";
import ProjectThumb from "./ProjectThumb";

const { projects } = content;

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState(projects.filters[0]);

  const filteredItems =
    activeFilter === "Tous"
      ? projects.items
      : projects.items.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id="projects">
      <div className="wrap">
        <div className="reveal">
          <div className="section-tag">{projects.tag}</div>
          <h2 className="section-title">
            {projects.titlePrefix} <span className="grad">{projects.titleHighlight}</span>
          </h2>
          <p className="section-sub">{projects.description}</p>
        </div>

        <div className="filter-row">
          {projects.filters.map((filter) => (
            <button
              key={filter}
              className={`filter-pill${filter === "Angular" ? " angular-pill" : ""}${
                activeFilter === filter ? " active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="proj-grid reveal">
          {filteredItems.map((project, index) => (
            <div className="proj-card" key={`${project.title}-${index}`}>
              <ProjectThumb project={project} />
              <div className="proj-body">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="proj-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="proj-links">
                  <a
                    className="primary"
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.demoLabel}
                  </a>
                  <a href={`/projects/${project.slug}`}>{project.summaryLabel}</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 36,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ color: "var(--text-dim)", fontSize: ".88rem" }}>
            {projects.footerLine1}
            <br />
            {projects.footerLine2}
          </p>
          <a className="btn-primary" href="#contact">
            {projects.footerCta}
          </a>
        </div>
      </div>
    </section>
  );
}
