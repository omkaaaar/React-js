// const id = 1;
// const name = "John";
// const rating = 6;

// const something = {
//     id,
//     name,
//     rating
// }
// console.log(something)

// const product2 = {
//     description:'Description of the product',
//     id,
//     name,
//     rating
// }

//  ? DESTRUCTURING OBJECTS
// const {description}=product2
// console.log(id, rating,description)


//  ? Destructuring using array
// let array = [1,2,3,4]
// const [a1,a2,a3,a4]=array;
// console.log("Array values are: " + a1,a4, a3);



// ! SPREAD and REST OPERATOR
// function spread(a,b,...c)
// {
    
//     console.log(a,b,c)
//     return "Something";
// }
// console.log(spread(1,2,3,4,5,6,554,5))





// !ES6 Array methods
// ! map, filter, find, some,every, includes, indexOf, findIndex.

// ? MAP method
const people = [
    {
        name: 'Shravani',
        age: 23,
        country: 'India'
    },
    {
        name: 'Omkar',
        age: 23,
        country: 'USA'
    },
    {
        name: 'Rohini',
        age: 22,
        country: 'Canada'
    },
    {
        name: 'Rishab',
        age: 21,
        country: 'Germany'
    },
    {
        name: 'Anshuk',
        age: 22,
        country: 'England'
    },
    {
        name: 'Steven',
        age: 22,
        country: 'England'
    },
    {
        name: 'Sadiya',
        age: 22,
        country: 'England'
    },
]

const names = people.map((onePerson, index) =>{
    console.log(onePerson,index)
    // return onePerson.name;
    // ? Make use of temlate literals to print the multiple array values 
    return `My name is: ${onePerson.name}, and the age is: ${onePerson.age}, and i live in ${onePerson.country}`    
});
console.log(names);




// ? Find: it will return single object even if there are multiple objects of same conditions
const findPerson = people.find((onePerson, index) =>{
    return onePerson.country==='USA'
})
console.log(findPerson)




// ? FILTER: filter method will return all the objects in the form of array that matches certain conditions
const filterPerson = people.filter((onePerson,index)=>{
    return onePerson.country==='England'
})
console.log(filterPerson)


// ! SOME and EVERY: Return boolean if all condition are true, in every it return false
const somePerson = people.some((onePerson,index)=>{
    return onePerson.age<23;
})
console.log(somePerson)


// ! INCLUDES: Checks if an element is present in the array
// ! IndexOf: Returns the index of particular element
let fruitArray = ['Apple', 'Mango', 'Banana', 'Grapes'];
console.log(fruitArray.includes('Apple')) // true
console.log(fruitArray.indexOf('Banana')) // 2 as the index of Banana is 2


// ! FindIndex: Returns the index of the first element in the array where predicate is true, and -1 otherwise. 
const findIndex = people.findIndex((onePerson,index)=>{
    return onePerson.country === 'India'
})
console.log(findIndex); // 0 as there is person from India in the array




// ! async await API call example
async function fetchProducts(){
    try{
        const res = await fetch('https://dummyjson.com/products',{
            method: 'GET',
        });
        const result = await res.json();
        console.log(result)
        
    }
    catch(e){
        console.log(e)
    }
}
fetchProducts()