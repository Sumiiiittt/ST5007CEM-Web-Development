import React from 'react';
import "../assets/css/Careers.css";
import {Link} from "react-router-dom";

const Careers: React.FC = () => {
    const isLoggedIn = !!localStorage.getItem("userId");
    return (
        <div className={"cr-container"}>
            <div className={"cr-header"}>

                <div className={"cr-logo"}>
                    <a href="/dashboard">
                        <img
                            width={100}
                            src={"../images/Plantdecor/logo1.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"cr-btn_before"}>
                    <button>Brands</button>
                    <button>Categories</button>
                    <Link to="/Contactus">
                        <button>Contact Us</button>
                    </Link>
                    <Link to="/Aboutus">
                        <button>About Us</button>
                    </Link>
                </div>

                <div className={"cr-searchbar"}>
                <input type={"text"} placeholder={"Search Product"} />
                </div>
                <div className={"cr-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className={"cr-btn-wrapper"}>
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
            <div className={"cr-body"}>
                <h1>Careers at Jersey Point</h1>

                <h2>Passion for Football, Passion for Careers:</h2>
                <p>Join the growing family at Jersey Point, where your career can flourish just like our vibrant greenery. We are on a mission to bring nature closer to homes, and we need dedicated individuals who share our passion for football and collecting retro jersey.</p>

                <h2>Our Commitment to Excellence:</h2>

                <h2>Authenticity in Every Role:</h2>
                <p>At Jersey Point, integrity is at the core of everything we do. When you embark on a career with us, you contribute to the authenticity of our brand. We source our team members through proper channels, ensuring that every role plays a vital part in delivering genuine jerseys to our customers.</p>

                <h2>Timely Growth Opportunities:</h2>
                <p>Just as we prioritize timely delivery of our jerseys, we prioritize the timely growth and development of our team members. Join us, and you'll have the chance to cultivate your skills and advance in your career. We believe in nurturing talent and providing opportunities for continuous learning.</p>

                <h2>Seamless and Rewarding Returns:</h2>
                <p>Jersey Point is committed to creating an environment where your career can thrive. Our approach to career growth is as easy as our returns policy. Explore new avenues within the company, and find the path that aligns with your aspirations.</p>

                <h2>Priceless Career Satisfaction:</h2>
                <p>When you become a part of the Jersey Point team, you enjoy a career that goes beyond the ordinary. Our commitment to a positive and engaging work culture, paired with exciting challenges, ensures that your career satisfaction is priceless.</p>

                <h2>Join Plant Decor - Where Careers Bloom:</h2>
                <p>Are you ready to cultivate a rewarding career with Jersey Point? We invite passionate individuals to explore our current job openings and grow with us. Your journey toward a fulfilling career in the world of plant e-commerce begins here.</p>

                <p>Discover your potential at Jersey Point - where career is as beautiful as these jerseys!</p>
            </div>
            <div className={"cr-footer"}>
                <div className={"cr-get-help"}>
                    <h1>GET HELP</h1>
                    <Link to="/Customercare"><button>Customer Care</button></Link>
                    <Link to="/Payment"><button>Payment Options</button></Link>
                    <Link to="/returnandrefundpolicy"><button>Return and Refund Policy</button></Link>
                    <Link to="/PrivacyPolicy"><button>Privacy Policy</button></Link>
                    <Link to="/Termsandcondition"><button>Terms and Conditions</button></Link>
                    <span>@2024 JerseyPoint Pvt. Ltd. All Rights Reserved</span>

                </div>
                <div className={"cr-about-us"}>
                    <h1>Jersey Point</h1>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Careers"><button>Careers</button></Link>


                </div>
                <div className={"cr-logos"}>
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

export default Careers;
