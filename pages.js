const pages = document.body.querySelectorAll('.content span');
const pagesDiv = document.getElementById('pages-div');
const topBar = document.body.querySelector('.top-bar');

async function renderPageList() {
    const r = await fetch('https://prism-hub.vercel.app/pages.json');
    const pageJson = await r.json();
    const pageList = Object.entries(pageJson.pagelist).map(([page, metadata]) => {
        return {
            url: pageJson.urlpattern.replace('{page}', page),
            ...metadata
        }
    });
    for (const page of pageList) {
        const link = document.createElement('a');
        link.href = page.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.innerHTML = `<p>${page.title}</p>`;
        pagesDiv.appendChild(link);
    }
    pagesDiv.style.display = 'revert';
    document.getElementById('loading-pages').remove();
}
renderPageList();

// render pages
for (const page of pages) {
    
    // add breathing room to page
    const breaks = 2;
    for (let i = 0; i < breaks; i++) {
        page.appendChild(document.createElement('br'));
    }

    // add link to page
    const pageLink = document.createElement('a');
    pageLink.href = '/#' + page.id;
    pageLink.textContent = page.getAttribute('label');
    pageLink.addEventListener('click', ()=>{
        if (window.getSelection != null) {
            window.getSelection().removeAllRanges();
        }
    });

    // add hash-id copy functionality
    const hashIdElements = page.querySelectorAll('[hash-id]');
    for (const el of hashIdElements) {
        el.addEventListener('click', async ()=>{
            const href = 
                location.origin
                +
                `/#${page.id}:${el.getAttribute('hash-id')}`;
            await navigator.clipboard.writeText(href);
            location.href = href;
        });
    }

    topBar.appendChild(pageLink);

    // add page JS
    if (page.getAttribute('script')) {
        const pageScript = document.createElement('script');
        pageScript.src = page.getAttribute('script');

        document.body.appendChild(pageScript);
    }
}

function handleHash(delay = 0) {
    // get page selectors
    const hashRegex = /#([a-z0-9\-]+)(?::(.+))?/i.exec(location.hash);

    // set fallbacks
    const defaultPage = 'pages';
    const defaultElement = null;

    // set selected page
    let selectedPage = hashRegex?.[1] ?? defaultPage;
    let selectedElement = hashRegex?.[2] ?? defaultElement;

    // fallback if page selectors don't actually exist
    if (selectedPage !== defaultPage) {
        if (document.querySelector(`.content [id=${selectedPage}]`) == null) {
            selectedPage = defaultPage;
            selectedElement = defaultElement;
        }
    }
    if (selectedElement !== defaultElement) {
        if (document.querySelector(`.content [id=${selectedPage}] [hash-id=${selectedElement}]`) == null)
            selectedElement = defaultElement;
    }

    // focus on page
    for (let i = 0; i < pages.length; i++) {
        const page = pages[i];

        if (page.id === selectedPage) {
            setTimeout(()=>{
                page.classList.add('active');
                document.title = `${page.getAttribute('label')} - PRISM Hub`;

                if (selectedElement != null) {
                    document.querySelector(`.content [id=${selectedPage}] [hash-id=${selectedElement}]`)
                    .scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }, delay)
        } else {
            page.classList.remove('active');
        }
    }
}

window.addEventListener("hashchange", () => handleHash(250));
handleHash();
