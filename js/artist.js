$("a.event__title").click(function (e) {
  e.preventDefault();
});

// artist click
const pD = function (e) {
  e.preventDefault();
};
const hideOthers = function (item) {
  $(".artist__dropdown").not(item).addClass("artist__dropdown-hidden");
};
$(".artist > a").click(function (e) {
  pD(e);
  $(this).siblings(".artist__dropdown").toggleClass("artist__dropdown-hidden");
  hideOthers($(this).siblings(".artist__dropdown"));
  e.target.scrollIntoView({
    behavior: "smooth",
  });
});
$(".partner a").click(function (e) {
  e.preventDefault();
});

// modal [lightbox]
const popupLightbox = document.querySelector(".popup_type_lightbox");
const popupFigure = popupLightbox.querySelector(".popup__img-figure");
const popupImage = popupFigure.querySelector(".popup__img");
const popupCaption = popupFigure.querySelector(".popup__img-caption");
let currentGallery;

let test;

if ($(window).width() >= 650) {
  // behavior [popup]
  function closePopup(target) {
    target.classList.remove("popup_opened");
    console.log("remove event listener");
    document.removeEventListener("keydown", test);
  }
  function openPopup(link, alt) {
    $(".popup").addClass("popup_opened");
    popupImage.src = link;
    popupCaption.textContent = alt;
  }

  // listen [lightbox]
  $(".artist__gallery > img").click(function (e) {
    console.log("click");
    currentGallery = this.parentNode.children;
    let galleryCurrent = Array.from(currentGallery);
    let galleryCurrentLength = Object.keys(galleryCurrent).length;
    let indexCurrent = galleryCurrent.indexOf(this);
    let indexNext, indexPrev;

    test = function (e) {
      console.log("test");
      if (e.key == "ArrowRight") {
        console.log("arrr");
        indexNext = indexCurrent += 1;
        if (indexNext == galleryCurrentLength) {
          indexCurrent = 0;
          openPopup(galleryCurrent[0].src, galleryCurrent[0].alt);
        } else {
          openPopup(galleryCurrent[indexNext].src, galleryCurrent[indexNext].alt);
        }
      } else if (e.key == "ArrowLeft") {
        indexPrev = indexCurrent -= 1;
        if (indexPrev < 0) {
          indexCurrent = galleryCurrentLength - 1;
          openPopup(galleryCurrent[galleryCurrentLength - 1].src, galleryCurrent[galleryCurrentLength - 1].alt);
        } else {
          openPopup(galleryCurrent[indexPrev].src, galleryCurrent[indexPrev].alt);
        }
      }
    };

    if (galleryCurrentLength > 1) {
      document.addEventListener("keydown", test);
      console.log("add event listener");
      openPopup(this.src, this.alt);
    } else {
      openPopup(this.src, this.alt);
    }
  });

  // listen close [lightbox]
  const popupList = document.querySelectorAll(".popup");

  popupList.forEach((popup) => {
    popup.addEventListener("click", (evt) => {
      closePopup(popup);
    });
  });

  // listen close 2 [lightbox]
  document.addEventListener("keydown", (evt) => {
    if (evt.key == "Escape" && document.querySelector(".popup_opened")) {
      closePopup(document.querySelector(".popup_opened"));
    }
  });
}
