let favoriteAnimals = ['blowfish' , 'capricorn' , 'giraffe'];

// Jim's favorite animals
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

console.log("The array has a length of:" + favoriteAnimals.length);

//Jason's favorite animals

 // 1)
 favoriteAnimals.pop();
 favoriteAnimals.pop();
 favoriteAnimals.push("turtle");
 console.log(favoriteAnimals);

 // 2)
 delete favoriteAnimals[2];
 console.log(favoriteAnimals); // empty items

 // 3)
 favoriteAnimals.splice(2,1);
 console.log(favoriteAnimals);
 
console.log("the meerkat that I am looking for at the index = ",index);

favoriteAnimals.splice(index,1);

console.log(favoriteAnimals);


