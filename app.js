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

var stuff = require('./stuff');

console.log(stuff.counter(['shaun','crystak','ryu']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi,5));