//navbar - po kliknutí skytí navigace
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const collapseNavbar = function () {
    if (window.innerWidth < 992) {
      const bsCollapse = new bootstrap.Collapse(
        navbarToggler.nextElementSibling,
        {
          toggle: false,
        }
      );
      bsCollapse.hide();
    }
  };

  navLinks.forEach(function (link) {
    link.addEventListener("click", collapseNavbar);
  });
});
