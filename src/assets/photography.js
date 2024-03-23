const images = [
  {
    path: "./assets/photography/20191225-DSC_0005.jpg",
    title: "Tokyo, Japan 2019 - Shinagawa City",
    alt: "Person standing in a Japanese alleyway",
    misc: "",
  },
  {
    path: "./assets/photography/20191227-DSC_0348.jpg",
    title: "Tokyo, Japan 2019 - Minato City, teamLab Borderless",
    alt: "Person posing with lights in teamLab Borderless",
    misc: "",
  },
  {
    path: "./assets/photography/20191231-DSC_0867.jpg",
    title: "Tokyo, Japan 2019 - Sumida",
    alt: "Night street view in Sumida City in Japan",
    misc: "",
  },
  {
    path: "./assets/photography/20191229-DSC_0564.jpg",
    title: "Tokyo, Japan 2019 - Fujikawaguchiko",
    alt: "View of small road with car in the town of Fujikawaguchiko",
    misc: "",
  },
  {
    path: "./assets/photography/20200104-DSC_0308.jpg",
    title: "Kyoto, Japan 2020 - Fushimi Inari Shrine",
    alt: "Multiple Fushimi Inari shrines",
    misc: "",
  },
  {
    path: "./assets/photography/20200102-DSC_0885.jpg",
    title: "Hiroshima, Japan 2020 - Miyajima Island",
    alt: "View of Miyajima Island from boat",
    misc: "",
  },
  {
    path: "./assets/photography/20200102-DSC_0937.jpg",
    title: "Hiroshima, Japan 2020 - Miyajima Island",
    alt: "Japanese child and nara deer posing with sunsetting",
    misc: "",
  },
  {
    path: "./assets/photography/20200102-DSC_0028.jpg",
    title: "Hiroshima, Japan 2020 - Miyajima Island",
    alt: "Close up of nara deer",
    misc: "",
  },
  {
    path: "./assets/photography/20200102-DSC_0986.jpg",
    title: "Hiroshima, Japan 2020 - Miyajima Island",
    alt: "Close up of Japanese origami decoration",
    misc: "",
  },
  {
    path: "./assets/photography/20200104-DSC_0272.jpg",
    title: "Kyoto, Japan 2020 - Shimogyō-ku",
    alt: "Japanese women in kimonos walking on street",
    misc: "",
  },

  {
    path: "./assets/photography/NightSkyJoshuaTree.png",
    title: "Joshua Tree, California 2022",
    alt: "Night Sky in Joshua Tree",
    misc: "Justin Wong",
  },
  {
    path: "./assets/photography/20220629-IMG_0166.jpg",
    title: "Joshua Tree, California 2022 - Keys View",
    alt: "Sunset at Keys View in Joshua Tree",
    misc: "",
  },
  {
    path: "./assets/photography/MarlieGasStation2.jpg",
    title: "Joshua Tree, California 2022 - Route 66",
    alt: "Girl posing by retro car at desert gas station",
    misc: "Justin Wong",
  },
  // {
  //   path: "./assets/photography/20230903-IMG_1589.jpg",
  //   title: "Manhattan, New York 2023 - Meatpacking District",
  //   alt: "Architect creation at the MeatPacking District in NYC",
  //   misc: "",
  // },
  // {
  //   path: "./assets/photography/20230904-IMG_1627.jpg",
  //   title: "New York 2023 - Liberty Island",
  //   alt: "Statue of Liberty",
  //   misc: "",
  // },
  {
    path: "./assets/photography/20170601-IMG_1814.jpg",
    title: "Toronto, Ontario 2017 - Graffiti Alley",
    alt: "String of colours at Graffiti Alley in Toronto",
    misc: "",
  },
  {
    path: "./assets/photography/DSC_0378.jpg",
    title: "Toronto, Ontario 2019 - High Park",
    alt: "Cherry Blossom Branches with sun in the background at High Park",
    misc: "",
  },
  // {
  //   path: "./assets/photography/20230617-IMG_1419.jpg",
  //   title: "Toronto, Ontario 2023 - Mimico Waterfront Park",
  //   alt: "Mimico Waterfront condos",
  //   misc: "",
  // },
];

function generateCarouselItems(image, index) {
  let leftText = "&nbsp;";
  let rightText = "&nbsp;";
  let slideNum = index + 1;
  let nextSlideNum = slideNum === images.length ? 1 : slideNum + 1;
  let prevSlide = slideNum === 1 ? images.length : slideNum - 1;

  if (image.misc !== "") {
    leftText = `📸 Credits: ${image.misc}`;
  }
  if (leftText !== "&nbsp;") {
    rightText = "Edit: Me";
  }

  return `<div id="slide${slideNum}" class="carousel-item relative h-screen w-screen">
  <div
  id="photoCounter"
  class="absolute right-5 top-0  p-1 text-black dark:text-white font-bold dark:bg-gray-black text-lg"
>${index + 1}/${images.length}</div>
  <div>
    <div
      class="flex justify-between rounded-t-lg bg-white pt-1 font-bold"
    >
      <div class="pl-2">
        <div>${leftText}</div>
      </div>

      <div class="absolute inset-x-0 text-center">${image.title}</div>

      <div class="pr-2">${rightText}</div>
    </div>
    <img
      src="${image.path}"
      class="aspect-auto max-h-[95vh] max-w-[95vw] object-contain"
    />
    <div
      class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
    >
      <a href="#slide${prevSlide}" class="btn btn-circle">❮</a>
      <a href="#slide${nextSlideNum}" class="btn btn-circle">❯</a>
    </div>
  </div>
  </div>`;
}

document.addEventListener("DOMContentLoaded", function () {
  function initCarouselPhotography() {
    const carouselArea = document.getElementById("photographyCarousel");
    let carouselHTML = "";

    images.forEach((image, index) => {
      carouselHTML += generateCarouselItems(image, index);
    });

    carouselArea.innerHTML = carouselHTML;
  }

  initCarouselPhotography();
});

const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("photography-modal");
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});
