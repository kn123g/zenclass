let ans1 =
    `
    let x = new XMLHttpRequest();
    let countries = null;
     
    x.onload = function () {
      if (this.status >= 200 && this.status <= 200) {
        countries = JSON.parse(this.responseText);
        console.log(` + '` %c a. Get all the countries from Asia continent /region using Filter function `' + `,'color:red')
        console.log(countries.filter(element => {
            return element.region == 'Asia'
        }));
        console.log(` + '` %c b. Get all the countries with a population of less than 2 lakhs using Filter function `' + `,'color:blue')
        console.log(countries.filter(element => {
            return element.population < 200000
        }));
        console.log(` + '` %c c. Print the following details name, capital, flag using forEach function `' + `,'color:orange')
        countries.forEach(element=>{
            console.log(` + '` %c name = ${element.name} %c capital = ${element.capital} %c flag = ${element.flag}`' + `,'color:red' ,'color:blue','color:brown')
        })
        let total = countries.reduce((a,b)=>{
            return (+(a) + +(b.population));
        },0)
        console.log(` + '` %c d. Print the total population of countries using reduce function %c ${total}`' + `,'color:red','color:blue')
        console.log(` + '` %c e. Print the country which uses US Dollars as currency. `' + `,'color:orange')
        countries.forEach(async country=>{
            let dolor = false;
            await country.currencies.forEach(element => {
                if(element.symbol == '$')
                {
                    dolor = true;
                }
            })
            if(dolor){
                console.log(` + '` %c ${country.name}`' + `, 'color:orange')
            }  
        })
      }
    }
     
    x.onerror = function () {
      console.log(this.statusText);
    }
     
    x.open('GET', 'https://restcountries.eu/rest/v2/all');
    x.send();`
document.getElementById('one').innerHTML = ans1;

let x = new XMLHttpRequest();
let countries = null;

x.onload = function() {
    if (this.status >= 200 && this.status <= 200) {
        countries = JSON.parse(this.responseText);
        // console.log(countries.population)
        console.log(` %c a. Get all the countries from Asia continent /region using Filter function `, 'color:red')
        console.log(countries.filter(element => {
            return element.region == 'Asia'
        }));
        console.log(` %c b. Get all the countries with a population of less than 2 lakhs using Filter function `, 'color:blue')
        console.log(countries.filter(element => {
            return element.population < 200000
        }));
        console.log(` %c c. Print the following details name, capital, flag using forEach function `, 'color:orange')
        countries.forEach(element => {
            console.log(` %c name = ${element.name} %c capital = ${element.capital} %c flag = ${element.flag}`, 'color:red', 'color:blue', 'color:brown')
        })
        let total = countries.reduce((a, b) => {
            return (+(a) + +(b.population));
        }, 0)
        console.log(` %c d. Print the total population of countries using reduce function %c ${total}`, 'color:red', 'color:blue')
        console.log(` %c e. Print the country which uses US Dollars as currency. `, 'color:orange')
        countries.forEach(async country => {
            let dolor = false;
            await country.currencies.forEach(element => {
                if (element.symbol == '$') {
                    dolor = true;
                }
            })
            if (dolor) {
                console.log(` %c ${country.name}`, 'color:orange')
            }
        })
    }
}

x.onerror = function() {
    console.log(this.statusText);
}

x.open('GET', 'https://restcountries.eu/rest/v2/all');
x.send();

document.getElementById('result').addEventListener('click', e => {

    let result = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, code: 'KeyJ', ctrlKey: true, shiftKey: true, key: 'J', keyCode: 74 });

    window.dispatchEvent(result);
});


function openConsole() {

    // let result = new KeyboardEvent('keydown', { code: 'KeyJ', ctrlKey: true, shiftKey: true, key: 'J', keyCode: 74 });

    // result.ctrlKey = true;
    // result.shiftKey = true;
    // result.key = 'J';
    // result.code = 'KeyJ';
    // result.bubbles = true;
    // result.cancelBubble = true;
    // result.composed = true;
    // result.isTrusted = true;
    // result.keyCode = 74;
    // result.returnValue = true;
    // result.type = 'keydown'
    //     document.dispatchEvent(result);
    //     console.log('hai')
}