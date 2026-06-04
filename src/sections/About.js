import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mePhilly, meMontreal, meVancouver, meChristmas, meJapan, heroPic } from '../assets/personal';
import {
  kafkaWhite,
  confluentTealLogo,
  ansibleLogo,
  kubernetesLogo,
  terraformLogo,
  pythonLogo,
  grafanaLogo,
  dockerLogo,
  reactLogo,
  typescriptLogo,
  postgresqlLogo,
  nodejsLogo,
  tailwindLogo,
  socketioLogo,
  sharepointLogo,
  powerautomateLogo,
} from '../assets/icons';

const skills = [
  { name: 'Kafka', icon: kafkaWhite },
  { name: 'Confluent', icon: confluentTealLogo },
  { name: 'Kubernetes', icon: kubernetesLogo },
  { name: 'Ansible', icon: ansibleLogo },
  { name: 'Terraform', icon: terraformLogo },
  { name: 'Python', icon: pythonLogo },
  { name: 'Grafana', icon: grafanaLogo },
  { name: 'Docker', icon: dockerLogo },
  { name: 'React', icon: reactLogo },
  { name: 'TypeScript', icon: typescriptLogo },
  { name: 'Node.js', icon: nodejsLogo },
  { name: 'Tailwind', icon: tailwindLogo },
  { name: 'Socket.IO', icon: socketioLogo },
  { name: 'PostgreSQL', icon: postgresqlLogo },
  { name: 'SharePoint', icon: sharepointLogo },
  { name: 'Power Automate', icon: powerautomateLogo },
];

const aboutImages = [mePhilly, meVancouver, meChristmas];

const HOBBIES = [
  {
    emoji: '📸',
    label: 'Photography',
    image: meJapan,
    detail: 'Currently shooting on a Fujifilm x100vi, and enjoying the film simulations.',
  },
  {
    emoji: '🎮',
    label: 'Gaming',
    detail: 'Been gaming since I could walk, I love JRPGs and Souls like games! Here\'s some favourites:',
    bullets: [
      'Elden Ring',
      'Expedition 33',
      'Red Dead Redemption 2',
    ],
  },
  {
    emoji: '📺',
    label: 'Anime & Manga',
    detail: 'Been reading a lot more recently, but still enjoying Anime. Here are some favourites of mine:',
    bullets: [
      'Attack on Titan',
      'Steins Gate',
      'Chainsaw Man',
    ],
  },
  {
    emoji: '⌨️',
    label: 'Mechanical Keyboards',
    detail: 'I like to tinker with my equipment, including keyboards. Big fan of tactiles, and found my end games in Boba U4T and Baby Kangaroos!',
  },
  {
    emoji: '🍵',
    label: 'Coffee & Matcha',
    detail: 'Definitely not performative, but I love a good matcha or coffee. I was a barista for a short time and really got into coffee and matcha than.',
  },
  {
    emoji: '✈️',
    label: 'Travel',
    detail: 'Would love to travel more, but have been to many places in North America. Looking at Asia next: Vietnam,  South Korea, Singapore, Taiwan and more :)',
  },
];

const HobbyCard = ({ emoji, label, detail, image, bullets }) => {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full cursor-pointer text-left rounded-xl border-2 border-teal-500/30 bg-white/60 dark:bg-navy/60 p-4 transition-colors hover:border-teal-500/60 dark:hover:border-teal-green/40"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{emoji}</span>
          <span className="font-medium text-black dark:text-white">{label}</span>
        </div>
        <i className={`fa-solid fa-chevron-down text-xs body-text transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </div>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-72 mt-3' : 'max-h-0'}`}>
        <div className={`flex gap-3 ${image ? 'items-start' : ''}`}>
          {image && (
            <img
              src={image}
              alt={label}
              className="h-27 w-48 flex-shrink-0 rounded-lg object-cover"
            />
          )}
          <div className="flex-1">
            {detail && <p className="text-sm body-text">{detail}</p>}
            {bullets && (
              <ul className={`list-disc list-inside space-y-1 text-sm body-text ${detail ? 'mt-2' : ''}`}>
                {bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            )}
          </div>
        </div>
      </div>
    </button>
  );
};

