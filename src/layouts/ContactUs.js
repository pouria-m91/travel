import React from 'react';
import '../styles/contactUs.css';
import HeaderPic from '../assets/contact-us.jpg';
import SmartPhone from '../assets/smartphone.png';
import WhatsApp from '../assets/whatsapp-2.png';
import Email from '../assets/email-2.png';
import Skype from '../assets/skype-2.png';

import {Container} from "@material-ui/core";
import Accordion from "../Accordion";


const ContactUs = () => {
    return (
        <div>
            <header>

                <div className="offset">
                    <div className="col-md-12 col-sm-12 m-0 p-0">
                        <Container>
                            <div className="row">
                                <div className="col-md-12 col-lg-6 col-sm-12 p-0 m-0">
                                    <div className="section-heading ">
                                        <label className="font-head p-0 mb-3">Contact Us</label>
                                        <p className="d-flex justify-content-center">Our support team is 24/7 available
                                            to answer all your
                                            question with
                                            patient.
                                            please don’t hesitate to contact us because your warm voice will be
                                            energetic
                                            for us.
                                            <br/>
                                            Here you can find our contact options.</p>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6 col-sm-12 p-2 m-0">
                                    <img className="img-fluid" src={HeaderPic} alt="Contact Us"/>
                                </div>
                            </div>
                        </Container>
                    </div>

                </div>

            </header>

            <div className="offset">
                <hr className="bg-dark p-0 m-0"/>
                <div className="jumbotron4 p-0 m-0 d-flex justify-content-center">
                    <Container>
                        <div className="col-md-12 col-sm-12 m-0 p-0">
                            <div className="row pb-5">

                                <div className="col-md-12 col-sm-12 text-center m-0 p-0">
                                    <label className="p-0 f1 my-4">VisaToIran Support Team Contact</label>
                                </div>

                                <div className="row justify-content-center">

                                    <div className="card col-lg-2 col-md-5 col-sm-5 col-8 mx-3 my-2 p-0">
                                        <div className="d-flex justify-content-center">
                                            <img className="img-top py-4" src={SmartPhone} alt="phone number"/>
                                        </div>

                                        <div className="card-body text-center px-3 py-0">
                                            <label className="card-head mt-2">Phone Support</label>
                                            <br/>
                                            <label className="card-number mt-2">+989398133353</label>
                                            <label className="card-title text-left mt-2">Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Quis ipsum suspendisse ultrices gravida.
                                                Risus commodo viverra maecenas accumsan lacus vel facilisis.</label>
                                        </div>
                                        <div className="container">
                                            <button type="button" className="submit-btn col-12 p-2 my-2">Call</button>
                                        </div>

                                    </div>

                                    <div className="card col-lg-2 col-md-5 col-sm-5 col-8 mx-3 my-2 p-0">
                                        <div className="d-flex justify-content-center">
                                            <img className="img-top py-4" src={WhatsApp} alt="WhatsApp"/>
                                        </div>
                                        <div className="card-body text-center px-3 py-0">
                                            <label className="card-head mt-2">WhatsApp</label>
                                            <br/>
                                            <label className="card-number mt-2">+989398133353</label>
                                            <label className="card-title text-left mt-2">Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Quis ipsum suspendisse ultrices gravida.
                                                Risus commodo viverra maecenas accumsan lacus vel facilisis.</label>
                                        </div>
                                        <div className="container">
                                            <button type="button" className="submit-btn col-12 p-2 my-2">Send Message
                                            </button>
                                        </div>

                                    </div>

                                    <div className="card col-lg-2 col-md-5 col-sm-5 col-8 mx-3 my-2 p-0">
                                        <div className="d-flex justify-content-center">
                                            <img className="img-top py-4" src={Email} alt="Email"/>
                                        </div>
                                        <div className="card-body text-center px-3 py-0">

                                            <label className="card-head mt-2">Email</label>
                                            <br/>
                                            <label className="card-number mt-2">info@visatoiran.com</label>
                                            <label className="card-title text-left mt-2">Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Quis ipsum suspendisse ultrices gravida.
                                                Risus commodo viverra maecenas accumsan lacus vel facilisis.</label>
                                        </div>
                                        <div className="container">
                                            <button type="button" className="submit-btn col-12 p-2 my-2">Send Email
                                            </button>
                                        </div>

                                    </div>

                                    <div className="card col-lg-2 col-md-5 col-sm-5 col-8 mx-3 my-2 p-0">
                                        <div className="d-flex justify-content-center">
                                            <img className="img-top py-4" src={Skype} alt="Skype"/>
                                        </div>

                                        <div className="card-body text-center px-3 py-0">

                                            <label className="card-head mt-2">Skype</label>
                                            <br/>
                                            <label className="card-number mt-2">@visatoiran</label>
                                            <label className="card-title text-left mt-2">Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Quis ipsum suspendisse ultrices gravida.
                                                Risus commodo viverra maecenas accumsan lacus vel facilisis.</label>
                                        </div>
                                        <div className="container">
                                            <button type="button" className="submit-btn col-12 p-2 my-2">Call</button>
                                        </div>

                                    </div>

                                </div>


                            </div>
                        </div>
                    </Container>
                </div>
            </div>

            <div className="offset font">
                <hr className="bg-dark m-0 p-0"/>
                <Container>
                    <div className="col-md-12 col-sm-12 mx-0 px-0">

                        <div className="col-md-12 text-center">

                            <label className="heading-center faq-text mb-4 ">Frequently Asked Questions About Contact
                                Options</label>
                        </div>

                        <div className="d-flex justify-content-center">

                            <Accordion/>

                        </div>

                    </div>
                </Container>
            </div>

        </div>
    )
};
export default ContactUs;