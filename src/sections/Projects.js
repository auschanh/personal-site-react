import React, { useState } from 'react';
import { Chip } from '@material-tailwind/react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/plugins/counter.css';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { projects } from '../data/projectData';

const Projects = () => {
  const [lightboxProject, setLightboxProject] = useState(null);

  return (
  <div>
    <div id="projects-jump"></div>
    <div className="projects w-screen bg-slate-200 pb-20 pt-32 text-black dark:bg-dark-navy">
      <div id="projects" className="section sm:px-auto row-span-1 mt-10 sm:container">
        <h1 className="text-3xl font-bold font-mono dark:text-white mb-10">
          / projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={i * 100}
              className="flex flex-col rounded-xl overflow-hidden bg-white dark:bg-navy shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Screenshot */}
              <button
                onClick={() => setLightboxProject(project)}
                className="cursor-pointer"
                aria-label={`View screenshots of ${project.title}`}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-52 object-cover object-top"
                />
              </button>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-3">

                {/* Title + type chip + GitHub */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold dark:text-white hover:text-teal-600 dark:hover:text-teal-green transition-colors"
                    >
                      {project.title}
                    </a>
                    {project.typeChip && (
                      <Chip
                        color={project.typeChip.color}
                        value={project.typeChip.value}
                        size="sm"
                        className="rounded-full"
                      />
                    )}
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

                {/* Description */}
                <div className="text-sm">{project.description}</div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1 mt-auto pt-2">
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

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Lightbox */}
    <Lightbox
      open={!!lightboxProject}
      close={() => setLightboxProject(null)}
      plugins={[Counter, Fullscreen, Zoom]}
      styles={{ root: { '--yarl__color_backdrop': 'rgba(0,0,0,.85)' } }}
      zoom={{ maxZoomPixelRatio: 2, scrollToZoom: true }}
      counter={{ container: { style: { top: 0, left: 0 } } }}
      slides={(lightboxProject?.images ?? []).map((src) => ({ src }))}
    />
  </div>
  );
};

export default Projects;
