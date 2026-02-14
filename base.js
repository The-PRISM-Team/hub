if (localStorage.darkMode == null) localStorage.darkMode = 'false';

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