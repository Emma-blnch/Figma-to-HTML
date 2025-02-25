// --------> Animation pour amener au bon endroit de la page selon click sur menu
document.addEventListener("DOMContentLoaded", function() {
    const sectionMapping = {
        "About us": "intro",
        "Services": "services",
        "Case studies": "case-studies",
        "Testimonies": "feedback",
        "Hire": "hire",
    };
    
    // Sélectionne tous les liens du menu
    const menuLinks = document.querySelectorAll("nav ul li");

    menuLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Empêche le saut instantané
            const sectionId = sectionMapping[this.textContent.trim()]; // Trouve l'ID correspondant
            
            if (sectionId) {
                const targetSection = document.getElementById(sectionId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
        });
    });
});

// ------------> Animation des cartes de services qui defilent
document.addEventListener("DOMContentLoaded", function () {
    const servicesContainer = document.querySelector(".services");
    const serviceCards = Array.from(document.querySelectorAll(".service-card"));
    const dots = document.querySelectorAll(".dot");
    let serviceWidth = serviceCards[0].offsetWidth + 20; // Largeur d'une carte + espace
    let serviceIndex = 0;
    let autoSlide;

    // Duplique les cartes pour créer l'effet infini
    serviceCards.forEach((card) => {
        let clone = card.cloneNode(true);
        servicesContainer.appendChild(clone);
    });

    function updateServiceSlide(index, instant = false) {
        servicesContainer.style.transition = instant ? "none" : "transform 0.6s ease-in-out";
        servicesContainer.style.transform = `translateX(${-index * serviceWidth}px)`;

        // Mise à jour des points d'indicateur
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === (index % serviceCards.length));
        });

        serviceIndex = index;
    }

    function nextSlide() {
        serviceIndex++;
        updateServiceSlide(serviceIndex);

        if (serviceIndex >= serviceCards.length) {
            setTimeout(() => {
                serviceIndex = 0;
                updateServiceSlide(serviceIndex, true);
            }, 600);
        }
    }

    function prevSlide() {
        if (serviceIndex <= 0) {
            serviceIndex = serviceCards.length - 1;
            updateServiceSlide(serviceIndex, true);
        }
        serviceIndex--;
        updateServiceSlide(serviceIndex);
    }

    // Gère les clics sur les points
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            serviceIndex = index;
            updateServiceSlide(serviceIndex);
            resetAutoSlide();
        });
    });

    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 5000);
    }

    autoSlide = setInterval(nextSlide, 5000);

    // Initialisation pour bien commencer à la 3e carte
    updateServiceSlide(serviceIndex, true);
});
// document.addEventListener("DOMContentLoaded", function () {
//     const servicesContainer = document.querySelector(".services");
//     const serviceCards = Array.from(document.querySelectorAll(".service-card"));
//     const dots = document.querySelectorAll(".dot");
    
//     let serviceWidth = serviceCards[0].offsetWidth + 20; // Largeur d'une carte + espace
//     let serviceIndex = 0;
//     let autoSlide;
    
//     // Duplique les premières cartes pour créer un effet de boucle infinie
//     serviceCards.forEach((card) => {
//         let clone = card.cloneNode(true);
//         servicesContainer.appendChild(clone);
//     });

//     function updateServiceSlide(index, instant = false) {
//         servicesContainer.style.transition = instant ? "none" : "transform 0.6s ease-in-out";
//         servicesContainer.style.transform = `translateX(${-index * serviceWidth}px)`;

//         // Mise à jour des points d'indicateur
//         dots.forEach((dot, i) => {
//             dot.classList.toggle("active", i === (index % serviceCards.length));
//         });

//         serviceIndex = index;
//     }

//     function nextSlide() {
//         serviceIndex++;
//         updateServiceSlide(serviceIndex);

//         // Si on atteint la fin, on remet à zéro de façon fluide
//         if (serviceIndex >= serviceCards.length / 2) {
//             setTimeout(() => {
//                 serviceContainer.style.transition = "none";
//                 serviceIndex = 0;
//                 updateServiceSlide(serviceIndex, true);
//             }, 600);
//         }
//     }

//     // Gère les clics sur les points
//     dots.forEach((dot, index) => {
//         dot.addEventListener("click", () => {
//             serviceIndex = index;
//             updateServiceSlide(serviceIndex);
//             resetAutoSlide();
//         });
//     });

//     function resetAutoSlide() {
//         clearInterval(autoSlide);
//         autoSlide = setInterval(nextSlide, 5000);
//     }

//     autoSlide = setInterval(nextSlide, 5000);

//     // Initialisation pour bien commencer à la première carte
//     updateServiceSlide(serviceIndex, true);
// });

// -------> ANimation defilement logos
document.addEventListener("DOMContentLoaded", function () {
    const logosContainer = document.querySelector(".partners-logos");
    const logos = Array.from(logosContainer.children);

    // Duplique les logos pour assurer un défilement infini sans espace vide
    logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        logosContainer.appendChild(clone);
    });
});

// ---------> Animation enlever icon play quand vidéo se lance
document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector(".video video"); // Sélectionne la vidéo
    const playIconContainer = document.querySelector(".play-icon"); // Sélectionne le conteneur de l'icône Play
    const playIcon = document.getElementById("play-icon"); // Sélectionne l'image de l'icône Play

    // Fonction pour afficher/masquer l'icône Play
    function togglePlayIcon() {
        if (video.paused) {
            playIconContainer.style.opacity = "1"; // Rendre l'icône visible
        } else {
            playIconContainer.style.opacity = "0"; // Cacher l'icône
        }
    }

    // Démarrer la vidéo en cliquant sur l'icône
    playIconContainer.addEventListener("click", function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
        togglePlayIcon();
    });

    // Cacher l'icône Play lorsque la vidéo démarre
    video.addEventListener("play", togglePlayIcon);
    video.addEventListener("pause", togglePlayIcon);
});


