import React, {Component} from 'react';
import AboutHeader from '../assets/about-1.jpg';
import WeAre from '../assets/we-are.png';
import WeProvide from '../assets/we-provide.jpg';
import WePromise from '../assets/we-promise.png';
import Accordion from "../Accordion";
import '../styles/aboutUs.css';
import {Container} from "@material-ui/core";

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
                        <div className="col-md-12 col-sm-12 m-0 p-0">
                            <Container>
                                <div className="row">
                                    <div className="col-md-12 col-lg-6 col-sm-12 p-0 m-0">
                                        <div className="section-heading">
                                            <label className="font-head p-0 mb-3">About Us</label>
                                            <p className="d-flex justify-content-center">Every thing you should know
                                                about
                                                VisaToIran website team and our support
                                                team Of
                                                us is here.
                                                Just take couple of minute to get to know us more and less.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-6 col-sm-12 p-0 m-0">
                                        <img className="img-fluid" src={AboutHeader} alt="About Us"/>
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
                                <div className="row">
                                    <div className="col-md-10 col-lg-6 col-sm-10 d-none m-0 p-2 d-xl-block d-lg-block">
                                        <img className="img-fluid" src={WeAre} alt="About Us"/>
                                    </div>
                                    <div className="col-md-12 col-lg-6 col-sm-12 mt-5 p-0 m-0">
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

                                    <div
                                        className="col-md-12 col-sm-12 p-2 m-0 d-none d-block d-lg-none d-xl-none">
                                        <img className="img-fluid" src={WeAre} alt="AboutUs"/>
                                    </div>

                                </div>
                            </div>
                        </Container>
                    </div>

                </div>

                <div className="offset font">
                    <hr className="bg-dark m-0 p-0"/>
                    <div className="col-md-12 col-sm-12 m-0 p-0">
                        <Container>
                            <div className="row">
                                <div className="col-md-12 col-lg-6 col-sm-12 mt-5 p-0">
                                    <div className="section-heading">
                                        <label className="p-0 f1 mb-4 m-0">What Services We Provide?</label>

                                    </div>
                                </div>

                                <div className="col-md-12 p-0">
                                    <div className="col-md-12 col-lg-6 col-sm-12 p-2 m-0 float-right">
                                        <img className="img-fluid " src={WeProvide} alt="About Us"/>
                                    </div>

                                    <div className="unordered">
                                        <ul className="link-item-color p-0 ml-3">
                                            <li><label className="f-color mt-3">Lorem ipsum dolor sit amet</label></li>
                                            <li><label className="f-color">Lorem ipsum dolor sit amet</label></li>
                                            <li><label className="f-color">Lorem ipsum dolor sit amet</label></li>
                                        </ul>
                                    </div>
                                    <p className="d-flex justify-content-center">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing
                                        elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Quis ipsum suspendisse ultrices gravida.
                                        Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>

                                </div>

                            </div>
                        </Container>
                    </div>

                </div>

                <div className="offset">
                    <hr className="bg-dark m-0 p-0"/>
                    <div className="jumbotron4 p-0 m-0 d-flex justify-content-center">
                        <Container>
                            <div className="col-md-12 col-sm-12 m-0 p-0">
                                <div className="row">
                                    <div
                                        className="col-md-10 col-lg-6 col-sm-10 p-2 m-0 d-none m-0 p-0 d-xl-block d-lg-block">
                                        <img className="img-fluid" src={WePromise} alt="About Us"/>
                                    </div>
                                    <div className="col-md-12 col-lg-6 col-sm-12 mt-5 p-0">
                                        <div className="section-heading">
                                            <label className="p-0 f1 mb-3">What We Promise?</label>
                                            <p className="d-flex justify-content-center">Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Quis ipsum suspendisse ultrices gravida .
                                                Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                                aliqua. Quis ipsum suspendisse ultrices gravida.
                                                Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </p>

                                        </div>
                                    </div>
                                    <div
                                        className="col-md-12 col-sm-12 p-2 m-0 d-none d-block d-lg-none d-xl-none">
                                        <img className="img-fluid" src={WePromise} alt="AboutUs"/>
                                    </div>


                                </div>
                            </div>
                        </Container>
                    </div>

                </div>

                <div className="offset font">
                    <hr className="bg-dark m-0 p-0"/>
                    <Container>
                        <div className="col-md-12 col-sm-12 m-0 p-0">

                            <div className="row">
                                <div className="col-md-12 col-lg-5 col-sm-12 p-2 my-5 text-center mr-auto ml-auto">
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
                                <hr className="col-md-12 col-sm-12 col-12 bg-dark d-none m-0 p-0 d-block d-lg-none d-xl-none mr-auto ml-auto"/>
                                <div className="vr mb-3 mt-3 d-none m-0 p-0 d-xl-block d-lg-block"/>

                                <div className="col-md-12 col-lg-5 col-sm-12 p-2 my-5 text-center mr-auto ml-auto">
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
                    </Container>
                </div>

                <div className="offset font">
                    <hr className="bg-dark m-0 p-0"/>
                    <Container>
                        <div className="col-md-12 col-sm-12 mx-0 px-0">

                            <div className="col-md-12 text-center">

                                <label className="heading-center faq-text mb-4 ">Your Frequently Questions About
                                    Us</label>
                            </div>

                            <div className="d-flex justify-content-center">

                                <Accordion/>

                            </div>

                        </div>
                    </Container>
                </div>

            </div>

        )
    }

}

export default AboutUs;