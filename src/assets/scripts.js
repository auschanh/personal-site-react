//navbar burger
document.addEventListener("DOMContentLoaded", function () {
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});

// contact form msg received
const btn = document.getElementById("btn-contact");
const msg = document.getElementById("msg");
const aboutMore = document.getElementById("about-more");

document.getElementById("form").addEventListener("submit", (e) => {
  msg.style.display = "grid";
  setTimeout(() => {
    msg.style.display = "none";
  }, 5000);
});

// About Section Mobile
let show = false;

document.getElementById("btn-more").addEventListener("click", (e) => {
  show = !show;
  if (show == true) {
    aboutMore.style.display = "block";
  } else if (show == false) {
    aboutMore.style.display = "none";
  }
});

// toggle light dark mode

// let darkMode;
// let root = document.getElementById("darkMode");

// // check if theme was set in local storage, and set root to that theme on page load
// if (localStorage.getItem("mode") !== null) {
//   if (localStorage.getItem("mode") == "dark") {
//     darkMode = true;
//     root.classList.remove("light");
//     root.classList.add("dark");
//   } else {
//     darkMode = false;
//     root.classList.remove("dark");
//     root.classList.add("light");
//   }
// }

// // when theme button is clicked, toggle dark mode on or off
// document
//   .getElementById("toggleDarkLightModeBtn")
//   .addEventListener("click", (e) => {
//     darkMode = !darkMode;
//     if (darkMode == true) {
//       root.classList.remove("light");
//       root.classList.add("dark");
//       localStorage.setItem("mode", "dark");
//     } else if (darkMode == false) {
//       root.classList.remove("dark");
//       root.classList.add("light");
//       localStorage.setItem("mode", "light");
//     }
//   });

document.addEventListener("DOMContentLoaded", function () {
  // Get the modal element
  var modal = document.getElementById("photography-modal");

  // When the modal is shown, set the carousel to show the first image
  modal.addEventListener("shown.bs.modal", function () {
    // Set the active slide to the first one
    var carousel = document.getElementById("carousel");
    carousel.setAttribute("data-bs-slide-to", "0");
    carousel.querySelector(".carousel-item").classList.add("active");
  });
});

const openPhotos = document.getElementById("openPhotographyModal");
const modalP = document.getElementById("photography-modal");

openPhotos.addEventListener("click", () => {
  modalP.classList.remove("hidden");
});
