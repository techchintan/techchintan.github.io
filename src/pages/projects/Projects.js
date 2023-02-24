import { Helmet } from "react-helmet-async";
import { config } from "utils/config";

import "./Projects.scss";

export function Projects() {
  return (
    <>
      <Helmet>
        <title>{config.username} | projects</title>
      </Helmet>

      <section className="projects">
        <ul className="projects__list">
          {config.projects.map((project, index) => (
            <li className="projects__listItem" key={index}>
              <Project project={project} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

function Project({ project }) {
  const { title, logo, tags, description, links } = project;

  return (
    <div className="project">
      <div className="project__logo">{logo}</div>

      <div className="project__title">{title}</div>
      <HorizontalList items={tags} />

      {description}
      <div className="project__divider" />
      <HorizontalList items={links} />
    </div>
  );
}

function HorizontalList({ items }) {
  return (
    <ul className="horizontalList">
      {items.map((item, index) => (
        <li className="horizontalList__item" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}
