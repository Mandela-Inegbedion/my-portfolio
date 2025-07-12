// Portfolio Website JavaScript

// Data
const skills = [
  { name: "React", icon: "fab fa-react", color: "cyan" },
  { name: "Next.js", icon: "fas fa-layer-group", color: "gray" },
  { name: "JavaScript", icon: "fab fa-js-square", color: "blue" },
  { name: "HTML5", icon: "fab fa-html5", color: "orange" },
  { name: "CSS3", icon: "fab fa-css3-alt", color: "blue" },
  { name: "Node.js", icon: "fab fa-node-js", color: "green" },
  { name: "Express.js", icon: "fas fa-server", color: "cyan" },
  { name: "PostgreSQL", icon: "fas fa-database", color: "purple" },
  { name: "Git", icon: "fab fa-git-alt", color: "gray" },
];

const projects = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "Modern, responsive furniture e-commerce landing page built with React clean UI, reusable components, and inspired by a Figma design.",
    image: "images/e-commerce.png",
    technologies: ["React", "Vanilla CSS"],
    features: [
      "Hero Section – Catchy banner for latest collections",
      "Browse The Range – Highlights product categories like Dining, Living, and Bedroom",
      "Dynamic Product Cards – Reusable product component to display item info",
      "Inspiration Section – Beautiful room prototypes to inspire users",
      "FuniroFurniture – User-generated showcase grid",
      "Component-Based Architecture – Reusable NavBar, Footer, ProductCard",
    ],
    challenges:
      "Making it responsive on all mobile devices, but later find a solution to it through deep research.",
    github: "https://github.com/Mandela-Inegbedion/ecommerce-React",
    demo: "https://ecommerce-react-fawn-eta.vercel.app/",
    category: "Frontend",
  },
  {
    id: "2",
    title: "Pharmaceutical Wholesale DSS + IMS System",
    description:
      "A full-stack secure and scalable Pharmaceutical Decision Support System (DSS) with integrated Inventory Management System (IMS). Tracks inventory, manages suppliers and sales, provides dashboards, DSS reports, and automated reorder insights.",
    image: "images/dss-ims.png",
    technologies: ["Next.js", "PostgreSQL", "Context API"],
    features: [
      "Product & inventory tracking",
      "Supplier & sales management",
      "Automated reorder suggestions",
      "Data-driven analytics & reports",
    ],
    challenges:
      "Implementing secure role-based access control for admins, suppliers, and staff",
    github: "https://github.com/Mandela-Inegbedion/pharma-inventory-system",
    demo: "https://pharma-inventory-system.vercel.app/",
    category: "Full Stack",
  },
  {
    id: "3",
    title: "Calendar",
    description:
      "A responsive JavaScript calendar built from scratch using HTML, CSS, and vanilla JS. It dynamically generates each month's layout, displays trailing and leading dates from adjacent months, highlights the current day, and marks holidays directly within the calendar. Designed to be lightweight, accessible, and mobile-friendly.",

    image: "images/calendar.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Dynamic monthly calendar generation",
      "Displays trailing and leading dates from adjacent months",
      "Highlights the current day with a unique hover effect",
      "Integrates holiday display directly inside the calendar cells",
      "Fully responsive layout for all screen sizes",
      "Built with pure HTML, CSS, and JavaScript (no frameworks)",
      "Clean and modular code structure for easy customization",
    ],
    challenges: "Handling different month lengths and leap years accurately",
    github: "https://github.com/Mandela-Inegbedion/calendar-js",
    demo: "https://mandela-inegbedion.github.io/calendar-js/",
    category: "Frontend",
  },
];

const experiences = [
  {
    title: "Computer Science Degree",
    company: "Auchi Polytechnic",
    period: "2022 - 2024",
    description:
      "Higher National Diploma in Computer Science with a focus on software development and web technologies.    Graduated with a GPA of 3.14.",
    technologies: ["Web Development", "Data Structures", "Algorithms"],
  },
];

const certifications = [
  {
    name: "Code Campus International",
    description: "Software Development",
    icon: "fas fa-certificate",
    color: "blue",
  },
  {
    name: "Cisco Networking Academy",
    description: "Advanced Web Development Certificate",
    icon: "fas fa-certificate",
    color: "green",
  },
  {
    name: "Cisco Networking Academy",
    description: "JavaScript Essentials2 Certificate",
    icon: "fas fa-certificate",
    color: "green",
  },
];

const contactInfo = [
  {
    icon: "fas fa-envelope",
    title: "Email",
    value: "inegbedionmandela@email.com",
    color: "blue",
  },
  {
    icon: "fab fa-linkedin",
    title: "LinkedIn",
    value: "linkedin.com/in/Mandela Inegbedion",
    color: "blue",
  },
  {
    icon: "fab fa-github",
    title: "GitHub",
    value: "github.com/Mandela-Inegbedion",
    color: "gray",
  },
];

