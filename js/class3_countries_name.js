let x = new XMLHttpRequest();
let countries = null;

x.onload = function () {
    if (this.status >= 200 && this.status <= 200) {
        countries = JSON.parse(this.responseText);
        let orderedList = document.getElementById('countriesName').querySelector('ol');
        for (let i = 0; i < countries.length; i++) {
            let list = document.createElement('li');
            list.innerHTML = `${countries[i].name}`;
            list.setAttribute('class', 'country');
            orderedList.appendChild(list);
            console.log(`%c${countries[i].name}`, 'color: #ea146a')
        }
        for (let country in countries) {
            let row = document.createElement('tr');
            let tdname = document.createElement('td');
            let tdregion = document.createElement('td');
            let tdnativeName = document.createElement('td');
            tdname.innerHTML = countries[country].name
            row.appendChild(tdname)
            tdregion.innerHTML = countries[country].region
            row.appendChild(tdregion)
            document.getElementById('tablebodyforin').querySelector('tbody').appendChild(row);
            console.log(`%c${countries[country].name}     %c${countries[country].region}`, 'color: #ea146a', 'color: #15d853')
        }
        for (let country of countries) {
            let row = document.createElement('tr');
            let tdname = document.createElement('td');
            let tdregion = document.createElement('td');
            let tdnativeName = document.createElement('td');
            tdname.innerHTML = country.name;
            row.appendChild(tdname)
            tdregion.innerHTML = country.region;
            row.appendChild(tdregion)
            tdnativeName.innerHTML = country.nativeName;
            row.appendChild(tdnativeName)
            document.getElementById('tablebodyforof').querySelector('tbody').appendChild(row);
            console.log(`%c${country.name}    %c${country.region}   %c${country.nativeName}`, 'color: #ea146a', 'color: #15d853', 'color: #000000')
        }
        countries.forEach(element => {
            let row = document.createElement('tr');
            let tdname = document.createElement('td');
            let tdregion = document.createElement('td');
            let tdnativeName = document.createElement('td');
            tdname.innerHTML = element.name;
            row.appendChild(tdname)
            tdregion.innerHTML = element.region;
            row.appendChild(tdregion)
            tdnativeName.innerHTML = element.nativeName;
            row.appendChild(tdnativeName)
            document.getElementById('tablebodyforeach').querySelector('tbody').appendChild(row);
            console.log(`%c${element.name}    %c${element.region}   %c${element.nativeName}`, 'color: #ea146a', 'color: #15d853', 'color: #000000')
        });
    }
}

x.onerror = function () {
    console.log(this.statusText);
}

x.open('GET', 'https://restcountries.eu/rest/v2/all');
x.send();