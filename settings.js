// useful functions
function toggleDark(dark) {
    localStorage.darkMode = dark;

    if (localStorage.darkMode === 'true')
        document.body.className = 'dark';
    else
        document.body.className = 'light';
}

// dark mode
const darkmodeCheckbox = document.getElementById('darkmode-checkbox');
darkmodeCheckbox.checked = localStorage.darkMode === 'true';
darkmodeCheckbox.addEventListener('change', () => {
    toggleDark(localStorage.darkMode !== 'true');
})

// reduce movement
const reducemoveCheckbox = document.getElementById('reducemovement-checkbox');
reducemoveCheckbox.checked = localStorage.reduceMovement === 'true';
reducemoveCheckbox.addEventListener('change', () => {
    localStorage.reduceMovement = reducemoveCheckbox.checked;

    if (reducemoveCheckbox.checked) {
        pages.forEach(page => {
            page.classList.add('reduce-movement');
        })
    } else {
        pages.forEach(page => {
            page.classList.remove('reduce-movement');
        })  
    }
})

// apply starting settings
const prefersDark = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)')?.matches : false; 
toggleDark(
    localStorage.darkMode != null
    ? localStorage.darkMode === 'true'
    : prefersDark
);