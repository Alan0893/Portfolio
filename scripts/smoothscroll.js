/**
 * Smooth Scrolling
 * Scrolls to each section and updates the current place in the navigation
 */
let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav ul li a");
window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");
    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("current");
        document
          .querySelector("header nav ul li a[href*=" + id + "]")
          .classList.add("current");
      });
    }
    if (window.scrollY < 280) {
      menu.forEach((link) => {
        link.classList.remove("current");
        document
          .querySelector("header nav ul li a[href*=home]")
          .classList.add("current");
      });
    }
  });
};


/**
 * Smooth Scrolling
 * Smoothly scrolls to the section specified by the link 
 */
jQuery(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 100, function () {
        window.location.hash = hash;
      });
    }
  });
});