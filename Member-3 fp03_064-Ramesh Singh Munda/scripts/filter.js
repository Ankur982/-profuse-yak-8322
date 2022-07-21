let product_type = "nail_polish";
// let product_type = "lip_liner";

// url
let url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_type}`;

// container
let container = document.getElementById("product-section");

// getData
let getData = async (url)=> {

    

    let res = await fetch(url);
    // console.log("res:", res);

    let data = await res.json();
    console.log('data:', data);

    let arr = [];
    for(let i = 0; i < data.length; i++) {
        // console.log(data[i].brand);
        arr.push(data[i].brand);
    }
    // console.log([...new Set(arr)]);

    data = [...new Set(arr)];

    appendData(data);
    // return data;
}
getData(url);


// appendData
let appendData = (data)=> {
    console.log('data:', data);

    let container = document.getElementById("filter");
    container.innerHTML = null;

    let filter = document.createElement("h5");
    filter.innerText = "Brand";

    let box = document.createElement("div");
    box.setAttribute("id", "filter-box");
    // div.append(filter);

    container.append(filter);

    data.forEach((data)=> {
        let div = document.createElement("div");
        // div.setAttribute("id", "filter-box");

        let input = document.createElement("input");
        input.type = "checkbox";
        
        let label = document.createElement("label");
        label.innerText = data;
        input.addEventListener("change", ()=> {
            console.log("select");
        });

        

        // label.append(input);

        div.append(input, label);
        box.append(div);
        container.append(box);
    }); 

    
}