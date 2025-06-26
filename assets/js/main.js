/*=============== EMAIL JS ===============*/


const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.init({
        publicKey: 'EvH8mrB3Gp8EqAjNl',
    });

    emailjs.sendForm('service_4dz0inl', 'template_hyfk73u', '#contact-form').then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        contactMessage.textContent = 'Message sent successfully ✅';
    },
        (error) => {
            console.log('FAILED...', error);
            contactMessage.textContent = 'Message not sent (server error) ❌';
        }
    );

    setTimeout(() => {
        contactMessage.textContent = '';
    }, 5000);

    contactForm.reset();

}

contactForm.addEventListener('submit', sendEmail);

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reveal(`.perfil, .contact__form`);
sr.reveal(`.info`, { origin: 'left', delay: 400 });
sr.reveal(`.skills`, { origin: 'left', delay: 700 });
sr.reveal(`.about`, { origin: 'right', delay: 1000 });
sr.reveal(`.projects__card, .services__card, .experience__card`, { interval: 100 });