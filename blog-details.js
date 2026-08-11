document.addEventListener("DOMContentLoaded", () => {

    const posts = {

        "voice-warmup": {
            category: "Voice Tips",
            title: "5 Warm-Up Exercises for Voice Artists",
            description: "Improve vocal clarity before recording sessions with simple warm-up techniques used by professional voice artists.",
            image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
            author: "VOX Studio",
            date: "August 11, 2026",
            readingTime: "6 min read",
            previous: {
                title: "Global Voice Market Growth",
                url: "blog-details.html?post=global-voice-market"
            },
            next: {
                title: "Best Studio Microphones",
                url: "blog-details.html?post=studio-microphones"
            }
        },

        "studio-microphones": {
            category: "Audio Tech",
            title: "Best Studio Microphones",
            description: "Professional tools and microphone choices that help voice artists achieve clean, detailed studio recordings.",
            image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
            author: "VOX Studio",
            date: "August 10, 2026",
            readingTime: "7 min read",
            previous: {
                title: "5 Warm-Up Exercises for Voice Artists",
                url: "blog-details.html?post=voice-warmup"
            },
            next: {
                title: "AI in Voice Production",
                url: "blog-details.html?post=ai-voice-production"
            }
        },

        "ai-voice-production": {
            category: "Industry Trends",
            title: "AI in Voice Production",
            description: "Explore how artificial intelligence is changing voice production, studio workflows and the global voice industry.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            author: "VOX Studio",
            date: "August 8, 2026",
            readingTime: "8 min read",
            previous: {
                title: "Best Studio Microphones",
                url: "blog-details.html?post=studio-microphones"
            },
            next: {
                title: "Breathing Techniques for Long Scripts",
                url: "blog-details.html?post=breathing-techniques"
            }
        },

        "breathing-techniques": {
            category: "Voice Tips",
            title: "Breathing Techniques for Long Scripts",
            description: "Learn how to control your breathing naturally and maintain consistent delivery during lengthy voice recordings.",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
            author: "VOX Studio",
            date: "August 6, 2026",
            readingTime: "5 min read",
            previous: {
                title: "AI in Voice Production",
                url: "blog-details.html?post=ai-voice-production"
            },
            next: {
                title: "Noise Reduction Plugins",
                url: "blog-details.html?post=noise-reduction"
            }
        },

        "noise-reduction": {
            category: "Audio Tech",
            title: "Noise Reduction Plugins",
            description: "Discover professional noise reduction techniques and tools for creating cleaner and more polished recordings.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
            author: "VOX Studio",
            date: "August 4, 2026",
            readingTime: "6 min read",
            previous: {
                title: "Breathing Techniques for Long Scripts",
                url: "blog-details.html?post=breathing-techniques"
            },
            next: {
                title: "Global Voice Market Growth",
                url: "blog-details.html?post=global-voice-market"
            }
        },

        "global-voice-market": {
            category: "Industry Trends",
            title: "Global Voice Market Growth",
            description: "Why voice talent demand continues to grow globally and what the future means for professional voice artists.",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
            author: "VOX Studio",
            date: "August 2, 2026",
            readingTime: "7 min read",
            previous: {
                title: "Noise Reduction Plugins",
                url: "blog-details.html?post=noise-reduction"
            },
            next: {
                title: "5 Warm-Up Exercises for Voice Artists",
                url: "blog-details.html?post=voice-warmup"
            }
        }

    };


    const params = new URLSearchParams(window.location.search);
    const postId = params.get("post");

    const post = posts[postId];


    if (!post) {
        window.location.href = "blog.html";
        return;
    }


    const category = document.getElementById("blog-category");
    const heroCategory = document.getElementById("hero-category");
    const title = document.getElementById("blog-title");
    const description = document.getElementById("blog-description");
    const image = document.getElementById("blog-image");
    const author = document.getElementById("blog-author");
    const date = document.getElementById("blog-date");
    const readingTime = document.getElementById("blog-reading-time");


    if (category) {
        category.textContent = post.category;
    }

    if (heroCategory) {
        heroCategory.textContent = post.category;
    }

    if (title) {
        title.textContent = post.title;
        document.title = `${post.title} | VOX Studio`;
    }

    if (description) {
        description.textContent = post.description;
    }

    if (image) {
        image.src = post.image;
        image.alt = post.title;
    }

    if (author) {
        author.textContent = post.author;
    }

    if (date) {
        date.textContent = post.date;
    }

    if (readingTime) {
        readingTime.textContent = post.readingTime;
    }


    const previousLink = document.querySelector(
        ".vox-post-navigation .vox-post-nav:first-child"
    );

    const nextLink = document.querySelector(
        ".vox-post-navigation .vox-post-nav.vox-next"
    );


    if (previousLink && post.previous) {

        previousLink.href = post.previous.url;

        const previousTitle =
            previousLink.querySelector("strong");

        if (previousTitle) {
            previousTitle.textContent = post.previous.title;
        }
    }


    if (nextLink && post.next) {

        nextLink.href = post.next.url;

        const nextTitle =
            nextLink.querySelector("strong");

        if (nextTitle) {
            nextTitle.textContent = post.next.title;
        }
    }


    const searchForm =
        document.querySelector(".vox-sidebar-search");

    const searchInput =
        document.getElementById("blogSearch");


    if (searchForm && searchInput) {

        searchForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const value =
                searchInput.value.trim();

            if (!value) {
                return;
            }

            window.location.href =
                `blog.html?search=${encodeURIComponent(value)}`;

        });

    }


    const categoryLinks =
        document.querySelectorAll(".vox-category-list a");


    categoryLinks.forEach(link => {

        link.addEventListener("click", () => {

            const categoryText =
                link.querySelector("span");

            if (!categoryText) {
                return;
            }

            const category =
                categoryText.textContent.trim();

            window.location.href =
                `blog.html?category=${encodeURIComponent(category)}`;

        });

    });


    const relatedLinks =
        document.querySelectorAll(".vox-related-card a");


    relatedLinks.forEach(link => {

        link.addEventListener("click", () => {

            const href =
                link.getAttribute("href");

            if (!href) {
                return;
            }

            window.location.href = href;

        });

    });


    const shareButtons =
        document.querySelectorAll(".vox-share-buttons a");


    shareButtons.forEach(button => {

        button.addEventListener("click", (e) => {

            e.preventDefault();

            const currentUrl =
                window.location.href;

            const encodedUrl =
                encodeURIComponent(currentUrl);

            const encodedTitle =
                encodeURIComponent(post.title);

            if (button.classList.contains("facebook")) {

                window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
                    "_blank",
                    "width=600,height=500"
                );

            } else if (button.classList.contains("twitter")) {

                window.open(
                    `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
                    "_blank",
                    "width=600,height=500"
                );

            } else if (button.classList.contains("linkedin")) {

                window.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
                    "_blank",
                    "width=600,height=500"
                );

            }

        });

    });


    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

});