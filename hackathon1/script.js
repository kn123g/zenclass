const catContent = document.getElementById('catContent');
const popup = document.getElementById('togglePopup');
const searchCat = document.getElementById('searchCat');
const url = `https://cataas.com/`
let cats, tags;
let currentPage = 1;
const catsPerpage = 12;
const catLimit = 70;
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

async function searchCatByTag() {
    try {
        const jsonData = await fetchContent(`${url}/api/cats?limit=${catLimit}&tags=${searchCat.value}`);
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
        div.style.cursor = 'pointer';
        div.addEventListener('click', () => {
            popup.src = `${url}/cat/${cats[i].id}?width=250`;
        })
        let img = document.createElement('img');
        img.src = `${url}/cat/${cats[i].id}?height=150`
        img.className = 'img-fluid rounded';
        img.alt = "cat not loading"
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
    let pageList = document.createElement('li');
    pageList.className = 'page-item';
    let pageLink = document.createElement('a');
    pageLink.className = 'page-link';
    pageLink.innerHTML = 'Previous';
    pageLink.tabIndex = 0;
    pageLink.href = "#";
    pageList.appendChild(pageLink)

    pageLink.addEventListener('click', (e) => {
        if ((currentPage - 1) > 0) {
            currentPage--;
            pageNavigate();
        }
    })
    paginationList.appendChild(pageList)

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

        pageLink.addEventListener('click', (e) => {
            currentPage = e.target.tabIndex;
            pageNavigate();
        })

        paginationList.appendChild(pageList)
    }

    pageList = document.createElement('li');
    pageList.className = 'page-item';
    pageLink = document.createElement('a');
    pageLink.className = 'page-link';
    pageLink.innerHTML = 'Next';
    pageLink.href = "#";
    pageLink.tabIndex = -1;
    pageList.appendChild(pageLink)

    pageLink.addEventListener('click', (e) => {
        if ((currentPage + 1) <= length) {
            currentPage++;
            pageNavigate();
        }
    })

    paginationList.appendChild(pageList);
    updatePagination();
}

function pageNavigate() {
    cleanPage();
    updateContentToDOM();
    updatePagination();
}

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

function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("DIV");
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function(e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    });
}

async function tagsLoad() {
    tags = await fetchContent(`${url}/api/tags`)
    autocomplete(document.getElementById("searchCat"), tags);
}

function pageLoad() {
    initialCatsLoad();
    tagsLoad();
}

pageLoad();