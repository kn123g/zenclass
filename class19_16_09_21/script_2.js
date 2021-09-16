function addCountry() {
    let option = document.createElement('option');
    let newCountry = document.getElementById('countryName').value;
    option.value = newCountry;
    option.innerHTML = newCountry;
    document.getElementById('country').appendChild(option);
    document.getElementById('countryName').value = '';
}