// Function
// function favMovie(movie = 'The Room', name = 'world') {
// 	console.log(`My name is ${name} and my favorite movie is ${movie}`);
// }

// Arrow Function
// let favMovie = (movie = 'The Room', name = 'world') => {
// 	console.log(`My name is ${name} and my favorite movie is ${movie}`);
// }

// Concise Body Shorthand
let favMovie = (movie = 'The Room', name = 'world') =>
	console.log(`My name is ${name} and my favorite movie is ${movie}`);

favMovie();

// Arrow Function
// let getFirstName = (fullName = 'David Mayes') => {
// 	let firstName = fullName.split(' ')[0],
// 			lastName 	= fullName[fullName.length - 1];

// 	console.log(`Your first name is ${firstName}`);
// };

// Concise Body Shorthand
let getFirstName = (fullName = 'David Mayes') =>
	console.log(`Your first name is ${fullName.split(' ')[0]}`);

getFirstName();

let newFunc = (a = 2, b = 3) => {
	let exponent = Math.pow(a, b),
			product  = a * b;
	return ({ exponent, product });
};
 
console.log(newFunc()); 

let arr = ['David', 'Chattanooga', 'Lobster'];

function user(name, location, favFood){
	console.log(`My name is ${name} and I live in ${location}, also my favorite food is ${favFood}`);
}

user(...arr);

let myName = 'David';

function wordSpread(word){
	let spread = [...word];
	for(var i = 0; i < word.length; i++) {
	 console.log(spread[i]);
	}
};

wordSpread(myName);
console.log('end of script');
