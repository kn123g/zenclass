async function fetchContent() {
    try {
        let data = await fetch('https://jsonplaceholder.typicode.com/users');
        let jsonData = await data.json();
        console.log(jsonData)
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
    } catch (e) {

    }

}
// fetchData();