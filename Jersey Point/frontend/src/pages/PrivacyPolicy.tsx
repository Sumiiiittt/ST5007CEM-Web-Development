import React from 'react';
import "../assets/css/PrivacyPolicy.css";
import {Link} from "react-router-dom";
const PrivacyPolicy: React.FC = () => {
    const isLoggedIn = !!localStorage.getItem("userId");
    return (
        <div className={"pp-container"}>
            <div className={"pp-header"}>

                <div className={"pp-logo"}>
                    <a href="/dashboard"> {/* Replace "/dashboard" with the actual URL of your dashboard page */}
                        <img
                            width={100}
                            src={"../images/Plantdecor/logo1.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"pp-btn_before"}>
                    <button>Brands</button>
                    <button>Categories</button>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                </div>

                <div className={"pp-searchbar"}>
                <input type={"text"} placeholder={"Search Product"} />
                </div>
                <div className={"pp-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className={"pp-btn-wrapper"}>
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
            <div className={"pp-about-us-body"}>


                <h2>Data Security and Privacy Policy</h2>

                <p>Jersey Point Pvt. Ltd. (“Jersey Point / We”) is dedicated to safeguarding the data and privacy of individuals (“you”) who visit and use the Jersey Point website and platform. At jersey Point, we prioritize the protection of your personal information and adhere to the principles outlined in this Data Security and Privacy Policy.</p>

                <h2>Information Collection:</h2>

                <p>Jersey Point does not require visitors to provide personal information while browsing our platform. We only collect automatically generated data, as specified below, unless you willingly choose to provide additional information. However, to access and utilize Jersey Point’s services, certain personal information may be required. Rest assured, we treat the privacy of such information with the utmost importance.</p>

                <h2>Personally Identifiable Information:</h2>

                <p>Jersey Point will not collect personal information without your explicit consent. Your submission of personal information is voluntary, and by doing so, you grant Jersey Point the right to use the information for the specified purpose. Incomplete information may affect our ability to provide the desired service. Any personal information you provide on our platform will be used to deliver the requested service with the best recommendations available.</p>

                <h2>Monitoring of Data/Communications:</h2>

                <p>Jersey Point reserves the right to monitor internet communications, including web and email traffic, to and from its domains. This is done to maintain system security, record transactions, and prevent and detect unauthorized activities or criminal behavior. Your use of this site implies your agreement to security monitoring and auditing.</p>

                <h2>Security (Protection of Data/Information):</h2>

                <p>By using our platform, you acknowledge and agree to security monitoring and auditing. Jersey Point employs programs to monitor network traffic, identify unauthorized attempts to alter information, and prevent damage. Unauthorized attempts are subject to legal prosecution under relevant laws. While jersey point is committed to ensuring the security of our platform and protecting sensitive information, there may be links to third-party websites. Your activities on those sites are governed by their respective security and privacy policies, and Jersey Point cannot control or endorse their practices. We recommend reviewing their privacy policies before use.</p>

                <p>At Jersey Point, we are committed to maintaining the confidentiality and security of your data. If you have any concerns or questions about our Data Security and Privacy Policy, please contact us.</p>



            </div>




            <div className={"pp-footer"}>
                <div className={"pp-get-help"}>
                    <h1>GET HELP</h1>
                    <Link to="/Customercare"><button>Customer Care</button></Link>
                    <Link to="/Payment"><button>Payment Options</button></Link>
                    <Link to="/returnandrefundpolicy"><button>Return and Refund Policy</button></Link>
                    <Link to="/PrivacyPolicy"><button>Privacy Policy</button></Link>
                    <Link to="/Termsandcondition"><button>Terms and Conditions</button></Link>
                    <span>@2024 Jerseypoint Pvt. Ltd. All Rights Reserved</span>

                </div>
                <div className={"pp-about-us"}>
                    <h1>Jersey Point</h1>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Careers"><button>Careers</button></Link>



                </div>
                <div className={"pp-logos"}>
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

export default PrivacyPolicy;
