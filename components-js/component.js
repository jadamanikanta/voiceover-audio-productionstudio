fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {



        document.getElementById("navbar").innerHTML = data;

         const links = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop();

    links.forEach(link => {
      const linkPage = link.getAttribute('href').split('/').pop();
      if (linkPage === currentPage) {
        link.classList.add('active');
      }
    });

    document.querySelectorAll(".dropdown-toggle").forEach(toggle => {

    toggle.addEventListener("click", (e) => {

        if (window.innerWidth <= 900) {
            e.preventDefault();
            e.stopPropagation();

            toggle.closest(".dropdown").classList.toggle("active");
        }

    });

});






        initializeNavbar();

         
        

    });

fetch("components/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;

        lucide.createIcons();
    });

fetch("home-1/home.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("home-content").innerHTML = data;

        lucide.createIcons();

       
        
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    const suffix = counter.getAttribute("data-suffix") || "";
    let count = 0;

    const updateCounter = () => {
        const increment = target / 100;

        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count) + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target + suffix;
        }
    };

    updateCounter();
});

        const playButtons = document.querySelectorAll(".play-btn");

playButtons.forEach(button => {
    button.addEventListener("click", function () {
        const card = this.closest(".demo-card");
        const audio = card.querySelector(".audio-player");
        const progress = card.querySelector(".progress");
        const waveform = card.querySelector(".waveform");

        document.querySelectorAll(".audio-player").forEach(a => {
            if (a !== audio) a.pause();
        });

        document.querySelectorAll(".play-btn").forEach(btn => {
            if (btn !== this) btn.innerText = "▶";
        });

        document.querySelectorAll(".waveform").forEach(w => {
            if (w !== waveform) w.classList.remove("active");
        });

        if (audio.paused) {
            audio.play();
            this.innerText = "❚❚";
            waveform.classList.add("active");
        } else {
            audio.pause();
            this.innerText = "▶";
            waveform.classList.remove("active");
        }

        audio.addEventListener("timeupdate", () => {
            const percent = (audio.currentTime / audio.duration) * 100;
            progress.style.width = percent + "%";
        });

        audio.onended = () => {
            this.innerText = "▶";
            progress.style.width = "0%";
            waveform.classList.remove("active");
        };
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".testimonial-track");
    const cards = document.querySelectorAll(".testimonial-card");
    const leftBtn = document.querySelector(".left-arrow");
    const rightBtn = document.querySelector(".right-arrow");

    if (!track || cards.length === 0) return;

    let currentIndex = 0;

    function visibleCards() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }

    function maxIndex() {
        return Math.max(0, cards.length - visibleCards());
    }

    function slideWidth() {
        const gap = 30;
        return cards[0].offsetWidth + gap;
    }

    function updateSlider() {
        track.style.transform =
            `translateX(-${currentIndex * slideWidth()}px)`;
    }

    rightBtn.addEventListener("click", () => {
        currentIndex =
            currentIndex >= maxIndex()
                ? 0
                : currentIndex + 1;

        updateSlider();
    });

    leftBtn.addEventListener("click", () => {
        currentIndex =
            currentIndex <= 0
                ? maxIndex()
                : currentIndex - 1;

        updateSlider();
    });

    window.addEventListener("resize", () => {
        if (currentIndex > maxIndex()) {
            currentIndex = maxIndex();
        }
        updateSlider();
    });

    setInterval(() => {
        currentIndex =
            currentIndex >= maxIndex()
                ? 0
                : currentIndex + 1;

        updateSlider();
    }, 5000);

    updateSlider();
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});



    });


