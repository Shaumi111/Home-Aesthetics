const tooggles = document.
querySelectorAll('.faq__toggle')
tooggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList
        .toggle('active')
    })
})