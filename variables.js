/*
*What are the differences between let, const and var?
*
*/

//using var declaring variable is below is example
//as for examples
var myName = "hir";
var isFair = true;

var sayHello = function(){
  myName = "raj";
  console.log(myName);
  if(isFair){
          var lastName = "patel";
  }
  console.log(lastName);
}
sayHello();
console.log(myName);
//above example myName var is global can be changed anywhere

//you can not access lastName as it`s scope is inside if condition
//in sayHello function inside if condition variable lastName created
//lastName can be accessed outside if condition but inside function

//now use of const and let for declaration of variables
// you can declare variable using let without assigning values
let name = "Dhiren";
let middleName;
// on the other habd const cannot be declared without assigning values
const last = "panchal";
let isReligious = false;
// onve declared variable in const you can not change it`s value
var showFullName = function(){
     if(isReligious == false){
         let region = "NG";
         middleName = "jagadishbhai"
         console.log(name+" "+middleName+" "+last);
     }
     //here region can not be accessible
     //becouse scope of the redion is only if conditions where variable resides
     //console.log(region);
}
console.log()
showFullName();
/*
   important thing about const is if you assign const to array or object
   then you can not create again but you can edit object or that array
*/

const array = [1,2,3,67];
console.log(array);
array.push(33);
console.log(array);

//What is Hoisting
/*
  Most commonly,it will explain hoisting as declarations being moved
   to top of your code. While this is what appears to be happening,
   it’s important to understand exactly what is going on. You see,
   your code isn’t moving anywhere.
   It isn’t magically being moved to the top of the file.
   What’s actually happening is that your function and variable
   declarations are added to memory during the compile phase.
   JavaScript only hoists declarations. Initializations are not hoisted.

*/

//see examples

var a;
//...
// after some code
//initialization of a
a = 12;
console.log(a);
a = 3;
