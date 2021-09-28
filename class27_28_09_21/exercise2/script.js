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
    console.log(jsonData)
    if (countryName) {
        for (let i in jsonData) {
            if (jsonData[i].name.common.toLowerCase().indexOf(countryName) === 0) {
                // console.log(jsonData[i].name.common, '      ', jsonData[i].name.common.toLowerCase().indexOf(countryName))
                let row = table.insertRow(-1);
                let col = row.insertCell(-1);
                col.innerHTML = j++;
                col = row.insertCell(-1);
                col.innerHTML = jsonData[i].name.common;

                col = row.insertCell(-1);
                for (let currency in jsonData[i].currencies) {
                    col.innerHTML = currency;
                    break;
                }
            }
        }

    } else {
        for (let i in jsonData) {
            let row = table.insertRow(-1);
            let col = row.insertCell(-1);
            col.innerHTML = j++;
            col = row.insertCell(-1);
            col.innerHTML = jsonData[i].name.common
            col = row.insertCell(-1);
            for (let currency in jsonData[i].currencies) {
                col.innerHTML = currency;
                break;
            }
        }

    }

}

function countryLoad(countryName) {
    console.log(countryName.value)
    updateDOM(countryName.value.toLowerCase())
}
fetContent();
/* <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr> */