const pages = document.body.querySelectorAll('.content.span');
const topBar = document.body.querySelector('.top-bar');

for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    
    // add breathing room to page
    const breaks = 2;
    for (let i = 0; i < breaks; i++) {
        page.appendChild(document.createElement('br'));
    }

    // add link to page
    const pageLink = document.createElement('a');
    pageLink.href = '/#' + page.id;
    pageLink.textContent = page.getAttribute('label');

    topBar.appendChild(pageLink);

    // add page JS
    if (page.getAttribute('script')) {
        const pageScript = document.createElement('script');
        pageScript.src = page.getAttribute('script');

        document.body.appendChild(pageScript);
    }
}

function handleHash(delay = 0) {
    const targetPage =
        document.getElementById(location.hash.substring(1)) ?
            location.hash.substring(1)
        :
            'pages'; // redirect to "home"page if page doesn't exist

    for (let i = 0; i < pages.length; i++) {
        const page = pages[i];

        if (page.id === targetPage) {
            setTimeout(()=>{
                page.classList.add('active');
                document.title = `${page.getAttribute('label')} - PRISM Hub`;
                location.hash = '#' + page.id; // enforce hash in url
            }, delay) // for page switching
        } else {
            page.classList.remove('active');
        }
    }
}

window.addEventListener("hashchange", () => handleHash(250));
handleHash();
