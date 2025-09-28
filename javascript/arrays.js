const poke_games = ["FireRed", "LeafGreen", "Emerald", "Platinum", "Black", "White", "X", "Y", "Sun", "Moon", "Sword", "Shield"];

// Add "Let's Go Pikachu" and "Let's Go Eevee" to the end of the array
const moregames = ["Let's Go Pikachu", "Let's Go Eevee"];
// concatinating two arrays

// const all_games = poke_games.concat(moregames);
// console.log(all_games);

// better way to do the same thing using spread operator
const all_games = [...poke_games, ...moregames];
// console.log(all_games);

const number_array = [1, 4, 9, [7, 6, 14, 5, [4, 7], [7, 9, 4, 6, 1]]];

// console.log(number_array.flat(Infinity));
// flat function flattens the array upto the given depth

// console.log(Array.isArray("abhyanshu"));
// console.log(Array.from("abhyanshu"));
// console.log(Array.from({name: "abhyanshu"})); // gives empty array as output
// from function creates array from any iterable object

// for using symbols in object

const mysym = Symbol("my identifier");
const obj = {
    name: "abhyanshu",
    [mysym]: "my value",
    age: 20,
    hobbies: ["coding", "reading", "gaming"],
    "coding language": "javascript",
    email: "abhyanshuab05@gmail.com"
}
// you can access the properties of an object using obj.keys
// console.log(obj.name);
// // but if you ever want to access a 2 or more syllable word then have to use obj["property name"]
// console.log(obj["coding language"]);

// // for accessing symbols must use big brackets

// console.log(obj[mysym]);

// You can freeze the key values in the object

Object.freeze(obj.age);

const gameUser = {
    username: "abhyanshu",
    level: 45,
    health: 100
}

const extension = {
    powerup: "speedrun",
    superpcharge: "Fuck 'em all"
}

const obj3 = Object.assign({}, gameUser, extension);
console.log(obj3); // ese merge kar dega dono objects ko

// other better method to do this

const obj4 = {...gameUser, ...extension};
console.log(obj4); // ye bhi same kaam karega

// converting an object into array of specific criteria
console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));

//iske baad json pdhna hai