const HeroText = () => (
  <>
    <p className="text-3xl font-bold text-black dark:text-white lg:text-white md:text-5xl lg:text-7xl">
      Hi, I'm <span className="text-teal-green type-firstName"></span>
    </p>
    <p className="text-lg font-bold text-black dark:text-white lg:text-white sm:text-2xl">
      <span className="type-lastName"></span>
    </p>
    <div className="h-6" />
    <p className="text-2xl text-gray-700 dark:text-white/90 lg:text-white/90 max-sm:text-xl">
      I build accessible web experiences and systems.
    </p>
    <div className="h-4" />
    <p className="text-xl">
      <span className="text-teal-600 dark:text-teal-green lg:text-teal-green font-bold">
        Lead Web Accessibility Specialist @ Q4 Inc
      </span>
    </p>
  </>
);

const AboutText = () => (
  <>
    <p>
      I like to build things for the web — and I care a lot about making sure
      everyone can use them.
    </p>
    <br />
    <p>
      Originally pursuing healthcare, I discovered a fascination with programming in
      high school. That led me through{' '}
      <strong className="text-teal-500 dark:text-teal-green">
        distributed systems and backend engineering
      </strong>{' '}
      — and eventually to{' '}
      <strong className="text-teal-500 dark:text-teal-green">web accessibility</strong>
      , where I found my specialty.
    </p>
    <br />
    <p>
      I bring an engineering perspective to building{' '}
      <strong className="text-teal-500 dark:text-teal-green">
        inclusive, user-centered web experiences
      </strong>
      . I'm also double certified in{' '}
      <strong className="text-teal-500 dark:text-teal-green">Kafka</strong> — a reminder
      that good systems thinking applies everywhere.
    </p>
    <br />
    <ol className="space-y-2 list-disc list-inside marker:text-teal-500 dark:marker:text-teal-green">
      <li className="pl-1">
        <span className="font-medium">Confluent Kafka Developer</span>
      </li>
      <li className="pl-1">
        <span className="font-medium">Confluent Kafka Administrator</span>
      </li>
    </ol>
    <br />
  </>
);

const About = () => {
  const aboutRef = useRef(null);
  const aboutIndexRef = useRef(0);

  useEffect(() => {
    let timeoutId;
    const interval = setInterval(() => {
      if (!aboutRef.current) return;
      aboutRef.current.classList.add('opacity-0');
      timeoutId = setTimeout(() => {
        if (!aboutRef.current) return;
        aboutIndexRef.current = (aboutIndexRef.current + 1) % aboutImages.length;
        aboutRef.current.src = aboutImages[aboutIndexRef.current];
        aboutRef.current.classList.remove('opacity-0');
      }, 750);
    }, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-screen pt-32 bg-slate-100 dark:bg-dark-navy overflow-hidden">
        <img
          src={heroPic}
          alt="Hero"
          className="block w-full max-h-[90vh] object-cover"
        />

        {/* OVERLAY — desktop only */}
        <div className="hidden lg:block absolute inset-x-0 top-32 bottom-0 bg-gradient-to-r from-black/30 from-40% to-black/85 pointer-events-none" />

        {/* DESKTOP OVERLAY TEXT */}
        <div className="hidden lg:flex absolute inset-0 items-center">
          <div className="ml-auto w-1/2 pl-10 pr-6 text-left [text-shadow:0_2px_12px_rgba(0,0,0,0.85)]">
            <HeroText />
          </div>
        </div>
        <div className="lg:hidden bg-slate-100 dark:bg-dark-navy px-6 py-12 text-center">
          <HeroText />
        </div>
      </div>

      {/* SKILLS BELT */}
      <div className="py-10 overflow-hidden bg-zinc-800 dark:bg-dark-navy">
        <div className="marquee-track flex w-max animate-marquee">
          {[0, 1, 2, 3].map((setIndex) => (
            <div key={setIndex} className="flex shrink-0 gap-10 pr-10">
              {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-2 w-16">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-10 w-10 object-contain"
                  />
                  <span className="text-center text-[10px] font-medium text-white/50 leading-tight">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
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
          <h1 className="text-3xl font-bold font-mono mb-8">
            / about
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
                <div className="text-lg laptop:text-xl max-sm:text-sm body-text">
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
              <p className="mb-6 text-lg font-semibold body-text">
                Outside of work, I enjoy:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {HOBBIES.map((hobby) => (
                  <HobbyCard key={hobby.label} {...hobby} />
                ))}
              </div>
            </div>
          </div>

          {/* PHOTO GALLERY LINK */}
          <div className="flex justify-center pt-10">
            <Link
              to="/photos"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-teal-500 dark:border-teal-green px-8 py-3 text-base font-medium text-teal-600 dark:text-teal-green hover:bg-teal-500 dark:hover:bg-teal-green hover:text-white dark:hover:text-dark-navy transition-colors"
            >
              📸 View My Photos
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
