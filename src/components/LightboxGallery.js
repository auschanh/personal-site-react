import React, { useState, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

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
import pic16 from "../assets/photography/2025/20250727-DSCF0257.jpg"
import pic17 from "../assets/photography/2025/20250727-DSCF0269.jpg"
import pic18 from "../assets/photography/2025/20250727-DSCF0274.jpg"
import pic19 from "../assets/photography/2025/20250803-DSCF0399.jpg"
import pic20 from "../assets/photography/2025/20250803-DSCF0470.jpg"
import pic21 from "../assets/photography/2025/20250808-DSCF0500.jpg"
import pic22 from "../assets/photography/2025/20250808-DSCF0502.jpg"
import pic23 from "../assets/photography/2025/20250808-DSCF0547.jpg"
import pic24 from "../assets/photography/2025/20250808-DSCF0562.jpg"
import pic25 from "../assets/photography/2025/20250809-DSCF0623.jpg"
import pic26 from "../assets/photography/2025/20250809-DSCF0643.jpg"
import pic27 from "../assets/photography/2025/20250809-DSCF0673.jpg"
import pic28 from "../assets/photography/2025/20250809-DSCF0698.jpg"
import pic29 from "../assets/photography/2025/20250809-DSCF0706.jpg"
import pic30 from "../assets/photography/2025/20250809-DSCF0711.jpg"
import pic31 from "../assets/photography/2025/20250701-DSCF0150.jpg"
import pic32 from "../assets/photography/2025/20250701-DSCF0154.jpg"
import pic33 from "../assets/photography/2025/20250701-DSCF0182.jpg"
import pic34 from "../assets/photography/2025/20250701-DSCF0218.jpg"
import pic35 from "../assets/photography/2025/20250701-DSCF0220.jpg"
import pic36 from "../assets/photography/2025/20250701-DSCF0224.jpg"


const images = [
  {
    path: pic16,
    title: "Toronto, Ontario 2025 - High Park",
    alt: "Dog in sitting in shade at Queenston Heights Park",
    misc: "",
  },
  {
    path: pic17,
    title: "Niagara Falls, Ontario 2025 - Queenston Heights Park",
    alt: "Baby boy eating chips and smiling at camera",
    misc: "",
  },
  {
    path: pic18,
    title: "Niagara Falls, Ontario 2025 - Queenston Heights Park",
    alt: "Little girl squatting in shade and looking to the side",
    misc: "",
  },
  {
    path: pic19,
    title: "Milton, Ontario 2025 - Kelso Conservation Area",
    alt: "Baby girl and mother smiling at camera",
    misc: "",
  },
  {
    path: pic20,
    title: "Milton, Ontario 2025 - Kelso Conservation Area",
    alt: "Group of adult men at a beach area laughing",
    misc: "",
  },
  {
    path: pic21,
    title: "Montreal, Quebec 2025 - Palais des congrès de Montréal",
    alt: "Rooftop picture in sunset of Montreal flag",
    misc: "",
  },
  {
    path: pic22,
    title: "Montreal, Quebec 2025 - Palais des congrès de Montréal",
    alt: "Rooftop picture in sunset of Montreal buildings",
    misc: "",
  },
  {
    path: pic23,
    title: "Montreal, Quebec 2025 - Old Port of Montreal",
    alt: "Night photo of well lit streets and cars with fencing",
    misc: "",
  },
  {
    path: pic24,
    title: "Montreal, Quebec 2025 - Old Port of Montreal",
    alt: "Night photo of old port ferris wheel, with reflection in water",
    misc: "",
  },
  {
    path: pic25,
    title: "Montreal, Quebec 2025 - Old Montreal",
    alt: "Night photo Old Montreal streets - man sitting outside cafe",
    misc: "",
  },
  {
    path: pic26,
    title: "Montreal, Quebec 2025 - Old Montreal",
    alt: "Day shot of buildings and eating tables",
    misc: "",
  },
  {
    path: pic27,
    title: "Montreal, Quebec 2025 - Palais des congrès de Montréal",
    alt: "Cosplayers, cosplaying in anime convention of Kishibe and Quanxi from Chainsaw Man",
    misc: "",
  },
  {
    path: pic28,
    title: "Montreal, Quebec 2025 - Mount Royal",
    alt: "Sunset shot of skyline view of Montreal",
    misc: "",
  },
  {
    path: pic29,
    title: "Montreal, Quebec 2025 - Mount Royal",
    alt: "Sunset shot of skyline view of Montreal",
    misc: "",
  },
  {
    path: pic30,
    title: "Montreal, Quebec 2025 - Mount Royal",
    alt: "Filipino Canadian reserve smiling at Mount Royal skyline view",
    misc: "",
  },
  {
    path: pic31,
    title: "Toronto, Ontario 2025 - Mimico Park",
    alt: "Boat in water around Mimico Park",
    misc: "",
  },
  {
    path: pic32,
    title: "Toronto, Ontario 2025 - Mimico Park",
    alt: "Bike resting on rocks near lake",
    misc: "",
  },
  {
    path: pic34,
    title: "Toronto, Ontario 2025 - High Park",
    alt: "Man sitting in chair near lake",
    misc: "",
  },
  {
    path: pic35,
    title: "Toronto, Ontario 2025 - High Park",
    alt: "Man adjusting fishing rod near High Park River",
    misc: "",
  },
  {
    path: pic36,
    title: "Toronto, Ontario 2025 - High Park",
    alt: "High Park River shot with buildings in background",
    misc: "",
  },
   // {
  //   path: pic1,
  //   title: "Tokyo, Japan 2019 - Shinagawa City",
  //   alt: "Person standing in a Japanese alleyway",
  //   misc: "",
  // },
  // {
  //   path: pic2,
  //   title: "Tokyo, Japan 2019 - Minato City, teamLab Borderless",
  //   alt: "Person posing with lights in teamLab Borderless",
  //   misc: "",
  // },
  // {
  //   path: pic3,
  //   title: "Tokyo, Japan 2019 - Sumida",
  //   alt: "Night street view in Sumida City in Japan",
  //   misc: "",
  // },
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

  // {
  //   path: pic11,
  //   title: "Joshua Tree, California 2022",
  //   alt: "Night Sky in Joshua Tree",
  //   misc: "Justin Wong",
  // },
  // {
  //   path: pic12,
  //   title: "Joshua Tree, California 2022 - Keys View",
  //   alt: "Sunset at Keys View in Joshua Tree",
  //   misc: "",
  // },
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
  // {
  //   path: pic14,
  //   title: "Toronto, Ontario 2017 - Graffiti Alley",
  //   alt: "String of colours at Graffiti Alley in Toronto",
  //   misc: "",
  // },
  {
    path: pic15,
    title: "Toronto, Ontario 2019 - High Park",
    alt: "Cherry Blossom Branches with sun in the background at High Park",
    misc: "",
  },
];

const LightboxGallery = ( {open, close}) => {
  const captionsRef = useRef(null);
  const fullscreenRef = useRef(null);
  const zoomRef = useRef(null);

	return (
		<>
			<Lightbox
        close={close} 
        plugins={[Captions, Counter, Fullscreen, Zoom]}
        styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .65)" } }}
        open={open}
        fullscreen={{ ref: fullscreenRef }}
        zoom={{ ref: zoomRef, maxZoomPixelRatio: 2, scrollToZoom: true }}
        counter={{ container: { style: { top: 0, left: 0 } } }}
				slides={images.map((img, i) => ({
          src: img.path,
          title: img.title,
          description: img.misc ? `📸 Credits: ${img.misc} \u00A0\u00A0\u00A0\u00A0\u00A0 🧑‍💻 Edit: Austin Chanhsavang (Me)` : ''
        }))}
        captions={{ref: captionsRef
        }}
        on={{
          click: () => {
            (captionsRef.current?.visible
              ? captionsRef.current?.hide
              : captionsRef.current?.show)?.();
          },
          fullscreen: () => fullscreenRef.current?.enter(),
        }}
        
			/>
		</>
	);
}

export default LightboxGallery;