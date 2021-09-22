let state = {
    india: ['Tamilnadu', 'Delhi', 'Mumbai'],
    usa: ['Alabama', 'Delaware', 'California', 'Washington'],
    australia: ['New South Wales', 'Queensland', 'South Australia'],
    canada: ['Alberta', 'British Columbia', 'Northwest Territories']
}

document.getElementById('country').addEventListener('change', loadState);

document.getElementById('foodForm').addEventListener('submit', submitForm);


let foodCheckBoxError = document.getElementById('menuCheckbox').querySelector('input');
foodCheckBoxError.setCustomValidity("Select atleast two food");

function loadState(e) {
    clearState();
    let stateDOM = document.getElementById('state');
    state[e.target.value].forEach(stateName => {
        let option = document.createElement('option');
        option.value = stateName.toLowerCase();
        option.innerHTML = stateName;
        stateDOM.appendChild(option);
    });
    stateDOM.focus();
}

function clearState() {
    let stateDOM = document.getElementById('state');
    stateDOM.innerHTML = '';
    let defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.innerHTML = 'Select..';
    defaultOption.selected = true;
    defaultOption.disabled = true;
    stateDOM.appendChild(defaultOption)
}

function checkFood() {
    let selectedFood = document.querySelector('#menuCheckbox').querySelectorAll('input:checked');
    let foodCheckBoxError = document.getElementById('menuCheckbox').querySelector('input');
    if (selectedFood.length > 1) {
        console.log(selectedFood.length)
        foodCheckBoxError.setCustomValidity("");
        return true;
    } else {
        foodCheckBoxError.setCustomValidity("Select atleast two food");
        console.log(selectedFood.length)
        return false;
    }
}



function submitForm(event) {

    event.preventDefault();
    let details = {
        firstName: document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        address: document.getElementById('address').value,
        pincode: document.getElementById('pincode').value,
        gender: document.querySelector('.gender input:checked').value,
        country: document.getElementById('country').value,
        state: document.getElementById('state').value,
        foods: []
    }
    let foodsChecked = document.getElementById('menuCheckbox').querySelectorAll('input:checked');
    foodsChecked.forEach(food => {
        details.foods.push(food.value)
    })
    console.log(details.firstName)
    console.log(details.lastName)
    console.log(details.address)
    console.log(details.pincode)
    console.log(details.gender)
    console.log(details.foods)
    console.log(details.country)
    console.log(details.state)

    addDetails(details);
    event.target.reset();
    clearState();
    return false;

}


function addDetails(details) {
    let table = document.getElementById('table').querySelector('table');
    let row = table.insertRow(-1);
    let col = row.insertCell(-1);
    col.innerHTML = details.firstName;
    col = row.insertCell(-1);
    col.innerHTML = details.lastName;
    col = row.insertCell(-1);
    col.innerHTML = details.address;
    col = row.insertCell(-1);
    col.innerHTML = details.pincode;
    col = row.insertCell(-1);
    col.innerHTML = details.gender;
    col = row.insertCell(-1);
    col.innerHTML = details.foods;
    col = row.insertCell(-1);
    col.innerHTML = details.country;
    col = row.insertCell(-1);
    col.innerHTML = details.state;
}