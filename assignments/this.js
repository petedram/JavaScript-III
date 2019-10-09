/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding - window object. When inside a function.
* 2. Implicit Binding - the object before the . is 'this'
* 3. New Binding - constructor function to create new object, 'this' is the created object
* 4. Explicit Binding - when call or apply method is used, 'this' is explicitly defined 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function sayHelloTo(name){
    console.log('Hello ' + name);
    console.log(this);
}

sayHelloTo('Pete');

// Principle 2
// code example for Implicit Binding
let sayYo = {
    greeting: 'Yo',
    speak: function(name){
        console.log(this.greeting + ' '+ name);
        console.log(this);
    }
}

sayYo.speak('Pete');


// Principle 3
// code example for New Binding
function SaySup(name) {
    this.greeting = 'Sup';
    this.name = name;
    this.speak = function(){
        console.log(this.greeting + ' ' + this.name);
        console.log(this);
    }
}

let yoPete = new SaySup('Pete');
let yoPace = new SaySup('Pace');

yoPete.speak();
yoPace.speak();

// Principle 4
// code example for Explicit Binding
yoPete.speak.call(yoPace);

yoPace.speak.apply(yoPete); // this is explicitly defined as yoPete


