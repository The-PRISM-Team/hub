if (localStorage.darkMode == null) localStorage.darkMode = 'false';

document.body.className =
    localStorage.darkMode === 'true' ?
    'dark'
    :
    'light';

function toggleDark() {
    localStorage.darkMode = localStorage.darkMode !== 'true';

    document.body.className =
        localStorage.darkMode === 'true' ?
        'dark'
        :
        'light';
}