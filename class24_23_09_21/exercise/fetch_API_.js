function randomImg() {
    fetch('https://picsum.photos/200')
        .then(res => {
            console.log(res)
            document.getElementById('img').src = res.url
        })
        .catch(error => console.log(error))
}