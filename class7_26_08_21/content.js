let ans1 =
    `class Movie {
        private title : String ;
        private studio : String ;
        private rating : String ;
        constructor(title:string,studio:string,rating:string = 'PG'){
          this.title =title;
          this.studio = studio;
          this.rating =rating;
        }
    }
      
      let movie1 = new Movie('Casino Royale','Eon Productions','PG­14')
      let movie2 = new Movie('Avatar','Prime Focus','PG­12')
      let movie3 = new Movie('Bahubali','Someone','PG')
      let movieArr : Movie[] = [];
      movieArr.push(movie1)
      movieArr.push(movie2)
      movieArr.push(movie3)
      
      function getPG(arr){
        return arr.filter((element)=>{
          return (element.rating === 'PG');
        })
      }
      
      console.log(JSON.stringify(getPG(movieArr)));
      //Output
      // "[{"title":"Bahubali","studio":"Someone","rating":"PG"}]" 
    `

let ans2 =
    `class Circle {
        private radius : number ;
        private color : string ;
        constructor(radius:number=1.0,color:string='red'){
          this.radius = radius;
          this.color = color;
        }
        getRadius():number{
          return this.radius;
        }
        setRadius(radius:number){
          this.radius = radius;
        }
        getColor():string{
          return this.color;
        }
        setColor(color:string){
          this.color = color;
        }
        toString():string{
          return ` + 'Circle[radius=${this.radius},color=${this.color}]' + `
        }
        getArea():number{
          return Math.PI * +(this.radius) * +(this.radius)
        }
        getCircumference():number{
          return 2 * Math.PI * +(this.radius);
        }
    }
      
      let circle1 = new Circle()
      let circle2 = new Circle(4)
      let circle3 = new Circle(45,'black')
      let circles : Circle[] = [];
      circles.push(circle1)
      circles.push(circle2)
      circles.push(circle3)
      
      circles.forEach(element=>{
          console.log(element.toString(), 'Area =',element.getArea(),'Circumference=',element.getCircumference())
      })
      //Output
      // "Circle[radius=1,color=red]",  "Area =",  3.141592653589793,  "Circumference=",  6.283185307179586 
      // "Circle[radius=4,color=red]",  "Area =",  50.26548245743669,  "Circumference=",  25.132741228718345 
      // "Circle[radius=45,color=black]",  "Area =",  6361.725123519332,  "Circumference=",  282.7433388230814 
    `

let ans3 =
    `class Person{
        private name:string;
        private age:number;
        private address:string;
        constructor(name?:string,age?:number,address?:string){
          this.name= name;
          this.age= age;
          this.address=address;
        }
        personDetails(){
          return ` + 'name=${this.name} age=${this.age} address=${this.address}' + `;
        }
      }
       
      let person = new Person('karthi',18,'Tirupur');
      console.log(person.personDetails());
      let emptyPerson = new Person();
      console.log(emptyPerson.personDetails());
      //Output
      "Total price for 100 is 4000"
      //Output
      // "name=karthi age=18 address=Tirupur"
      // "name=undefined age=undefined address=undefined" 
      `
let ans4 =
    `class Uber{
    private kms:number;
    private price:number = 40;
    constructor(kms:number=0){
      this.kms = kms;
    }
    calculatePrice(){
      return ` + 'Total price for ${this.kms} is ${+this.kms * +this.price}' + `;
    }
  }
   
  let travel = new Uber(100);
  console.log(travel.calculatePrice());
  //Output
  // "Total price for 100 is 4000"`
document.getElementById('one').innerHTML = ans1;
document.getElementById('two').innerHTML = ans2;
document.getElementById('three').innerHTML = ans3;
document.getElementById('four').innerHTML = ans4;;