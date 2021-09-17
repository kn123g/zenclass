let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');

div1.addEventListener('click', (e) => {
    alert('div1 clicked')
    console.log(e)
})


div2.addEventListener('click', (e) => {

    alert('div2 clicked')
    console.log(e)
})