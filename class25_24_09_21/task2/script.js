const url = `https://restcountries.com/v3.1/all`;
const table = document.getElementById('table').querySelector('tbody');
let jsonData;
async function fetContent() {
    try {
        let result = await fetch(url);
        jsonData = await result.json();
        updateDOM();
    } catch (e) {

    }

}

function updateDOM(countryName) {
    table.innerHTML = '';
    let j = 1;
    if (countryName) {
        for (let i in jsonData) {
            if (jsonData[i].name.common.toLowerCase().indexOf(countryName) === 0) {
                addRow(i);
            }
        }

    } else {
        for (let i in jsonData) {
            addRow(i)
        }
    }

    function addRow(index) {
        let row = table.insertRow(-1);
        let col = row.insertCell(-1);
        col.innerHTML = j++;
        col.scope = "row";
        col = row.insertCell(-1);
        col.innerHTML = jsonData[index].name.common
        col.className = "text-wrap";
        col = row.insertCell(-1);
        for (let currency in jsonData[index].currencies) {
            col.innerHTML = currency;
            break;
        }
    }
}


function countryLoad(countryName) {
    updateDOM(countryName.value.toLowerCase())
}
fetContent();