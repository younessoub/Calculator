const html = document.querySelector('html');
const themeSwitch = document.querySelectorAll('.buttons input')

themeSwitch.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        if (radio.checked) {
            if (index == 0) {
                html.setAttribute('data-theme', 'main')
            }
            else if (index == 1) {
                html.setAttribute('data-theme', 'light')
            }
            else {
                html.setAttribute('data-theme', 'dark')
            }
        }

    })
})