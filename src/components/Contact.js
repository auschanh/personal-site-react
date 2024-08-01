import React, { useState } from "react";
import { Alert, Button } from "@material-tailwind/react";

const Contact = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleSubmit = (event) => {
    setIsAlertOpen(true);
    setTimeout(() => {
      setIsAlertOpen(false);
    }, 5000);
  };

  return (
    <div id="contact-jump">
        <div id="contact" className="bg-slate-100 pb-12 pt-40 dark:bg-navy">
      <div className="contact text-black sm:container max-sm:px-10">
        <div className="section row-span-1 text-center">
          <div className="text-4xl font-extrabold dark:text-white">Say Hi!</div>
          <br />
          <div
            className="text-xl text-gray-700 dark:text-zinc-300"
            data-aos-once="true"
            data-aos="fade-zoom-in"
            data-aos-duration="2000"
            data-aos-offset="250"
          >
            If you want to get in touch, email me at:{" "}
            <strong>auschanh@gmail.com</strong>
          </div>
          <div
            className="text-xl text-gray-700 dark:text-zinc-300"
            data-aos-once="true"
            data-aos="fade-zoom-in"
            data-aos-duration="2000"
            data-aos-delay="250"
          >
            Or leave me a message below.
          </div>
          <form
            id="form"
            className="mt-20 px-1 sm:px-20 xl:px-40"
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="-mx-3 mb-6 flex flex-wrap">
              <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                <input
                  type="hidden"
                  name="access_key"
                  value="273d06f8-0428-4ffb-b266-df006b8250e2"
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />
                <input type="hidden" name="redirect" value="localhost:5500" />
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-teal-500"
                  for="name"
                >
                  Your Name
                </label>
                <input
                  className="block w-full appearance-none rounded border border-gray-200  bg-indigo-100 px-4 py-3 leading-tight text-black placeholder-gray-500 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="w-full px-3 md:w-1/2">
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-teal-500"
                  for="email"
                >
                  Email Address
                </label>
                <input
                  className="block w-full appearance-none rounded border border-gray-200 bg-indigo-100 px-4 py-3 leading-tight text-black placeholder-gray-500 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="LoganRoy@waystar.com"
                  required
                />
              </div>
            </div>
            <div className="-mx-3 mb-6 flex flex-wrap">
              <div className="w-full px-3">
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-teal-500"
                  for="subject"
                >
                  Subject
                </label>
                <input
                  className="text-red mb-3 block w-full appearance-none rounded border border-gray-200 bg-indigo-100 px-4 py-3 leading-tight text-black placeholder-gray-500 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Your Subject"
                  required
                />
              </div>
            </div>

            <div className="-mx-3 mb-6 flex flex-wrap">
              <div className="w-full px-3">
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-teal-500"
                  for="message"
                >
                  Your Message
                </label>
                <textarea
                  rows="10"
                  name="message"
                  className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-indigo-100 px-4 py-3 leading-tight text-black focus:border-gray-500 focus:bg-white focus:outline-none"
                  required
                ></textarea>
              </div>
              <div className="flex w-full justify-between px-3">
                <div className="md:flex md:items-center">
                  <label className="block font-bold text-gray-500"> </label>
                </div>
                <Button
                  type="submit"
                  className="focus:shadow-outline rounded bg-teal-600 px-6 py-2 text-sm font-bold text-white shadow hover:bg-teal-400 focus:outline-none"
                >
                  Send Message
                </Button>
              </div>
              {isAlertOpen && (
                <Alert className="mt-3 justify-center bg-transparent">
                  <div className="flex items-center justify-center gap-2 rounded-2xl border bg-dark-navy px-8 py-2 text-center  text-zinc-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-bold">
                      Message Sent. I'll get back to you as soon as possible 🙂{" "}
                    </span>
                  </div>
                </Alert>
              )}

              {/* <div
                role="alert"
                className="alert mt-3 justify-self-end bg-dark-navy text-center text-zinc-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-bold">
                  Message Sent. I'll get back to you as soon as possible 🙂
                </span>
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    
  );
};
export default Contact;
