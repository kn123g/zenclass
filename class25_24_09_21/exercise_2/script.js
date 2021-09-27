const url = `https://randomuser.me/api/`
let maxContent = 55;

const contentDiv = document.getElementById('content');
const paginationList = document.getElementById('paginationList');
let userForm;
let currentPage = 1;

/* form submit function call */
async function formFetchSubmit(form) {
    try {
        /* set Today no of contents */
        maxContent = +(form.maxUsers.value) ? +(form.maxUsers.value) : maxContent;
        userForm = form;
        /* fetch initial content for page 1 */
        const jsonData = await fetchContent(1);
        /* Load pagination */
        pagination(jsonData.results.length)
    } catch (e) {
        /* display error in frontend */
        const errorElement = document.createElement('p')
        errorElement.innerHTML = e;
        document.getElementsByClassName('container')[0].appendChild(errorElement);
    }
}

async function fetchContent(page) {
    /* calculating no of content based on pageNo and maximun content */
    const results = (Math.ceil(maxContent / 12) == page) ? (maxContent % 12) : 12;

    /* Api call url display in console */
    console.info(`${url}?gender=${userForm.gender.value}&nat=${userForm.userNationality.value}&page=${page}&results=${results}`)

    const data = await fetch(`${url}?gender=${userForm.gender.value}&nat=${userForm.userNationality.value}&page=${page}&results=${results}`);
    const jsonData = await data.json();

    /* after api fetch content updating DOM */
    updateContentToDOM(jsonData)
    return jsonData;
}

function updateContentToDOM(jsonData) {
    contentDiv.innerHTML = '';
    for (let content in jsonData.results) {
        let div = document.createElement('div');
        div.className = 'col-lg-3 col-6';
        let img = document.createElement('img');
        img.src = jsonData.results[content].picture.large;
        img.className = 'img-fluid';
        div.appendChild(img);
        let name = document.createElement('h6');

        /* Concat fistname and lastname */
        name.innerHTML = `${jsonData.results[content].name.first} ${jsonData.results[content].name.last}`
        div.appendChild(name)
        contentDiv.appendChild(div);
    }
}

function pagination(length) {
    /* cleaning pagination content */
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
            fetchContent(currentPage);
            /* updating active to active pageNo */
            updatePagination();
        }
    })
    paginationList.appendChild(pageList)

    /* PageNo appending to pagination */
    length = Math.ceil(maxContent / 12);
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
            fetchContent(currentPage);
            /* updating active to active pageNo */
            updatePagination();
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
            fetchContent(currentPage);
            /* updating active to active pageNo */
            updatePagination();
        }
    })

    paginationList.appendChild(pageList);
    /* adding active to initial pageNo */
    updatePagination();
}

/* Highlighting active page to pagination */
function updatePagination() {
    let prevPage = paginationList.querySelector(`li.active`);
    prevPage ? prevPage.className = prevPage.className.replace('active', ' ') : '';
    let activePage = paginationList.querySelector(`li[id="${currentPage}"]`);
    activePage.className = activePage.className + ' active';
}