import React from 'react';
import '../styles/contactUs.css';
import HeaderPic from '../assets/contact-us.png';
import SmartPhone from '../assets/smartphone.png';
import WhatsApp from '../assets/whatsapp-2.png';
import Email from '../assets/email-2.png';
import Skype from '../assets/skype-2.png';
import Question from '../assets/question.png';


const ContactUs = () => {
    return (
        <div>
            <header id="home">
                <div className="offset">
                    <div className="container col-12">
                        <div className="row">
                            <div className="col-md-5 ml-4">
                                <div className="section-heading">
                                    <h3 id="f1">Contact Us</h3>
                                    <p className="p-header ">Our support team is 24/7 available to answer all your
                                        question with
                                        patient.
                                        please don’t hesitate to contact us because your warm voice will be energetic
                                        for us.
                                        <br/>
                                        Here you can find our contact options.</p>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <img className="img-fluid" src={HeaderPic} alt="contact us"/>
                            </div>

                        </div>

                    </div>

                </div>
            </header>

            <div className="offset">
                <div className="jumbotron pb-5 pr-4">

                    <div className="col-12 text-center pt-4 pb-3">
                        <h3 className="heading-center">VisaToIran Support Team Contact</h3>
                    </div>

                    <div className="row">

                        <div className="col-12 flex-head">

                            <div className="card col-3 p-2 card-box mr-2">
                                <div className="bg-img mt-2 mr-auto ml-auto d-flex justify-content-center">
                                    <img className="card-img-top pt-3 pb-3" src={SmartPhone} alt="phone number"/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Phone Support</h5>
                                    <h5 className="card-text text-center">+989398133353</h5>
                                    <h5 className="card-title1 ml-3">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Quis ipsum suspendisse ultrices gravida.
                                        Risus commodo viverra maecenas accumsan lacus vel facilisis.</h5>

                                    <div className="d-flex justify-content-center ">
                                        <button type="button" className="btn btn-outline-success mt-2 col-12">Call
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div className="card col-3 p-2 card-box mr-2">
                                <div className="bg-img mt-2 mr-auto ml-auto d-flex justify-content-center">
                                    <img className="card-img-top pt-3 pb-3" src={WhatsApp} alt="phone number"/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">WhatsApp</h5>
                                    <h5 className="card-text text-center">+989398133353</h5>
                                    <h5 className="card-title1 ml-3">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Quis ipsum suspendisse ultrices gravida.
                                        Risus commodo viverra maecenas accumsan lacus vel facilisis.</h5>

                                    <div className="d-flex justify-content-center ">
                                        <button type="button" className="btn btn-outline-success mt-2 col-12">Send
                                            Message
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div className="card col-3 p-2 card-box mr-2">
                                <div className="bg-img mt-2 mr-auto ml-auto d-flex justify-content-center">
                                    <img className="card-img-top pt-3 pb-3" src={Email} alt="phone number"/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Email</h5>
                                    <h5 className="card-text text-center">info@visatoiran.com</h5>
                                    <h5 className="card-title1 ml-3">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Quis ipsum suspendisse ultrices gravida.
                                        Risus commodo viverra maecenas accumsan lacus vel facilisis.</h5>

                                    <div className="d-flex justify-content-center ">
                                        <button type="button" className="btn btn-outline-success mt-2 col-12">Send Email
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div className="card col-3 p-2 card-box mr-2">
                                <div className="bg-img mt-2 mr-auto ml-auto d-flex justify-content-center">
                                    <img className="card-img-top pt-3 pb-3" src={Skype} alt="phone number"/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Skype</h5>
                                    <h5 className="card-text text-center">@visatoiran</h5>
                                    <h5 className="card-title1 ml-3">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Quis ipsum suspendisse ultrices gravida.
                                        Risus commodo viverra maecenas accumsan lacus vel facilisis.</h5>

                                    <div className="d-flex justify-content-center ">
                                        <button type="button" className="btn btn-outline-success mt-2 col-12">Call
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offset">
                <div className="jumbotron2 mb-5">

                    <div className="col-12 ml-4">
                        <h3 className="heading-center faq-text mb-4 text-center">Frequently Asked Questions About
                            Contact Options</h3>
                    </div>

                    <div className="col-11 ml-auto mr-auto">
                        <div className="accordion" id="accordion">
                            <div className="card">
                                <div className="card-header p-0" id="headingOne">
                                    <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-2"/>
                                    <label className="mt-3 mb-0">How can I track my iran visa application form?</label>
                                    <button className="btn btn-link float-right text-decoration-none cl-btn"
                                            type="button"
                                            data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                        +
                                    </button>
                                </div>

                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                     data-parent="#accordion">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo
                                        viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit amet,
                                        consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Quis
                                        ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                                        lacus vel
                                        facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo
                                        viverra maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo
                                        viverra maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo
                                        viverra maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo
                                        viverra maecenas accumsan lacus vel facilisis. .
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header p-0" id="headingTwo">
                                    <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
                                    <label className="mt-3 mb-0">How can I track my iran visa application form?</label>
                                    <button className="btn btn-link float-right text-decoration-none cl-btn collapsed"
                                            type="button"
                                            data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                            aria-controls="collapseTwo">
                                        +
                                    </button>

                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                     data-parent="#accordion">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo
                                        viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit amet,
                                        consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Quis
                                        ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                                        lacus vel
                                        facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo
                                        viverra maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo
                                        viverra maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo
                                        viverra maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo
                                        viverra maecenas accumsan lacus vel facilisis. .
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header p-0" id="headingThree">
                                    <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
                                    <label className="mt-3 mb-0">How can I track my iran visa application form?</label>
                                    <button className="btn btn-link float-right text-decoration-none cl-btn collapsed"
                                            type="button"
                                            data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                        +
                                    </button>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                     data-parent="#accordion">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo
                                        viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit amet,
                                        consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Quis
                                        ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                                        lacus vel
                                        facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo
                                        viverra maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo
                                        viverra maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo
                                        viverra maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo
                                        viverra maecenas accumsan lacus vel facilisis. .
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header p-0" id="headingFour">
                                    <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
                                    <label className="mt-3 mb-0">How can I track my iran visa application form?</label>
                                    <button className="btn btn-link float-right text-decoration-none cl-btn collapsed"
                                            type="button"
                                            data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                        +
                                    </button>
                                </div>
                                <div id="collapseFour" className="collapse" aria-labelledby="headingThree"
                                     data-parent="#accordion">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo
                                        viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit amet,
                                        consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Quis
                                        ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                                        lacus vel
                                        facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo
                                        viverra maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo
                                        viverra maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo
                                        viverra maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo
                                        viverra maecenas accumsan lacus vel facilisis. .
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default ContactUs;