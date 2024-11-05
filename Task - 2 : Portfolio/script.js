// Smooth Scroll to Sections
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animations - Fade-in effect
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Modal Pop-up for Project Details
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', function() {
        const modal = document.querySelector('.modal');
        const modalImage = modal.querySelector('img');
        const modalTitle = modal.querySelector('.modal-title');
        const modalDescription = modal.querySelector('.modal-description');

        // Get data from the clicked project
        const projectImage = this.querySelector('img').src;
        const projectTitle = this.querySelector('h3').textContent;
        const projectDescription = this.querySelector('p').textContent;

        // Set modal content
        modalImage.src = projectImage;
        modalTitle.textContent = projectTitle;
        modalDescription.textContent = projectDescription;

        // Show the modal
        modal.classList.add('show-modal');
    });
});

// Close Modal when clicking outside of it
document.addEventListener('click', function(event) {
    const modal = document.querySelector('.modal');
    if (event.target.classList.contains('show-modal')) {
        modal.classList.remove('show-modal');
    }
});
