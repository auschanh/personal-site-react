import React, { useState } from "react";
import {
  Carousel,
  IconButton,
  Dialog,
  DialogBody,
} from "@material-tailwind/react";

export function CarouselProject({ images, arrowColor }) {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpen = (index) => {
    setOpen(true);
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Carousel
        className="rounded-xl"
        loop={true}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            style={{ color: arrowColor }}
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
            style={{ color: arrowColor }}
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
        {images.map((img, i) => (
          <div key={i}>
            <img
              src={img}
              alt={`Photo ${i}`}
              loading="lazy"
              className="h-full w-full object-contain"
              onClick={() => handleOpen(i)}
            />
          </div>
        ))}
      </Carousel>
      <Dialog
        size="xl"
        open={open}
        handler={handleClose}
        className="bg-transparent outline-none"
      >
        <DialogBody className="flex h-full items-center justify-center">
          <img
            src={images[selectedIndex]}
            alt={`Photo ${selectedIndex}`}
            loading="lazy"
            className="max-h-[90vh] max-w-[90vw] items-center justify-center overflow-visible object-contain"
          />
        </DialogBody>
      </Dialog>
    </div>
  );
}

export default CarouselProject;
