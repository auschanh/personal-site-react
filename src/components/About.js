import React, { useState, useRef, useEffect } from "react";
import me from "../assets/DSC00108 CROP.png";
import meJapan from "../assets/hobbies/MixTapeCover.jpg";
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

  const handleOpen = () => setOpen(!open);

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
    <div className="grid grid-flow-row justify-center lg:max-w-full">
      <div className="w-screen bg-slate-200 py-10 pt-32 dark:bg-dark-navy sm:pt-64">
        <div className="hero mb-12 flex flex-row place-items-center justify-center font-mono sm:container">
          <div className="hero-left picture basis-full items-center justify-center lg:basis-1/3">
            <img
              src={me}
              alt="'me"
              className="rounded-xl border-2 border-black drop-shadow-xl dark:border-white"
            />
          </div>
          <div className="hero-right desc mt-5 flex basis-full items-center justify-center text-center sm:ml-5 md:basis-2/3">
            <div className="">
              <p className="text-3xl font-bold text-black dark:text-white md:text-5xl lg:text-7xl">
                Hi,{" "}
                <span className="text-teal-700 type-firstName dark:text-teal-300"></span>
              </p>
              <p className="text-lg font-bold dark:text-white sm:text-2xl">
                <span className="text-rose-600 type-lastName"></span>
              </p>
              <br />
              <p
                className="text-xl text-black dark:text-neutral-400 sm:text-3xl"
                data-aos="fade-zoom-in"
                data-aos-duration="2000"
                data-aos-easing="ease-out-cubic"
                data-aos-once="true"
              >
                I'm a software developer based in Toronto, with a growing interest in AI.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="about-jump" className="bg-slate-100 dark:bg-navy"></div>

      <div className="bg-slate-100 dark:bg-navy">
        <div
          id="about"
          className="section about sm:px-auto row-span-1 mb-20 mt-32 px-10 pb-16 text-black sm:container"
        >
          
          <h1 className="text-3xl font-bold font-mono mb-8 underline decoration-rose-600 decoration-4 underline-offset-8 dark:text-white">
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
            <div className="text-xl dark:text-zinc-300 max-sm:text-sm">
              <p>
                Initially into a health related career path, I've always had an
                interest in programming and building things in high school.
                Throughout my early university years, the problem solving and
                creativity of
                <strong className="text-teal-800 dark:text-teal-500">
                  {" "}
                  Computer Science
                </strong>{" "}
                reignited a passion within me, making the career switch an easy
                choice.
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
                <strong className="text-teal-800 dark:text-teal-500">
                  {" "}
                  Toronto Metropolitan University
                </strong>
                , I was able to co-op for
                <strong className="text-teal-800 dark:text-teal-500">
                  {" "}
                  Ontario Public Service
                </strong>
                , where I showed my passion for developing creative solutions. I
                was given opportunities for ownership over projects, such as
                working with a
                <strong className="text-teal-800 dark:text-teal-500">
                  {" "}
                  client to automate her business workflow
                </strong>{" "}
                and was selected to share this experience in a company-wide
                learning and engagement conference.
              </p>
              <br />
              <p>
                Currently, I'm always keeping up with what's trendy in tech. I
                love to continuously learn and grow my skill set as a developer
                and a person. Right now, that's <strong className="text-teal-800 dark:text-teal-500">Artificial Intelligence</strong>, and I'm excited to deep dive and learn more about <strong className="text-teal-800 dark:text-teal-500">AI</strong>.
                <br />
                Below are some things outside of tech that I'm
                interested in.
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
                    src={meJapan}
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
                          but I hope to pick up a new camera soon.
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
                        genres include JRPGs and Souls-like games.
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
                          I am a big Toronto Maple Leafs fan! I know I know.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              ref={buttonRef}
              onClick={handleOpen}
              autoFocus
              className="focus:shadow-outline rounded bg-teal-600 px-6 py-2 text-base font-bold text-white shadow hover:scale-110 hover:bg-teal-400 focus:outline-none"
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
