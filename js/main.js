
// MOBILE MENU TOGGLE

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("sideNav").style.left = "0px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sideNav").style.left = "-250px";
}

// Slick carousel options

    $('.servicesSlideGroup').slick({
    autoplay: true,
    autoplaySpeed: 6000,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false
    });