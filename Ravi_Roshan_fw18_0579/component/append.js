function append(data){
    data.forEach(function(el){
        let div2=document.createElement("div")
        let div3=document.createElement("div")
        let div1=document.createElement("div")
        div1.setAttribute("class","div")
        let image=document.createElement("img")
        image.src=el.image_link
        image.addEventListener("click",function(){
            showProduct(el)
        })

        function showProduct(el){
            localStorage.setItem('show',JSON.stringify(el))
        }
        let title=document.createElement("h4")
        title.innerText=el.title;
        let category=document.createElement("h5")
        category.innerText=el.category;
        let price=document.createElement("p")
        price.innerText=el.price;
        
        let btn=document.createElement("button")
        btn.innerText="Add to cart";
        btn.addEventListener("click",function(){
            addToCart(el)
        })

div1.append(image,title,category,price);
div2.append(btn)
div3.append(div1,div2)
document.getElementById("container12").append(div3)

   })

var data=[]
function addToCart(el){
    data.push(el)

localStorage.setItem("cart",JSON.stringify(data))
}
 }

 export{append}