// Typing animation
const typingPhrases = [
  "I build responsive full-stack web apps",
  "I create amazing user experiences",
  "I solve complex problems with code",
  "I'm passionate about clean code",
];

let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;

function typeText() {
  const phrase = typingPhrases[currentPhrase];
  const typingElement = document.getElementById("typingText");

  if (isDeleting) {
    typingElement.textContent = phrase.substring(0, currentChar - 1);
    currentChar--;
  } else {
    typingElement.textContent = phrase.substring(0, currentChar + 1);
    currentChar++;
  }

  if (!isDeleting && currentChar === phrase.length) {
    setTimeout(() => (isDeleting = true), 1500);
  } else if (isDeleting && currentChar === 0) {
    isDeleting = false;
    currentPhrase = (currentPhrase + 1) % typingPhrases.length;
  }

  const speed = isDeleting ? 50 : 100;
  setTimeout(typeText, speed);
}

// Theme toggle
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const themeIcon = document.getElementById("themeIcon");
  themeIcon.className = theme === "light" ? "fas fa-moon" : "fas fa-sun";
}

// Smooth scrolling
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}

// Mobile menu toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("show");
}

// Scroll progress
function updateScrollProgress() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / scrollHeight) * 100;

  document.getElementById("scrollProgress").style.width =
    Math.min(progress, 100) + "%";
}

// Navbar scroll effect
function updateNavbar() {
  const navbar = document.getElementById("navbar");
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// Back to top button
function updateBackToTop() {
  const backToTop = document.getElementById("backToTop");
  const scrollY = window.scrollY;

  if (scrollY > 500) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
}

// Intersection Observer for animations
function createIntersectionObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  // Observe all animated elements
  document
    .querySelectorAll('[class*="fade"], [class*="slide"]')
    .forEach((el) => {
      observer.observe(el);
    });
}

// Populate skills
function populateSkills() {
  const skillsGrid = document.getElementById("skillsGrid");
  skillsGrid.innerHTML = skills
    .map(
      (skill) => `
        <span class="skill-badge skill-${skill.color}">
            <i class="${skill.icon}"></i>
            ${skill.name}
        </span>
    `
    )
    .join("");
}

