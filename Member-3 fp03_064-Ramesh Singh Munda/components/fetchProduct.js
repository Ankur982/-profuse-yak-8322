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
    console.log('data:', data);
        // div
        let product = document.createElement("div");
        product.setAttribute("id", "product");

        // image
        let image = document.createElement("div");
        image.setAttribute("id", "image");
        // img
        let img = document.createElement("img");
        img.src = data.image_link;

        image.append(img);


        // content
        let content = document.createElement("div");
        container.setAttribute("id", "content");

        // brand
        let brand = document.createElement("h2");
        brand.innerText = data.brand;
        // name
        let name = document.createElement("h1");
        name.innerText = data.name;
        // price
        let price = document.createElement("h3");
        price.innerText = `$ ${data.price}`; 

        // cart
        let cart = document.createElement("button");
        cart.setAttribute("id", "cart-btn");
        cart.innerText = "ADD TO CART";
        cart.addEventListener("click", ()=> {
            addToCart(data);
        });

        // wishlist
        let wishlist = document.createElement("button");
        wishlist.setAttribute("id", "wishlist-btn");
        wishlist.innerText = "Save to Wishlist";
        wishlist.addEventListener("click", ()=> {
            saveToWishlist(data);
        });


        // append(brand, name, price, cart)
        content.append(brand, name, price, cart, wishlist);
        product.append(image, content)

        // description
        let description = document.createElement("div");
        description.setAttribute("id", "description");
        // desc
        let desc = document.createElement("h5");
        desc.innerText = data.description;
        // append(desc)
        description.append(desc);

        // append (product, description)
        container.append(product, description);
        
}


// addToCart
let addToCart = (el)=> {
    // console.log(el);

    let product = JSON.parse(localStorage.getItem("cart")) || [];
    product.push(el);

    localStorage.setItem("cart", JSON.stringify(product));

    window.alert("Added to Your Cart");
};

// saveToWishlist
let saveToWishlist = (el)=> {
    console.log(el);
    
    let product = JSON.parse(localStorage.getItem("wishlist")) || [];
    product.push(el);

    localStorage.setItem("wishlist", JSON.stringify(product));

    window.alert("Added to Your Wishlist");

};





// export
export {getData, appendData};