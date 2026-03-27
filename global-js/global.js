function initializeNavbar() {
    const themeToggle = document.getElementById("theme-toggle");
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-links a");
    const navbar = document.querySelector(".navbar");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        if (themeToggle) {
            themeToggle.textContent = "☀";
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                themeToggle.textContent = "☀";
            } else {
                localStorage.setItem("theme", "light");
                themeToggle.textContent = "☾";
            }
        });
    }

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            hamburger.classList.toggle("active");
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 12px 30px rgba(0,0,0,0.08)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });





document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const dropdowns = document.querySelectorAll(".dropdown");

    
    
    
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    
    
    
    dropdowns.forEach(drop => {
        drop.addEventListener("click", (e) => {
            if (window.innerWidth <= 900) {

                
                e.preventDefault();

                
                dropdowns.forEach(d => {
                    if (d !== drop) d.classList.remove("active");
                });

                
                drop.classList.toggle("active");
            }
        });
    });

    
    
    
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 900) {
                navMenu.classList.remove("active");
                hamburger.classList.remove("active");
            }
        });
    });

});
    
}


