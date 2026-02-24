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