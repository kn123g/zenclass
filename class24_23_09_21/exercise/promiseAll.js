const promise1 = new Promise((resolve, reject) => {
    const add = () => 10 + 20;
    if (add() == 30) resolve("Success");
    else reject("Failed");
});

const promise2 = new Promise((resolve, reject) => {
    const add = () => 10 + 20;
    if (add() == 30) resolve("Success");
    else reject("Failed");
});

const promise3 = new Promise((resolve, reject) => {
    const add = () => 0 + 20;
    if (add() == 20) resolve("Success");
    else reject("Failed");
});

const promise4 = new Promise((resolve, reject) => {
    const add = () => 10 + 10;
    if (add() === 20) resolve("Success");
    else reject("Failed");
});

const promise5 = new Promise((resolve, reject) => {
    const add = () => 10 + 0;
    if (add() == 10) resolve("Success");
    else reject("Failed");
});


const promise6 = new Promise((resolve, reject) => {
    const add = () => 10 + 0;
    if (add() !== 10) resolve("Success");
    else reject("Failed");
});
// Promise.all=Promise.all takes aynchronous Operation to next level.It takes an array of input as a promise .It gets resolved all the promises
// .If any of the promise is failed , then all are rejected

let promiseAll = Promise.all([
    promise1,
    promise2,
    promise3,
    promise4,
    promise5,
]);


promiseAll
    .then((x) => console.log(x))
    .catch((err) =>
        console.error(err)
    );


promiseAll = Promise.all([
    promise1,
    promise2,
    promise3,
    promise4,
    promise5,
    promise6
]);


promiseAll
    .then((x) => console.log(x))
    .catch((err) =>
        console.error(err)
    );


const promiseSettled = Promise.allSettled([
    promise1,
    promise2,
    promise3,
    promise4,
    promise5,
    promise6
]);



promiseSettled
    .then((x) => console.log(x))
    .catch((err) =>
        console.error(err)
    );