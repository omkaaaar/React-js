
// create fetch method
// create async method
// add TRY and CATCH block inside async function.
// Add API response and pass a method(GET or POST)
// Store the response of the API in a result variable by using AWAIT keyword and .JSON() method(.json converts the response into json file)


let getList = document.querySelector(".list-of-elements")
async function fetchListOfProducts() {
    try{

        const apiResponse = await fetch('https://dummyjson.com/products', {method:'GET'})
        const result = await apiResponse.json()
        console.log(result);

        if(result.products.length > 0) renderProducts(result.products)
    }catch(e){
        console.log(e);
        
    }
    
}

function renderProducts(getProducts){
    getList.innerHTML=getProducts.map(singleProduct=> `<p>${singleProduct.title}</p>`).join(" ")
}

fetchListOfProducts()