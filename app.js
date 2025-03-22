






document.addEventListener("DOMContentLoaded", function () {
    console.log("Usinbelai Navbar Loaded Successfully! 🚀");
});

const canvas = document.getElementById("constellation-bg");
const ctx = canvas.getContext("2d");

function updateCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

updateCanvasSize();

let stars = [];
let numStars = window.innerWidth > 768 ? 100 : 50; // Fewer stars on small screens
let maxDistance = window.innerWidth > 768 ? 150 : 80; // Reduce link distance on small screens

// Star constructor function
function Star(x, y, size, speed, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3;
    this.alpha = Math.random();
    this.alphaSpeed = Math.random() * 0.02 + 0.005;
    this.color = color;

    this.update = function () {
        this.alpha += this.alphaSpeed;
        if (this.alpha >= 1 || this.alpha <= 0.3) this.alphaSpeed *= -1;
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    };

    this.draw = function () {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    };
}

function createStars() {
    stars = [];
    for (let i = 0; i < numStars; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let size = Math.random() * 2 + 1;
        let color = Math.random() > 0.5 ? "#9b5eff" : "#ffffff";
        stars.push(new Star(x, y, size, 0.5, color));
    }
}

function drawLines() {
    for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
            let dx = stars[i].x - stars[j].x;
            let dy = stars[i].y - stars[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
                ctx.globalAlpha = 0.3;
                ctx.strokeStyle = "#ffffff";
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(stars[i].x, stars[i].y);
                ctx.lineTo(stars[j].x, stars[j].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
        star.update();
        star.draw();
    }
    drawLines();
    requestAnimationFrame(animate);
}

createStars();
animate();

window.addEventListener("resize", () => {
    updateCanvasSize();
    numStars = window.innerWidth > 768 ? 100 : 50;
    maxDistance = window.innerWidth > 768 ? 150 : 80;
    createStars();
});


document.addEventListener("DOMContentLoaded", function () {
    const capabilitiesBtn = document.getElementById("nav-capabilities-btn");
    const dropdown = document.getElementById("nav-capabilities-dropdown");
    const capabilityItems = document.querySelectorAll(".nav-capability-item");
    const capabilityDescriptions = document.querySelectorAll(".nav-capability-desc");

    let isMobile = window.matchMedia("(max-width: 1024px)").matches;

    // Show dropdown on hover (Desktop) or click (Mobile)
    function toggleDropdown(event) {
        if (isMobile) {
            event.preventDefault();
            dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
        }
    }

    capabilitiesBtn.addEventListener(isMobile ? "click" : "mouseenter", toggleDropdown);
    
    // Close dropdown when clicking outside (Mobile)
    document.addEventListener("click", function (event) {
        if (isMobile && !dropdown.contains(event.target) && event.target !== capabilitiesBtn) {
            dropdown.style.display = "none";
        }
    });

    // Update Right Panel on Hover (Desktop) or Click (Mobile)
    capabilityItems.forEach((item) => {
        item.addEventListener(isMobile ? "click" : "mouseenter", function () {
            // Remove active class from all items and descriptions
            capabilityItems.forEach((el) => el.classList.remove("active"));
            capabilityDescriptions.forEach((desc) => desc.classList.remove("active"));

            // Add active class to selected item & corresponding description
            this.classList.add("active");
            const descId = this.getAttribute("data-desc");
            document.getElementById(descId).classList.add("active");
        });
    });

    // Recheck if it's mobile on resize
    window.addEventListener("resize", () => {
        isMobile = window.matchMedia("(max-width: 1024px)").matches;
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const sectorsBtn = document.getElementById("sectors-btn");
    const sectorsDropdown = document.getElementById("sectors-dropdown");
    const sectorItems = document.querySelectorAll(".sector-item");
    const sectorDescriptions = document.querySelectorAll(".sector-desc");

    let isMobile = window.matchMedia("(max-width: 1024px)").matches;

    // Show dropdown on hover (Desktop) or click (Mobile)
    function toggleDropdown(event) {
        if (isMobile) {
            event.preventDefault();
            sectorsDropdown.style.display = sectorsDropdown.style.display === "flex" ? "none" : "flex";
        }
    }

    sectorsBtn.addEventListener(isMobile ? "click" : "mouseenter", toggleDropdown);

    // Close dropdown when clicking outside (Mobile)
    document.addEventListener("click", function (event) {
        if (isMobile && !sectorsDropdown.contains(event.target) && event.target !== sectorsBtn) {
            sectorsDropdown.style.display = "none";
        }
    });

    // Update Right Panel on Hover (Desktop) or Click (Mobile)
    sectorItems.forEach((item) => {
        item.addEventListener(isMobile ? "click" : "mouseenter", function () {
            // Remove active class from all items and descriptions
            sectorItems.forEach((el) => el.classList.remove("active"));
            sectorDescriptions.forEach((desc) => desc.classList.remove("active"));

            // Add active class to selected item & corresponding description
            this.classList.add("active");
            const descId = this.getAttribute("data-desc");
            document.getElementById(descId).classList.add("active");
        });
    });

    // Recheck if it's mobile on resize
    window.addEventListener("resize", () => {
        isMobile = window.matchMedia("(max-width: 1024px)").matches;
    });
});






document.addEventListener("DOMContentLoaded", function () {
    const aboutUsBtn = document.getElementById("about-us-btn");
    const aboutUsDropdown = document.getElementById("about-us-dropdown");
    const aboutItems = document.querySelectorAll(".about-item");
    const aboutDescriptions = document.querySelectorAll(".about-desc");

    let isMobile = window.matchMedia("(max-width: 1024px)").matches;

    // Show dropdown on hover (Desktop) or click (Mobile)
    function toggleDropdown(event) {
        if (isMobile) {
            event.preventDefault();
            aboutUsDropdown.style.display = aboutUsDropdown.style.display === "flex" ? "none" : "flex";
        }
    }

    aboutUsBtn.addEventListener(isMobile ? "click" : "mouseenter", toggleDropdown);

    // Close dropdown when clicking outside (Mobile)
    document.addEventListener("click", function (event) {
        if (isMobile && !aboutUsDropdown.contains(event.target) && event.target !== aboutUsBtn) {
            aboutUsDropdown.style.display = "none";
        }
    });

    // Update Right Panel on Hover (Desktop) or Click (Mobile)
    aboutItems.forEach((item) => {
        item.addEventListener(isMobile ? "click" : "mouseenter", function () {
            // Remove active class from all items and descriptions
            aboutItems.forEach((el) => el.classList.remove("active"));
            aboutDescriptions.forEach((desc) => desc.classList.remove("active"));

            // Add active class to selected item & corresponding description
            this.classList.add("active");
            const descId = this.getAttribute("data-desc");
            document.getElementById(descId).classList.add("active");
        });
    });

    // Recheck if it's mobile on resize
    window.addEventListener("resize", () => {
        isMobile = window.matchMedia("(max-width: 1024px)").matches;
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const heroElements = document.querySelectorAll(".hero-title span, .sub-heading, .hero-description, .hero-buttons");

    heroElements.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(-20px)"; // Start position (slightly above)
        setTimeout(() => {
            el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 200 * index); // Staggered effect
    });
});








document.addEventListener("DOMContentLoaded", function () {
  const flipCard = document.querySelector(".flip-card");

  // Auto flip once on load
  setTimeout(() => {
    flipCard.classList.add("flipped");
  }, 1000);

  // Tap to manually flip
  flipCard.addEventListener("click", function () {
    flipCard.classList.toggle("flipped");
  });
});


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".feature-card");
    
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("slide-in");
        }, index * 200); // Stagger effect (200ms delay per card)
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const aiSection = document.querySelector("#ai-voice-agents");
    const featureCards = document.querySelectorAll(".feature-card");
    const rightContent = document.querySelectorAll("#ai-voice-agents .col-md-6 > *");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    featureCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add("slide-in");
                        }, index * 150);
                    });

                    rightContent.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add("slide-in");
                        }, (index + featureCards.length) * 150);
                    });

                    observer.unobserve(aiSection);
                }
            });
        },
        { threshold: 0.3 }
    );

    observer.observe(aiSection);
});






