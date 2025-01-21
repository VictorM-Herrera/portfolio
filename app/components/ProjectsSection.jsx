"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";
const projectsData = [
  {
    id: 1,
    title: "MMBOT",
    description: "Node.Js, DiscordJs, Sequelize, PostgreSQL",
    image: "/images/projects/MMBOT (2).png",
    tag: ["All", "Game"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Discord Bot",
    description: "Node.Js, DiscordJs, Sequelize, PostgreSQL",
    image: "/images/projects/MMBOT (1).png",
    tag: ["All", "Game"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Discord Bot",
    description: "Node.Js, DiscordJs, Sequelize, PostgreSQL",
    image: "/images/projects/MMBOT (3).png",
    tag: ["All", "Game"],
    gitUrl: "/",
    previewUrl: "/",
  },
];
export default function ProjectsSection() {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Game"
          isSelected={tag === "Game"}
        />
      </div>
      <ul ref={ref} className=" grid md:grid-cols-3 gap-8 md-gap12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{duration: 0.3, delay: index * 0.2}}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUlr={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
