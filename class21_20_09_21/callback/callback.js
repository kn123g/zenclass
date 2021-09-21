function callBack(value) {
    return (value * 2)
}

function run(arr, callbackFunction) {
    arr.forEach(element => {
        console.log(callbackFunction(element))
    });
}


let arr = [10, 20, 30, 40, 50]

run(arr, callBack);