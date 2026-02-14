const pages = document.body.querySelector('.content').children;
const topBar = document.body.querySelector('.top-bar');

for (let i = 0; i < pages.length; i++) {
    const page = pages[i];

    // add link to page
    const pageLink = document.createElement('a');
    pageLink.href = '/#' + page.id;
    pageLink.textContent = page.getAttribute('label');

    topBar.appendChild(pageLink);

    // add page JS
    const pageScript = document.createElement('script');
    pageScript.src = `/${page.id}.js`;

    try {
        document.body.appendChild(pageScript);
    } catch {} // ignore error msgs
}

function handleHash(delay = 0) {
    const targetPage = // redirect to homepage if page doesn't exist
        document.getElementById(location.hash.substring(1)) ?
        location.hash.substring(1)
        :
        '';

    for (let i = 0; i < pages.length; i++) {
        const page = pages[i];

        if (page.id === targetPage) {
            setTimeout(()=>{
                page.style.opacity = '100%';
                document.title = `${page.getAttribute('label')} - PRISM Hub`;
            }, delay) // for page switching
        } else {
            page.style.opacity = '0%';
        }
    }
}

window.addEventListener("hashchange", () => handleHash(250));
handleHash();