(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const lang = ngGetLang();
    ngApplyStaticTranslations(lang);
    document.dispatchEvent(new CustomEvent("ng:langchange", { detail: { lang } }));

    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const next = ngGetLang() === "fr" ? "en" : "fr";
        ngSwitchLang(next);
      });
    });

    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");
    if (hamburger && mobileMenu) {
      hamburger.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("is-open");
        hamburger.classList.toggle("is-open", isOpen);
        hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
        document.body.classList.toggle("overflow-hidden", isOpen);
      });
      mobileMenu.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("click", () => {
          mobileMenu.classList.remove("is-open");
          hamburger.classList.remove("is-open");
          hamburger.setAttribute("aria-expanded", "false");
          document.body.classList.remove("overflow-hidden");
        });
      });
    }

    const yearEls = document.querySelectorAll("[data-year]");
    yearEls.forEach((el) => (el.textContent = new Date().getFullYear()));

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );
      document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    } else {
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
    }

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      const status = document.getElementById("form-status");
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const lang = ngGetLang();
        const dict = translations[lang].contact.form;
        const name = contactForm.elements["name"].value.trim();
        const email = contactForm.elements["email"].value.trim();
        const company = contactForm.elements["company"].value.trim();
        const plan = contactForm.elements["plan"].value;
        const message = contactForm.elements["message"].value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        status.classList.remove("text-burgundy", "text-muted");

        if (!name || !email || !message) {
          status.textContent = dict.errorRequired;
          status.classList.add("text-burgundy");
          status.dataset.touched = "1";
          return;
        }
        if (!emailPattern.test(email)) {
          status.textContent = dict.errorEmail;
          status.classList.add("text-burgundy");
          status.dataset.touched = "1";
          return;
        }

        const subject = `Demande de soumission — ${name}`;
        const bodyLines = [
          `Nom: ${name}`,
          `Courriel: ${email}`,
          company ? `Entreprise: ${company}` : null,
          `Forfait: ${plan}`,
          "",
          message
        ].filter(Boolean);

        const mailto = `mailto:nexgenweb1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
        status.textContent = dict.note;
        status.classList.add("text-muted");
        status.dataset.touched = "1";
        window.location.href = mailto;
      });
    }
  });
})();
