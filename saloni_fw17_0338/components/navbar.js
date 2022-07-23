let navbar = () => {
    return `<div id="fixed_nav">
    <div id="middle_head">
        <div id="logo">
            <h1 id="logo_main">SkinStore</h1>
            
        </div>

        <div id="header_search">
            <input id="header_search_input" type="text" placeholder="Search for a product or brand">
            <i class='fa-solid fa-magnifying-glass' id="searchicon"></i>

        </div>

        <div id="box_account_cart">
            <div id="account">
                <p id="user_account"><select name="current_user" id="current_user">
                <option class="dash_options" value="">👤Account </option>
                <option class="dash_options" value="Login">Login</option>
                <option class="dash_options" value="Register">Register</option>
                <option class="dash_options" value="Wishlist">Wishlist</option>
                <option class="dash_options" value="Your Order">Your Order</option>
                <option class="dash_options" value="Your Referrals">Your Referrals</option>
              </select></p>
            </div>

            <div id="cart">
                <p><i class="fa-solid fa-cart-shopping"></i> Cart</p>
            </div>
        </div>
    </div>

    <hr id="header_line">


    <div id="header_navigation">
        <ul>
            <li><a href="">Brands</a>
                <div>
                    <ul>
                        <li><a href="">Brands A-Z</a>
                        <li><a href="">SkinStore Collection</a>
                        <li><a href="">New Brands</a>
                        <li><a href="">The Outset</a>
                        <li><a href="">HAUS LABS BY LADY GAGA</a>
                        <li><a href="">Abbott NYC</a>
                        <li><a href="">GXVE Beauty</a>
                        <li><a href="">Kate Mcleod</a>
                    </ul>
                    <ul>
                        <li><a href="">Only At Sephora</a>
                        <li><a href="">Paula's Choice</a>
                        <li><a href="">InnBeauty Project</a>
                        <li><a href="">The 7 Virtues</a>
                        <li><a href="">MAKEUP BY MARIO</a>
                        <li><a href="">Rare Beauty By Selena Gomez</a>

                    </ul>
                    <ul>
                        <li><a href="">Affordable Brands</a>
                        <li><a href="">SEPHORA COLLECTION</a>
                        <li><a href="">The Ordinary</a>
                        <li><a href="">The Inkey List</a>
                        <li><a href="">Verb</a>
                    </ul>
                    <ul>
                        <li><a href="">Black-Owned Brands</a>
                        <li><a href="">Shani Darden Skin Care</a>
                        <li><a href="">Adowa Beauty</a>
                        <li><a href="">PATTERN By Tracee Ellis Ross</a>
                        <li><a href="">Briogeo</a>
                    </ul>
                    <ul>
                        <li><a href="">Clean At Sephora</a>
                        <li><a href="">ILIA</a>
                        <li><a href="">Olaplex</a>
                        <li><a href="">Tatcha</a>
                        <li><a href="">Ellis Brooklyn</a>
                    </ul>
                </div>
            </li>


            <li><a href="">Sale & Offers</a>
                <div>
                    <ul>
                        <li><a href="">All Sale</a>
                        <li><a href="">Makeup</a>
                        <li><a href="">Skincare</a>
                        <li><a href="">Haircare</a>
                        <li><a href="">Fragrance</a>
                        <li><a href="">Tools and Brushes</a>
                        <li><a href="">Bath And Body</a>
                        <li><a href="">Mini Size</a>
                    </ul>
                    <ul>
                        <li><a href="">Beauty Offers</a>
                    </ul>
                    <ul>
                        <li><a href=""><img
                                    src="https://www.sephora.com/contentimages/meganav/large/slotting-sale-generic-site-desktop-global-navigation-button_copy-only.jpg?imwidth=294"
                                    alt=""></a>
                    </ul>
                    <ul>
                        <li><a href=""><img
                                    src="https://www.sephora.com/contentimages/meganav/large/site-desktop-global-navigation-button-evergreen-beauty-offers-abundance.jpg?imwidth=294"
                                    alt=""></a></li>
                    </ul>
                </div>
            </li>



            <li><a href=".\NewProduct.html">New</a>
                <div>
                    <ul>
                        <li><a href="">All Sale</a>
                        <li><a href="">MakeUp</a>
                        <li><a href="">Skin Care</a>
                        <li><a href="">Hair Care</a>
                        <li><a href="">Fragrance</a>
                        <li><a href="">Tools & Brushes</a>
                        <li><a href="">Skin Care</a>
                        <li><a href="">Bath & Body</a>
                        <li><a href="">Mini Size</a>
                    </ul>
                    <ul>
                        <li><a href="">Beauty Offers</a>

                    </ul>
                    <ul>
                        <li><img src="https://www.sephora.com/contentimages/meganav/large/2022-june-body-site-desktop-global-navigation-button-us.jpg?imwidth=294"
                                alt=""></li>
                    </ul>
                    <ul>
                        <li><img src="https://www.sephora.com/contentimages/meganav/large/2022-6-9-haus-lady-gaga-bundle-b-site-desktop-global-navigation-button-en-us-can.jpg?imwidth=294"
                                alt=""></li>
                    </ul>
                </div>
            </li>

            <li><a href="">Makeup</a>
                <div>
                    <ul>
                        <li><a href="">All Makeup</a>
                        <li><a href="">Face</a>
                        <li><a href="">Foundation</a>
                        <li><a href="">BB & CC Creams</a>
                        <li><a href="">Tinted Moisturizer</a>
                        <li><a href="">Concealer</a>
                        <li><a href="">Face Printer</a>
                        <li><a href="">Setting Spray & Powder</a>
                        <li><a href="">Highlighter</a>
                        <li><a href="">Contour</a>
                        <li><a href="">Color Correct</a>
                        <li><a href="">Face Sets</a>
                    </ul>
                    <ul>
                        <li><a href="">Eye</a>
                        <li><a href="">Eye Palettes</a>
                        <li><a href="">Mascara</a>
                        <li><a href="">Eyeliner</a>
                        <li><a href="">Eyebrow</a>
                        <li><a href="">False EyeLashes</a>
                        <li><a href="">Face Printer</a>
                        <li><a href="">Eye Shadow</a>
                        <li><a href="">Eyelash Serums</a>
                        <li><a href="">Eye Primer</a>
                        <li><a href="">Eye Sets</a>

                    </ul>
                    <ul>
                        <li><a href="">Lip</a>
                        <li><a href="">Lipstick</a>
                        <li><a href="">Lip Gloss</a>
                        <li><a href="">Lip Balm & Treatment</a>
                        <li><a href="">Liquid Lipstick</a>
                        <li><a href="">Lip Stain</a>
                        <li><a href="">Lip Liner</a>
                        <li><a href="">Lip Plumper</a>
                        <li><a href="">Lip Sets</a>
                    </ul>
                    <ul>
                        <li><a href="">Cheek</a>
                        <li><a href="">Blush</a>
                        <li><a href="">Bronzer</a>
                        <li><a href="">Cheek Palettes</a>
                        <li><a href="">Value & Gift Sets</a>
                        <li><a href="">Makeup Palettes</a>
                        <li><a href="">Brushes and Applicators</a>
                        <li><a href="">Accessories</a>
                        <li><a href="">Nail</a>
                    </ul>
                    <ul>
                        <li><a href="">New</a>
                        <li><a href="">BestSellers</a>
                        <li><a href="">Clean Makeup</a>
                        <li><a href="">Vegan Makeup</a>
                        <li><a href="">Mini Size</a>
                        <li><a href="">Value Size</a>
                        <li><a href="">Sephora Collection</a>
                    </ul>
                    <ul>
                        <li><a href="">Help Me Choose</a>
                        <li><a href="">Foundation Quiz</a>
                        <li><a href="">Lip Quiz</a>
                        <li><a href="">Brow QUiz</a>
                        <li><a href="">Complexion Routine Builder</a>
                        <li><a href="">Guide to Foundation</a>
                        <li><a href="">Clean Makeup Guide</a>
                        <li><a href="">No Makeup Makeup</a>
                        <li><a href="">Allure Best On Beauty Makeup</a>
                    </ul>
                </div>
            </li>
            <li><a href="">Skincare</a>
                <div>
                    <ul>
                        <li><a href="">All Skincare</a>
                        <li><a href="">Moisturizers</a>
                        <li><a href="">Night Creams</a>
                        <li><a href="">Face Oils</a>
                        <li><a href="">Mists & Essences</a>
                        <li><a href="">BB & CC Creams</a>
                        <li><a href="">Cleansers</a>
                        <li><a href="">Face Wash & Cleansers</a>
                        <li><a href="">Exfoliaters</a>
                        <li><a href="">Makeup Removers</a>
                        <li><a href="">Face Wipes</a>
                        <li><a href="">Toners</a>
                    </ul>
                    <ul>
                        <li><a href="">Treatments</a>
                        <li><a href="">Face Serums</a>
                        <li><a href="">Blemish & Acne Treatments</a>
                        <li><a href="">Facial Peels</a>
                        <li><a href="">Masks</a>
                        <li><a href="">Face Masks</a>
                        <li><a href="">Sheet Masks</a>
                        <li><a href="">Eye Masks</a>
                    </ul>
                    <ul>
                        <li><a href="">Eye Care</a>
                        <li><a href="">Eye Creams & Treatments</a>
                        <li><a href="">Eye Masks</a>
                        <li><a href="">Lip Balms & Treatments</a>
                    </ul>
                    <ul>
                        <li><a href="">SunScreen</a>
                        <li><a href="">Face Sunscreen</a>
                        <li><a href="">Body Sunscreen</a>
                        <li><a href="">High Tech Tools</a>
                        <li><a href="">Wellness</a>
                    </ul>
                    <ul>
                        <li><a href="">Shop By Concern</a>
                        <li><a href="">Acne & Blemishes</a>
                        <li><a href="">Anti Aging</a>
                        <li><a href="">Dark Spots</a>
                        <li><a href="">Pores</a>
                        <li><a href="">Dryness</a>
                        <li><a href="">Fine Line & Wrinkles</a>
                        <li><a href="">Dullness</a>
                    </ul>
                    <ul>
                        <li><a href="">New</a>
                        <li><a href="">Best Sellers</a>
                        <li><a href="">Vegan Skincare</a>
                        <li><a href="">Value And Giftsets</a>
                        <li><a href="">Mini Size</a>
                        <li><a href="">value Size</a>
                        <li><a href="">Sephora Collection</a>
                    </ul>
                    <ul>
                        <li><a href="">Help Me Choose</a>
                        <li><a href="">Skin Care Quiz</a>
                        <li><a href="">Skin Routine Quiz</a>
                        <li><a href="">Clinnical Skincare</a>
                        <li><a href="">Skincare Ingredients</a>
                        <li><a href="">Best Skincare under $35</a>
                        <li><a href="">Clean Skincare Guide</a>
                        <li><a href="">Skincare By Age</a>
                        <li><a href="">SkinCare for Your Skin Type</a>
                        <li><a href="">Allure Best Of Beauty Skincare</a>
                    </ul>
                </div>
            </li>
            <li><a href="">Hair</a>
                <div>
                    <ul>
                        <li><a href="">All Hair</a>
                        <li><a href="">Shampoo & Conditioners</a>
                        <li><a href="">Shampoo</a>
                        <li><a href="">Conditioners</a>
                        <li><a href="">Scalp Scrub</a>
                    </ul>
                    <ul>
                        <li><a href="">Treatments</a>
                        <li><a href="">Hair Masks</a>
                        <li><a href="">Leave-In Conditioners</a>
                        <li><a href="">Hair Oils</a>
                        <li><a href="">Hair Serums</a>
                        <li><a href="">Scalp Treatments</a>
                        <li><a href="">Hair Supplements</a>
                        <li><a href="">Hair Thinning & Hair Loss</a>
                    </ul>
                    <ul>
                        <li><a href="">Styling</a>
                        <li><a href="">Styling Creams</a>
                        <li><a href="">Dry Shampoo</a>
                        <li><a href="">Hair Primers</a>
                        <li><a href="">Hair Spray</a>
                        <li><a href="">Curly,Coily,Textured Haircare</a>
                        <li><a href="">Hair Dye & Root Touchups</a>
                        <li><a href="">Hair Toners</a>
                    </ul>
                    <ul>
                        <li><a href="">Value & GiftSets</a>
                        <li><a href="">Tools</a>
                        <li><a href="">Hair Dryers</a>
                        <li><a href="">Hair Straightners & Fist Irons</a>
                        <li><a href="">Curling Irons</a>
                        <li><a href="">Brushes & Combs</a>
                        <li><a href="">Accessories</a>
                    </ul>
                    <ul>
                        <li><a href="">Shop BY Concern</a>
                        <li><a href="">Damaged Hair</a>
                        <li><a href="">Dryness</a>
                        <li><a href="">Frizz</a>
                        <li><a href="">Scalp Care</a>
                        <li><a href="">BB & CC Creams</a>
                        <li><a href="">Volume</a>
                        <li><a href="">Color Care</a>
                    </ul>
                    <ul>
                        <li><a href="">New</a>
                        <li><a href="">Best Sellers</a>
                        <li><a href="">Clean Haircare</a>
                        <li><a href="">Vegan Haircare</a>
                        <li><a href="">Mini Size</a>
                        <li><a href="">Value Size</a>
                        <li><a href="">Sephora Collection</a>
                        <li><a href="">Luxury Hair</a>
                    </ul>
                    <ul>
                        <li><a href="">Help Me Choose</a>
                        <li><a href="">Hair Quiz</a>
                        <li><a href="">Clean Hair Care Guide</a>
                        <li><a href="">Curly,Coily,Textured Haircare Guide</a>
                        <li><a href="">Healty Hair Care Guide</a>
                        <li><a href="">Allure Best Of Beauty Hair</a>
                    </ul>
                </div>
            </li>
            <li><a href="">Fragrance</a>
                <div>
                    <ul>
                        <li><a href="">All Fragrance</a>
                        <li><a href="">Women</a>
                        <li><a href="">Perfume</a>
                        <li><a href="">Perfume Oils</a>
                        <li><a href="">RollerBalls & Travel Size</a>
                        <li><a href="">Body Mist & Hair Mist</a>
                        <li><a href="">Men</a>
                        <li><a href="">Cologne</a>
                    </ul>
                    <ul>
                        <li><a href="">Value & Gift Sets</a>
                        <li><a href="">Perfume Gift Sets</a>
                        <li><a href="">Cologne Gift Sets</a>
                        <li><a href="">Home Gift Sets</a>
                        <li><a href="">Sephora Favorites</a>
                    </ul>
                    <ul>
                        <li><a href="">Candles & Home Scents</a>
                        <li><a href="">Cnadles</a>
                        <li><a href="">Diffusers</a>
                        <li><a href="">Shop By Fragrance Family</a>
                        <li><a href="">Floral</a>
                        <li><a href="">Fresh</a>
                        <li><a href="">Warm & Spicy</a>
                        <li><a href="">Earthly & Woody</a>
                    </ul>
                    <ul>
                        <li><a href="">New</a>
                        <li><a href="">Bestsellers</a>
                        <li><a href="">Clean Fragrance</a>
                        <li><a href="">Vegan Fragrance</a>
                        <li><a href="">Mini Size</a>
                        <li><a href="">Value Size</a>
                        <li><a href="">Luxury Fragrance</a>
                    </ul>
                    <ul>
                        <li><a href="">Help Me Choose</a>
                        <li><a href="">Clean Fragrance Guide</a>
                        <li><a href="">Fragrance Quiz</a>
                        <li><a href="">Fragrance Notes Guide</a>
                        <li><a href="">Best Affordable Fragrance</a>
                        <li><a href="">Niche Fragrance</a>
                        <li><a href="">Next Big Thing</a>
                        <li><a href="">Allure Best of Beauty Fragrance</a>
                    </ul>
                </div>
            </li>
            <li><a href="">Tools & Brushes</a>
                <div>
                    <ul>
                        <li><a href="">All Tools & Brushes</a>
                        <li><a href="">Sephora Collection</a>
                        <li><a href="">Brushes & Applications</a>
                        <li><a href="">Brush Sets</a>
                        <li><a href="">Face Brushes</a>
                        <li><a href="">Eye Brushes</a>
                        <li><a href="">Lip Brushes</a>
                        <li><a href="">Sponges & Applicators</a>
                        <li><a href="">Brush Cleaners</a>
                        <li><a href="">Facial Cleansing Brushes</a>
                    </ul>
                    <ul>
                        <li><a href="">Hair Tools</a>
                        <li><a href="">Hair Dryers</a>
                        <li><a href="">Straightners & Flat Irons</a>
                        <li><a href="">Curling Irons</a>
                        <li><a href="">Brushes & Combs</a>
                        <li><a href="">Accessories</a>
                    </ul>
                    <ul>
                        <li><a href="">Beauty Tools</a>
                        <li><a href="">Anti-Aging</a>
                        <li><a href="">Teeth Whitening</a>
                        <li><a href="">Hair Removal</a>
                        <li><a href="">Tweezers & Eyebrows</a>
                        <li><a href="">Manicure & Pedicure</a>
                        <li><a href="">Eyelash Curlers</a>
                        <li><a href="">Sharpners</a>
                        <li><a href="">Vibrators & Devices</a>
                    </ul>
                    <ul>
                        <li><a href="">MakeUp & travle Cases</a>
                        <li><a href="">Value & Gift Sets</a>
                        <li><a href="">New</a>
                        <li><a href="">BestSellers</a>
                        <li><a href="">Allure Best of Beauty Tools & Brushes</a>
                    </ul>
                    <ul>
                        <li><a href=""><img
                                    src="https://www.sephora.com/contentimages/meganav/large/2020-07-29-pro-brushes-site-desktop-global-navigation-button.jpg?imwidth=294"
                                    alt=""></a></li>
                    </ul>
                </div>
            </li>
            <li><a href="">Bath & Body</a>
                <div>
                    <ul>
                        <li><a href="">All Bath & Body</a>
                        <li><a href="">Bath& Body Shower</a>
                        <li><a href="">Body Wash & Shower Gel</a>
                        <li><a href="">Scrub & Exfoliants</a>
                        <li><a href="">Bath Soaks & Bubble Bath</a>
                        <li><a href="">Body Moisturizers</a>
                        <li><a href="">Body Lotions & Body Oils</a>
                        <li><a href="">Hand Cream And Foot Creams</a>
                    </ul>
                    <ul>
                        <li><a href="">Body Care</a>
                        <li><a href="">Intimate Care</a>
                        <li><a href="">Hand Sanitizers</a>
                        <li><a href="">Cellulite & Stretch Masks</a>
                        <li><a href="">Deodorant & Antiperspirent</a>
                        <li><a href="">Value & Gift Sets</a>
                        <li><a href="">Shop By Concern</a>
                        <li><a href="">Stretch Marks & Firming</a>
                        <li><a href="">Hydration</a>
                        <li><a href="">Smooth Texture</a>
                        <li><a href="">Even Skin Tone and COlor Correction</a>
                    </ul>
                    <ul>
                        <li><a href="">CAndle and Home Scents</a>
                        <li><a href="">Sunscreens</a>
                        <li><a href="">Face Sunscreen</a>
                        <li><a href="">Body Sunscreen</a>
                        <li><a href="">Self Tanners</a>
                        <li><a href="">Beauty Supplements</a>
                    </ul>
                    <ul>
                        <li><a href="">New</a>
                        <li><a href="">BestSellers</a>
                        <li><a href="">Mini Size</a>
                        <li><a href="">Value Size</a>
                        <li><a href="">Sephora Collection</a>
                        <li><a href="">Allure Best Of Beauty Bath & Body</a>
                    </ul>
                    <ul>
                        <li><a href=""><img
                                    src="https://www.sephora.com/contentimages/meganav/large/2020-9-14-site-desktop-global-navigation-button-banner-sol-de-janeiro.jpg?imwidth=294"
                                    alt=""></a></li>
                    </ul>
                </div>
            </li>
            <li><a href="">Mini Size</a>
                <div>
                    <ul>
                        <li><a href="">All Mini Size</a>
                        <li><a href="">Makeup</a>
                        <li><a href="">Skincare</a>
                        <li><a href="">Hair</a>
                        <li><a href="">Fragrance</a>
                        <li><a href="">Bath and Body</a>
                    </ul>
                    <ul>
                        <li><a href="">Value & Gift Sets</a>
                        <li><a href="">$15 and Under</a>
                        <li><a href="">$25 and Under</a>
                        <li><a href="">Sephora Favorites</a>
                    </ul>
                    <ul>
                        <li><a href=""><img
                                    src="https://www.sephora.com/contentimages/meganav/large/2020-07-29-site-global-navigation-button-evergreen-crossworld-minis.jpg?imwidth=294"
                                    alt=""></a></li>
                    </ul>
                    <ul>
                        <li><a href=""><img
                                    src="https://www.sephora.com/contentimages/meganav/large/2020-12-23-site-dt-botnav-seph-coll-US.jpg?imwidth=294"
                                    alt=""></a></li>
                    </ul>
                </div>
            </li>
            <li><a href="">Gifts</a>
                <div>
                    <ul>
                        <li><a href="">All Gifts</a>
                        <li><a href="">Gift Finder</a>
                        <li><a href="">Gift Cards</a>
                        <li><a href="">Value and Gift Sets</a>
                        <li><a href="">By Price</a>
                        <li><a href="">$10 and Under</a>
                        <li><a href="">$15 and Under</a>
                        <li><a href="">$25 and Under</a>
                        <li><a href="">$50 and Under</a>
                        <li><a href="">$75 and Under</a>
                        <li><a href="">$100 and Under</a>
                    </ul>
                    <ul>
                        <li><a href="">By Category</a>
                        <li><a href="">Makeup</a>
                        <li><a href="">Skincare</a>
                        <li><a href="">Hair</a>
                        <li><a href="">Fragrance</a>
                        <li><a href="">Candles and Home Scents</a>
                        <li><a href="">Tools</a>
                        <li><a href="">Brush Sets and Accessories</a>
                        <li><a href="">Bath and Body</a>
                    </ul>
                    <ul>
                        <li><a href="">By Recipient</a>
                        <li><a href="">For Her</a>
                        <li><a href="">For Him</a>
                        <li><a href="">For Teenagers</a>
                        <li><a href="">For Them</a>
                    </ul>
                    <ul>
                        <li><a href="">Top Rated Gifts</a>
                        <li><a href="">Mini Size</a>
                        <li><a href="">Only At Sephora</a>
                        <li><a href="">Luxury</a>
                        <li><a href="">Gift Finder</a>
                    </ul>
                    <ul>
                        <li><a href=""><img
                                    src="https://www.sephora.com/contentimages/meganav/large/site-desktop-global-navigation-button-evergreen-gift-card.jpg?imwidth=294"
                                    alt=""></a></li>
                    </ul>
                </div>
            </li>
            <li><a href="">Beauty Under $20</a>
                <div>
                    <ul>
                        <li><a href="">Makeup Under $20</a>
                        <li><a href="">Skincare Under $20</a>
                        <li><a href="">Hair Under $20</a>
                        <li><a href="">Fragrance Under $20</a>
                        <li><a href="">Tools & Brushes Under $20</a>
                        <li><a href="">Bath and Body Under $20</a>
                    </ul>
                    <ul>
                        <li><a href="">Sephora Collection Under $20</a>
                        <li><a href="">Makeup</a>
                        <li><a href="">Skincare</a>
                        <li><a href="">Hair</a>
                        <li><a href="">Candles</a>
                        <li><a href="">Tools and Brushes</a>
                        <li><a href="">Bath And Body</a>
                        <li><a href="">Value & Gift Sets</a>
                        <li><a href="">Clean Beauty</a>
                    </ul>
                    <ul>
                        <li><a href=""><img
                                    src="https://www.sephora.com/contentimages/meganav/large/2022-04-29-sc-instabrow-site-desktop-global-navigation-button-beauty-under-20-us.jpg?imwidth=294"
                                    alt=""></a>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</div>
<!--DRND_slider here-->
<div id="DRND_slider">
    <div class="DRND_slid">
        <p><i class="fa-solid fa-truck"></i> FREE US Shipping Over $49
        </p>
    </div>
    <div class="DRND_slid">
        <p><i class="fa-solid fa-rotate"></i> Refer a Friend, Get $15</p>
    </div>
    <div class="DRND_slid">
        <p><i class="fa-solid fa-user-plus"></i></i> New Customers Save 20% - Use Code NEWBIE</p>
    </div>
    <div class="DRND_slid">
        <p><i class="fa-solid fa-mobile-screen-button"></i> Download Our App</p>
    </div>
</div>


<!--strip_banner here-->

<div id="strip_banner">
    <div id="strip_banner_txt">
        15% off with code SS15 + 16-Piece Beauty Bag (Worth $106) @ $150 | Shop now >
    </div>

</div>
`
};

export default navbar;