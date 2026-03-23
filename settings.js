// setting functions
function toggleDark(dark) {
    localStorage.darkMode = dark;

    if (localStorage.darkMode === 'true')
        document.body.className = 'dark';
    else
        document.body.className = 'light';
}
function reduceMovement(reduce) {
    localStorage.reduceMovement = reduce;

    if (reduce) {
        pages.forEach(page => {
            page.classList.add('reduce-movement');
        })
    } else {
        pages.forEach(page => {
            page.classList.remove('reduce-movement');
        })
    }
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
reducemoveCheckbox.addEventListener('change', () => reduceMovement(reducemoveCheckbox.checked));

// apply starting settings
const prefersDark = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)')?.matches : false; 
toggleDark(
    localStorage.darkMode != null
    ? localStorage.darkMode === 'true'
    : prefersDark
);
reduceMovement(reducemoveCheckbox.checked);
