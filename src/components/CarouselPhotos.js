import React, { useState } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import pic1 from "../assets/photography/20191225-DSC_0005.jpg";
import pic2 from "../assets/photography/20191227-DSC_0348.jpg";
import pic3 from "../assets/photography/20191231-DSC_0867.jpg";
import pic4 from "../assets/photography/20191229-DSC_0564.jpg";
import pic5 from "../assets/photography/20200104-DSC_0308.jpg";
import pic6 from "../assets/photography/20200102-DSC_0885.jpg";
import pic7 from "../assets/photography/20200102-DSC_0937.jpg";
import pic8 from "../assets/photography/20200102-DSC_0028.jpg";
import pic9 from "../assets/photography/20200102-DSC_0986.jpg";
import pic10 from "../assets/photography/20200104-DSC_0272.jpg";
import pic11 from "../assets/photography/NightSkyJoshuaTree.jpg";
import pic12 from "../assets/photography/20220629-IMG_0166.jpg";
import pic13 from "../assets/photography/MarlieGasStation2.jpg";
import pic14 from "../assets/photography/20170601-IMG_1814.jpg";
import pic15 from "../assets/photography/DSC_0378.jpg";

const images = [
  {
    path: pic1,
    title: "Tokyo, Japan 2019 - Shinagawa City",
    alt: "Person standing in a Japanese alleyway",
    misc: "",
  },
  {
    path: pic2,
    title: "Tokyo, Japan 2019 - Minato City, teamLab Borderless",
    alt: "Person posing with lights in teamLab Borderless",
    misc: "",
  },
  {
    path: pic3,
    title: "Tokyo, Japan 2019 - Sumida",
    alt: "Night street view in Sumida City in Japan",
    misc: "",
  },
  {
    path: pic4,
    title: "Tokyo, Japan 2019 - Fujikawaguchiko",
    alt: "View of small road with car in the town of Fujikawaguchiko",
    misc: "",
  },
  {
    path: pic5,
    title: "Kyoto, Japan 2020 - Fushimi Inari Shrine",
    alt: "Multiple Fushimi Inari shrines",
    misc: "",
  },
  {
    path: pic6,
    title: "Hiroshima, Japan 2020 - Miyajima Island",
    alt: "View of Miyajima Island from boat",
    misc: "",
  },
  {
    path: pic7,
    title: "Hiroshima, Japan 2020 - Miyajima Island",
    alt: "Japanese child and nara deer posing with sunsetting",
    misc: "",
  },
  {
    path: pic8,
    title: "Hiroshima, Japan 2020 - Miyajima Island",
    alt: "Close up of nara deer",
    misc: "",
  },
  {
    path: pic9,
    title: "Hiroshima, Japan 2020 - Miyajima Island",
    alt: "Close up of Japanese origami decoration",
    misc: "",
  },
  {
    path: pic10,
    title: "Kyoto, Japan 2020 - Shimogyō-ku",
    alt: "Japanese women in kimonos walking on street",
    misc: "",
  },

  {
    path: pic11,
    title: "Joshua Tree, California 2022",
    alt: "Night Sky in Joshua Tree",
    misc: "Justin Wong",
  },
  {
    path: pic12,
    title: "Joshua Tree, California 2022 - Keys View",
    alt: "Sunset at Keys View in Joshua Tree",
    misc: "",
  },
  {
    path: pic13,
    title: "Joshua Tree, California 2022 - Route 66",
    alt: "Girl posing by retro car at desert gas station",
    misc: "Justin Wong",
  },
  // {
  //   path: "../assets/photography/20230903-IMG_1589.jpg",
  //   title: "Manhattan, New York 2023 - Meatpacking District",
  //   alt: "Architect creation at the MeatPacking District in NYC",
  //   misc: "",
  // },
  // {
  //   path: "../assets/photography/20230904-IMG_1627.jpg",
  //   title: "New York 2023 - Liberty Island",
  //   alt: "Statue of Liberty",
  //   misc: "",
  // },
  {
    path: pic14,
    title: "Toronto, Ontario 2017 - Graffiti Alley",
    alt: "String of colours at Graffiti Alley in Toronto",
    misc: "",
  },
  {
    path: pic15,
    title: "Toronto, Ontario 2019 - High Park",
    alt: "Cherry Blossom Branches with sun in the background at High Park",
    misc: "",
  },
  // {
  //   path: "../assets/photography/20230617-IMG_1419.jpg",
  //   title: "Toronto, Ontario 2023 - Mimico Waterfront Park",
  //   alt: "Mimico Waterfront condos",
  //   misc: "",
  // },
];

const CarouselPhotos = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="flex h-screen ">
      <Carousel
        className="fixed inset-0 z-[999] overflow-hidden"
        loop={true}
        onChange={handleSlideChange}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute left-4 top-2/4 z-10 -translate-y-2/4"
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
            className="!absolute !right-4 top-2/4 z-10 -translate-y-2/4"
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
          <div key={i} className="relative flex w-screen flex-col ">
            <div
              id="imageText"
              className="flex justify-between rounded-t-lg bg-white  pt-1 font-bold"
            >
              <div className="pl-2">
                <div className="text-black">
                  {img.misc == "" ? "\u00A0" : `📸 Credits: ${img.misc}`}
                </div>
              </div>

              <div className="absolute inset-x-0 overflow-hidden text-center text-black">
                {img.title}
              </div>

              <div className="pr-2 text-black">
                {img.misc == "" ? "\u00A0" : "Edit: Me"}
              </div>
            </div>

            <img
              key={i}
              src={img.path}
              alt={`Photo ${i}`}
              loading="lazy"
              className="aspect-auto h-full w-full object-contain object-center"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselPhotos;
