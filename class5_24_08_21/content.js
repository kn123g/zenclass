let ans1 =
    `((userInput) => {
        let arr = userInput.split(' '),
            print = '';
        for (let i = 0; i < arr.length; i++) {
            if ((+arr[i]) % 2 !== 0) {
                print = ` + '`${print}${arr[i]} `' + `;
        }
    }
    if (print === '') {
        console.log(-1)
    } else {
        console.log(print.trim())
    }
})('2 1 4 3');
//Output
// 1 3`

let ans2 =
    `((userInput) => {
    let str = userInput.toLowerCase().split(' ')
    let print = str.map(word => {
        return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
        console.log(print)
})('good Morning');
//Output
// Good Morning`

let ans3 =
    `((userInput) => {
        let str = userInput.split(' ');
        console.log(str.reduce((a,b)=>+a + +b ,0))
})('5 6 8 77 100'); 
//Output
// 196`

let ans4 =
    `((userInput) => {
        let str = userInput.split(' ');
        let print = str.filter(num => {
            let prime = true;
            for(let i=2;i< +num;i++){
                if(num%i==0) {prime = false;break;}
            }
            return prime;
        }).join(' ');
        console.log(print)
})('2 3 4 5 6 7 8 9');
//Output
// 2 3 5 7`

let ans5 =
    `((userInput) => {
        let str = userInput.split(' ');
        let print = str.filter(str => {
            if(str == str.split('').reverse().join('')) return true;
        }).join(' ');
        console.log(print)
})('dad son mom');
//Output
// dad mom`

let ans6 =
    `((userInput) => {
        let arr = [...userInput[0] , ...userInput[1]].sort((a,b)=>a-b)
        let len = arr.length;
        let median = (+(arr[len/2]) + +(arr[(len/2)-1])) / 2;
        console.log(Math.floor(median))
})([[1,3,5,7,12],[2,4,6,8,10]]);
//Output
// 5`

let ans7 =
    `((userInput) => {
        let str = userInput.split(' ');
        let set = new Set(str);
        console.log([...set].join(' '))
})('1 3 5 7 12 5 6 3');
//Output
// 1 3 5 7 12 6`

let ans8 =
    `((userInput) => {
        let arr = userInput.arr.split(' ');
        let k = +userInput.k;
        let r = arr.splice(0,k);
        arr.push(...r);
        console.log(arr)
})({arr:'1 3 5 7 12 5 6 3',k:3});
//Output
// (8) ['7', '12', '5', '6', '3', '1', '3', '5']`
document.getElementById('one').innerHTML = ans1;
document.getElementById('two').innerHTML = ans2;
document.getElementById('three').innerHTML = ans3;
document.getElementById('four').innerHTML = ans4;
document.getElementById('five').innerHTML = ans5;
document.getElementById('six').innerHTML = ans6;
document.getElementById('seven').innerHTML = ans7;
document.getElementById('eight').innerHTML = ans8;