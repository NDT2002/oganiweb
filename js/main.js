var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
var coll1 = document.getElementsByClassName("hero_categories_all");
var j;

for (j = 0; j < coll1.length; j++) {
  coll1[j].addEventListener("click", function () {
    var content = this.nextElementSibling;
    if (content.style.height == "453px") {
      content.style.height = "0";
      content.style.padding = "0 0 0 40px";
    } else {
      content.style.height = "453px";
      content.style.padding = "10px 0 12px 40px";
    }
  });
}

const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price_input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 0;
priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});
rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);
    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = "$" + minVal;
      console.log("minVal");
      priceInput[1].value = "$" + maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

////////////////////////
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
$(".latest_slider").owlCarousel({
  loop: true,
  margin: 0,
  items: 1,
  dots: false,
  nav: true,
  navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"],
  smartSpeed: 1200,
  autoHeight: false,
  autoplay: true,
});
var owl = $(".owl-carousel");
var owl1 = $(".product_discount_silder");
owl1.owlCarousel({
  loop: true,
  padding: 15,
  items: 3,
  dots: false,
  smartSpeed: 1200,
  autoHeight: false,
  autoplay: true,
  responsive: {
    320: {
      items: 1,
    },

    480: {
      items: 2,
    },

    768: {
      items: 2,
    },

    992: {
      items: 3,
    },
  },
});
////////////////////////////
$(".categories_slide").owlCarousel({
  loop: true,
  margin: 0,
  items: 4,
  dots: false,
  nav: true,
  navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"],
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  smartSpeed: 1200,
  autoHeight: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },

    480: {
      items: 2,
    },

    768: {
      items: 3,
    },

    992: {
      items: 4,
    },
  },
});

////////////////////////////
