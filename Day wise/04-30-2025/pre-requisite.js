//! Template literals


let name1 = "omkar"
let surname = "Kallekar"

console.log(`${name1} ${surname}`);



// ! Ternary operators (Condition ? statement 1 : Statement 2)
const showRecipe = true;

function getRecipeOne(recipeName){
    return recipeName;
}

function getRecipeTwo(recipeName){
    return recipeName;
}



showRecipe ? console.log(getRecipeOne("True Recipe")) : console.log(getRecipeTwo("False Recipe"))



// ! Array and object destructuring

const id = 1;
const productName = "iPhone";
const rating = 5;

const product = {
    // id:id,
    // productName: productName,
    // rating: rating
    // ? Since the key and value names are same we can write it as shorthand property.
    id,
    productName,
    rating
}

console.log(product);

// ! Destructuring

const product2 ={
    description : "Can i get a haiyaahhhhhh",
    id,
    productName,
    rating
}
// ! Destructuring in normal way
const getProduct2Desc = product2.description;
console.log(getProduct2Desc);

const product3 ={
    description : "Can i get a BMW m5 competition",
    id,
    productName,
    rating
}
// ! here's another way of destructuring
const {description} = product3;
console.log(description);


// ! Array Destructuring.
const fruits = ["apple", "banana", "cherry"]; 
const [first, second, third] = fruits; 
console.log(first, second, third); 



// ! rest and spread operators
// ? rest
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
    }
    console.log(sum(1, 2, 3, 4)); // Output: 10

// ? Spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // Output: { a: 1, b: 2, c: 3 }