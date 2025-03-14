document.addEventListener("DOMContentLoaded", function () {
    // 🚀 1. Navigation (Smooth Scrolling)
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    if (smoothLinks.length > 0) {
        smoothLinks.forEach((link) => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute("href"));
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            });
        });
    }

 // 🚀 2. Hero Section Animation
document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ DOM Loaded!");

    const heroSection = document.querySelector(".hero");

    if (heroSection) {
        console.log("✅ Hero Section Found!");

        function checkScrollHero() {
            const triggerBottom = window.innerHeight * 0.85;
            const heroTop = heroSection.getBoundingClientRect().top;

            console.log(`📍 Hero Position: ${heroTop}, Trigger Point: ${triggerBottom}`);

            if (heroTop < triggerBottom) {
                heroSection.classList.add("show");
                console.log("✅ Hero Section Visible!");
                console.log(heroSection.classList); // Debugging

                window.removeEventListener("scroll", checkScrollHero); // Stop checking after it's visible
            }
        }

        window.addEventListener("scroll", checkScrollHero);
        setTimeout(() => {
            console.log("⏳ Checking Hero Visibility...");
            checkScrollHero();
        }, 500); // Slight delay for better accuracy
    } else {
        console.log("❌ Hero Section NOT Found! Check your HTML.");
    }
});



    // 🚀 3. Capabilities Section Animation
    const cards = document.querySelectorAll(".capability-card");
    if (cards.length > 0) {
        function checkScrollCapabilities() {
            const triggerBottom = window.innerHeight * 0.8;
            cards.forEach((card, index) => {
                if (card.getBoundingClientRect().top < triggerBottom) {
                    setTimeout(() => {
                        card.classList.add("show");
                    }, index * 150);
                }
            });
        }
        window.addEventListener("scroll", checkScrollCapabilities);
        checkScrollCapabilities();
    }


    // 🚀 5. AI Discovery Section Animation
    const features = document.querySelectorAll(".feature");
    if (features.length > 0) {
        function checkScrollFeatures() {
            const triggerBottom = window.innerHeight * 0.8;
            features.forEach((feature, index) => {
                if (feature.getBoundingClientRect().top < triggerBottom) {
                    setTimeout(() => {
                        feature.classList.add("show");
                    }, index * 150);
                }
            });
        }
        window.addEventListener("scroll", checkScrollFeatures);
        checkScrollFeatures();
    }

    // 🚀 6. AI Customization Section (Toggle Personalities)
    const toggleButton = document.getElementById("toggle-ai");
    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            document.getElementById("ai-options").classList.toggle("active");
        });
    }

    // 🚀 7. AI Intelligence Hub Section Animation
    const intelligenceCards = document.querySelectorAll(".feature-card");
    if (intelligenceCards.length > 0) {
        function checkScrollIntelligence() {
            const triggerBottom = window.innerHeight * 0.85;
            intelligenceCards.forEach((card, index) => {
                if (card.getBoundingClientRect().top < triggerBottom) {
                    setTimeout(() => {
                        card.classList.add("wave-show");
                    }, index * 200);
                }
            });
        }
        window.addEventListener("scroll", checkScrollIntelligence);
        checkScrollIntelligence();
    }

    // 🚀 8. AI Experience Section Animation
    const experienceSection = document.querySelector(".ai-experience");
    if (experienceSection) {
        function checkScrollExperience() {
            const triggerBottom = window.innerHeight * 0.8;
            if (experienceSection.getBoundingClientRect().top < triggerBottom) {
                experienceSection.classList.add("show");
            }
        }
        window.addEventListener("scroll", checkScrollExperience);
        checkScrollExperience();
    }

    // 🚀 9. AI Integration Section Animation
    const integrationCards = document.querySelectorAll(".integration-card");
    if (integrationCards.length > 0) {
        function checkScrollIntegrations() {
            const triggerBottom = window.innerHeight * 0.85;
            integrationCards.forEach((card, index) => {
                if (card.getBoundingClientRect().top < triggerBottom) {
                    setTimeout(() => {
                        card.classList.add("show");
                    }, index * 150);
                }
            });
        }
        window.addEventListener("scroll", checkScrollIntegrations);
        checkScrollIntegrations();
    }

    // 🚀 10. AI Super Assistant Animation
    const assistantSection = document.querySelector(".ai-super-assistant");
    if (assistantSection) {
        function checkScrollAssistant() {
            const triggerBottom = window.innerHeight * 0.85;
            if (assistantSection.getBoundingClientRect().top < triggerBottom) {
                assistantSection.style.opacity = "1";
                assistantSection.style.transform = "translateY(0)";
            }
        }
        window.addEventListener("scroll", checkScrollAssistant);
        checkScrollAssistant();
    }

    // 🚀 12. Footer Section (No JS required)
});
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("constellation-bg");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let stars = [];
    const numStars = 90; // Smooth effect without overloading
    const maxLineDistance = 150; // Distance where stars connect

    function createStars() {
        stars = [];
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 0.5, // Slight twinkle effect
                dx: (Math.random() - 0.5) * 0.2, // Soft floating movement
                dy: (Math.random() - 0.5) * 0.2,
                opacity: Math.random() * 0.6 + 0.4,
                color: Math.random() > 0.5 ? "#a855f7" : "#ffffff" // Purplish & White mix
            });
        }
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach((star) => {
            ctx.fillStyle = `rgba(${star.color === "#a855f7" ? "168, 85, 247" : "255, 255, 255"}, ${star.opacity})`;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
        });

        // Draw connecting constellation lines
        for (let i = 0; i < stars.length; i++) {
            for (let j = i + 1; j < stars.length; j++) {
                let dx = stars[i].x - stars[j].x;
                let dy = stars[i].y - stars[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxLineDistance) {
                    ctx.strokeStyle = `rgba(${Math.random() > 0.5 ? "168, 85, 247" : "255, 255, 255"}, 0.2)`; 
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(stars[i].x, stars[i].y);
                    ctx.lineTo(stars[j].x, stars[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animateStars() {
        stars.forEach((star) => {
            star.x += star.dx;
            star.y += star.dy;

            // Soft twinkling effect
            star.opacity += Math.random() * 0.02 - 0.01;
            if (star.opacity > 1) star.opacity = 1;
            if (star.opacity < 0.3) star.opacity = 0.3;

            // Keep stars inside the canvas (loop effect)
            if (star.x < 0) star.x = canvas.width;
            if (star.x > canvas.width) star.x = 0;
            if (star.y < 0) star.y = canvas.height;
            if (star.y > canvas.height) star.y = 0;
        });

        drawStars();
        requestAnimationFrame(animateStars);
    }

    createStars();
    animateStars();
});
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("constellation-bg");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let stars = [];
    const numStars = 90; 
    const maxLineDistance = 150; 

    function createStars() {
        stars = [];
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 0.5, 
                dx: (Math.random() - 0.5) * 0.2, 
                dy: (Math.random() - 0.5) * 0.2,
                opacity: Math.random() * 0.6 + 0.4,
                color: Math.random() > 0.5 ? "#a855f7" : "#ffffff"
            });
        }
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach((star) => {
            ctx.fillStyle = `rgba(${star.color === "#a855f7" ? "168, 85, 247" : "255, 255, 255"}, ${star.opacity})`;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
        });

        for (let i = 0; i < stars.length; i++) {
            for (let j = i + 1; j < stars.length; j++) {
                let dx = stars[i].x - stars[j].x;
                let dy = stars[i].y - stars[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxLineDistance) {
                    ctx.strokeStyle = `rgba(${Math.random() > 0.5 ? "168, 85, 247" : "255, 255, 255"}, 0.2)`; 
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(stars[i].x, stars[i].y);
                    ctx.lineTo(stars[j].x, stars[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animateStars() {
        stars.forEach((star) => {
            star.x += star.dx;
            star.y += star.dy;

            star.opacity += Math.random() * 0.02 - 0.01;
            if (star.opacity > 1) star.opacity = 1;
            if (star.opacity < 0.3) star.opacity = 0.3;

            if (star.x < 0) star.x = canvas.width;
            if (star.x > canvas.width) star.x = 0;
            if (star.y < 0) star.y = canvas.height;
            if (star.y > canvas.height) star.y = 0;
        });

        drawStars();
        requestAnimationFrame(animateStars);
    }

    createStars();
    animateStars();
});
document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".option");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        options.forEach((option) => {
            const optionTop = option.getBoundingClientRect().top;
            if (optionTop < triggerBottom) {
                option.classList.add("show");
            }
        });
    }

window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run once in case elements are already in view
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const company = document.getElementById("company").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic validation
        if (name === "" || company === "" || email === "" || phone === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Simulating form submission (Replace with backend integration later)
        formStatus.textContent = "Message sent successfully! We'll get back to you soon.";
        formStatus.style.opacity = "1"; // Show success message

        // Reset form after submission
        form.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            formStatus.style.opacity = "0";
        }, 5000);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Capabilities Dropdown
    const capabilitiesBtn = document.getElementById("capabilities-btn");
    const capabilitiesDropdown = document.getElementById("capabilities-dropdown");

    // Hide dropdown initially
    capabilitiesDropdown.style.display = "none";

    // Show dropdown on hover
    capabilitiesBtn.addEventListener("mouseenter", function () {
        capabilitiesDropdown.style.display = "flex";
    });

    // Keep dropdown open when hovering inside
    capabilitiesDropdown.addEventListener("mouseenter", function () {
        capabilitiesDropdown.style.display = "flex";
    });

    // Hide dropdown when cursor leaves
    capabilitiesBtn.addEventListener("mouseleave", function () {
        setTimeout(() => {
            if (!capabilitiesDropdown.matches(":hover")) {
                capabilitiesDropdown.style.display = "none";
            }
        }, 200);
    });

    capabilitiesDropdown.addEventListener("mouseleave", function () {
        capabilitiesDropdown.style.display = "none";
    });

    // Update right panel content on hover for Capabilities
    const capabilityItems = document.querySelectorAll(".capability-item");
    const capabilityDescs = document.querySelectorAll(".capability-desc");

    capabilityItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            capabilityItems.forEach(i => i.classList.remove("active"));
            capabilityDescs.forEach(desc => desc.classList.remove("active"));

            this.classList.add("active");
            document.getElementById(this.getAttribute("data-desc")).classList.add("active");
        });
    });

    // Ensure first capability is active by default
    document.querySelector(".capability-item").classList.add("active");
    document.querySelector(".capability-desc").classList.add("active");

    // About Us Dropdown
    const aboutDropdown = document.getElementById("about-us-dropdown");
    const aboutUsBtn = document.getElementById("about-us-btn");
    const aboutItems = document.querySelectorAll(".about-item");
    const aboutDescs = document.querySelectorAll(".about-desc");

    // Show About Us dropdown on hover
    aboutUsBtn.addEventListener("mouseenter", function () {
        aboutDropdown.classList.add("show");
    });

    // Keep dropdown open when hovering inside
    aboutDropdown.addEventListener("mouseenter", function () {
        aboutDropdown.classList.add("show");
    });

    // Hide dropdown when cursor leaves
    aboutUsBtn.addEventListener("mouseleave", function () {
        setTimeout(() => {
            if (!aboutDropdown.matches(":hover")) {
                aboutDropdown.classList.remove("show");
            }
        }, 200);
    });

    aboutDropdown.addEventListener("mouseleave", function () {
        aboutDropdown.classList.remove("show");
    });

    // Handle category switching for About Us
    aboutItems.forEach((item) => {
        item.addEventListener("mouseover", function () {
            aboutItems.forEach((el) => el.classList.remove("active"));
            aboutDescs.forEach((desc) => desc.classList.remove("active"));

            this.classList.add("active");
            document.getElementById(this.dataset.desc).classList.add("active");
        });
    });

    // 🟢 Sectors Dropdown - No Changes (Remains on Click)
    const sectorsBtn = document.getElementById("sectors-btn");
    const sectorsDropdown = document.getElementById("sectors-dropdown");
    const sectorItems = document.querySelectorAll(".sector-item");
    const sectorDescs = document.querySelectorAll(".sector-desc");

    // Toggle Sectors dropdown on button click (unchanged)
    sectorsBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        sectorsDropdown.classList.toggle("show");
    });

    // Close Sectors dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!sectorsDropdown.contains(event.target) && event.target !== sectorsBtn) {
            sectorsDropdown.classList.remove("show");
        }
    });

    // Handle category switching for Sectors
    sectorItems.forEach((item) => {
        item.addEventListener("mouseover", function () {
            sectorItems.forEach((el) => el.classList.remove("active"));
            sectorDescs.forEach((desc) => desc.classList.remove("active"));

            this.classList.add("active");
            document.getElementById(this.dataset.desc).classList.add("active");
        });
    });

    // Ensure first sector is active by default
    document.querySelector(".sector-item").classList.add("active");
    document.querySelector(".sector-desc").classList.add("active");
});
