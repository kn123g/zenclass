let ul = document.getElementById('list');

let info = { aadhaarcard: 'xxxxxxxxxx', Name: 'Karthikeyan', Age: 30, email: 'xxxxxx', city: 'Chennai', Company: 'GUVI', contact: '7418999760' }
for (let o in info) {
    let list = document.createElement('li');
    list.innerHTML = o + ':' + info[o];
    list.style.color = 'blue';
    ul.appendChild(list)
}