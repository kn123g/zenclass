let paginationJSON;
let contentPerPage = 12;
let start = 1;
let end = contentPerPage;
let activePageNo = 1;
fetch("./pagination.json")
    .then(response => {
        return response.json();
    })
    .then(result => {
        paginationJSON = result;
        pagination(result.length);
        let activePagination = document.querySelector(`#paginationList li[id="1"]`)
        activePagination.setAttribute('class', 'active');
        contentLoad(activePageNo);
    });

function contentLoad(paginationNo) {

    end = +paginationNo * contentPerPage;
    start = ((paginationNo - 1) * contentPerPage)
    if (end > paginationJSON.length) end = paginationJSON.length;
    // console.log('start', (start), 'end', end)
    let container = document.getElementsByClassName('container')[0];
    //Empty the container
    container.innerHTML = '';
    for (let i = start; i < end; i++) {
        let table = document.createElement('table')
        table.className = 'content';

        let idRow = document.createElement('tr')
        let idType = document.createElement('td')
        idType.className = 'type';
        let idData = document.createElement('td')
        idData.className = 'data';
        idType.innerHTML = `ID`;
        idData.innerText = `${paginationJSON[i].id}`;
        idRow.appendChild(idType)
        idRow.appendChild(idData)

        let nameRow = document.createElement('tr')
        let nameType = document.createElement('td')
        nameType.className = 'type';
        let nameData = document.createElement('td')
        nameData.className = 'data'
        nameType.innerHTML = `Name`;
        nameData.innerText = `${paginationJSON[i].name}`;
        nameRow.appendChild(nameType)
        nameRow.appendChild(nameData)

        let emailRow = document.createElement('tr')
        let emailType = document.createElement('td')
        emailType.className = 'type'
        let emailData = document.createElement('td')
        emailData.className = 'data'
        emailType.innerHTML = `Email`;
        emailData.innerText = `${paginationJSON[i].email}`;
        emailRow.appendChild(emailType)
        emailRow.appendChild(emailData)

        table.appendChild(idRow)
        table.appendChild(nameRow)
        table.appendChild(emailRow)

        container.appendChild(table);
        activePageNo = paginationNo;
        document.getElementById('changeNo').innerHTML = activePageNo;
    }


    let current = document.querySelector(`#paginationList li[class="active"]`);
    current.className = current.className.replace('active', "inactive");
    let activePagination = document.querySelector(`#paginationList li[id="${paginationNo}"]`)
    activePagination.setAttribute('class', 'active');
}

function pagination(length) {
    let ul = document.getElementById('paginationList');
    let firstList = document.createElement('li');
    firstList.innerHTML = 'First';
    firstList.id = 'first';
    firstList.addEventListener('click', (e) => {
        contentLoad(1)
    })
    ul.appendChild(firstList)
    let previousList = document.createElement('li');
    previousList.innerHTML = 'Previous';
    previousList.id = 'prev';
    previousList.addEventListener('click', (e) => {
        if ((activePageNo - 1) > 0) contentLoad((activePageNo - 1))
    })
    ul.appendChild(previousList)

    length = Math.ceil(length / 12);
    for (let i = 1; i <= length; i++) {
        let list = document.createElement('li');
        list.innerHTML = i;
        list.id = i;
        list.addEventListener('click', (e) => {
            contentLoad(e.target.id)
        })
        ul.appendChild(list)
    }
    let nextList = document.createElement('li');
    nextList.innerHTML = 'Next';
    nextList.id = 'next';
    nextList.addEventListener('click', (e) => {
        if ((activePageNo + 1) <= length) contentLoad((activePageNo + 1))
    })
    ul.appendChild(nextList)
    let lastList = document.createElement('li');
    lastList.className = 'last'
    lastList.innerHTML = 'Last';
    lastList.id = 'last';
    lastList.addEventListener('click', (e) => {
        contentLoad(length)
    })
    ul.appendChild(lastList)
}