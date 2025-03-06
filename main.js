"use strict";
class Typewriter {
  constructor(options) {
    this.element = options.element;
    this.words = options.words;
    this.typingSpeed = options.typingSpeed || 100;
    this.erasingSpeed = options.erasingSpeed || 50;
    this.newTextDelay = options.newTextDelay || 2000;
    this.startDelay = options.startDelay || 500;
    this.wordIndex = 0;
    this.isDeleting = false;
    this.txt = "";
    this.htmlMode = options.htmlMode || false;
    this.textClass = options.textClass || "text-indigo-900";

    this.init();
  }

  init() {
    setTimeout(() => {
      this.type();
    }, this.startDelay);
  }

  type() {
    // Current word index
    const current = this.wordIndex % this.words.length;
    // Full text of current word
    const fullText = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove character
      this.txt = fullText.substring(0, this.txt.length - 1);
    } else {
      // Add character
      this.txt = fullText.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    if (this.htmlMode) {
      // Use raw HTML if htmlMode is true
      this.element.innerHTML = this.txt;
    } else {
      // Otherwise wrap in a span with text color class
      this.element.innerHTML = `<span class="${this.textClass}">${this.txt}</span>`;
    }

    // Initial typing speed
    let typeSpeed = this.typingSpeed;

    if (this.isDeleting) {
      typeSpeed = this.erasingSpeed;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullText) {
      // Pause at end
      typeSpeed = this.newTextDelay;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => {
      this.type();
    }, typeSpeed);
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize typewriter effect
  const typewriterElement = document.getElementById("typewriter");

  if (typewriterElement) {
    new Typewriter({
      element: typewriterElement,
      words: ["Software Developer", "Data Scientist", "Full Stack Developer"],
      typingSpeed: 100,
      erasingSpeed: 50,
      newTextDelay: 2000,
      startDelay: 500,
    });
  }

  const greetingElement = document.getElementById("greeting-typewriter");
  if (greetingElement) {
    new Typewriter({
      element: greetingElement,
      words: [
        "Hello!",
        "Hola!",
        "안녕하세요!",
        "Bonjour!",
        "こんにちは!",
        "你好!",
      ],
      typingSpeed: 150,
      erasingSpeed: 100,
      newTextDelay: 3000,
      startDelay: 0,
      textClass: "text-black",
    });
  }

  // Add hover effect to project cards
  const projectCards = document.querySelectorAll(".bg-white");
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add(
        "shadow-lg",
        "transform",
        "translate-y-[-5px]",
        "transition-all",
        "duration-300"
      );
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("shadow-lg", "transform", "translate-y-[-5px]");
    });
  });
});
