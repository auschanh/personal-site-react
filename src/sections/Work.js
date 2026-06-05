import React, { useState } from 'react';
import { workExperiences, otherExperiences } from '../data/workData';

const SkillIcon = ({ skill, delay }) => (
  <div
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-offset="150"
    data-aos-delay={delay}
    className="flex flex-col items-center gap-2 w-14 sm:w-16"
  >
    {skill.iconDark ? (
      <>
        <img src={skill.iconDark} alt={skill.name} className="hidden h-8 sm:h-10 object-contain dark:block" />
        <img src={skill.iconLight} alt={skill.name} className="h-8 sm:h-10 object-contain dark:hidden" />
      </>
    ) : skill.icon ? (
      <img src={skill.icon} alt={skill.name} className="h-8 sm:h-10 object-contain" />
    ) : (
      <div className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-md bg-zinc-200 dark:bg-zinc-700">
        <span className="text-[7px] sm:text-[8px] font-bold text-zinc-600 dark:text-zinc-300 text-center leading-tight px-0.5">
          {skill.name}
        </span>
      </div>
    )}
    <span className="text-center text-xs leading-tight body-text">
      {skill.name.replace('\n', ' ')}
    </span>
  </div>
);

const ExperienceCard = ({ job }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="section-desc">
      <div className="rounded-lg overflow-hidden bg-slate-100 dark:bg-navy">

        {/* Header — full-width button, reliable touch target */}
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="w-full cursor-pointer text-left p-4"
        >
          <div className="flex items-center gap-3">
            <img src={job.logo} alt={job.logoAlt} className="w-10 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm sm:text-xl font-extrabold text-teal-600 dark:text-teal-green leading-tight">
                  {job.company}
                </p>
                <div className="shrink-0 flex items-center gap-2 pt-0.5">
                  <p className="date-label text-xs sm:text-sm font-bold whitespace-nowrap">
                    {job.period}
                  </p>
                  <i className={`fa-solid fa-chevron-down text-xs body-text transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                </div>
              </div>
              <p className="text-sm sm:text-base font-extrabold text-black dark:text-white mt-0.5">
                {job.title}
              </p>
            </div>
          </div>
        </button>

        {/* Collapsible content */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[2000px]' : 'max-h-0'}`}>
          <div className="px-4 pb-4">
            <p className="mt-1 text-base font-extrabold dark:text-white text-black">
              Responsibilities
            </p>
            <ul className="job-desc ml-3 list-disc text-sm sm:text-base laptop:text-lg body-text">
              {job.responsibilities.map((resp, i) => (
                <li key={i} className="my-2">{resp}</li>
              ))}
            </ul>

            {job.highlights && (
              <div className="highlights mb-3">
                <p className="text-base mt-3 font-extrabold dark:text-white text-black">
                  Highlights
                </p>
                {job.highlights.map((h, i) => (
                  <p key={i} className="my-2 text-sm sm:text-base laptop:text-lg body-text">
                    ▶ {h}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="mt-6 px-1">
        <p className="mb-4 text-xs font-mono font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          Technologies
        </p>
        <div className="flex flex-wrap gap-6 sm:gap-8">
          {job.skills.map((skill, i) => (
            <SkillIcon key={skill.name} skill={skill} delay={i * 75} />
          ))}
        </div>
      </div>
    </div>
  );
};

const OtherExperiences = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg overflow-hidden bg-slate-100 dark:bg-navy mt-4 sm:mt-14">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full cursor-pointer text-left p-4 flex items-center justify-between min-h-[56px]"
      >
        <span className="text-base sm:text-xl font-bold text-black dark:text-white">
          Other Experiences (Retail)
        </span>
        <i className={`fa-solid fa-chevron-down text-xs body-text transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[2000px]' : 'max-h-0'}`}>
        <div className="px-4 pb-4 text-black">
          {otherExperiences.map((job, i) => (
            <div key={job.id} className={i > 0 ? 'mt-8' : ''}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-0.5 sm:gap-2">
                <div className="min-w-0">
                  <p className="text-base sm:text-xl font-extrabold text-teal-600 dark:text-teal-green">
                    {job.company}
                  </p>
                  <p className="text-sm sm:text-base font-bold text-black dark:text-white">
                    {job.title}
                  </p>
                </div>
                <p className="date-label text-xs sm:text-sm font-extrabold whitespace-nowrap sm:shrink-0 sm:pt-0.5">
                  {job.period}
                </p>
              </div>
              <p className="body-text text-sm sm:text-base laptop:text-lg mt-2">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Work = () => (
  <div>
    <div id="work-jump"></div>
    <div className="work bg-slate-200 py-40 dark:bg-dark-navy">
      <div id="work" className="section sm:px-auto row-span-1 mt-10 sm:container">
        <h1 className="text-3xl font-bold font-mono text-black dark:text-white mb-8">
          / work experiences
        </h1>

        <div className="space-y-12">
          {workExperiences.map((job) => (
            <ExperienceCard key={job.id} job={job} />
          ))}
        </div>

        <OtherExperiences />
      </div>
    </div>
  </div>
);

export default Work;
