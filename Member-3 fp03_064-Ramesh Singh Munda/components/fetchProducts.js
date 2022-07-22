// getData
let getData = async (url)=> {

    let res = await fetch(url);
    // console.log("res:", res);

    let data = await res.json();
    // console.log('data:', data);
    
    return data;
}



// appendData
let appendData = (data, container)=> {
    // console.log('data:', data);

    container.innerHTML = null;

    data.forEach((el)=> {
        // product
        let product = document.createElement("div");
        product.setAttribute("id", "product");
        // product.addEventListener("click", ()=> {
        //     clickProduct(el);
        // });


        // content
        let content = document.createElement("div");
        content.setAttribute("id", "content");
        content.addEventListener("click", ()=> {
            clickProduct(el);
        });

        // image
        let image = document.createElement("img");
        image.src = el.image_link;

        // brand
        let brand = document.createElement("h4");
        brand.innerText = el.brand;

        // name
        let name = document.createElement("h3");
        name.innerText = el.name;

        // price
        let price = document.createElement("h4");
        price.innerText = `$ ${el.price}`;

        // append (image, brand, name, price)
        content.append(image, brand, name, price);


        // button
        let button = document.createElement("div");
        // button.setAttribute("id", "buy-btn");

        // buy
        let buy = document.createElement("button");
        buy.innerText = "QUICK BUY";
        buy.addEventListener("click", ()=> {
            quickBuy(el);
        });

        // append (buy)
        button.append(buy);


        // append (content, button)
        product.append(content, buy)

        // product.append(image, brand, name, price, buy);
        container.append(product);
    });
};

// // clickProduct
let clickProduct = (el)=> {
    console.log(el.id);

    let product_id = JSON.parse(localStorage.getItem("product_id")) || [];
    product_id.push(el.id);

    localStorage.setItem("product_id", JSON.stringify(product_id));

    window.location.href = "../product.html";
};


// quickBuy
let quickBuy = (el)=> {
    // console.log("Quick Buy");
    
    let product = JSON.parse(localStorage.getItem("cart")) || [];
    product.push(el);

    localStorage.setItem("cart", JSON.stringify(product));

    window.alert("Added to Your Cart");
};



// export
export {getData, appendData};