const marvel_heroes = ["spiderman", "ironman" , "hulk"]
const dc_heroes = ["superman", "batman" ,"flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)

// const all_new_heroes = [...marvel_heroes , ...dc_heroes];
// console.log(all_new_heroes)

// const another_array = [1,2,3,[5,6],7,[3,4,[6]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)


console.log(Array.isArray("ankit"));  //false
console.log(Array.from("ankit"));    //[ 'a', 'n', 'k', 'i', 't' ]

console.log(Array.from({name: "ankit"})) //[]  interesting

const score1 =300;
const score2 =400;
const score3 = 500 ; 
console.log(Array.of(score1 ,score2 ,score3));
