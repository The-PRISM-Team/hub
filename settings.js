// apply starting settings
const prefersDark = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : false; 
if (localStorage.darkMode == null) localStorage.darkMode = prefersDark;

document.body.className =
    localStorage.darkMode === 'true' ?
    'dark'
    :
    'light';

function toggleDark(dark) {
    localStorage.darkMode = dark;

    document.body.className =
        localStorage.darkMode === 'true' ?
        'dark'
        :
        'light';
}


// dark mode
const darkmodeCheckbox = document.getElementById('darkmode-checkbox');
darkmodeCheckbox.checked = localStorage.darkMode === 'true';
darkmodeCheckbox.addEventListener('change', () => {
    toggleDark(localStorage.darkMode !== 'true');
})

const reducemoveCheckbox = document.getElementById('reducemovement-checkbox');
reducemoveCheckbox.checked = localStorage.reduceMovement === 'true';
reducemoveCheckbox.addEventListener('change', () => {
    localStorage.reduceMovement = reducemoveCheckbox.checked;

    if (reducemoveCheckbox.checked) {
        pages.forEach(page => {
            page.classList.add('reduce-movement')
        })
    } else {
        pages.forEach(page => {
            page.classList.remove('reduce-movement')
        })  
    }
})
