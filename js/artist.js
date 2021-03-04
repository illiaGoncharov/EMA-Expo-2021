// artist click 
const pD = function(e) {
	e.preventDefault();
};
const hideOthers = function(item) {
    $('.artist__dropdown').not(item).addClass('artist__dropdown-hidden');
};
$('.artist > a').click(function(e) {
	pD(e);
    $(this).siblings('.artist__dropdown').toggleClass('artist__dropdown-hidden');
    hideOthers($(this).siblings('.artist__dropdown'));
    e.target.scrollIntoView({ 
      behavior: 'smooth' 
    });
});
$('.partner a').click(function (e) {
	e.preventDefault();
});

if ($(window).width() >= 650) {
  // modal [lightbox] 
  const popupLightbox = document.querySelector(".popup_type_lightbox");
  const popupFigure = popupLightbox.querySelector(".popup__img-figure");
  const popupImage = popupFigure.querySelector(".popup__img");
  const popupCaption = popupFigure.querySelector(".popup__img-caption");

  // behavior [popup]
  function closePopup(target) {
    target.classList.remove("popup_opened");
  }
  function openPopup(link, alt) {
    $('.popup').toggleClass("popup_opened");
    popupImage.src = link;
    popupCaption.textContent = alt;
  }

  // listen [lightbox]
  $('.artist__gallery > img').click(function(e) {
      openPopup(this.src, this.alt);
  })

  const popupList = document.querySelectorAll(".popup");

  popupList.forEach((popup) => {
    popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        closePopup(popup);
      }
    });
  });
}