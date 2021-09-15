let ul = document.getElementById('list');

let info = {
    Aadhaarcard: 'xxxxxxxxxx',
    Name: 'Karthikeyan',
    Age: 30,
    Email: 'xxxxxx',
    City: 'Chennai',
    Company: 'GUVI',
    Contact: '7418999760'
}

for (let o in info) {
    let list = document.createElement('li');
    list.innerHTML = `${o} : ${info[o]}`;
    list.style.color = 'blue';
    ul.appendChild(list)
}