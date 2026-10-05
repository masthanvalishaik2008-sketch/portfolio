document.addEventListener("DOMContentLoaded", function () {

    /* ================= MOBILE MENU ================= */

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (navMenu.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    }


    /* ================= NAV LINK CLICK ================= */

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");

            if (navMenu) {
                navMenu.classList.remove("active");
            }

            if (menuBtn) {

                const icon = menuBtn.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    });


    /* ================= ACTIVE NAV ON SCROLL ================= */

    const sections = document.querySelectorAll("section");

    function updateActiveNav() {

        let current = "home";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 180;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === "#" + current
            ) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveNav);


    /* ================= REVEAL ANIMATION ================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.1
            }

        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });


    /* ================= BACK TO TOP ================= */

    const backToTop =
        document.getElementById("backToTop");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    if (backToTop) {

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* ================= FOOTER YEAR ================= */

    const year =
        document.getElementById("year");

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }


    /* ================= INITIAL NAV ================= */

    updateActiveNav();

});
