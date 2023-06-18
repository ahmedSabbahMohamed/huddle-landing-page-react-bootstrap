import CardFooter from "./CardFooter";
import logo from "../assets/images/logo.svg";
import location from "../assets/images/icon-location.svg";
import phone from "../assets/images/icon-phone.svg";
import email from "../assets/images/icon-email.svg";
import {CiFacebook} from "react-icons/ci";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";

function Footer() {
    return(
        <footer className="p-y5 position-relative">
            <div className="container py-5">
                <CardFooter />
                <div className="row mt-5 justify-content-between align-items-center text-center text-md-start  text-white">
                    <ul className="list-unstyled col-sm-6 col-md-4 col-lg-3">
                        <li className="m-2"><img className="img-fluid" src={logo} alt="logo" /></li>
                        <li className="m-2">
                            <span className="d-inline-block me-2"><img className="img-fluid" src={location} alt="location" /></span>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua
                            </span>
                        </li>
                        <li className="m-2">
                            <span className="d-inline-block me-2"><img className="img-fluid" src={phone} alt="phone" /></span>
                            <span>
                                +1-543-123-4567
                            </span>
                        </li>
                        <li className="m-2">
                            <span className="d-inline-block me-2"><img className="img-fluid" src={email} alt="email" /></span>
                            <span>
                                example@huddle.com
                            </span>
                        </li>
                    </ul>
                    <ul className="list-unstyled col-sm-6 col-md-4 col-lg-3">
                        <li className="m-2">About Us</li>
                        <li className="m-2">What We Do</li>
                        <li className="m-2">FAQ</li>
                    </ul>
                    <ul className="list-unstyled col-sm-6 col-md-4 col-lg-3">
                        <li className="m-2">Career</li>
                        <li className="m-2">Blog</li>
                        <li className="m-2">Contact Us</li>
                    </ul>
                    <ul className="list-unstyled d-flex fs-4 col-sm-6 col-md-4 col-lg-3">
                        <div className="text-center d-flex mx-auto">
                        <li className="m-2"><CiFacebook /></li>
                        <li className="m-2"><AiFillTwitterCircle /></li>
                        <li className="m-2"><AiOutlineInstagram /></li>
                        </div>
                    </ul>
                </div>
                <p className="lead text-white text-center text-lg-end">&copy; Copyright 2018 Huddle. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;