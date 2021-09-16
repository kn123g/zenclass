let counrtries = ['Afghanistan', 'Albania', 'Argentina', 'Austria', 'China']
let i = 0;

function addCountry() {
    let option = document.createElement('option');
    option.value = counrtries[i];
    option.innerHTML = counrtries[i];
    document.getElementById('country').appendChild(option);
    i++;
}