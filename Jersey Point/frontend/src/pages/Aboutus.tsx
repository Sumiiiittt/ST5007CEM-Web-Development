import React from 'react';
import "../assets/css/Aboutus.css";
import {Link} from "react-router-dom";

const Aboutus: React.FC = () => {
    const isLoggedIn = !!localStorage.getItem("userId");
    return (
        <div className={"au-container"}>
            <div className={"au-header"}>

                <div className={"au-logo"}>
                    <a href="/dashboard">
                        <img
                            width={100}
                            src={"images/Plantdecor/logo1.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"au-btn_before"}>
                    <button>Brands</button>
                    <button>Categories</button>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                </div>

                <div className={"au-searchbar"}>
                    <input type={"text"} placeholder={"Search Product"} />
                </div>
                <div className={"au-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className={"au-btn-wrapper"}>
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
            <div className={"au-body"}>
                <h1>About Us</h1>
                <p>Welcome to Jersey Point, your ultimate destination for premium-quality jerseys tailored to your passion and style. At Jersey Point, we're not just a marketplace; we're a community of sports enthusiasts, fashion aficionados, and trendsetters who believe in the power of sporting spirit and individual expression.</p>
                <h2>Our Mission</h2>
                <p>Jersey Point was founded with a singular mission: to provide sports fans and fashion enthusiasts with access to top-notch jerseys that reflect their unique identities and support their favorite teams. We're dedicated to offering a seamless online shopping experience, where quality meets affordability, and where every purchase is a testament to your love for sports and style.</p>
                <h2>What We Offer</h2>
                <p>Our extensive collection boasts a wide range of jerseys from various sports leagues, including but not limited to football, basketball, soccer, baseball, hockey, and more. Whether you're rooting for your hometown heroes or celebrating international icons, we have the perfect jersey to showcase your allegiance.</p>
            </div>





            <div className={"au-footer"}>
                <div className={"au-get-help"}>
                    <h1>GET HELP</h1>
                    <Link to="/Customercare"><button>Customer Care</button></Link>
                    <Link to="/Payment"><button>Payment Options</button></Link>
                    <Link to="/returnandrefundpolicy"><button>Return and Refund Policy</button></Link>
                    <Link to="/PrivacyPolicy"><button>Privacy Policy</button></Link>
                    <Link to="/Termsandcondition"><button>Terms and Conditions</button></Link>
                    <span>@2023 PlantDecor Pvt. Ltd. All Rights Reserved</span>

                </div>
                <div className={"au-about-us"}>
                    <h1>Plant Decor</h1>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Careers"><button>Careers</button></Link>
                </div>
                <div className={"au-logos"}>
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

export default Aboutus;
