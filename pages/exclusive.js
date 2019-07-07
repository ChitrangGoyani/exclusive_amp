import {withAmp} from 'next/amp'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const exclusive = (props) => (
    <div>
        <Head>
            <link rel="prerender" href="https://www.thesouledstore.com/exclusive" crossorigin/>
            <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet'/>
            <script async custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"></script>
            <style amp-custom>
                {`
                
                @media screen and (min-width: 320px)
                    {
                        html{
                            scroll-behavior:smooth;
                        }
                        .container_exclusive_banner {
                            background-color: #52bdae;
                            display: block;
                            font-family:Source Sans Pro, sans-serif;
                            width:100%;
                            margin: auto;
                        }

                        .right_teal{
                            display:flex;
                        }
                        .left_teal{
                            display:block;
                            padding-top:5%;
                        }
                        .teal_banner_line1{
                            display:block;
                            width:100%;  
                            text-align:center;
                            font-size: 18px;
                            color:white;
                            padding-top:7%;
                        }
                        .teal_banner_line2{
                            width:100%;
                            text-align:center;
                            color:white;
                            font-size: 18px;
                            display:block;
                        }
                        .teal_banner_line3{
                            font-size:1.7em;
                            width:100%;
                            text-align:center;
                            display:block;
                            font-weight: bold;
                            color:white;
                        }
                        .addtocart_cardone{
                            background-color: white;
                            display:block;
                            margin-left:5%;
                            margin-right:2%;
                            margin-bottom:5%;
                            width:45%;
                            
                        }
                        .addtocart_cardtwo{
                            background-color: white;
                            display:block;
                            margin-right:5%;
                            margin-bottom:5%;
                            width:45%;
                        }
                        .upper_ka_bg{
                            background-color:#e7e6e6;
                            display:inline-block;
                            margin-top:0px;
                            width:100%;
                            
                        }
                        .upper{
                            text-align: center;
                            font-weight: bold;
                            color: #58595f;
                            padding:0;
                            letter-spacing:2%;
                            font-size:15px;
                        }
                        .permonth{
                            color:black;
                            text-align: center;
                            font-size: 12px;
                            color: #58595f;
                            font-weight: bold;
                            letter-spacing: 1px;
                        }
                        .instant_access{
                            color:black;
                            text-align: center;
                            font-size: 12px;
                            color: #58595f;
                            font-weight: bold;
                            letter-spacing: 1px;
                        }
                        .price{
                            background-color:#e7e6e6 ;
                            margin-top:0px;
                            text-align: center;
                            font-weight: bold;
                            margin-bottom:0px;
                            color: #58595f;
                            padding: 2% 10% 2% 5%;
                            letter-spacing: 1px;
                            font-size: 18px;
                        }
                        .addtocart_button{
                            background-color:#ed3833;
                            color: white;
                            padding:8px;
                            display: block;
                            margin:auto;
                            margin-top:10px;
                            margin-bottom:10px;
                            border-radius: 6px;
                            border:none;
                        }
                        .brackets_shit{
                            display:block;
                            margin:auto;
                            width:100%;
                            text-align:center;
                            font-size:16px;
                            color:white;
                            padding-bottom:7%;
                            font-style:italic;
                        
                        }
                        .container_3buttons{
                            display:flex;
                            font-family:Source Sans Pro, sans-serif;
                            margin-top:7%;

                        }
                         .benefits_div{
                            background-color:#e7e6e6;
                            display:flex;
                            padding-left:5%;
                            padding-right:5%;
                            ffont-family:Source Sans Pro, sans-serif;
                            border-right:2px solid white;
                            width:100%;
                         }
                         .benefits_div:hover, .price_comp_div:hover, .faqs_div:hover{
                             border-bottom:2px solid red;
                         }
                         .benefits{
                            text-align:center;
                            color: #58595f;
                            font-size:10px;
                            display:block;
                            margin:auto;
                            letter-spacing:2px;
                            font-weight:bold;
                         }
                         .price_comp_div{
                            background-color:#e7e6e6;
                            display:flex;
                            font-family:Source Sans Pro, sans-serif;
                            padding-left:5%;
                            padding-right:5%;
                            padding-top:2%;
                            padding-bottom:2%;
                            border-right:2px solid white;
                            
                            width:100%;                            
                         }
                         .price_comp{

                            text-align:center;
                            color: #58595f;
                            font-size:10px;
                            display:block;
                            margin:auto;
                            letter-spacing:2px;
                            font-weight:bold;
                         }
                         .faqs_div{

                            background-color:#e7e6e6;
                            display:flex;
                            padding-left:5%;
                            padding-right:5%;
                            font-family:Source Sans Pro, sans-serif;
                            width:100%;
                         }
                         .faqs{
                            text-align:center;
                            color: #58595f;
                            font-size:10px;
                            display:block;
                            margin:auto;
                            letter-spacing:2px;
                            font-weight:bold;  
                         }
                         .section_title_wrapper{
                             text-align:center;
                             white-space:nowrap;
                             overflow:hidden;
                             display:block;
                             margin-top:5%;
                             
                         }
                         .section_title{
                            position: relative;
                            display: inline-block;
                            font-size: 15px;
                            letter-spacing: 2px;
                            font-weight:bold;
                            color: #ed2d2f;
                            font-family:Source Sans Pro, sans-serif;
                            margin-bottom:5%;
                            z-index:-1;
                         }
                         .section_title:before{
                            right: 100%;
                            margin-right: 10%;
                         }
                         .section_title:after{
                            left: 100%;
                            margin-left: 10%;
                         }
                         .section_title:before, .section_title:after{
                            content: "";
                            position: absolute;
                            top: 50%;
                            width: 9999px;
                            height: 10px;
                            background-image: initial;
                            background-position-x: initial;
                            background-position-y: initial;
                            background-size: initial;
                            background-repeat-x: initial;
                            background-repeat-y: initial;
                            background-attachment: initial;
                            background-origin: initial;
                            background-clip: initial;
                            background-color: rgb(203, 80, 87);
                         }
                         .table_wrapper{
                            display:block;
                            font-family:Source Sans Pro, sans-serif;
                            width:100%;
                            margin-left:7.7%;
                            margin-top:6%;
                            
                         }
                         table{
                            border-collapse: collapse;
                            border: 5px solid #52bdae;
                            width:95%;
                            margin:-5%;
                            overflow:auto;
                         }
                         td,th{
                             border:1px solid black;
                             text-align:center;
                             font-size:10px;
                             padding:4%;
                         }
                         .red_prices{
                             color: #ed2d2f
                         }
                         .faqs_footer{
                            font-family:Source Sans Pro, sans-serif;
                         }
                         header{
                             font-size:12px;
                             padding:2%;
                         }
                         .faq_content{
                            font-size:10px;
                            padding:2%;
                            letter-spacing:1px; 
                            color:#5f7082;
                         }
                         div.sticky_soul_red{ 
                            
                            background-color:#ed2d2f;
                            position:fixed;
                            width:100%;
                            height:2.9%;
                            top:0;
                         }
                         div.sticky_soul_white{
                            background-color:white;
                            position:fixed;
                            width:100%;
                            height:10%;
                            right:0;
                            top:0;
                         }
                         amp-img.sticky_soul{
                            position:fixed;
                            top:5px;
                            display:flex;
                            margin-left:40%;
                            z-index:3;
                         }    
                         a{
                             text-decoration:none;
                         }
                         a:visited{
                             color:#58595f;
                         }
                         a:active{
                            color:#58595f;
                         }
                         a:hover{
                            color:#58595f;
                         }
                         a:link{
                            color:#58595f;
                         }
                         .darius_gif{
                             margin-top:20%;
                             margin-bottom:10%;
                             display:block;
                             z-index:-1;
                             
                         }
                         .banners{
                            z-index:-1;
                            display:block;
                            margin-bottom:5%;
                         }
                    }
                
                `}

            </style>
        </Head>
        <body>
            <div class="sticky_soul_white"></div>
            <div class="sticky_soul_red">
            </div>
            <div>
                <amp-img class="sticky_soul" src="https://images.thesouledstore.com/public/theSoul/storage/tss-logos/exclusive-logo_Black.png" width="80" height="52">
                </amp-img>
            </div>                            
            <amp-img layout="responsive" class="darius_gif" width="320px" height="400px"src="https://images.thesouledstore.com/public/theSoul/storage/exclusive-landing-pages-images/darius_gif.gif"></amp-img>
            <div class="container_exclusive_banner">
                <div class="left_teal" >
                    <p>
                        <p class="teal_banner_line1"> BECOME AN EXCLUSIVE MEMBER </p>
                        <p class="teal_banner_line2"> AT AN </p>
                        <p class="teal_banner_line3"> INTRODUCTORY PRICE </p> 
                        
                    </p>
                </div>
                <div class="right_teal">
                    <div class="addtocart_cardone">
                        <div class="upper_ka_bg">
                            <p class="upper"> MONTHLY </p>
                            <p class="upper"> MEMBERSHIP </p>
                        </div>    
                            <p class="permonth">Rs. 149/- pm</p>
                            <p class="instant_access">Get instant access 
                                for a full month.</p>
                            <h3 class="price">@ Rs. 149/-</h3>  
                            <a href="https://www.thesouledstore.com/exclusive"><button class="addtocart_button">ADD TO CART</button></a>
                    </div>
                    <div class="addtocart_cardtwo">
                        <div class="upper_ka_bg">
                            <p class="upper"> ANNUAL </p>
                            <p class="upper"> MEMBERSHIP </p>
                        </div>    
                            <p class="permonth">Rs. 25/- pm</p>
                            <p class="instant_access">Get instant access 
                                for a full year.</p>
                            <h3 class="price">@ Rs. 299/-</h3>   
                            <a href="https://www.thesouledstore.com/exclusive"><button class="addtocart_button">ADD TO CART</button></a>
                    </div>
                    
                </div>   
                <p class="brackets_shit">(Adding membership to cart will unlock Exclusive prices instantly.)</p>
                </div>    
            <div class="container_3buttons">
                    <div class="benefits_div">
                            <p class="benefits"><a href="#benefits"> BENEFITS</a> </p>
                    </div>
                    <div class="price_comp_div">
                            <p class="price_comp"><a href="#price_comparison"> PRICE COMPARISON </a></p>
                    </div>
                   <div class="faqs_div">
                        <p class="faqs"> <a href="#faqs">FAQS</a> </p>
                    </div>
            </div>  
            <div class="section_title_wrapper">
                <span id="benefits" class="section_title">BENEFITS</span>
                <amp-img class="banners" src="https://images.thesouledstore.com/public/theSoul/storage/exclusive-landing-pages-images/website-banners_mobile_Discounted-prices.jpg" width="320px" height="300px" layout="responsive"></amp-img>
                <amp-img class="banners" src="https://images.thesouledstore.com/public/theSoul/storage/exclusive-landing-pages-images/website-banners_mobile_priortised.jpg" width="320px" height="300px" layout="responsive"></amp-img>
                <amp-img class="banners" src="https://images.thesouledstore.com/public/theSoul/storage/exclusive-landing-pages-images/website-banners_mobile_early-access1.jpg" width="320px" height="300px" layout="responsive"></amp-img>
                <amp-img class="banners" src="https://images.thesouledstore.com/public/theSoul/storage/exclusive-landing-pages-images/website-banners_mobile_freedelivery.jpg" width="320px" height="300px" layout="responsive"></amp-img>
            </div>  
            <div class="section_title_wrapper">
                <span  id="price_comparison" class="section_title">PRICE COMPARISON</span>
            </div>  
            <div class="table_wrapper">
                <table> 
                <thead><tr><th>PRODUCT</th> <th>CURRENT PRICE</th> <th>EXCLUSIVE PRICES</th></tr></thead>
                <tbody><tr><td>T-SHIRTS</td> <td class="grey">Rs. 499 - Rs. 699</td> <td class="red_prices">Rs. 199 onwards</td></tr> <tr><td>T-SHIRT DRESSES</td> <td class="grey">Rs. 599 - Rs. 699</td> <td class="red_prices">Rs. 349 onwards</td></tr> <tr><td>FULL SLEEVE T-SHIRTS</td> <td class="grey">Rs. 599</td> <td class="red_prices">Rs. 399 onwards</td></tr> <tr><td>TANK TOPS</td> <td class="grey">Rs. 349 - Rs. 399</td> <td  class="red_prices">Rs. 249 onwards</td></tr> <tr><td>VESTS</td> <td class="grey">Rs. 399</td> <td class="red_prices">Rs. 249 onwards</td></tr> <tr><td class="text-uppercase">Boxers</td> <td class="grey">Rs. 399</td> <td class="red_prices">Rs. 199 onwards</td></tr> <tr><td>BACKPACKS</td> <td class="grey">Rs. 899 - Rs. 999</td> <td class="red_prices">Rs. 599 onwards</td></tr> <tr><td>MOBILE COVERS</td> <td class="grey">Rs. 299 - Rs. 599</td> <td class="red_prices">Rs. 299 onwards</td></tr> <tr><td>HOODIES</td> <td class="grey">Rs. 949</td> <td  class="red_prices">Rs. 599 onwards</td></tr> <tr><td>SOCKS</td> <td class="grey">Rs. 249</td> <td class="red_prices">Rs. 99 onwards</td></tr> <tr><td>NOTEBOOKS</td> <td class="grey">Rs. 199</td> <td class="red_prices">Rs. 99 onwards</td></tr> <tr><td>MUGS</td> <td class="grey">Rs. 249 - Rs. 499</td> <td class="red_prices">Rs. 199 onwards</td></tr> <tr><td>BADGES</td> <td class="grey">Rs. 49</td> <td class="red_prices">Rs. 19 onwards</td></tr> <tr><td>STICKERS</td> <td class="grey">Rs. 49</td> <td class="red_prices">Rs. 19 onwards</td></tr> <tr><td>PINS</td> <td class="grey">Rs. 149</td> <td class="red_prices">Rs. 79 onwards</td></tr> <tr><td>FLIP FLOPS</td> <td class="grey">Rs. 499</td> <td class="red_prices">Rs. 199 onwards</td></tr> <tr><td>CAPS</td> <td class="grey">Rs. 699</td> <td class="red_prices">Rs. 199 onwards</td></tr> <tr><td>KEYCHAINS</td> <td class="grey">Rs. 149</td> <td class="red_prices">Rs. 79 onwards</td></tr></tbody>    
                </table>       
            </div>
            <div class="section_title_wrapper">
                <span class="section_title">FAQS</span>
            </div>
            <div id="faqs">
                <amp-accordion animate>
                    <section class="faqs_footer">
                        <header>Is the fee all inclusive?</header>
                        <p class="faq_content">The annual/ monthly introductory offer of Rs. 299/ 149 is excl. GST. The Souled Store may revise this annual/ monthly fee at any time, without prior intimation. However, such price change will not anyone who has already purchased the membership.</p>
                    </section>
                    <section class="faqs_footer">
                        <header>Are all t-shirts available at Rs. 399?</header>
                        <p class="faq_content">Most t-shirts are priced at Rs. 399, but we also have some tees starting as low as Rs. 199! Make sure you regularly check out our website and social media to see what offers we’re running for Exclusive members. Please note that some t-shirts and jerseys might be priced differently, based on the artist preference (they take the final call), design, and quality of the product.</p>
                    </section>
                    <section class="faqs_footer">
                        <header>Do I need to buy the membership before I start getting discounts?</header>
                        <p class="faq_content">Nope. The moment you add the Exclusive membership to your cart, you unlock discounted prices. In your first order itself (the one that contains the membership), you can start shopping at Exclusive prices, and recover your entire yearly membership fee in no time. Go get yours now!
                        We will keep adding new benefits round the year- regularly check our website/ social media for updates.</p>
                    </section>
                    <section class="faqs_footer">
                        <header>How long do these benefits last?</header>
                        <p class="faq_content">All benefits associated with The Souled Store Exclusive are available for a year/ month, depending on which membership you opt for.</p>
                    </section>
                    <section class="faqs_footer">
                        <header>Are all products available on discount to members?</header>
                        <p class="faq_content">Yes, all products on the website will be available at a discounted rate to members. If a product is available at a discounted rate to non-members, it’ll be available to members at the same (or lower) rate. Basically, you NEVER pay full price again.</p>
                    </section>
                    <section class="faqs_footer">
                        <header>Will I be charged for gift wrapping?</header>
                        <p class="faq_content">Yes, gift wrapping charges will be applicable.</p>
                    </section>
                    <section class="faqs_footer">
                        <header>What if I want to cancel my membership mid-way?</header>
                        <p class="faq_content">
                        The Exclusive membership is non-refundable and non-transferable. Your annual/ monthly membership may be cancelled by The Souled Store in case of misuse, in which event your last annual/ monthly fee shall be refunded to you.</p>
                    </section>
                    <section class="faqs_footer">
                        <header>Will there be any shipping charges?</header>
                        <p class="faq_content">No. All Exclusive members get free shipping on all deliveries. Our minimum order value is Rs. 245. As long as you hit that, shipping is on us.</p>
                    </section>
                    <section class="faqs_footer">
                        <header>Can I club the Exclusive discount with other offers?</header>
                        <p class="faq_content">No additional discounts can be availed on our products when using the Exclusive discount. With products available at massive discounts to Exclusive members, you won’t even feel the need to add more discounts!</p>
                    </section>
                    <section class="faqs_footer">
                        <header>WHY didn’t you guys launch this earlier? Ahhh!</header>
                        <p class="faq_content">
                            Honestly, we’re not sure either. But better late than never!</p>
                    </section>
                </amp-accordion>        
            </div>
        </body>
    </div>


)

export default withAmp(exclusive , {hybrid:true})