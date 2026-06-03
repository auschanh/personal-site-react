import React from 'react';
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
    ) : (
      <img src={skill.icon} alt={skill.name} className="h-8 sm:h-10 object-contain" />
    )}
    <span className="text-center text-xs leading-tight body-text">
      {skill.name.replace('\n', ' ')}
    </span>
  </div>
);

const ExperienceCard = ({ job }) => (
  <div className="section-desc">
    <div>
      <div
        tabIndex="0"
        className="collapse collapse-arrow transform text-black transition-all !duration-300 hover:scale-105 hover:duration-150 dark:bg-navy bg-slate-100"
      >
        <input type="checkbox" className="dark:text-white" />
        <div className="work-header collapse-title flex dark:text-white">
          <div>
            <img src={job.logo} alt={job.logoAlt} className="w-16 md:w-10" />
          </div>
          <div className="ml-3 flex justify-between w-full">
            <div>
              <p className="text-xl font-extrabold text-teal-600 dark:text-teal-green">
                {job.company}
              </p>
              <p className="text-base font-extrabold text-black dark:text-white">
                {job.title}
              </p>
            </div>
            <div>
              <p className="date-label text-sm font-bold max-sm:ml-4">
                {job.period}
              </p>
            </div>
          </div>
        </div>

        <div className="collapse-content">
          <p className="mt-3 text-lg font-extrabold dark:text-white text-black">
            Responsibilities
          </p>
          <ul className="job-desc ml-3 list-disc text-base laptop:text-lg body-text">
            {job.responsibilities.map((resp, i) => (
              <li key={i} className="my-2">{resp}</li>
            ))}
          </ul>

          {job.highlights && (
            <div className="highlights mb-3">
              <p className="text-lg mt-3 font-extrabold dark:text-white text-black">
                Highlights
              </p>
              {job.highlights.map((h, i) => (
                <p key={i} className="my-2 text-base laptop:text-lg body-text">
                  ▶ {h}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>

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

const Work = () => (
  <div>
    <div id="work-jump"></div>
    <div className="work bg-slate-200 py-40 dark:bg-dark-navy">
      <div id="work" className="section sm:px-auto row-span-1 mt-10 sm:container">
        <h1 className="text-3xl font-bold font-mono text-black dark:text-white">
          / WORK EXPERIENCES
        </h1>
        <br />
        <br />

        <div className="space-y-12">
          {workExperiences.map((job) => (
            <ExperienceCard key={job.id} job={job} />
          ))}
        </div>

        <br />
        <br />

        <div>
          <div
            tabIndex="0"
            className="collapse collapse-arrow mt-4 transform transition-all !duration-300 hover:scale-105 hover:duration-150 bg-slate-100 dark:bg-navy sm:mt-14"
          >
            <input type="checkbox" />
            <div className="collapse-title text-xl font-bold text-black dark:text-white">
              Other Experiences (Retail)
            </div>
            <div className="collapse-content text-black">
              {otherExperiences.map((job, i) => (
                <div key={job.id} className={i > 0 ? 'mt-8' : ''}>
                  <div className="flex justify-between w-full">
                    <div>
                      <p className="text-xl font-extrabold text-teal-600 dark:text-teal-green">
                        {job.company}
                      </p>
                      <p className="text-base font-bold text-black dark:text-white">
                        {job.title}
                      </p>
                    </div>
                    <div>
                      <p className="date-label text-sm font-extrabold">
                        {job.period}
                      </p>
                    </div>
                  </div>
                  <p className="body-text laptop:text-lg mt-2">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
