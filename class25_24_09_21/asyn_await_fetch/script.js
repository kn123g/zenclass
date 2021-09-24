let url = `https://jsonplaceholder.typicode.com/users`

async function fetchContent() {
    try {
        let data = await fetch(url);
        let jsonData = await data.json();
        console.log(jsonData)
        updateContentToDOM(jsonData)
    } catch (e) {
        let errorElement = document.createElement('p')
        errorElement.innerHTML = e;
        document.getElementsByClassName('container')[0].appendChild(errorElement);
    }
}

function updateContentToDOM(jsonData) {
    let table = document.getElementById('table');
    let header = document.createElement('th');
    header.innerHTML = 'Name'
    table.querySelector('thead').appendChild(header)
    header = document.createElement('th');
    header.innerHTML = 'City'
    table.querySelector('thead').appendChild(header)
    for (let content in jsonData) {
        console.log(table)
        let row = table.insertRow(-1);
        row.insertCell(-1).append(jsonData[content].name);
        row.insertCell(-1).append(jsonData[content].address.city);
    }
}