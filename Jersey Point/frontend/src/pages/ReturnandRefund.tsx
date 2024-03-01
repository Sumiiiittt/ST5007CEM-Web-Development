import React from 'react';
import "../assets/css/ReturnandRefund.css";
import {Link} from "react-router-dom";
const ReturnandRefund: React.FC = () => {
    const isLoggedIn = !!localStorage.getItem("userId");
    return (
        <div className={"rr-container"}>
            <div className={"rr-header"}>

                <div className={"rr-logo"}>
                    <a href="/dashboard"> {/* Replace "/dashboard" with the actual URL of your dashboard page */}
                        <img
                            width={100}
                            src={"../images/Plantdecor/logo1.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"rr-btn_before"}>
                    <button>Brands</button>
                    <button>Categories</button>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                </div>

                <div className={"rr-searchbar"}>
                <input type={"text"} placeholder={"Search Product"} />
                </div>
                <div className={"rr-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className={"rr-btn-wrapper"}>
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
            <div className={"rr-body"}>


                <h2>Returns and Refund Policy</h2>

                <p>At Jersey Point, we strive to ensure your satisfaction with every purchase. Our Returns and Refund Policy is designed to provide you with the necessary information regarding returns, refunds, and the processes involved. Please read the following carefully:</p>

                <h2>Returns Process:</h2>

                <p>1. Returns are facilitated by individual sellers, and the return & refund option availability may vary across product categories. Check the product page for the applicable return policy.
                    2. Products under warranty will be redirected to the respective service center, and return & refund policies may not apply.
                    3. Valid reasons for return include:
                    - Damaged/defective product (physically damaged or broken)
                    - Incorrect/incomplete product (missing or wrong product)
                    - Size issues with fashion products (wrong/different size)
                    - Change of mind (eligible for selected products; refer to the product page for acceptance)</p>

                <h2>Return Cycle and Pickup Period:</h2>

                <p>- Initiate the return request within 7 days of the product return cycle.
                    - For damaged/defective products, initiate the return request within 3 days of receiving the product.
                    - Once the return request is accepted, the product is picked up within 3 days for locations within the valley. For outside valley locations, the pickup period may extend to 7 days.
                    - After pickup, Jersey Point will conduct a quality check, and the refund or any encountered issues will be communicated to the customer.</p>

                <h2>Refund Process:</h2>

                <p>The refund process commences after the product is picked up and undergoes a quality check by our QC Team. The refund time depends on the chosen payment method.</p>

                <p>If you have any questions or concerns about our Returns and Refund Policy, please reach out to our customer service. Thank you for choosing Jersey Point!</p>

            </div>




            <div className={"rr-footer"}>
                <div className={"rr-get-help"}>
                    <h1>GET HELP</h1>
                    <Link to="/Customercare"><button>Customer Care</button></Link>
                    <Link to="/Payment"><button>Payment Options</button></Link>
                    <Link to="/returnandrefundpolicy"><button>Return and Refund Policy</button></Link>
                    <Link to="/PrivacyPolicy"><button>Privacy Policy</button></Link>
                    <Link to="/Termsandcondition"><button>Terms and Conditions</button></Link>
                    <span>@2024 Jerseypoint Pvt. Ltd. All Rights Reserved</span>

                </div>
                <div className={"rr-about-us"}>
                    <h1>Jersey Point</h1>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Careers"><button>Careers</button></Link>



                </div>
                <div className={"rr-logos"}>
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

export default ReturnandRefund;
