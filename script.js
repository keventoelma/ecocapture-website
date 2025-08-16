// Smooth fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Navbar shadow and logo fade on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const brandBanner = document.querySelector('.brand-banner-horizontal');
  // Navbar shadow
  if (header) {
    if(window.scrollY > 30) {
      header.style.boxShadow = "0 4px 16px rgba(46,125,50,0.08)";
    } else {
      header.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
    }
  }
  // Logo/name bar fade
  if (brandBanner) {
    if (window.scrollY > 60) {
      brandBanner.classList.add('hide');
      console.log('brand-banner-horizontal: hide');
    } else {
      brandBanner.classList.remove('hide');
      console.log('brand-banner-horizontal: show');
    }
  }
});

// Hamburger menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if(navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Partner logos clickable
const partnerLinks = {
  "partner-unipod.png": "https://unipod.rw/",
  "partner-tef.png": "https://www.tonyelumelufoundation.org/"
};
document.querySelectorAll(".partner-logos img").forEach(logo => {
  logo.addEventListener("click", () => {
    const fileName = logo.src.split("/").pop();
    if (partnerLinks[fileName]) {
      window.open(partnerLinks[fileName], "_blank");
    }
  });
});

// Animated counters for impact stats
document.querySelectorAll('.counter').forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = Math.ceil(target / 60);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 30);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// Contact form instant confirmation (for old form, safe to keep)
const quickContact = document.getElementById('quick-contact-form');
if (quickContact) {
  quickContact.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('contact-confirm').style.display = 'block';
    this.reset();
  });
}
