const darkmodeCheckbox = document.getElementById('darkmode-checkbox');
darkmodeCheckbox.checked = localStorage.darkMode === 'true';
darkmodeCheckbox.addEventListener('change', ()=>{
    toggleDark(darkmodeCheckbox);
})