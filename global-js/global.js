function initializeNavbar() {
    const themeToggle = document.getElementById("theme-toggle");
    const rtlToggle = document.getElementById("rtl-toggle"); // NEW
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-links a");
    const navbar = document.querySelector(".navbar");

    // ================= THEME =================
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        if (themeToggle) themeToggle.textContent = "☀";
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

    // ================= RTL =================
    if (localStorage.getItem("dir") === "rtl") {
        document.documentElement.setAttribute("dir", "rtl");
        if (rtlToggle) rtlToggle.textContent = "LTR";
    }

    if (rtlToggle) {
        rtlToggle.addEventListener("click", () => {
            const isRTL = document.documentElement.getAttribute("dir") === "rtl";

            if (isRTL) {
                document.documentElement.setAttribute("dir", "ltr");
                localStorage.setItem("dir", "ltr");
                rtlToggle.textContent = "RTL";
            } else {
                document.documentElement.setAttribute("dir", "rtl");
                localStorage.setItem("dir", "rtl");
                rtlToggle.textContent = "LTR";
            }
        });
    }

    // ================= HAMBURGER =================
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

    // ================= SCROLL SHADOW =================
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 12px 30px rgba(0,0,0,0.08)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });

   
}

