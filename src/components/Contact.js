<div id="contact" class="pb-12 pt-40 dark:bg-navy">
  <div class="contact sm:container max-sm:px-10">
    <div class="section row-span-1 text-center">
      <div class="text-4xl font-extrabold dark:text-white">Say Hi!</div>
      <br />
      <div
        class="text-xl text-gray-700 dark:text-zinc-300"
        data-aos="fade-zoom-in"
        data-aos-duration="1000"
      >
        If you want to get in touch, email me at:
        <strong>auschanh@gmail.com</strong>
      </div>
      <div
        class="text-xl text-gray-700 dark:text-zinc-300"
        data-aos="fade-zoom-in"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        Or leave me a message below.
      </div>
      <form
        id="form"
        class="mt-20 px-1 sm:px-20 xl:px-40"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <div class="-mx-3 mb-6 flex flex-wrap">
          <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <input
              type="hidden"
              name="access_key"
              value="273d06f8-0428-4ffb-b266-df006b8250e2"
            />
            <input
              type="checkbox"
              name="botcheck"
              class="hidden"
              style="display: none"
            />
            <input type="hidden" name="redirect" value="localhost:5500" />
            <label
              class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-teal-500"
              for="name"
            >
              Your Name
            </label>
            <input
              class="block w-full appearance-none rounded border border-gray-200 bg-indigo-100 px-4 py-3 leading-tight focus:border-gray-500 focus:bg-white focus:outline-none"
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div class="w-full px-3 md:w-1/2">
            <label
              class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-teal-500"
              for="email"
            >
              Email Address
            </label>
            <input
              class="block w-full appearance-none rounded border border-gray-200 bg-indigo-100 px-4 py-3 leading-tight focus:border-gray-500 focus:bg-white focus:outline-none"
              id="email"
              name="email"
              type="text"
              placeholder="LoganRoy@waystar.com"
              required
            />
          </div>
        </div>
        <div class="-mx-3 mb-6 flex flex-wrap">
          <div class="w-full px-3">
            <label
              class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-teal-500"
              for="subject"
            >
              Subject
            </label>
            <input
              class="mb-3 block w-full appearance-none rounded border border-gray-200 bg-indigo-100 px-4 py-3 leading-tight focus:border-gray-500 focus:bg-white focus:outline-none"
              id="subject"
              name="subject"
              type="text"
              placeholder="Your Subject"
              required
            />
          </div>
        </div>

        <div class="-mx-3 mb-6 flex flex-wrap">
          <div class="w-full px-3">
            <label
              class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-teal-500"
              for="message"
            >
              Your Message
            </label>
            <textarea
              rows="10"
              name="message"
              class="mb-3 block w-full appearance-none rounded border border-gray-200 bg-indigo-100 px-4 py-3 leading-tight focus:border-gray-500 focus:bg-white focus:outline-none"
              required
            ></textarea>
          </div>
          <div class="flex w-full justify-between px-3">
            <div class="md:flex md:items-center">
              <label class="block font-bold text-gray-500"> </label>
            </div>
            <button
              class="focus:shadow-outline rounded bg-teal-600 px-6 py-2 font-bold text-white shadow hover:bg-teal-400 focus:outline-none"
              type="submit"
              id="btn-contact"
            >
              Send Message
            </button>
          </div>
          <div
            role="alert"
            id="msg"
            class="alert mt-3 justify-self-end bg-dark-navy text-center text-zinc-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 shrink-0 stroke-current"
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
            <span class="font-bold"
              >Message Sent. I'll get back to you as soon as possible 🙂</span
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
