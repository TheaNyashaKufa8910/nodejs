//global object//
/*console.log('hey ninjas'); 

setTimeout(function(){
    console.log('3 seconds have passed');
}, 3000);

var time=0;
setInterval(function(){
    time += 2;
    console.log(time + ' seconds have passed');
}, 2000);

var time=0;
var timer =setInterval(function(){
    time =+ 2;
    console.log(time + ' seconds have passed');
    if (time>5){
        clearInterval(timer);
        }
}, 2000);*/

//FUNCTION EXPRESSION//
//Normal function statement//
/*function sayHi(){
    console.log('hi');
    }
    sayHi()

//function expression//
var sayBye = function(){
    console.log('bye');
    };
    sayBye();


function callFunction(fun){
    fun();
   }

var sayBye = function(){
    console.log('bye');
    };
    callFunction(sayBye);   

//module and require()//

var counter = require('./count');
console.log(counter(['shaun','crystak','ryu']));*/

// module patterns//

/*var stuff = require('./stuff');

console.log(stuff.counter(['shaun','crystak','ryu']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi,5));*/


//Event emmitter//
var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
   };

   util.inherits(Person, events.EventEmitter);
   
   var james = new Person('james');
   var mary = new Person('mary');
   var ryu = new Person('ryu');
   var people = [james, mary, ryu];

   people.forEach(function(person){
    person.on('speak' , function(mssg){
        console.log(person.name + ' said: ' + mssg);
    } );
   });

   james.emit('speak', 'hey dudes');
   ryu.emit('speak', 'I want curry') 
