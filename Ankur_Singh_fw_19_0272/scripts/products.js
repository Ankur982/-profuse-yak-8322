// import getData, appendData
import {getData, appendData} from "../components/fetchProducts.js";



// let product_type = "blush";
// let product_type = "bronzer";
// let product_type = "eyebrow";
// let product_type = "eyeliner";
// let product_type = "eyeshadow";
// let product_type = "foundation";
// let product_type = "eyeliner";
// let product_type = "lip_liner";
let product_type = "nail_polish";


// url
let url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_type}`;

// container
let container = document.getElementById("product-section");

if(product_type === "nail_polish") {
    product_type = "Nail Polish";
}
if(product_type === "blush") {
    product_type = "Blush";
}
if(product_type === "bronzer") {
    product_type = "Bronzer";
}
if(product_type === "eyeliner") {
    product_type = "Eyeliner";
}
if(product_type === "eyeshadow") {
    product_type = "Eyeshadow";
}
if(product_type === "foundation") {
    product_type = "Foundation";
}
if(product_type === "lip_liner") {
    product_type = "LipLiner";
}


let type = document.getElementById("value");
type.innerText = product_type;



// getData
getData(url).then((res)=> {
    // console.log("res:", res);
    let data = res;

    // sortLTH
    let sortLTH = (data)=> {
        // console.log("sortLTH");

        // sortLTH
        data.sort((a, b)=> {
            return a.price - b.price;
        });
        // console.log(data);
    appendData(res, container);

    };

    // sortHTL
    let sortHTL = (data)=> {
        // console.log("sortHTL");

        // sortHTL
        data.sort((a, b)=> {
            return b.price - a.price;
        });
        // console.log(data);

        // data.sort((a, b)=> {
        //     if(a.price > b.price) {
        //         return 1;
        //     }
        //     if(a.price < b.price) {
        //         return -1;
        //     }
        //     else {
        //         return 0;
        //     }
        // });

        // data.sort((a, b)=> {
        //     if(a.name > b.name) {
        //         return 1;
        //     }
        //     if(a.name < b.name) {
        //         return -1;
        //     }
        //     else {
        //         return 0;
        //     }
        // })

    appendData(res, container);

    };

    // sortLTH
    document.getElementById("sort-lth").addEventListener("click", ()=> {
        
        sortLTH(data);
    });

    // sorHTL
    document.getElementById("sort-htl").addEventListener("click", ()=> {
        sortHTL(data);
        // console.log(sortLTH(data));
    });


    // filter
    // let filterBrand = ()=> {
    //     console.log("Filter");
    // }

    

    appendData(res, container);
});