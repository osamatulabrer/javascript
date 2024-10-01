// document.getElementById('google').innerHTML = "no this is my pen"
// function decleration

function humble(){
    console.log(808)
}
humble();

// self invoke function

(function(){
    console.log('self centrel')
})();

// function expression/ anonymous function

const pop = function(){
console.log('mother')
}
pop();

const pop1 = function(){
return 'mother'
}
console.log(pop1());

const pop2 = function(){
return 'mother is my heaven'
}
console.log(pop1);

// arrow function
let great = () => {
    console.log('length')
}
great();

let great1 = () => {
   return'length'
}
console.log(great1()); 
// 2
let great2 = () => (
    'long lasting'
)
console.log(great2());
// 3
let great3 = () => 'double century'
console.log(great3());

// i did not understand constructor function
// Arrays in Functions
// Arrays can also be passed as arguments to functions or returned from functions. Here's a basic example:
function getArr(arr){
    return arr;
}
// console.log(getArr([6,8,9,'00']))
// it also execute this way
let num = [6,8,9,'00']
console.log(getArr(num));

// You can combine these concepts by using arrays within objects and 
// passing those objects to functions. For instance:






// object type
// JavaScript variables are containers for data values.
// Objects are variables too. But objects can contain many values.

// This code assigns many values (Fiat, 500, white) to an object named car:
let tree = {
    fruite:'apple',
    flower:'Rose',
    plants:'pumkins',
    garden:'mango'

}
console.log(tree);
console.log(tree.flower);
// empty object
const youtube = {};
youtube.firstName = 'rashed';
youtube.lastName = 'hossoin';
youtube.age = 56;
youtube.maritialstatus = 'unmarried'; 
console.log(youtube.firstName + ' is '  + youtube.lastName)


const linkdin = {};
youtube.firstName = 'khaled';
youtube.lastName = 'hossoin';
youtube.age = 56;
youtube.maritialstatus = 'unmarried'; 
console.log(youtube.firstName)



// Create an Object
const person = new Object();
// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
console.log(person.firstName +' is '+ person.age + " years old")

// object in object example

 const hotel = {
    meal:'at night',
    breakfast:'in the morning',
   subject: {car:'toyota',bus:'hanif',plane:'airbus'},
   country:'bangladesh'
 }
 console.log(hotel.subject.car);
// arrey in Object
const restuarent = {
    names:'fasi',
    birth:345,
    arreys:[5,6,8,'gfhgj',78],
    talwind:'desh'
}
console.log(restuarent);
//  so arrey in object as a value of properties is valid
// function in object is called or named by mathod
const ami = {
    www:youtube,
    http:'facebook',
    org:'organization',
    com:function(){
        return' so arrey in object as a value of properties is valid'
    }
}
console.log(ami);

// All JavaScript values, except primitives, are objects.
// A primitive value is a value that has no properties or methods.

// 3.14 is a primitive value

// A primitive data type is data that has a primitive value.