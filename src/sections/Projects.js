import React from 'react';
import { Chip } from '@material-tailwind/react';
import { projects } from '../data/projectData';

const Projects = () => (
  <div>
    <div id="projects-jump"></div>
    <div className="projects w-screen bg-slate-200 pb-20 pt-32 text-black dark:bg-dark-navy">
      <div id="projects" className="section sm:px-auto row-span-1 mt-10 sm:container">
        <h1 className="text-3xl font-bold font-mono dark:text-white mb-10">
          / projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={i * 100}
              className="flex flex-col rounded-xl overflow-hidden bg-white dark:bg-navy shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Screenshot */}
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-52 object-cover object-top"
                />
              </a>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-3">

                {/* Title + type chip */}
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold dark:text-white hover:text-teal-600 dark:hover:text-teal-green transition-colors"
                  >
                    {project.title}
                  </a>
                  <Chip
                    color={project.typeChip.color}
                    value={project.typeChip.value}
                    size="sm"
                    className="rounded-full"
                  />
                </div>

                {/* Description */}
                <div className="text-sm">{project.description}</div>

                {/* Tech chips + links */}
                <div className="flex items-center justify-between mt-auto pt-2 flex-wrap gap-2">
                  <div className="flex flex-wrap gap-1">
                    {project.techChips.map((chip, j) => (
                      <Chip
                        key={j}
                        color={chip.color}
                        value={chip.value}
                        size="sm"
                        className="rounded-full"
                        variant="outlined"
                      />
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <i className="fa-brands fa-lg fa-github dark:text-white hover:text-teal-600 dark:hover:text-teal-green transition-colors" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
