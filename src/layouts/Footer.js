import React from 'react';
import './footer.css';
import Call from '../assets/contact.png';
import WhatsApp from '../assets/whatsapp.png';
import Email from '../assets/email.png';
import Skype from '../assets/skype.png';


const Footer = () => {
    return (
        <footer className="offset">
            <div className="jumbotron3 pb-4">

                <div className="row d-flex justify-content-center ">
                    <div className="col-md-6 footer-left ml-3 mr-3 mt-3">
                        <div className="row">
                            <div className="col-md-6 footer-box-left p-0">
                                <ul className="footer-ul-style p-0  text-center">
                                    <li><h5>Visa Information</h5></li>
                                    <li><a href="/">How To Get IranVisa</a></li>
                                    <li><a href="/">How To Get IranVisa</a></li>
                                    <li><a href="/">How To Get IranVisa</a></li>
                                    <li><a href="/">How To Get IranVisa</a></li>
                                    <li><a href="/">How To Get IranVisa</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 footer-box-right p-0">
                                <ul className="footer-ul-style p-0 text-center">
                                    <li><h5>Last Blog Post</h5></li>
                                    <li><a href="/">Blog Post 1</a></li>
                                    <li><a href="/">Blog Post 2</a></li>
                                    <li><a href="/">Blog Post 3</a></li>
                                    <li><a href="/">Blog Post 4</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="col-md-12 footer-right">
                            <div className="row">

                                <div className="col-12 contact">
                                    <div className="row">
                                        <div className="col-5">
                                            <blockquote className="footer-contact">
                                                <img src={Call} className="img-contact mr-2" alt="call"/>
                                                    <label className="lb-size">Contact Us:</label>
                                                    <hr className="contact-hr"/>
                                            </blockquote>
                                        </div>

                                        <div className="col-12">
                                            <form className="text-center">
                                                <div className="form-group footer-wp">
                                                    <img src={WhatsApp} className="footer-img-wp"
                                                         alt="whatsApp"/>
                                                        <label className="footer-label1">WhatsApp (24/7 Support)</label>
                                                        <label className="footer-label2">+989374464179</label>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-12 footer-right-box-size">
                                            <form className=" text-center">
                                                <div className="form-group footer-wp">
                                                    <img src={Email} className="footer-img-wp"
                                                         alt="whatsApp"/>
                                                        <label className="footer-label1">Email(Respond In Fastest
                                                            Time)</label>
                                                        <label className="footer-label2">Info@Iranevisa.com</label>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-12 footer-right-box-size">
                                            <form className="text-center">
                                                <div className="form-group footer-wp">
                                                    <img src={Skype} className="footer-img-wp"
                                                         alt="whatsApp"/>
                                                        <label className="footer-label1">Skype</label>
                                                        <label className="footer-label2">EvisaIRAN</label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="col-md-12  text-center mr-5 copyRight">
                            <label>All Right Reserved By IRANEVISA</label>
                            <label className="text-center">Made With <i className="fas fa-heart text-center"> </i> In
                                IRAN</label>
                        </div>

                    </div>


                </div>
            </div>
        </footer>

    )
};

export default Footer;