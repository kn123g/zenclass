document.getElementById("submit").addEventListener("click", function(event) {
    addCountry();
    event.preventDefault();
});

function addCountry() {
    let option = document.createElement('option');
    let newCountry = document.getElementById('countryName').value;
    option.value = newCountry;
    option.innerHTML = newCountry;
    if (newCountry != '') {

        document.getElementById('country').appendChild(option);
        document.getElementById('countryName').value = '';

    }
}