// Create a function that takes 3 arguments and returns the sum of the these arguments.
function num(x,y,z){
	return x+y+z;
}
let sum = num(5,9,7);
console.log(sum);

// Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

function colorCar(color){
	return console.log("My color\'s Car is" ,color);
}

let myCar = "red";
colorCar(myCar);

// Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

let a={ fName:"Matin",lname:"Attarzade",phone:"6984747427"};
function print(details){
	return console.log(details);
}
print(a);

// Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
function vehicleType(color , code){
	if(code === 1){
		return console.log("A ", color ,"car");
	}else if(code === 2){
		return console.log("a ",color , "Motorbike");
	}
}

vehicleType("x color" , 2); // || vehicleType("x color",1);

// Can you write the following without the if statement, but with just as a single line with console.log(...);?

// if (3 === 3) {
//     console.log("yes")
// } else {
//     console.log("no")
// }
3 === 3? console.log("Yes") : console.log("NO");

// Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle(color,code,age){
	if (code == 1 && age == 5){
		console.log("A ",color,"5 years used car");
	}else if(code == 2 && age == 4){
		console.log("A " , color , "4 years used Motorbike");
	}else{
		return console.log("This is not a vehicle");
	}
}
vehicle("green",1,5);
vehicle("blue",1,4);
vehicle("red",2,4);
vehicle("yellow",2,5);

// Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

let vehicle = ["motorbikes","caravan", "bike" ,"car"];

// How do you get the third element from that list?

console.log(vehicle[2]);

// Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

// Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

// Hint, the output should be correct English with all the punctuation in place (that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.

// What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

// Create an empty object.

let myObj = {};

// Create an object that contains the teachers that you have had so far for the different modules.

myObj.Teachers = "['Ahmed' , 'Kostas' , 'SHAteam']",

console.log(myObj.Teachers);

// Add a property to the object you just created that contains the languages that they have taught you.

myObj.languages = "['HTML' , 'CSS' , 'JS basic']";

// Write some code to test two arrays for equality using == and ===. Test the following:

    let x = [1,2,3];
    let y = [1,2,3];
    let z = y;

// What do you think will happen with x == y, x === y and z == y and z == x? Prove it!
// Don't cheat! Seriously - try it first.
// Check out this Fiddle. You need to open your browser’s Developer Tools to see the console output. Press the Run button in the upper right corner to run the code.
// More insights from this Stack Overflow question.

let frist = (x == y) ? "x==y : True!": "x==y :False!";
let second = (x === y) ? "x===y: True!" : "x===y : False!";
let third = (z == y) ? "z==y : true!": "z==y : False!";
let forth = (z == x) ? "z == x: True!":"z == x: False!";

// Take a look at the following code:

     // let o1 = { foo: 'bar' };
     // let o2 = { foo: 'bar' };
     // let o3 = o2;

// Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

// Does the order that you assign (o3 = o2 or o2 = o3) matter?

// What does the following code return? (And why?)

let bar = 42;
typeof typeof bar;
 let bar = 42;
        function myFun(){
        let b = typeof typeof bar;
        return b ;
        }
        console.log(myFun());
// ‘Coerce' means to try to change - so coercing var x = '6' to number means trying to change the type to number temporarily.

