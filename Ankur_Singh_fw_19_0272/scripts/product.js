// import getData, appendData
import {getData, appendData} from "../components/fetchProduct.js";

// let id = "740";
let data = JSON.parse(localStorage.getItem("product_id")) || [];
appendData(data,container)
// let product_id = data[data.length - 1];

// // url
// let url = `https://makeup-api.herokuapp.com/api/v1/products/${product_id}.json`;

// // container
// let container = document.getElementById("container");

// getData(url).then((res)=> {
//     // console.log("res:", res);
//     appendData(res, container);
// });