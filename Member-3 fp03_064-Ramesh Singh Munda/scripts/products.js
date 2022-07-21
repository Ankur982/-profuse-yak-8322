// import getData, appendData
import {getData, appendData} from "../components/fetchProducts.js";


let product_type = "nail_polish";
// let product_type = "lip_liner";

// url
let url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_type}`;

// container
let container = document.getElementById("product-section");




getData
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