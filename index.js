// Template ID: template_jnx67vb
// Service ID: service_2tm20oe
// Public Key: YwZEAea3ra1j07LUY

let isDarkTheme = false;
let isModalOpen = false;
const scaleFactor = 1/20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`; // These are backticks, not single quotes
    }
}

function toggleContrast() {
    isDarkTheme = !isDarkTheme;
    if (isDarkTheme) {
        document.body.classList += " dark-theme";
    }
    else {
        document.body.classList.remove("dark-theme");
    }
}

function contact(event) {
    event.preventDefault(); // Prevents refreshing the page
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs.sendForm('service_2tm20oe', 'template_jnx67vb', event.target, 'YwZEAea3ra1j07LUY')
    .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    })
    .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert("The email service is temporarily unavailable! Please contact me directly at mattmucciacciaro118@gmail.com");
    });
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal__open")
    }

    isModalOpen = true;
    document.body.classList += " modal__open";
}