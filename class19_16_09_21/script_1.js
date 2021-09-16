// let ul = document.getElementById('list');

let info = {
    Aadhaarcard: 'xxxxxxxxxx',
    Name: 'Karthikeyan',
    Age: 30,
    Email: 'xxxxxx',
    City: 'Chennai',
    Company: 'GUVI',
    Contact: '7418999760'
}

for (let o in info) {
    let table = document.getElementsByTagName('table')[0];
    table.insertRow(0).insertCell(0).innerHTML(`${o}`)
    table.insertRow(0).insertCell(1).innerHTML(`:`)
    table.insertRow(0).insertCell(2).innerHTML(`${info[o]}`)
        // ul.appendChild(list)
}