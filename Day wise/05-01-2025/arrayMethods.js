// ! Array methods
// ? 1. Map method

const peopleArray = [
    {
        name: "Omkar",
        age: 24,
        city: "Bangalore"
    },
    {
        name: "Ramesh",
        age: 26,
        city: "Belgaum"
    },
    {
        name: "Kallekar",
        age: 23,
        city: "Panjim"
    },

    {
        name: "Desai",
        age: 23,
        city: "Panjim"
    },
    {
        name: "Rekha",
        age: 23,
        city: "Panjim"
    }
]
// ! map method
let returnNames = peopleArray.map((individualNames, index)=>{
    return `${individualNames.name}  ${individualNames.age}`
})

console.log(returnNames);

// ! Filter method: Returns all matched content
let filterMethod = peopleArray.filter((returnFilter, index)=>{
    return returnFilter.city === "Panjim"
})
console.log(filterMethod);

// ! Find: Returns only a single matched content
let findMethod = peopleArray.find((returnFind, index)=>{
    return returnFind.city ==="Panjim"
})
console.log(findMethod);

// ! includes: Checks if array contains any specific value and returns true or false.
// ! indexOf: the indexOf method returns the index value of the item we are looking for.
const fruits = ["Apple", "mango", "banana", "watermelon", "sugar"]
console.log(fruits.includes("watermelon"), fruits.indexOf("watermelon"))
console.log(fruits.includes("Omkar"), fruits.indexOf("omkar"))


