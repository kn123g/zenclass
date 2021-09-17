// let div1 = document.getElementById('div1');
// let div2 = document.getElementById('div2');

// div1.addEventListener('click', (e) => {
//     alert('div1 clicked')
//     console.log(e)
// }, true)


// div2.addEventListener('click', (e) => {

//     alert('div2 clicked')
//     console.log(e)
// }, true)

function AddRow() {
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;

    let table = document.getElementById('show');
    let row = table.insertRow(-1);
    row.insertCell(-1).append(firstName);
    row.insertCell(-1).append(lastName);
    row.insertCell(-1).append(email);
    row.insertCell(-1).append(age);

}