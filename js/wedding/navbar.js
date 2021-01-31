var nav, stickyOffset, paddingSheet;

// we will need to wait for most things to load to get the correct padding
// offsets and such, but we can still make the navbar somewhat useful with just
// the DOM, so we'll set it up now and recalculate the offsets once the page is
// loaded
document.addEventListener("DOMContentLoaded", function() {
    nav = document.getElementById("nav");
    paddingSheet = document.createElement("style");
    window.onload = InvalidateNavbar;
    window.onscroll = UpdateNavbar;
    window.onresize = UpdateNavbar;
    InvalidateNavbar();
});

function InvalidateNavbar() {
    nav.classList.remove("stick-to-top");
    stickyOffset = nav.offsetTop;
    // detaching the navbar and sticking it will push the rest of the page's
    // content up, so we manually pad it down again with the nav's height
    paddingSheet.innerHTML = ".wedding-page-content { padding-top: " 
        + nav.offsetHeight + "px; }";
    UpdateNavbar();
}

function UpdateNavbar() {
    if (window.pageYOffset >= stickyOffset) {
        nav.classList.add("stick-to-top");
        if (!paddingSheet.parentElement) {
            document.body.appendChild(paddingSheet);
        }
    } else {
        nav.classList.remove("stick-to-top");
        if (paddingSheet.parentElement) {
            paddingSheet.parentElement.removeChild(paddingSheet);
        }
    }
}
