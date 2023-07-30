var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });

  document.querySelector("#Store").addEventListener("click", function(){
      document.querySelector(".container").style.display = "none"
      document.querySelector(".container2").style.display = "initial"
  })

  document.querySelector("#back").addEventListener("click", function(){
    document.querySelector(".container2").style.display = "none"
    document.querySelector(".container").style.display = "initial"
})