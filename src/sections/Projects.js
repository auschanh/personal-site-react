import React from 'react';
import { Chip } from '@material-tailwind/react';
import ProjectCard from '../components/ProjectCard';
import CarouselProject from '../components/CarouselProject';
import { projects } from '../data/projectData';

const Projects = () => (
  <div>
    <div id="projects-jump"></div>
    <div className="projects w-screen bg-slate-100 pb-40 pt-32 text-black dark:bg-dark-navy">
      <div id="projects" className="section sm:px-auto row-span-1 mt-10 sm:container">
        <h1 className="text-3xl font-bold font-mono dark:text-white">
          / PROJECTS
        </h1>
        <br />
        <br />

        <div className="section-desc space-y-56 max-2xl:space-y-32">
          {projects.map((project) => (
            <div
              key={project.id}
              data-aos="fade-zoom-in-down"
              data-aos-duration="2000"
              data-aos-offset="200"
              data-aos-easing="ease-out-cubic"
              data-aos-once="true"
              className="mt-20 xl:w-[52rem] laptop:w-full w-full mx-auto"
            >
              <ProjectCard
                title={
                  <a
                    className="text-2xl hover:text-gray-400 hover:underline hover:decoration-2 hover:underline-offset-2 dark:text-white dark:hover:text-gray-600 dark:hover:decoration-teal-green"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.url}
                  >
                    {project.title}
                  </a>
                }
                github={project.github}
                linkURL={project.url}
                chips={
                  <Chip
                    key="type"
                    color={project.typeChip.color}
                    value={project.typeChip.value}
                    size="sm"
                    className="rounded-full"
                  />
                }
                chipsFooter={project.techChips.map((chip, i) => (
                  <Chip
                    key={i}
                    className="rounded-full"
                    color={chip.color}
                    value={chip.value}
                    size="sm"
                    variant="outlined"
                  />
                ))}
                desc={project.description}
                figure={
                  <CarouselProject
                    images={project.images}
                    arrowColor={project.carouselProps.arrowColor}
                    delay={project.carouselProps.delay}
                  />
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
