const pages = document.body.querySelector('.content').children;
const topBar = document.body.querySelector('.top-bar');

for (let i = 0; i < pages.length; i++) {
    const page = pages[i];

    const pagelink = document.createElement('a');
    pagelink.href = '/#' + page.id;
    pagelink.textContent = page.getAttribute('label');

    topBar.appendChild(pagelink);
}

function handleHash(delay = 0) {
    for (let i = 0; i < pages.length; i++) {
        const page = pages[i];

        if (page.id === location.hash.substring(1)) {
            setTimeout(()=>{
                page.style.opacity = '100%';
                document.title = `${page.dataset.label} - PRISM Hub`;
            }, delay) // for page switching
        } else {
            page.style.opacity = '0%';
        }
    }
}

window.addEventListener("hashchange", ()=>handleHash(1.5e3));
handleHash();