fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;

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
            let count = 0;

            const updateCounter = () => {
                const increment = target / 200;

                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCounter, 40);
                } else {
                    counter.innerText = target;
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

const track = document.querySelector('.testimonial-track');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let scrollAmount = 0;
const cardWidth = document.querySelector('.testimonial-card').offsetWidth + 30; // card + gap

leftArrow.addEventListener('click', () => {
    scrollAmount -= cardWidth;
    track.style.transform = `translateX(-${scrollAmount}px)`;
});

rightArrow.addEventListener('click', () => {
    scrollAmount += cardWidth;
    track.style.transform = `translateX(-${scrollAmount}px)`;
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});



    });


