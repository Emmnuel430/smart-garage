"use client";
import { useEffect } from "react";

const useNavbarInteractions = () => {
  useEffect(() => {
    // Vérifier si `window` est défini pour s'assurer que le code s'exécute côté client
    if (typeof window === "undefined") return;

    /*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");
    const hamburger = document.getElementById("hamburger");

    const toggleMenu = () => {
      navMenu?.classList.toggle("left-[0]");
      hamburger?.classList.toggle("ri-close-large-line");
    };

    hamburger?.addEventListener("click", toggleMenu);
    navLinks.forEach((link) => link.addEventListener("click", toggleMenu));

    /*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
    const scrollHeader = () => {
      const header = document.getElementById("navbar");
      if (!header) return;

      if (window.scrollY >= 50) {
        header.classList.add("border-b", "border-yellow-500");
      } else {
        header.classList.remove("border-b", "border-yellow-500");
      }
    };
    window.addEventListener("scroll", scrollHeader);

    /*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
    const scrollUp = () => {
      const scrollUpBtn = document.getElementById("scroll-up");
      if (!scrollUpBtn) return;

      if (window.scrollY >= 250) {
        scrollUpBtn.classList.remove("invisible", "opacity-0", "translate-y-4");
        scrollUpBtn.classList.add("visible", "opacity-100", "translate-y-0");
      } else {
        scrollUpBtn.classList.add("invisible", "opacity-0", "translate-y-4");
        scrollUpBtn.classList.remove("visible", "opacity-100", "translate-y-0");
      }
    };

    // Ajouter l'event listener pour l'affichage dynamique
    window.addEventListener("scroll", scrollUp);

    window.addEventListener("scroll", scrollUp);

    /*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
    const activeLink = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".nav-link");

      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((item) => {
        item.classList.remove("active");
        if (item.href.includes(current)) {
          item.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", activeLink);

    /*~~~~~~~~~~~~~~~ CLEANUP ~~~~~~~~~~~~~~~*/
    return () => {
      hamburger?.removeEventListener("click", toggleMenu);
      navLinks.forEach((link) => link.removeEventListener("click", toggleMenu));
      window.removeEventListener("scroll", scrollHeader);
      window.removeEventListener("scroll", scrollUp);
      window.removeEventListener("scroll", activeLink);
    };
  }, []);

  return null;
};

export default useNavbarInteractions;
