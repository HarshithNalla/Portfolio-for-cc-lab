// Email validation
document.addEventListener('DOMContentLoaded', () => {
    const emailElement = document.getElementById('email');
    const emailText = emailElement?.innerText || '';

    if (emailText && !emailText.includes('@')) {
        emailElement.style.color = 'red';
        emailElement.innerText = 'Invalid Email';
    }
});

// Scroll reveal animation
const sections = document.querySelectorAll('.section');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Initial call
revealOnScroll();
