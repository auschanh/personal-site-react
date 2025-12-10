import React, { useState, useRef, useEffect } from "react";
import heroPic from "../assets/heroPics/VancouverSeaSky.jpg";
import meJapanSelfie from "../assets/hobbies/20191229-DSC_0638.jpg";
import gamingImage from "../assets/hobbies/eldenring1.jpeg";
import hockeyImage from "../assets/hobbies/leafs.jpg";
import LightboxGallery from "./LightboxGallery";
import { Button, Carousel } from "@material-tailwind/react";

const About = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!open) buttonRef.current?.focus();
  }, [open]);

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-screen pb-32 pt-32 sm:pt-64 bg-slate-200 dark:bg-dark-navy overflow-hidden">
        <img
          src={heroPic}
          alt="Hero"
          className="w-full h-auto max-h-[90vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

        {/* HERO TEXT RIGHT-ALIGNED, HUGGING LEFT OF RIGHT HALF */}
      <div className="absolute inset-0 flex items-center">
<div className="ml-auto w-1/2 pl-6 
                  lg:w-1/2 lg:pl-8 lg:text-left lg:flex lg:flex-col lg:justify-center
                  sm:w-1/2 sm:pl-6 sm:text-left">
                  <p className="text-3xl font-bold text-white md:text-5xl lg:text-7xl">
      Hi, I'm <span className="text-neon-teal type-firstName"></span>
    </p>
    <p className="text-lg font-bold text-white sm:text-2xl">
      <span className="text-neon-pink type-lastName"></span>
    </p>
    <br />
    <p className="text-2xl text-white max-sm:text-xl max-3xl:text-2xl">
      I'm a Software Developer based in Toronto.
    </p>
    <br />
    <p className="text-xl text-white/80 max-sm:text-md max-3xl:text-xl">
      <span className="text-cyber-rose">Support Engineer (Kafka) @ Psyncopate</span>
    </p>
  </div>
</div>

      </div>
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
            <div className="text-lg laptop:text-xl max-sm:text-sm dark:text-zinc-300">
              <p>
                Originally pursuing healthcare, I discovered a fascination with
                programming in high school.
              </p>
              <br />
              <p>
                I love continuously learning and growing my skill set —
                especially in <strong className="text-neon-teal">Kafka</strong>{" "}
                and{" "}
                <strong className="text-neon-teal">
                  distributed event-driven architectures
                </strong>
                .
              </p>
              <br />
              <p>Here are some hobbies of mine:</p>
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
                      I’m still learning and love shooting for fun.
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
