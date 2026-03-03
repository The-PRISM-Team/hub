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
