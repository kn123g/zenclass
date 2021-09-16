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
    let table = document.getElementsByTagName('table')[0]
    let row = table.insertRow(-1);
    row.insertCell(-1).append(`${o}`)
    row.insertCell(-1).append(`:`)
    row.insertCell(-1).append(`${info[o]}`)
}