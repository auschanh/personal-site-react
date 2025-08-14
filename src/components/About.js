import React, { useState, useRef, useEffect } from "react";
import me from "../assets/DSC00108 CROP.png";
import mePhilly from "../assets/MePhilly2024 CROP.png"
import meMontreal1 from "../assets/heroPics/20250808-DSCF0299.jpg"
import meMontreal2 from "../assets/heroPics/20250809-DSCF0720.jpg"
import meJapan from "../assets/hobbies/MixTapeCover.jpg";
import meJapanSelfie from "../assets/hobbies/20191229-DSC_0638.jpg";
import gamingImage from "../assets/hobbies/eldenring1.jpeg";
import hockeyImage from "../assets/hobbies/leafs.jpg";
import CarouselPhotos from "./CarouselPhotos";
import LightboxGallery from "./LightboxGallery";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Carousel,
  IconButton,
  Typography,
  button,
} from "@material-tailwind/react";

const About = () => {
  const [open, setOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const buttonRef = useRef(null);
  const heroRef = useRef(null);
  const heroIndexRef = useRef(0); // no rendering 
  
  const heroImages = [meMontreal2, meMontreal1]
  const handleOpen = () => setOpen(!open);


  useEffect(() => { // only runs on mount
    const interval = setInterval(() => {
      heroRef.current.classList.add('opacity-0'); // fade out

      setTimeout(() => {
        heroIndexRef.current = (heroIndexRef.current + 1) % heroImages.length;
        heroRef.current.src = heroImages[heroIndexRef.current];
        heroRef.current.classList.remove('opacity-0'); // fade back in
      }, 750);

    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!open) {
      // Set focus on the button when the Lightbox is closed
      buttonRef.current.focus();
    }
  }, [open]);

  const toggleText = () => {
    const aboutMoreText = document.getElementById("about-more");
    setShowText(!showText);
    showText
      ? (aboutMoreText.style.display = "block")
      : (aboutMoreText.style.display = "none");
  };

  return (
    // Hero Section
    <div className="grid grid-flow-row justify-center lg:max-w-full">
      <div className="w-screen bg-slate-200 pb-[28rem] max-3xl:pb-10 pt-32 dark:bg-dark-navy sm:pt-64">
        <div className="hero mb-12 flex flex-row place-items-center justify-center font-mono sm:container">
          <div className="hero-left picture basis-full flex items-center justify-center lg:basis-1/3">
          
            <img
                ref={heroRef}
                src={heroImages[0]}
                alt="'me"
                className={`rounded-xl border-2 h-[25rem] border-black drop-shadow-xl dark:border-white transition-opacity duration-700`}
              />
          
          </div>
          <div className="hero-right desc mt-5 flex basis-full items-center justify-center text-center sm:ml-5 md:basis-2/3">
            <div className="">
              <p className="text-3xl font-bold text-black dark:text-white md:text-5xl lg:text-7xl">
                Hi, I'm {" "}
                <span className="text-teal-700 type-firstName dark:text-neon-teal"></span>
              </p>
              <p className="text-lg font-bold dark:text-white sm:text-2xl">
                <span className="text-rose-600 dark:text-neon-pink type-lastName"></span>
              </p>
              <br />
              <p
                className="text-3xl text-black dark:text-zinc-300 max-sm:text-xl max-3xl:text-2xl"
                data-aos="fade-zoom-in"
                data-aos-duration="2000"
                data-aos-easing="ease-out-cubic"
                data-aos-once="true"
              >
                I'm a Software Developer based in Toronto. I love to solve problems for distributed systems and websites.
              </p>
              <br/>
              <p
                className="text-xl text-black dark:text-neutral-400 max-sm:text-md max-3xl:text-xl"
                data-aos="fade-zoom-in"
                data-aos-duration="2000"
                data-aos-easing="ease-out-cubic"
                data-aos-once="true"
              >
                <span className="dark:text-cyber-rose">Support Engineer (Kafka) @ Psyncopate</span> 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="about-jump" className="bg-slate-100 dark:bg-navy"></div>

      {/* About Sub-Section */}
      <div className="bg-slate-100 dark:bg-navy">
        <div
          id="about"
          className="section about sm:px-auto row-span-1 mb-20 mt-32 pb-16 text-black sm:container"
        >
          
          <h1 className="text-3xl font-bold font-mono mb-8 underline decoration-neon-pink decoration-4 underline-offset-8 dark:text-white">
            / About 
          </h1>
          
          <br />
          <div
            className="section-desc"
            data-aos="fade-zoom-in"
            data-aos-duration="2000"
            data-aos-offset="200"
            data-aos-easing="ease-out-cubic"
          >
            <div className="text-lg laptop:text-xl dark:text-zinc-300 max-sm:text-sm">
              <p>
                Originally pursuing healthcare, I discovered a fascination with programming in high school, where I enjoyed building simple games for fun.
                In university, exposure to 
                <strong className="text-teal-600 dark:text-neon-teal">
                  {" "}
                  Computer Science's
                </strong>{" "}
                blend of creative problem solving and constant innovation reshaped my career trajectory.
              </p>
              <br />
              <Button
                onClick={toggleText}
                className="focus:shadow-outline mb-4 block rounded bg-teal-600 px-3 py-2 font-bold text-white shadow hover:bg-teal-400 focus:outline-none sm:hidden"
              >
                University Journey
                <br />
              </Button>
              <p id="about-more" className="mt-2">
                During my tenure at
                <strong className="text-teal-600 dark:text-neon-teal">
                  {" "}
                  Toronto Metropolitan University
                </strong>
                , I was able to co-op for
                <strong className="text-teal-600 dark:text-neon-teal">
                  {" "}
                  Ontario Public Service
                </strong>
                , where I showed my passion for developing creative solutions. I
                was given opportunities for ownership over projects, such as
                working with a
                <strong className="text-teal-600 dark:text-neon-teal">
                  {" "}
                  client to automate her business workflow
                </strong>{" "}
                and was selected to share this experience in a company-wide
                learning and engagement conference.
              </p>
              <br />
              <p>
                I'm always keeping up with trends in tech. I
                love to continuously learn and grow my skill set as a developer
                and a person. Right now, that's <strong className="text-teal-600 dark:text-neon-teal">Kafka</strong>, and I'm excited to deep dive and learn more about <strong className="text-teal-600 dark:text-neon-teal">distributed event driven architectures</strong>.
                <br /> <br/> <br/>
                Here are some other interests/hobbies of mine:
              </p>
            </div>

            <br />

            <div
              data-aos="fade-zoom-out"
              data-aos-duration="1250"
              data-aos-offset="375"
              className="py-10"
            >
              <Carousel
                className="rounded-xl"
                autoplay={true}
                loop={true}
                prevArrow={({ handlePrev }) => (
                  <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute left-4 top-2/4 -translate-y-2/4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                  </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                  <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute !right-4 top-2/4 -translate-y-2/4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </IconButton>
                )}
              >
                <div className="relative h-full w-full">
                  <img
                    src={meJapanSelfie}
                    alt="Me in Japan"
                    className="h-full w-full object-cover"
                  />

                  <div>
                    <div class="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
                      <h5 class="text-xl">
                        <span class="bg-black px-3 max-md:bg-opacity-80">
                          Photography
                        </span>
                      </h5>
                      <p class="hidden px-16 text-base md:block">
                        <span class="bg-black bg-opacity-80 px-3">
                          I'm still learning a lot about the photography world,
                          and love to shoot for fun.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative h-full w-full">
                  <img
                    src={gamingImage}
                    alt="Elden Ring Picture"
                    className="h-full w-full object-cover"
                  />
                  <div>
                    <div class="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
                      <h5 class="text-xl">
                        <span class="bg-black px-5 opacity-80">Gaming</span>
                      </h5>
                      <p class="hidden text-base md:block">
                        I've been gaming since I could walk - my favourite
                        genres include RPGs and Souls-like games.
                      </p>
                      <p class="hidden text-base md:block">
                        Recent Favourites: Elden Ring, Dark Souls 3, Persona 5
                        Royal
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative h-full w-full">
                  <img
                    src={hockeyImage}
                    alt="Auston Matthews Maple Leafs Jersey"
                    className="h-full w-full object-cover"
                  />
                  <div>
                    <div class="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
                      <h5 class="text-xl">
                        <span class="bg-black px-3 opacity-80">Hockey</span>
                      </h5>
                      <p class="hidden text-base md:block">
                        <span class="bg-black px-4 py-1 opacity-80">
                          I don't play anymore but follow very closely with the
                          NHL.
                        </span>
                      </p>
                      <p class="hidden text-base md:block">
                        <span class="bg-black px-4 py-1 opacity-80">
                          I am a big Toronto Maple Leafs fan.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
          <div className="flex justify-center pt-10">
            <Button
              ref={buttonRef}
              onClick={handleOpen}
              autoFocus
              className="focus:shadow-outline rounded bg-rose-600 px-12 py-4 text-xl font-bold text-white shadow hover:scale-110 hover:bg-rose-400 focus:outline-none"
            >
              📸 My Photos
            </Button>
          </div>
          <LightboxGallery open={open} close={()=>setOpen(false)}/>
          {/* <Dialog
            className="!m-0 overflow-hidden bg-transparent !p-0 shadow-none outline-none h-screen w-screen"
            open={open}
            handler={handleOpen}
          >
            <DialogBody className="flex h-full items-center justify-center overflow-hidden">
              <CarouselPhotos />
            </DialogBody>
          </Dialog> */}
        </div>
      </div>
    </div>
  );
};

export default About;
