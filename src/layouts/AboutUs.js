import React, {Component} from 'react';
import AboutHeader from '../assets/about-1.png';
import WeAre from '../assets/we-are.png';
import WeProvide from '../assets/we-provide.png';
import WePromise from '../assets/we-promise.png';
import Question from '../assets/question.png';
import './aboutUs.css';

class AboutUs extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <header id="home">

                    <div className="offset">
                        <div className="container col-md-12">
                            <div className="row">
                                <div className="col-md-5 ml-4">
                                    <div className="section-heading">
                                        <h3 className="p-0 f1">About Us</h3>
                                        <p>Every thing you should know about VisaToIran website team and our support
                                            teamof
                                            us is here.
                                            Just take couple of minute to get to know us more and less.</p>

                                    </div>
                                </div>
                                <div className="col-md-6 p-0">
                                    <img className="img-fluid" src={AboutHeader} alt="About Us"/>
                                </div>

                            </div>

                        </div>

                    </div>
                </header>

                <div className="offset">

                    <div className="jumbotron2">
                        <hr className="bg-dark"/>
                        <div className="container col-md-12">
                            <div className="row">
                                <div className="col-md-6 p-0 ">
                                    <img className="img-fluid img-we ml-2" src={WeAre} alt="About Us"/>
                                </div>
                                <div className="col-md-6 p-0">
                                    <div className="section-heading">
                                        <h3 className="p-0 f1">Who We Are?</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
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
                        <hr className="bg-dark"/>
                    </div>

                </div>

                <div className="offset">
                    <div className="container col-md-12">
                        <div className="row">
                            <div className="col-md-12 ml-4 p-0">
                                <div className="section-heading">
                                    <h3 className="p-0 f2">What Services We Provide?</h3>
                                    <div className="col-md-6 p-0 float-right">
                                        <img className="img-fluid" src={WeProvide} alt="About Us"/>
                                    </div>
                                    <div className="unordered">
                                        <ul className="link2 p-0 ml-3">
                                            <li><label>Lorem ipsum dolor sit amet</label></li>
                                            <li><label>Lorem ipsum dolor sit amet</label></li>
                                            <li><label>Lorem ipsum dolor sit amet</label></li>
                                        </ul>
                                    </div>

                                    <p className="col-5 p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Quis ipsum suspendisse ultrices gravida.
                                        Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="offset">

                    <div className="jumbotron2 ">
                        <hr className="bg-dark"/>
                        <div className="container col-md-12">
                            <div className="row">
                                <div className="col-md-7 p-0 ">
                                    <img className="img-fluid img-we ml-2" src={WePromise} alt="About Us"/>
                                </div>
                                <div className="col-md-5 p-0">
                                    <div className="section-heading">
                                        <h3 className="p-0 f1">What We Promise?</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
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

                <div className="offset">
                    <div className="container col-md-12">
                        <div className="row  d-flex justify-content-center">

                            <div className="col-md-5 p-2 text-center mr-auto ml-auto">
                                <div className="section-heading">
                                    <h3 className="p-0 f1">Our Mission</h3>
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

                            <div className="vr mb-5 mt-5"> </div>

                            <div className="col-md-5 p-2 text-center mr-auto ml-auto">
                                <div className="section-heading">
                                    <h3 className="p-0 f1">Our Vision</h3>
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

                <div className="offset">
                    <div className="mb-5">
                        <hr className="bg-dark"/>
                        <div className="col-md-12">
                            <h3 className="heading-center faq-text mb-4 text-center">Your Frequently Questions Abous
                                Us</h3>
                        </div>

                        <div className="col-md-11 ml-auto mr-auto">
                            <div className="accordion" id="accordion">
                                <div className="card">
                                    <div className="card-header p-0" id="headingOne">
                                        <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-2"/>
                                        <label className="mt-3 mb-0">How can I track my iran visa application
                                            form?</label>
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
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut
                                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                            Risus
                                            commodo
                                            viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit amet,
                                            consectetur
                                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Quis
                                            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                                            lacus vel
                                            facilisis.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut
                                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                            Risus
                                            commodo
                                            viverra maecenas accumsan lacus vel facilisis.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut
                                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                            Risus
                                            commodo
                                            viverra maecenas accumsan lacus vel facilisis.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut
                                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                            Risus
                                            commodo
                                            viverra maecenas accumsan lacus vel facilisis.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut
                                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                            Risus
                                            commodo
                                            viverra maecenas accumsan lacus vel facilisis. .
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header p-0" id="headingTwo">
                                        <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
                                        <label className="mt-3 mb-0">How can I track my iran visa application
                                            form?</label>
                                        <button
                                            className="btn btn-link float-right text-decoration-none cl-btn collapsed"
                                            type="button"
                                            data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                            aria-controls="collapseTwo">
                                            +
                                        </button>

                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                         data-parent="#accordion">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut
                                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                            Risus
                                            commodo
                                            viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit amet,
                                            consectetur
                                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Quis
                                            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                                            lacus vel
                                            facilisis.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut
                                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                            Risus
                                            commodo
                                            viverra maecenas accumsan lacus vel facilisis.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut
                                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                            Risus
                                            commodo
                                            viverra maecenas accumsan lacus vel facilisis.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut
                                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                            Risus
                                            commodo
                                            viverra maecenas accumsan lacus vel facilisis.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut
                                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                            Risus
                                            commodo
                                            viverra maecenas accumsan lacus vel facilisis. .
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header p-0" id="headingThree">
                                        <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
                                        <label className="mt-3 mb-0">How can I track my iran visa application
                                            form?</label>
                                        <button
                                            className="btn btn-link float-right text-decoration-none cl-btn collapsed"
                                            type="button"
                                            data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            +
                                        </button>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                         data-parent="#accordion">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut
                                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                            Risus
                                            commodo
                                            viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit amet,
                                            consectetur
                                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Quis
                                            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                                            lacus vel
                                            facilisis.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut
                                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                            Risus
                                            commodo
                                            viverra maecenas accumsan lacus vel facilisis.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut
                                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                            Risus
                                            commodo
                                            viverra maecenas accumsan lacus vel facilisis.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut
                                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                            Risus
                                            commodo
                                            viverra maecenas accumsan lacus vel facilisis.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut
                                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                            Risus
                                            commodo
                                            viverra maecenas accumsan lacus vel facilisis. .
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header p-0" id="headingFour">
                                        <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
                                        <label className="mt-3 mb-0">How can I track my iran visa application
                                            form?</label>
                                        <button
                                            className="btn btn-link float-right text-decoration-none cl-btn collapsed"
                                            type="button"
                                            data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            +
                                        </button>
                                    </div>
                                    <div id="collapseFour" className="collapse" aria-labelledby="headingThree"
                                         data-parent="#accordion">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut
                                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                            Risus
                                            commodo
                                            viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit amet,
                                            consectetur
                                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Quis
                                            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                                            lacus vel
                                            facilisis.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut
                                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                            Risus
                                            commodo
                                            viverra maecenas accumsan lacus vel facilisis.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut
                                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                            Risus
                                            commodo
                                            viverra maecenas accumsan lacus vel facilisis.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut
                                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                            Risus
                                            commodo
                                            viverra maecenas accumsan lacus vel facilisis.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut
                                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                            Risus
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
    }

}

export default AboutUs;