// Iteration 1: Names and Input
console.log("I'm ready!")

let hacker1="Manolo"
console.log (`The driver's name is ${hacker1}`)


let hacker2="Lola"
console.log(`The navigator's name is ${hacker2}`)



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters`)
}else if (hacker1.length < hacker2.length){
    console.log(`Ìt seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characteres!`)
}



// Iteration 3: Loops
let upperName = '';
for ( let i = 0; i < hacker1.length; i++) {
    upperName += hacker1[i].toUpperCase() + ' ';    
}
 console.log(upperName)


 let reverseName = '';
 for ( let i = hacker1.length-1; i >= 0; i--) {
    reverseName += hacker1[i];    
 }
  console.log(reverseName)