// Populate projects
function populateProjects() {
  const projectsGrid = document.getElementById("projectsGrid");
  projectsGrid.innerHTML = projects
    .map(
      (project) => `
        <div class="project-card" onclick="openProjectModal('${project.id}')">
            <img src="${project.image}" alt="${
        project.title
      }" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies
                      .slice(0, 3)
                      .map(
                        (tech) => `
                        <span class="tech-badge">${tech}</span>
                    `
                      )
                      .join("")}
                    ${
                      project.technologies.length > 3
                        ? `<span class="tech-badge">+${
                            project.technologies.length - 3
                          } more</span>`
                        : ""
                    }
                </div>
                <div class="project-links">
                    <a href="${
                      project.demo
                    }" class="project-link" onclick="event.stopPropagation()">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="${
                      project.github
                    }" class="project-link" onclick="event.stopPropagation()">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// Populate timeline
function populateTimeline() {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = experiences
    .map(
      (exp) => `
        <div class="timeline-item">
            <div class="timeline-content">
                <div class="timeline-header">
                    <h3 class="timeline-title">${exp.title}</h3>
                    <span class="timeline-period">${exp.period}</span>
                </div>
                <p class="timeline-company">${exp.company}</p>
                <p class="timeline-description">${exp.description}</p>
                <div class="timeline-tech">
                    ${exp.technologies
                      .map(
                        (tech) => `
                        <span class="tech-badge">${tech}</span>
                    `
                      )
                      .join("")}
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// Populate certifications
function populateCertifications() {
  const certificationsGrid = document.getElementById("certificationsGrid");
  certificationsGrid.innerHTML = certifications
    .map(
      (cert) => `
        <div class="certification-card">
            <i class="${cert.icon} certification-icon" style="color: ${
        cert.color === "blue" ? "#3b82f6" : "#10b981"
      }"></i>
            <h4 class="certification-name">${cert.name}</h4>
            <p class="certification-description">${cert.description}</p>
        </div>
    `
    )
    .join("");
}

// Populate contact details
function populateContactDetails() {
  const contactDetails = document.getElementById("contactDetails");
  contactDetails.innerHTML = contactInfo
    .map(
      (info) => `
        <div class="contact-detail">
            <div class="contact-icon">
                <i class="${info.icon}"></i>
            </div>
            <div class="contact-detail-content">
                <h4>${info.title}</h4>
                <p>${info.value}</p>
            </div>
        </div>
    `
    )
    .join("");
}

// Project modal
function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("projectModal");
  const modalBody = document.getElementById("modalBody");

  modalBody.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="modal-image">
        <h2 class="modal-title">${project.title}</h2>
        <p class="modal-description">${project.description}</p>
        
        <div class="modal-section">
            <h4>Key Features</h4>
            <ul class="modal-features">
                ${project.features
                  .map((feature) => `<li>${feature}</li>`)
                  .join("")}
            </ul>
        </div>
        
        <div class="modal-section">
            <h4>Technologies Used</h4>
            <div class="modal-tech">
                ${project.technologies
                  .map((tech) => `<span class="tech-badge">${tech}</span>`)
                  .join("")}
            </div>
        </div>
        
        <div class="modal-section">
            <h4>Challenges & Solutions</h4>
            <p class="modal-description">${project.challenges}</p>
        </div>
        
        <div class="modal-links">
            <a href="${project.demo}" class="btn btn-primary">
                <i class="fas fa-external-link-alt"></i>
                Live Demo
            </a>
            <a href="${project.github}" class="btn btn-outline">
                <i class="fab fa-github"></i>
                View Code
            </a>
        </div>
    `;

  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
}

// Form validation and submission
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let isValid = true;

  // Clear previous errors
  document
    .querySelectorAll(".error-message")
    .forEach((el) => el.classList.remove("show"));
  document
    .querySelectorAll(".form-group")
    .forEach((el) => el.classList.remove("error"));

  // Validate name
  if (name.length < 2) {
    showError("name", "Name must be at least 2 characters");
    isValid = false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError("email", "Please enter a valid email address");
    isValid = false;
  }

  // Validate message
  if (message.length < 10) {
    showError("message", "Message must be at least 10 characters");
    isValid = false;
  }

  return isValid;
}

function showError(fieldName, message) {
  const field = document.getElementById(fieldName);
  const errorElement = document.getElementById(fieldName + "Error");

  field.parentElement.classList.add("error");
  errorElement.textContent = message;
  errorElement.classList.add("show");
}

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toastMessage");
  const toastIcon = toast.querySelector(".toast-icon");

  toastMessage.textContent = message;

  if (type === "success") {
    toastIcon.className = "fas fa-check-circle toast-icon";
    toastIcon.style.color = "#10b981";
  } else {
    toastIcon.className = "fas fa-exclamation-circle toast-icon";
    toastIcon.style.color = "#ef4444";
  }

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function submitForm(event) {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  const submitBtn = event.target.querySelector('button[type="submit"]');
  const submitText = document.getElementById("submitText");

  // Show loading state
  submitBtn.disabled = true;
  submitText.textContent = "Sending...";

  // Simulate form submission
  setTimeout(() => {
    // Reset form
    document.getElementById("contactForm").reset();

    // Reset button
    submitBtn.disabled = false;
    submitText.textContent = "Send Message";

    // Show success message
    showToast("Thank you for your message. I'll get back to you soon!");
  }, 1000);
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Initialize theme
  initTheme();

  // Start typing animation
  typeText();

  // Populate content
  populateSkills();
  populateProjects();
  populateTimeline();
  populateCertifications();
  populateContactDetails();

  // Create intersection observer
  createIntersectionObserver();

  // Theme toggle
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);

  // Mobile menu toggle
  document
    .getElementById("mobileMenuToggle")
    .addEventListener("click", toggleMobileMenu);

  // Navigation links
  document.querySelectorAll(".nav-link, .mobile-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      scrollToSection(targetId);

      // Close mobile menu
      document.getElementById("mobileMenu").classList.remove("show");
    });
  });

  // Back to top button
  document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Modal close
  document
    .getElementById("modalClose")
    .addEventListener("click", closeProjectModal);

  // Close modal when clicking outside
  document
    .getElementById("projectModal")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        closeProjectModal();
      }
    });

  // Form submission
  document.getElementById("contactForm").addEventListener("submit", submitForm);

  // Scroll events
  window.addEventListener("scroll", function () {
    updateScrollProgress();
    updateNavbar();
    updateBackToTop();
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    const navbar = document.getElementById("navbar");
    const mobileMenu = document.getElementById("mobileMenu");
    const toggleBtn = document.getElementById("mobileMenuToggle");

    if (!navbar.contains(e.target) && !toggleBtn.contains(e.target)) {
      mobileMenu.classList.remove("show");
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeProjectModal();
      document.getElementById("mobileMenu").classList.remove("show");
    }
  });
});

// Add smooth scroll behavior to all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Apply throttling to scroll events
window.addEventListener(
  "scroll",
  throttle(function () {
    updateScrollProgress();
    updateNavbar();
    updateBackToTop();
  }, 16)
); // ~60fps
