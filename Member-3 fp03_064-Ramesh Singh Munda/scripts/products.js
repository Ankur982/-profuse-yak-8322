// import getData, appendData
import {getData, appendData} from "../components/fetchProducts.js";


let product_type = "nail_polish";
// let product_type = "lip_liner";

// url
let url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_type}`;

// container
let container = document.getElementById("product-section");

getData(url).then((res)=> {
    // console.log("res:", res);
    appendData(res, container);
});