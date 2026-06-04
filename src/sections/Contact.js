import React, { useState } from 'react';
import { Alert, Button } from '@material-tailwind/react';

const inputClass =
  'block w-full rounded border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 px-4 py-3 text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:border-teal-500 dark:focus:border-teal-green focus:outline-none transition-colors';

const labelClass =
  'mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-teal-green';

const Contact = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data,
    });

    if (response.ok) {
      setIsAlertOpen(true);
      event.target.reset();
      setTimeout(() => setIsAlertOpen(false), 5000);
    }
  };

  return (
    <div id="contact-jump">
      <div id="contact" className="pb-16 pt-20 dark:bg-navy bg-slate-100">
        <div className="contact sm:container max-sm:px-10">
          <div className="section row-span-1">

            <h1 className="text-3xl font-bold font-mono dark:text-white mb-2">
              / contact
            </h1>
            <p className="body-text mb-10">
              Reach me at{' '}
              <a
                href="mailto:auschanh@gmail.com"
                className="text-teal-600 dark:text-teal-green font-medium hover:underline"
              >
                auschanh@gmail.com
              </a>
              {' '}or leave a message below.
            </p>

            <form
              id="form"
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="access_key" value="273d06f8-0428-4ffb-b266-df006b8250e2" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="-mx-3 mb-5 flex flex-wrap">
                <div className="mb-5 w-full px-3 md:mb-0 md:w-1/2">
                  <label className={labelClass} htmlFor="name">Your Name</label>
                  <input
                    className={inputClass}
                    id="name" name="name" type="text"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label className={labelClass} htmlFor="email">Email Address</label>
                  <input
                    className={inputClass}
                    id="email" name="email" type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className={labelClass} htmlFor="subject">Subject</label>
                <input
                  className={inputClass}
                  id="subject" name="subject" type="text"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="mb-5">
                <label className={labelClass} htmlFor="message">Your Message</label>
                <textarea
                  rows="8"
                  id="message" name="message"
                  className={inputClass}
                  placeholder="Your message..."
                  required
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="focus:shadow-outline rounded bg-teal-600 px-6 py-2 text-sm font-bold text-white shadow hover:bg-teal-500 focus:outline-none"
                >
                  Send Message
                </Button>
              </div>

              {isAlertOpen && (
                <Alert className="mt-4 w-full justify-center bg-transparent">
                  <div className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-dark-navy px-6 py-3 text-zinc-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium">Message sent. I'll get back to you as soon as possible!</span>
                  </div>
                </Alert>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
