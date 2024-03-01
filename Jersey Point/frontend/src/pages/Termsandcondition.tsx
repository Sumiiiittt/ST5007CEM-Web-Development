import React from 'react';
import "../assets/css/Termsandcondition.css";
import {Link} from "react-router-dom";
const Termsandcondition: React.FC = () => {
    const isLoggedIn = !!localStorage.getItem("userId");
    return (
        <div className={"tc-container"}>
            <div className={"tc-header"}>

                <div className={"tc-logo"}>
                    <a href="/dashboard"> {/* Replace "/dashboard" with the actual URL of your dashboard page */}
                        <img
                            width={100}
                            src={"../images/Plantdecor/logo1.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"tc-btn_before"}>
                    <button>Brands</button>
                    <button>Categories</button>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                </div>

                <div className={"tc-searchbar"}>
                <input type={"text"} placeholder={"Search Product"} />
                </div>
                <div className={"tc-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className={"tc-btn-wrapper"}>
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
            <div className={"tc-body"}>


                <h2>Terms and Conditions</h2>

                <p>Welcome to Jersey Point! Please read these terms and conditions ("Agreement") carefully before using our website ("Website") and any associated products and services (collectively, "Services"). This Agreement is a legal contract between you ("User," "you," "your") and Jersey Point Pvt. Ltd. ("Jersey Point," "we," "us"). By accessing and using our Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement. If you do not agree with any part of these terms, please refrain from using our Services.</p>

                <h2>User Agreement:</h2>

                <p>By using Jersey Point, you accept and agree to comply with these terms and any revisions made in the future. This Agreement is binding, creating a legal obligation between you and Jersey Point, governing your use of our Services. If you are using our Services on behalf of a business or legal entity, you represent that you have the authority to bind the entity to this Agreement.</p>

                <p>You understand and agree that this Agreement is electronic and does not require a physical signature to be legally binding. It covers all aspects of your use of our Services, and you accept the terms outlined herein.</p>

                <h2>User Content:</h2>

                <p>Jersey Point does not claim ownership of any data, information, or material ("Content") that you submit while using our Services. You are solely responsible for the accuracy, quality, legality, and ownership of all submitted Content. We may monitor and review user-generated Content and reserve the right to refuse or remove any Content that violates our policies or is deemed objectionable. By using our Services, you grant Jersey Point the license to use, reproduce, adapt, modify, publish, or distribute the Content for commercial or marketing purposes.</p>

                <h2>Backup:</h2>

                <p>While Jersey Point regularly backs up the website and its content for organizational purposes, these backups are not guaranteed. Users are responsible for maintaining their own backups of data, and Jersey Point does not provide compensation for lost or incomplete data in the event of backup failures.</p>

                <h2>Prohibited Uses:</h2>

                <p>Users are prohibited from engaging in unlawful activities, violating intellectual property rights, harassing others, uploading malware, or any activity that may disrupt the functionality of our Services. Jersey Point reserves the right to terminate user accounts for prohibited uses, and users are liable for any resulting liabilities.</p>

                <h2>Intellectual Property Rights:</h2>

                <p>All intellectual property rights ("Intellectual Property Rights") related to Jersey Point's content and services remain the sole property of Jersey Point or third-party licensors. Users are not granted any rights or licenses to reproduce or use Jersey Point's intellectual property without explicit permission.</p>

                <p>By using Jersey Point, you agree to abide by these terms and conditions. If you have any questions or concerns, please contact us. Thank you for choosing Jersey Point!</p>



            </div>




            <div className={"tc-footer"}>
                <div className={"tc-get-help"}>
                    <h1>GET HELP</h1>
                    <Link to="/Customercare"><button>Customer Care</button></Link>
                    <Link to="/Payment"><button>Payment Options</button></Link>
                    <Link to="/returnandrefundpolicy"><button>Return and Refund Policy</button></Link>
                    <Link to="/PrivacyPolicy"><button>Privacy Policy</button></Link>
                    <Link to="/Termsandcondition"><button>Terms and Conditions</button></Link>
                    <span>@2024 Jerseypoint Pvt. Ltd. All Rights Reserved</span>

                </div>
                <div className={"tc-about-us"}>
                    <h1>Jersey Point</h1>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Careers"><button>Careers</button></Link>





                </div>
                <div className={"tc-logos"}>
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

export default Termsandcondition;
