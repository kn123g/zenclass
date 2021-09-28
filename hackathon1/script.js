const catContent = document.getElementById('catContent');
const popup = document.getElementById('togglePopup');
const url = `https://cataas.com/`
let cats;
let currentPage = 1;
const catsPerpage = 12;
const catLimit = 100;
let totalCat;

async function initialCatsLoad() {
    try {
        const jsonData = await fetchContent(`${url}/api/cats?limit=${catLimit}`);
        cats = jsonData;
        if (cats.length) {
            totalCat = cats.length;
            updateContentToDOM(1);
            loadPagination();
        } else {
            throw `Empty response from ${url}/api/cats?limit=${catLimit}`
        }
    } catch (e) {
        const errorElement = document.createElement('p')
        errorElement.innerHTML = e;
        catContent.appendChild(errorElement);
    }
}

async function searchCat(searchInput) {
    try {
        const jsonData = await fetchContent(`${url}/api/cats?limit=${catLimit}&tags=${searchInput.value}`);
        cats = jsonData;
        cleanPage();
        resetCurrentPage();
        if (cats.length) {
            totalCat = cats.length;
            updateContentToDOM(1);
            loadPagination();
        } else {
            throw `No cat for tag ${searchInput.value}`
        }
    } catch (e) {
        const errorElement = document.createElement('p')
        errorElement.innerHTML = e;
        catContent.appendChild(errorElement);
    }
}



function updateContentToDOM() {
    let start = (currentPage - 1) * catsPerpage;
    let end = (currentPage * catsPerpage) >= totalCat ? totalCat : (currentPage * catsPerpage);
    for (let i = start; i < end; i++) {
        let div = document.createElement('div');
        div.className = 'col-sm-3 col-6';
        div.setAttribute('data-toggle', 'modal');
        div.setAttribute('data-target', '#myModal');
        div.addEventListener('click', () => {
            popup.src = `${url}/cat/${cats[i].id}?width=250`;
        })
        let img = document.createElement('img');
        img.src = `${url}/cat/${cats[i].id}?height=150`
        img.className = 'img-fluid';
        div.appendChild(img);
        let tags = document.createElement('h6');
        let tagNames = ''
        for (let j in cats[i].tags) {
            tagNames = `${tagNames}#${cats[i].tags[j]}  `
        }
        tags.className = "text-wrap text-secondary"
        tags.innerHTML = tagNames;
        div.appendChild(tags)
        catContent.appendChild(div);
    }
}



async function fetchContent(fetchURL) {
    const data = await fetch(`${fetchURL}`);
    const jsonData = await data.json();
    return jsonData;
}

function loadPagination() {
    paginationList.innerHTML = '';
    /* Previous button appending to pagination */
    let pageList = document.createElement('li');
    pageList.className = 'page-item';
    let pageLink = document.createElement('a');
    pageLink.className = 'page-link';
    pageLink.innerHTML = 'Previous';
    pageLink.tabIndex = 0;
    pageLink.href = "#";
    pageList.appendChild(pageLink)

    /* adding event listener to previous button */
    pageLink.addEventListener('click', (e) => {
        if ((currentPage - 1) > 0) {
            currentPage--;
            pageNavigate();
        }
    })
    paginationList.appendChild(pageList)

    /* PageNo appending to pagination */
    length = Math.ceil(totalCat / catsPerpage);
    for (let i = 1; i <= length; i++) {
        pageList = document.createElement('li');
        pageList.className = 'page-item';
        pageList.id = i;
        pageLink = document.createElement('a');
        pageLink.className = 'page-link';
        pageLink.innerHTML = i;
        pageLink.tabIndex = i;
        pageLink.href = "#";
        pageList.appendChild(pageLink)

        /* adding event listener to pageNo buttons */
        pageLink.addEventListener('click', (e) => {
            currentPage = e.target.tabIndex;
            pageNavigate();
        })

        paginationList.appendChild(pageList)
    }

    /* Next button appending to pagination */
    pageList = document.createElement('li');
    pageList.className = 'page-item';
    pageLink = document.createElement('a');
    pageLink.className = 'page-link';
    pageLink.innerHTML = 'Next';
    pageLink.href = "#";
    pageLink.tabIndex = -1;
    pageList.appendChild(pageLink)

    /* adding event listener to Next button */
    pageLink.addEventListener('click', (e) => {
        if ((currentPage + 1) <= length) {
            currentPage++;
            pageNavigate();
        }
    })

    paginationList.appendChild(pageList);
    /* adding active to initial pageNo */
    updatePagination();
}

function pageNavigate() {
    cleanPage();
    updateContentToDOM();
    updatePagination();
}

/* Highlighting active page to pagination */
function updatePagination() {
    let prevPage = paginationList.querySelector(`li.active`);
    prevPage ? prevPage.className = prevPage.className.replace('active', ' ') : '';
    let activePage = paginationList.querySelector(`li[id="${currentPage}"]`);
    activePage.className = activePage.className + ' active';
}

function cleanPage() {
    catContent.innerHTML = '';
}

function resetCurrentPage() {
    currentPage = 1;
}
initialCatsLoad();