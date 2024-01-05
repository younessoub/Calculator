const html = document.querySelector('html');
const themeSwitch = document.querySelectorAll('.buttons input')
const screen = document.querySelector('.screen')


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

themeSwitch.forEach((input) => {
    if (html.getAttribute('data-theme') == input.id) {
        input.checked = true
    }
    input.addEventListener('change', () => {
        if (input.checked) {
            changeTheme(input.id)
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

function appendToScreen(char) {
    if (screen.innerText == 'Syntax Error') {
        screen.innerText = ''
    }
    screen.innerText += char
}

function removeLastChar() {
    const screenArr = screen.innerText.split('');
    screenArr.pop();
    screen.innerText = screenArr.join('')
}

function clearScreen() {
    screen.innerText = '';
}

function calculate() {

    const expression = screen.innerText.replace(',', '.')

    try {
        const result = Function('"use strict";return (' + expression + ')')();
        screen.innerText = result.toString().replace('.', ',');
    } catch (error) {
        screen.innerText = 'Syntax Error';
        // console.log(error)
    }
}