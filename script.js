// --------> Animation pour amener au bon endroit de la page selon click sur menu
document.addEventListener("DOMContentLoaded", function() {
    const sectionMapping = {
        "About us": "intro",
        "Services": "services",
        "Case studies": "case-studies",
        "How it works": "how-it-works",
        "Hire": "contact",
        "Blog": "blog"
    };
    
    // Sélectionne tous les liens du menu
    const menuLinks = document.querySelectorAll("nav ul li a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Empêche le saut instantané
            const sectionId = sectionMapping[this.textContent.trim()]; // Trouve l'ID correspondant
            
            if (sectionId) {
                const targetSection = document.getElementById(sectionId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
                    // window.scrollTo({
                    //     top: targetSection.offsetTop - 50, // Ajuste le scroll pour tenir compte du menu fixe
                    //     behavior: "smooth"
                    // });
                }
            }
        });
    });
});

// ------------> Animation des cartes de services qui defilent
document.addEventListener("DOMContentLoaded", function() {
    /* === Animation des services === */
    const servicesContainer = document.querySelector(".services");
    const dots = document.querySelectorAll(".dot");
    let serviceIndex = 2;
    const totalServices = dots.length;
    const serviceWidth = 280 + 20; // Largeur d'une carte + espace

    function updateServiceSlide(index) {
        servicesContainer.style.transition = "transform 0.6s ease-in-out";
        servicesContainer.style.transform = `translateX(${-index * serviceWidth}px)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });

        serviceIndex = index;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            updateServiceSlide(index);
        });
    });

    setInterval(() => {
        let nextIndex = (serviceIndex + 1) % totalServices;
        updateServiceSlide(nextIndex);
    }, 5000);

    /* === Animation des logos partenaires === */
    const partnersContainer = document.querySelector(".partners-logos");
    const partnerLogos = document.querySelectorAll(".partners-logos img");
    let partnerIndex = 0;
    const logoWidth = partnerLogos[0].clientWidth + 30; // Largeur d'un logo + espace

    function updatePartnerSlide(index) {
        partnersContainer.style.transition = "transform 0.6s ease-in-out";
        partnersContainer.style.transform = `translateX(${-index * logoWidth}px)`;
        partnerIndex = index;
    }

    document.querySelector(".partners-arrow.left").addEventListener("click", () => {
        partnerIndex = (partnerIndex - 1 + partnerLogos.length) % partnerLogos.length;
        updatePartnerSlide(partnerIndex);
    });

    document.querySelector(".partners-arrow.right").addEventListener("click", () => {
        partnerIndex = (partnerIndex + 1) % partnerLogos.length;
        updatePartnerSlide(partnerIndex);
    });

    setInterval(() => {
        let nextIndex = (partnerIndex + 1) % partnerLogos.length;
        updatePartnerSlide(nextIndex);
    }, 4000);
});
