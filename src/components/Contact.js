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
        <div id="contact" className="bg-slate-200 pb-12 pt-40 dark:bg-navy">
      <div className="contact text-black sm:container max-sm:px-10">
        <div className="section row-span-1 text-center">
          <div className="text-4xl font-extrabold dark:text-white">Say Hi!</div>
          <br />
          <div
            className="text-xl text-gray-700 dark:text-zinc-300"
            // data-aos-once="true"
            // data-aos="fade-zoom-in"
            // data-aos-duration="2000"
            // data-aos-offset="250"
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
            Or add me on Linkedin!
          </div>
          
        </div>
      </div>
    </div>
    </div>
    
  );
};
export default Contact;
