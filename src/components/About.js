import React, { useState, useRef, useEffect } from "react";
import mePhilly from "../assets/MePhilly2024 CROP.png"
import meMontreal2 from "../assets/heroPics/20250809-DSCF0720.jpg"
import meJapanSelfie from "../assets/hobbies/20191229-DSC_0638.jpg";
import gamingImage from "../assets/hobbies/eldenring1.jpeg";
import hockeyImage from "../assets/hobbies/leafs.jpg";
import heroPic from "../assets/heroPics/VancouverSeaSky.jpg";
import LightboxGallery from "./LightboxGallery";
import { Button, Carousel } from "@material-tailwind/react";

const About = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const aboutRef = useRef(null);
  const aboutIndexRef = useRef(0); // no rendering 
  
  const aboutImages = [meMontreal2, mePhilly]

  useEffect(() => { // only runs on mount
    const interval = setInterval(() => {
      aboutRef.current.classList.add('opacity-0'); // fade out

      setTimeout(() => {
        aboutIndexRef.current = (aboutIndexRef.current + 1) % aboutImages.length;
        aboutRef.current.src = aboutImages[aboutIndexRef.current];
        aboutRef.current.classList.remove('opacity-0'); // fade back in
      }, 750);

    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!open) buttonRef.current?.focus();
  }, [open]);

  const HeroText = () => (
  <>
    <p className="text-3xl font-bold dark:text-white md:text-5xl lg:text-7xl">
      Hi, I'm <span className="text-neon-teal type-firstName"></span>
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
      <span className="text-cyber-rose">
        Engineer (Kafka) @ Psyncopate
      </span>
    </p>
  </>
  );
  
  const AboutText = () => (
    <>
        <p>
          Originally pursuing healthcare, I discovered a fascination with
          programming in high school.
        </p>

        <br />
        <p>
          I'm continuously learning and growing my skill set — especially in{" "}
          <strong className="text-teal-500 dark:text-neon-teal">Kafka</strong>{" "}
          and{" "}
          <strong className="text-teal-500 dark:text-neon-teal">
            distributed event-driven architectures
          </strong>.
        </p>
        <br/>
        <br/>

        <p className="font-bold">
          I'm currently double certified for <strong className="text-teal-500 dark:text-neon-teal">
            Kafka
          </strong>:
        </p>
        <ol className="mt-4 space-y-2 list-disc list-inside marker:text-teal-500 dark:marker:text-neon-teal">
          <li className="pl-1">
            <span className="font-medium">Confluent Kafka Developer</span>
          </li>
          <li className="pl-1">
            <span className="font-medium">Confluent Kafka Administrator</span>
          </li>
        </ol>

        <br />
        <br/>
      <p>Here are some hobbies of mine:</p>
    </>
  )

  return (
    <>
      {/* HERO SECTION */}
    <div className="relative w-screen pt-32 pb-80 bg-slate-200 dark:bg-dark-navy overflow-hidden">
      {/* IMAGE */}
      <img
        src={heroPic}
        alt="Hero"
        className="w-full max-h-[90vh] object-cover"
      />

      {/* OVERLAY — desktop only */}
      <div className="hidden lg:block absolute inset-0 bg-black/40 pointer-events-none" />

      {/* DESKTOP OVERLAY TEXT */}
      <div className="hidden lg:flex absolute inset-0 items-center">
        <div className="ml-auto w-1/2 pl-10 pr-6 text-left">
          <HeroText />
        </div>
      </div>
      <div className="lg:hidden bg-slate-200 dark:bg-dark-navy px-6 py-12 text-center">
        <HeroText />
      </div>
    </div>

{/* MOBILE / TABLET TEXT BELOW IMAGE */}


    <div className="h-32 sm:h-20 bg-slate-100 dark:bg-navy"></div>
      {/* ABOUT-JUMP DIV FOR NAVIGATION */}
      <div
        id="about-jump"
        className="bg-slate-100 dark:bg-navy"
      ></div>

      {/* ABOUT SECTION */}
      <div className="bg-slate-100 dark:bg-navy">
         <div
            id="about"
            className="section about sm:px-auto mt-0 pb-16 text-black dark:text-white sm:container dark:bg-navy"
          >
          <h1 className="text-3xl font-bold font-mono mb-8 underline decoration-neon-pink decoration-4 underline-offset-8">
            / About
          </h1>

          {/* ABOUT TEXT */}
          <div
            className="section-desc"
            data-aos="fade-zoom-in"
            data-aos-duration="2000"
            data-aos-offset="200"
          >
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
    
    {/* LEFT — IMAGES (same idea as old hero) */}
    <div className="flex basis-full lg:basis-1/3 items-center justify-center">
      <img
        ref={aboutRef}
        src={aboutImages[0]}
        alt="Me"
        className="h-[22rem] rounded-xl border-2 border-black dark:border-white drop-shadow-xl transition-opacity duration-700 object-cover"
      />
    </div>

    {/* RIGHT — ABOUT TEXT */}
    <div className="flex basis-full lg:basis-2/3 items-center justify-center text-left">
      <div className="text-lg laptop:text-xl max-sm:text-sm dark:text-zinc-300">
        <AboutText/>
      </div>
    </div>
    </div>

            {/* HOBBY CAROUSEL */}
            <div
              data-aos="fade-zoom-out"
              data-aos-duration="1250"
              data-aos-offset="375"
              className="py-10"
            >
              <Carousel className="rounded-xl" autoplay loop>
                {/* Photography */}
                <div className="relative w-full h-full">
                  <img
                    src={meJapanSelfie}
                    alt="Me in Japan"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white">
                    <h5 className="text-xl bg-black/80 px-3 inline-block">
                      Photography
                    </h5>
                    <p className="hidden md:block bg-black/80 px-3 mt-2 inline-block">
                      Currently enjoying street photography with Fujifilm x100Vi
                    </p>
                  </div>
                </div>

                {/* Gaming */}
                <div className="relative w-full h-full">
                  <img
                    src={gamingImage}
                    alt="Gaming"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white">
                    <h5 className="text-xl bg-black/80 px-5 inline-block">Gaming</h5>
                    <p className="hidden md:block">
                      RPGs & Souls-like games. Recent favorites: Elden Ring, DS3,
                      P5R.
                    </p>
                  </div>
                </div>

                {/* Hockey */}
                <div className="relative w-full h-full">
                  <img
                    src={hockeyImage}
                    alt="Hockey"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white">
                    <h5 className="text-xl bg-black/80 px-3 inline-block">Hockey</h5>
                    <p className="hidden md:block bg-black/80 px-4 py-1 inline-block">
                      Big Toronto Maple Leafs fan.
                    </p>
                  </div>
                </div>
              </Carousel>
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
