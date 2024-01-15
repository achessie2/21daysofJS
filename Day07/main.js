const person = {
    age: 89,
    name: "James"
}


const colors = ['red', 'blue']


// console.log(colors[1])
// const array2 = colors.map((color) => color.split(''))

// object oriented programming
class Person {
    constructor(age, name) {
        this.age = age
        this.name = name
    }
}

const person1 = new Person(24, 'James')

// console.log(person1.name)

// updating an array
let f1Teams = ["Redbull", "Mercedes", "Ferrari", "Mclaren", ["Alpine", "Aston Martin"]]

// console.log(f1Teams)
// f1Teams[3] = "Haas"
// console.log(f1Teams)
// console.log(f1Teams[4][0])



// looping

let animals = [ "Fish", "Rabbit", "Whale", "Puppy"]
console.log(animals.length)
for (let i = 0; i < animals.length; i++) {
    console.log( "I am a "+ animals[i] + " and I love being alive!")

    
}

// pushing an array

// animals.push("Bunny", "Eagle")
// console.log(animals)


// popping an array
// animals.pop();
console.log(animals)

// // shifting an array
// animals.shift();
// console.log(animals)

// unshifting an array
animals.unshift("Pig")
console.log(animals)

const animals2 = animals.slice(1,4)
console.log(animals2)


// .splice .forEach .map .filter .reduce


// .forEach
const people = ["Jack", "John", "James"]
// people.forEach(function (people){
//     console.log("I am " + people)
// })
people.forEach((i) => {
    console.log(i)
})