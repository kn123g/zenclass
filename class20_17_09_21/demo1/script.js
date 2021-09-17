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