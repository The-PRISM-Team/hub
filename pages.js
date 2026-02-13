const pages = document.body.querySelector('.content').children;
const topBar = document.body.querySelector('.top-bar');

for (let i = 0; i < pages.length; i++) {
    const page = pages[i];

    const pagelink = document.createElement('a');
    pagelink.href = '/#' + page.id;
    pagelink.textContent = page.dataset.label;

    topBar.appendChild(pagelink);
}

function handleHash() {
    for (let i = 0; i < pages.length; i++) {
        const page = pages[i];

        if (page.id === location.hash.substring(1)) {
            page.style.opacity = '1';
            document.title = `${page.dataset.label} - PRISM Hub`;
        } else {
            page.style.opacity = '0';
        }
    }
}

window.addEventListener("hashchange", handleHash);
handleHash();