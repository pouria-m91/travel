import React, {Component} from 'react';
import AboutHeader from '../assets/about-1.png';
import WeAre from '../assets/we-are.png';
import WeProvide from '../assets/we-provide.png';
import WePromise from '../assets/we-promise.png';

import Accordion from "../Accordion";
import '../styles/aboutUs.css';

class AboutUs extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <header>

                    <div className="offset">
                        <div className="container col-md-12">
                            <div className="row">
                                <div className="col-md-5 p-0 mr-auto ml-auto">

                                    <div className="section-heading ">
                                        <label className="font-head p-0 mb-3">About Us</label>
                                        <p className="d-flex justify-content-center">Every thing you should know about
                                            VisaToIran website team and our support
                                            team Of
                                            us is here.
                                            Just take couple of minute to get to know us more and less.</p>

                                    </div>
                                </div>
                                <div className="col-md-6 p-0 d-flex justify-content-center">
                                    <img className="img-fluid " src={AboutHeader} alt="About Us"/>
                                </div>

                            </div>

                        </div>

                    </div>
                </header>

                <div className="offset">
                    <hr className="bg-dark p-0 m-0"/>
                    <div className="jumbotron4 p-0 m-0 d-flex justify-content-center">
                        <div className="container col-md-12">
                            <div className="row">
                                <div className="col-md-6 p-0 d-flex justify-content-center">
                                    <img className="img-fluid" src={WeAre} alt="About Us"/>
                                </div>
                                <div className="col-md-5 mt-5 p-0 mr-auto ml-auto">
                                    <div className="section-heading">
                                        <label className="p-0 f1 mb-3 ">Who We Are?</label>
                                        <p className="d-flex justify-content-center">Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut
                                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                            Risus
                                            commodo
                                            viverra maecenas accumsan lacus vel facilisis.

                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                                            ipsum
                                            suspendisse
                                            ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                            facilisis

                                            Risus commodo viverra maecenas accumsan lacus vel facilisis</p>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <div className="offset font">
                    <hr className="bg-dark m-0 p-0"/>
                    <div className="container col-md-12">
                        <div className="row">
                            <div className="col-md-12 mt-5 p-0 mr-auto ml-auto">
                                <div className="section-heading">
                                    <label className="p-0 f1 mb-4 m-0">What Services We Provide?</label>

                                </div>
                            </div>

                            <div className="col-md-12 p-0">
                                    <div className="col-md-6 p-0 float-right d-flex justify-content-center">
                                        <img className="img-fluid " src={WeProvide} alt="About Us"/>
                                    </div>

                                <div className="unordered">
                                    <ul className="link-item-color p-0 ml-3 ">
                                        <li><label className="f-color mt-3">Lorem ipsum dolor sit amet</label></li>
                                        <li><label className="f-color">Lorem ipsum dolor sit amet</label></li>
                                        <li><label className="f-color">Lorem ipsum dolor sit amet</label></li>
                                    </ul>
                                </div>
                                    <p className="col-md-5 p-0 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Quis ipsum suspendisse ultrices gravida.
                                        Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="offset">
                    <hr className="bg-dark m-0 p-0"/>
                    <div className="jumbotron4 p-0 m-0 d-flex justify-content-center">
                        <div className="container col-md-12 col-sm-12 mx-0">
                            <div className="row">
                                <div className="col-md-10 col-lg-6 col-sm-10 mr-auto ml-auto p-0 m-0">
                                    <img className="img-fluid" src={WePromise} alt="About Us"/>
                                </div>
                                <div className="col-md-10 col-lg-6 col-sm-12 mt-5 p-0">
                                    <div className="section-heading">
                                        <label className="p-0 f1 mb-3">What We Promise?</label>
                                        <p className="d-flex justify-content-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Quis ipsum suspendisse ultrices gravida .
                                            Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            aliqua. Quis ipsum suspendisse ultrices gravida.
                                            Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                        </p>

                                    </div>
                                </div>


                            </div>
                        </div>
                        <hr className="bg-dark"/>
                    </div>

                </div>

                <div className="offset font">
                    <div className="container col-md-12 ">
                        <div className="row">

                            <div className="col-lg-5 col-md-10 col-sm-10 p-2 text-center mr-auto ml-auto">
                                <div className="section-heading">
                                    <label className="p-0 f1 mb-4 m-0">Our Mission</label>
                                    <p>Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore
                                        magna aliqua.
                                        Quis ipsum suspendisse ultrices gravida.
                                        Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                        aliqua. Quis ipsum suspendisse ultrices gravida.
                                        Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                    </p>

                                </div>
                            </div>
                            <hr className="col-md-10 col-sm-10 col-10 mt-5 bg-dark d-none m-0 p-0 d-block d-lg-none d-xl-none mr-auto ml-auto"/>
                            <div className="vr mb-5 mt-5"> </div>

                            <div className="col-lg-5 col-md-10 col-sm-10 p-2 text-center mr-auto ml-auto">
                                <div className="section-heading">
                                    <label className="p-0 f1 mb-4 m-0">Our Vision</label>
                                    <p>Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore
                                        magna aliqua.
                                        Quis ipsum suspendisse ultrices gravida.
                                        Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                        aliqua. Quis ipsum suspendisse ultrices gravida.
                                        Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="offset font">
                    <div className="mb-5">
                        <hr className="bg-dark"/>
                        <div className="col-md-12 text-center">
                            <label className="heading-center faq-text mb-4 ">Your Frequently Questions Abous
                                Us</label>
                        </div>

                        <div className="d-flex justify-content-center">

                            <Accordion/>

                        </div>
                        {/*<div className="col-md-11 ml-auto mr-auto">*/}
                        {/*    <div className="accordion" id="accordion">*/}
                        {/*        <div className="card">*/}
                        {/*            <div className="card-header p-0" id="headingOne">*/}
                        {/*                <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-2"/>*/}
                        {/*                <label className="mt-3 mb-0">How can I track my iran visa application*/}
                        {/*                    form?</label>*/}
                        {/*                <button className="btn btn-link float-right text-decoration-none cl-btn"*/}
                        {/*                        type="button"*/}
                        {/*                        data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"*/}
                        {/*                        aria-controls="collapseOne">*/}
                        {/*                    +*/}
                        {/*                </button>*/}
                        {/*            </div>*/}

                        {/*            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"*/}
                        {/*                 data-parent="#accordion">*/}
                        {/*                <div className="card-body">*/}
                        {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                        {/*                    tempor*/}
                        {/*                    incididunt ut*/}
                        {/*                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.*/}
                        {/*                    Risus*/}
                        {/*                    commodo*/}
                        {/*                    viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit amet,*/}
                        {/*                    consectetur*/}
                        {/*                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna*/}
                        {/*                    aliqua. Quis*/}
                        {/*                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan*/}
                        {/*                    lacus vel*/}
                        {/*                    facilisis.*/}
                        {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                        {/*                    tempor*/}
                        {/*                    incididunt ut*/}
                        {/*                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.*/}
                        {/*                    Risus*/}
                        {/*                    commodo*/}
                        {/*                    viverra maecenas accumsan lacus vel facilisis.*/}
                        {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                        {/*                    tempor*/}
                        {/*                    incididunt ut*/}
                        {/*                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.*/}
                        {/*                    Risus*/}
                        {/*                    commodo*/}
                        {/*                    viverra maecenas accumsan lacus vel facilisis.*/}
                        {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                        {/*                    tempor*/}
                        {/*                    incididunt ut*/}
                        {/*                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.*/}
                        {/*                    Risus*/}
                        {/*                    commodo*/}
                        {/*                    viverra maecenas accumsan lacus vel facilisis.*/}
                        {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                        {/*                    tempor*/}
                        {/*                    incididunt ut*/}
                        {/*                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.*/}
                        {/*                    Risus*/}
                        {/*                    commodo*/}
                        {/*                    viverra maecenas accumsan lacus vel facilisis. .*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}

                        {/*        <div className="card">*/}
                        {/*            <div className="card-header p-0" id="headingTwo">*/}
                        {/*                <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>*/}
                        {/*                <label className="mt-3 mb-0">How can I track my iran visa application*/}
                        {/*                    form?</label>*/}
                        {/*                <button*/}
                        {/*                    className="btn btn-link float-right text-decoration-none cl-btn collapsed"*/}
                        {/*                    type="button"*/}
                        {/*                    data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"*/}
                        {/*                    aria-controls="collapseTwo">*/}
                        {/*                    +*/}
                        {/*                </button>*/}

                        {/*            </div>*/}
                        {/*            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"*/}
                        {/*                 data-parent="#accordion">*/}
                        {/*                <div className="card-body">*/}
                        {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                        {/*                    tempor*/}
                        {/*                    incididunt ut*/}
                        {/*                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.*/}
                        {/*                    Risus*/}
                        {/*                    commodo*/}
                        {/*                    viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit amet,*/}
                        {/*                    consectetur*/}
                        {/*                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna*/}
                        {/*                    aliqua. Quis*/}
                        {/*                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan*/}
                        {/*                    lacus vel*/}
                        {/*                    facilisis.*/}
                        {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                        {/*                    tempor*/}
                        {/*                    incididunt ut*/}
                        {/*                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.*/}
                        {/*                    Risus*/}
                        {/*                    commodo*/}
                        {/*                    viverra maecenas accumsan lacus vel facilisis.*/}
                        {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                        {/*                    tempor*/}
                        {/*                    incididunt ut*/}
                        {/*                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.*/}
                        {/*                    Risus*/}
                        {/*                    commodo*/}
                        {/*                    viverra maecenas accumsan lacus vel facilisis.*/}
                        {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                        {/*                    tempor*/}
                        {/*                    incididunt ut*/}
                        {/*                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.*/}
                        {/*                    Risus*/}
                        {/*                    commodo*/}
                        {/*                    viverra maecenas accumsan lacus vel facilisis.*/}
                        {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                        {/*                    tempor*/}
                        {/*                    incididunt ut*/}
                        {/*                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.*/}
                        {/*                    Risus*/}
                        {/*                    commodo*/}
                        {/*                    viverra maecenas accumsan lacus vel facilisis. .*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="card">*/}
                        {/*            <div className="card-header p-0" id="headingThree">*/}
                        {/*                <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>*/}
                        {/*                <label className="mt-3 mb-0">How can I track my iran visa application*/}
                        {/*                    form?</label>*/}
                        {/*                <button*/}
                        {/*                    className="btn btn-link float-right text-decoration-none cl-btn collapsed"*/}
                        {/*                    type="button"*/}
                        {/*                    data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"*/}
                        {/*                    aria-controls="collapseThree">*/}
                        {/*                    +*/}
                        {/*                </button>*/}
                        {/*            </div>*/}
                        {/*            <div id="collapseThree" className="collapse" aria-labelledby="headingThree"*/}
                        {/*                 data-parent="#accordion">*/}
                        {/*                <div className="card-body">*/}
                        {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                        {/*                    tempor*/}
                        {/*                    incididunt ut*/}
                        {/*                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.*/}
                        {/*                    Risus*/}
                        {/*                    commodo*/}
                        {/*                    viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit amet,*/}
                        {/*                    consectetur*/}
                        {/*                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna*/}
                        {/*                    aliqua. Quis*/}
                        {/*                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan*/}
                        {/*                    lacus vel*/}
                        {/*                    facilisis.*/}
                        {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                        {/*                    tempor*/}
                        {/*                    incididunt ut*/}
                        {/*                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.*/}
                        {/*                    Risus*/}
                        {/*                    commodo*/}
                        {/*                    viverra maecenas accumsan lacus vel facilisis.*/}
                        {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                        {/*                    tempor*/}
                        {/*                    incididunt ut*/}
                        {/*                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.*/}
                        {/*                    Risus*/}
                        {/*                    commodo*/}
                        {/*                    viverra maecenas accumsan lacus vel facilisis.*/}
                        {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                        {/*                    tempor*/}
                        {/*                    incididunt ut*/}
                        {/*                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.*/}
                        {/*                    Risus*/}
                        {/*                    commodo*/}
                        {/*                    viverra maecenas accumsan lacus vel facilisis.*/}
                        {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                        {/*                    tempor*/}
                        {/*                    incididunt ut*/}
                        {/*                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.*/}
                        {/*                    Risus*/}
                        {/*                    commodo*/}
                        {/*                    viverra maecenas accumsan lacus vel facilisis. .*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="card">*/}
                        {/*            <div className="card-header p-0" id="headingFour">*/}
                        {/*                <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>*/}
                        {/*                <label className="mt-3 mb-0">How can I track my iran visa application*/}
                        {/*                    form?</label>*/}
                        {/*                <button*/}
                        {/*                    className="btn btn-link float-right text-decoration-none cl-btn collapsed"*/}
                        {/*                    type="button"*/}
                        {/*                    data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"*/}
                        {/*                    aria-controls="collapseThree">*/}
                        {/*                    +*/}
                        {/*                </button>*/}
                        {/*            </div>*/}
                        {/*            <div id="collapseFour" className="collapse" aria-labelledby="headingThree"*/}
                        {/*                 data-parent="#accordion">*/}
                        {/*                <div className="card-body">*/}
                        {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                        {/*                    tempor*/}
                        {/*                    incididunt ut*/}
                        {/*                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.*/}
                        {/*                    Risus*/}
                        {/*                    commodo*/}
                        {/*                    viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit amet,*/}
                        {/*                    consectetur*/}
                        {/*                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna*/}
                        {/*                    aliqua. Quis*/}
                        {/*                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan*/}
                        {/*                    lacus vel*/}
                        {/*                    facilisis.*/}
                        {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                        {/*                    tempor*/}
                        {/*                    incididunt ut*/}
                        {/*                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.*/}
                        {/*                    Risus*/}
                        {/*                    commodo*/}
                        {/*                    viverra maecenas accumsan lacus vel facilisis.*/}
                        {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                        {/*                    tempor*/}
                        {/*                    incididunt ut*/}
                        {/*                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.*/}
                        {/*                    Risus*/}
                        {/*                    commodo*/}
                        {/*                    viverra maecenas accumsan lacus vel facilisis.*/}
                        {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                        {/*                    tempor*/}
                        {/*                    incididunt ut*/}
                        {/*                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.*/}
                        {/*                    Risus*/}
                        {/*                    commodo*/}
                        {/*                    viverra maecenas accumsan lacus vel facilisis.*/}
                        {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                        {/*                    tempor*/}
                        {/*                    incididunt ut*/}
                        {/*                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.*/}
                        {/*                    Risus*/}
                        {/*                    commodo*/}
                        {/*                    viverra maecenas accumsan lacus vel facilisis. .*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    </div>
                </div>

            </div>

        )
    }

}

export default AboutUs;