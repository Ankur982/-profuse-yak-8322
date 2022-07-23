document.querySelector("#logo").addEventListener("click",myhome)
    function myhome(){
        window.location.href="./home_page.html"
    }
    document.querySelector("#cart").addEventListener("click",mycart)
    function mycart(){
        window.location.href="./cart.html"
    }
    let Dash = document.querySelector("#current_user");
    Dash.addEventListener("change", dash_Function);
    function dash_Function(){
         if(Dash.value == "Login"){
            window.location.href="login.html"
        }else if(Dash.value == "Register"){
            window.location.href="./registration.html"
        }
        else if(Dash.value == "Wishlist"){
            window.location.href="./my_wishlist.html"
        }else if(Dash.value == "Your Order"){
            window.location.href="./my_order.html"
        }
        else if(Dash.value == "Your Referrals"){
            window.location.href="./my_referrals.html"
        }
    }
    let user = JSON.parse(localStorage.getItem("loginData"));
    let loged_user = user[user.length - 1].name
    if (user.length > 0) {
    //logout
    if (user !== null) {
        document.querySelector("#user_account").innerHTML =
            `<select name="current_user" id="current_user">
   <option id="useless" class="dash_options" value="">${loged_user}</option>
   <option id="useless" class="dash_options" value="My Account">My Account</option>
   <option id="useless" class="dash_options" value="Wishlist">Wishlist</option>
   <option id="useless" class="dash_options" value="Your Order">Your Order</option>
   <option id="useless" class="dash_options" value="Your Referrals">Your Referrals</option>
   <option class="dash_options" value="Sign Out">Sign Out</option>
 </select>`
    }
    let Dash = document.querySelector("#current_user");
    Dash.addEventListener("change", dashFunction);
    function dashFunction() {
        if (Dash.value == "Sign Out") {
            localStorage.removeItem("loginData");
            window.location.reload();
        }
        else if(Dash.value == "My Account"){
            window.location.href="my_account.html"
        }else if(Dash.value == "Wishlist"){
            window.location.href="my_wishlist.html"
        }else if(Dash.value == "Your Order"){
            window.location.href="my_order.html"
        }
        else if(Dash.value == "Your Referrals"){
            window.location.href="my_referrals.html"
        }
    }
}