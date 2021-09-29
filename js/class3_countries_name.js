let x = new XMLHttpRequest();
let countries = null;

x.onload = function() {
    if (this.status >= 200 && this.status <= 200) {
        countries = JSON.parse(this.responseText);
        let orderedList = document.getElementById('countriesName').querySelector('ol');
        for (let i = 0; i < countries.length; i++) {
            let list = document.createElement('li');
            list.innerHTML = `${countries[i].name.common}`;
            list.setAttribute('class', 'country');
            orderedList.appendChild(list);
            console.log(`%c${countries[i].name.common}`, 'color: #ea146a')
        }
        for (let country in countries) {
            let row = document.createElement('tr');
            let tdname = document.createElement('td');
            let tdregion = document.createElement('td');
            let tdnativeName = document.createElement('td');
            tdname.innerHTML = countries[country].name.common;
            row.appendChild(tdname)
            tdregion.innerHTML = countries[country].region
            row.appendChild(tdregion)
            document.getElementById('tablebodyforin').querySelector('tbody').appendChild(row);
            console.log(`%c${countries[country].name.common}     %c${countries[country].region}`, 'color: #ea146a', 'color: #15d853')
        }
        for (let country of countries) {
            let nativeNameKeys = country.name.nativeName ? Object.keys(country.name.nativeName) : [];
            let nativeName = nativeNameKeys.length > 0 ? country.name.nativeName[nativeNameKeys[0]].common : '';

            let row = document.createElement('tr');
            let tdname = document.createElement('td');
            let tdregion = document.createElement('td');
            let tdnativeName = document.createElement('td');
            tdname.innerHTML = country.name.common;
            row.appendChild(tdname)
            tdregion.innerHTML = country.region;
            row.appendChild(tdregion)
            tdnativeName.innerHTML = nativeName;
            row.appendChild(tdnativeName)
            document.getElementById('tablebodyforof').querySelector('tbody').appendChild(row);
            console.log(`%c${country.name.common}    %c${country.region}   %c${nativeName}`, 'color: #ea146a', 'color: #15d853', 'color: #000000');
        }
        countries.forEach(element => {
            let nativeNameKeys = element.name.nativeName ? Object.keys(element.name.nativeName) : [];
            let nativeName = nativeNameKeys.length > 0 ? element.name.nativeName[nativeNameKeys[0]].common : '';

            let row = document.createElement('tr');
            let tdname = document.createElement('td');
            let tdregion = document.createElement('td');
            let tdnativeName = document.createElement('td');
            tdname.innerHTML = element.name.common;
            row.appendChild(tdname)
            tdregion.innerHTML = element.region;
            row.appendChild(tdregion)
            tdnativeName.innerHTML = nativeName;
            row.appendChild(tdnativeName)
            document.getElementById('tablebodyforeach').querySelector('tbody').appendChild(row);
            console.log(`%c${element.name.common}    %c${element.region}   %c${nativeName}`, 'color: #ea146a', 'color: #15d853', 'color: #000000')
        });
    }
}

x.onerror = function() {
    console.log(this.statusText);
}

x.open('GET', 'https://restcountries.com/v3.1/all');
x.send();