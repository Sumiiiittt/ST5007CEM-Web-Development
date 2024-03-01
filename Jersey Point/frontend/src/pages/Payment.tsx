import React from 'react';
import "../assets/css/Payment.css";
import {Link} from "react-router-dom";
const Payment: React.FC = () => {
    const isLoggedIn = !!localStorage.getItem("userId");
    return (
        <div className={"py-container"}>
            <div className={"py-header"}>

                <div className={"py-logo"}>
                    <a href="/dashboard"> {/* Replace "/dashboard" with the actual URL of your dashboard page */}
                        <img
                            width={100}
                            src={"../images/Plantdecor/logo1.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"py-btn_before"}>
                    <button>Brands</button>
                    <button>Categories</button>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                </div>

                <div className={"py-searchbar"}>
                <input type={"text"} placeholder={"Search Product"} />
                </div>
                <div className={"py-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className={"py-btn-wrapper"}>
                    <button><i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</button>
                    <Link to={"/wishlist"}><button><i className="fa-regular fa-heart"></i>Wishlist</button></Link>
                    {isLoggedIn ? (
                        <>
                            <Link to="/myaccount">
                                <button>My Account</button>
                            </Link>
                            <Link to="/">
                                <button onClick={()=>{
                                    localStorage.clear();
                                    window.location.href="/login"
                                }}>Sign Out</button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login"><button>Sign In</button></Link>
                            <Link to="/register"><button>Sign Up</button></Link>
                        </>
                    )}
                </div>
            </div>
            <div className={"py-about-us-body"}>
                <h1>PAYMENT OPTIONS</h1>

                <h1>Payment Methods:</h1>

                <h1>1. How can I make payments for my Jersey Point purchases?</h1>
                <p>Jersey Point provides you with convenient payment options. You can choose between online payment using Khalti wallet or opt for cash on delivery.</p>

                <h1>2. What is Cash on Delivery?</h1>
                <p>If you prefer not to make an online payment, Plant Decor offers Cash on Delivery (C-o-D) as a payment method. With C-o-D, you can pay in cash at the time of the actual product delivery at your doorstep, eliminating the need for any advance online payment. Please note that only Nepali Rupees are accepted for C-o-D, and foreign currency or cheques are not applicable.</p>

                <h1>3. How do I pay through Khalti?</h1>
                <p>The Khalti service, available at khalti.com, provides an easy platform for Nepalis to pay utility bills, purchase mobile recharge cards, and shop for household items. To utilize Khalti for your Plant Decor purchases:
                    - Create a Khalti account and register your bank account.
                    - During the checkout process on Plant Decor, select the Khalti payment option.
                    - Log into Khalti and complete the secure checkout using your email and password.
                </p>
                <p>For more information about Khalti, visit their website: <a href="https://khalti.com" target="_blank" rel="noopener noreferrer">Khalti</a></p>
            </div>





            <div className={"py-footer"}>
                <div className={"py-get-help"}>
                    <h1>GET HELP</h1>
                    <Link to="/Customercare"><button>Customer Care</button></Link>
                    <Link to="/Payment"><button>Payment Options</button></Link>
                    <Link to="/returnandrefundpolicy"><button>Return and Refund Policy</button></Link>
                    <Link to="/PrivacyPolicy"><button>Privacy Policy</button></Link>
                    <Link to="/Termsandcondition"><button>Terms and Conditions</button></Link>
                    <span>@2023 PlantDecor Pvt. Ltd. All Rights Reserved</span>


                </div>
                <div className={"py-about-us"}>
                    <h1>Jersey Point</h1>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Careers"><button>Careers</button></Link>





                </div>
                <div className={"py-logos"}>
                    <span>Connect with us:</span>
                    <a href="https://www.facebook.com/profile.php?id=61555012223662&is_tour_dismissed=true"
                       target="_blank" rel="noopener noreferrer">
                        <img
                            width={43}
                            src={"images/fb.png"}
                            alt="Facebook"
                        />
                    </a>

                    <a href="https://www.instagram.com/luga.hub69/"
                       target="_blank" rel="noopener noreferrer">
                        <img
                            width={43}
                            src={"images/insta.png"}
                            alt="Facebook"
                        />
                    </a>
                    <a href="https://www.threads.net/@luga.hub69"
                       target="_blank" rel="noopener noreferrer">
                        <img
                            width={43}
                            src={"images/thread.png"}
                            alt="X"
                        />
                    </a>


                </div>

            </div>
        </div>

    );
};

export default Payment;
