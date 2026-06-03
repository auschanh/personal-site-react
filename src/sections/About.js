import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@material-tailwind/react';
import LightboxGallery from '../components/LightboxGallery';
import { mePhilly, meMontreal, meVancouver, heroPic } from '../assets/personal';
import {
  kafkaWhite,
  confluentLogo,
  javaLogo,
  reactLogo,
  dockerLogo,
  sqlLogo,
  sharepointLogo,
  powerautomateLogo,
} from '../assets/icons';

const skills = [
  { name: 'Kafka', icon: kafkaWhite },
  { name: 'Confluent', icon: confluentLogo },
  { name: 'Java', icon: javaLogo },
  { name: 'React', icon: reactLogo },
  { name: 'Docker', icon: dockerLogo },
  { name: 'SQL', icon: sqlLogo },
  { name: 'SharePoint', icon: sharepointLogo },
  { name: 'Power Automate', icon: powerautomateLogo },
];

const aboutImages = [meMontreal, mePhilly, meVancouver];

const HeroText = () => (
  <>
    <p className="text-3xl font-bold dark:text-white md:text-5xl lg:text-7xl">
      Hi, I'm <span className="text-teal-green type-firstName"></span>
    </p>
    <p className="text-lg font-bold dark:text-white sm:text-2xl">
      <span className="text-neon-pink type-lastName"></span>
    </p>
    <div className="h-6" />
    <p className="text-2xl dark:text-white/90 max-sm:text-xl">
      I'm a Software Engineer based in Toronto.
    </p>
    <div className="h-4" />
    <p className="text-xl dark:text-white/70">
      <span className="text-rich-pink font-bold drop-shadow-2xl">
        Engineer @ Psyncopate Technologies
      </span>
    </p>
  </>
);

const AboutText = () => (
  <>
    <p>
      Originally pursuing healthcare, I discovered a fascination with programming in
      high school.
    </p>
    <br />
    <p>
      I'm continuously learning and growing my skill set — especially in{' '}
      <strong className="text-teal-500 dark:text-teal-green">Kafka</strong> and{' '}
      <strong className="text-teal-500 dark:text-teal-green">
        distributed event-driven architectures
      </strong>
      .
    </p>
    <br />
    <br />
    <p className="font-bold">
      I'm currently double certified for{' '}
      <strong className="text-teal-500 dark:text-teal-green">Kafka</strong>:
    </p>
    <ol className="mt-4 space-y-2 list-disc list-inside marker:text-teal-500 dark:marker:text-teal-green">
      <li className="pl-1">
        <span className="font-medium">Confluent Kafka Developer</span>
      </li>
      <li className="pl-1">
        <span className="font-medium">Confluent Kafka Administrator</span>
      </li>
    </ol>
    <br />
    <br />
  </>
);

const About = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const aboutRef = useRef(null);
  const aboutIndexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      aboutRef.current.classList.add('opacity-0');
      setTimeout(() => {
        aboutIndexRef.current = (aboutIndexRef.current + 1) % aboutImages.length;
        aboutRef.current.src = aboutImages[aboutIndexRef.current];
        aboutRef.current.classList.remove('opacity-0');
      }, 750);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!open) buttonRef.current?.focus();
  }, [open]);

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-screen pt-32 pb-4 bg-slate-200 dark:bg-dark-navy overflow-hidden">
        <img
          src={heroPic}
          alt="Hero"
          className="w-full max-h-[90vh] object-cover"
        />

        {/* OVERLAY — desktop only */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/10 from-45% to-black/70 pointer-events-none" />

        {/* DESKTOP OVERLAY TEXT */}
        <div className="hidden lg:flex absolute inset-0 items-center">
          <div className="ml-auto w-1/2 pl-10 pr-6 text-left">
            <HeroText />
          </div>
        </div>
        <div className="lg:hidden bg-slate-200 dark:bg-dark-navy px-6 py-12 text-center">
          <HeroText />
        </div>

        {/* SKILLS STRIP */}
        <div className="py-12 overflow-hidden group">
          <div className="marquee-track flex w-max gap-12 px-8 animate-marquee">
            {[...skills, ...skills].map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-white/80 hover:text-white transition"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-32 sm:h-20 bg-slate-100 dark:bg-navy"></div>
      <div id="about-jump" className="bg-slate-100 dark:bg-navy"></div>

      {/* ABOUT SECTION */}
      <div className="bg-slate-100 dark:bg-navy">
        <div
          id="about"
          className="section about sm:px-auto mt-0 pb-16 text-black dark:text-white sm:container dark:bg-navy"
        >
          <h1 className="text-3xl font-bold font-mono mb-8 underline decoration-neon-pink decoration-4 underline-offset-8">
            / About
          </h1>

          <div
            className="section-desc"
            data-aos="fade-zoom-in"
            data-aos-duration="2000"
            data-aos-offset="200"
          >
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
              <div className="flex basis-full lg:basis-1/3 items-center justify-center">
                <img
                  ref={aboutRef}
                  src={aboutImages[0]}
                  alt="Me"
                  className="h-[22rem] rounded-xl border-2 border-black dark:border-white drop-shadow-xl transition-opacity duration-700 object-cover"
                />
              </div>
              <div className="flex basis-full lg:basis-2/3 items-center justify-center text-left">
                <div className="text-lg laptop:text-xl max-sm:text-sm dark:text-zinc-300">
                  <AboutText />
                </div>
              </div>
            </div>
          </div>

          {/* HOBBIES */}
          <div
            data-aos="fade-zoom-out"
            data-aos-duration="1250"
            data-aos-offset="375"
            className="py-10"
          >
            <div className="mt-10">
              <p className="mb-6 text-lg font-semibold dark:text-zinc-300">
                Outside of work, I enjoy:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { emoji: '📸', label: 'Photography' },
                  { emoji: '🎮', label: 'Gaming' },
                  { emoji: '📺', label: 'Anime & Manga' },
                  { emoji: '⌨️', label: 'Mechanical Keyboards' },
                  { emoji: '🍵', label: 'Matcha' },
                  { emoji: '✈️', label: 'Travel' },
                ].map(({ emoji, label }) => (
                  <div
                    key={label}
                    className="hover:scale-[1.02] transition-transform flex items-center gap-3 rounded-xl border-2 border-teal-500/30 bg-white/60 p-4 dark:bg-navy/60"
                  >
                    <span className="text-2xl">{emoji}</span>
                    <span className="font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PHOTO GALLERY BUTTON */}
          <div className="flex justify-center pt-10">
            <Button
              ref={buttonRef}
              onClick={() => setOpen(true)}
              className="rounded bg-rose-600 px-12 py-4 text-xl font-bold text-white shadow hover:scale-110 hover:bg-rose-400"
            >
              📸 My Photos
            </Button>
          </div>

          <LightboxGallery open={open} close={() => setOpen(false)} />
        </div>
      </div>
    </>
  );
};

export default About;
