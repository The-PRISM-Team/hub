if (localStorage.darkMode == null) localStorage.darkMode = 'false';

function toggleDark() {
    document.body.className =
        localStorage.darkMode === 'true' ?
        'dark'
        :
        'light';
}

toggleDark()