document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const nav = document.querySelector("nav");

    mobileMenuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
        mobileMenuToggle.innerHTML = nav.classList.contains("active")
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            if (nav.classList.contains("active")) {
                nav.classList.remove("active");
                mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });

    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: "smooth",
                });
            }
        });
    });

    // Sticky header
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    });

    // Active navigation on scroll
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", function () {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll(
            ".service-card, .about-image, .coming-soon-card, .resource-card"
        );

        elements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    }

    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll(
        ".service-card, .about-image, .coming-soon-card, .resource-card"
    );
    animatedElements.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Run once on page load
});

document.addEventListener("DOMContentLoaded", function () {
    // Form submission handling
    const jobForm = document.querySelector(".job-application-form");
    if (jobForm) {
        jobForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Here you would typically send the form data to your server
            // For now, we'll just show a success message
            alert(
                "Thank you for your application! We will review your information and get back to you soon."
            );
            jobForm.reset();

            // In a real implementation, you would use fetch() or similar to submit the form
            // Example:
            /*
            const formData = new FormData(jobForm);
            
            fetch('/submit-application', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                alert('Application submitted successfully!');
                jobForm.reset();
            })
            .catch(error => {
                alert('There was an error submitting your application. Please try again.');
            });
            */
        });
    }
});
