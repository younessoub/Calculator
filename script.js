const html = document.querySelector('html');
const themeSwitch = document.querySelectorAll('.buttons input')
const screen = document.querySelector('.screen input')


const savedTheme = localStorage.getItem('theme');
const isPreferedThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    changeTheme(savedTheme)
} else {
    if (isPreferedThemeDark) {
        changeTheme('dark')
    } else {
        changeTheme('main')
    }
}

themeSwitch.forEach((radio) => {
    if (html.getAttribute('data-theme') == radio.id) {
        radio.checked = true
    }
    radio.addEventListener('change', () => {
        if (radio.checked) {
            changeTheme(radio.id)
        }
    })
})

function changeTheme(theme) {
    html.setAttribute('data-theme', theme)
    saveToLocalStorage(theme)
}

function saveToLocalStorage(theme) {
    localStorage.setItem('theme', theme)
}
