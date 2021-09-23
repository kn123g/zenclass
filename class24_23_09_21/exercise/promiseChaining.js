const promise = new Promise((resolve, reject) => {
    reject(Error('Its having error'))
});

promise
    .catch(error => {
        console.log(error.message)
        return error.message
    })
    .then(error => {
        console.log(error, "=> chained error")
    })
    .finally(() => {
        console.log("done");
    })