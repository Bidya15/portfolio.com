// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Highlight the current section in the navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('section');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}



// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
  
  // Initialize skill bars
  document.querySelectorAll('.progress').forEach(bar => {
    const width = bar.getAttribute('data-width');
    bar.style.setProperty('--width', width);
  });


  /* filepath: /c:/Users/Acer/OneDrive/Desktop/Bidya/portfolio/script.js */

// Add 3D rotation effect on mouse move
document.querySelector('.image-container').addEventListener('mousemove', (e) => {
  const { left, top, width, height } = e.target.getBoundingClientRect();
  const x = (e.clientX - left) / width - 0.5;
  const y = (e.clientY - top) / height - 0.5;
  
  e.target.style.transform = `
      perspective(1000px)
      rotateY(${x * 20}deg)
      rotateX(${-y * 20}deg)
      scale3d(1.1, 1.1, 1.1)
  `;
});

document.querySelector('.image-container').addEventListener('mouseleave', (e) => {
  e.target.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
});