import {Link} from "react-router-dom";
import CheckList from '../assets/checklist.png';
import Arrow from '../assets/rightArrow.png';
import Pay from '../assets/debtCard.png';
import ID from '../assets/id.png';
import MFA from '../assets/mfa.png';
import Qualification from '../assets/qualification.png';
import Result from '../assets/find-result.png';
import Question from '../assets/question.png';
import './track.css';
import React, {Component} from "react";

class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            items: props.items,
        }
    }
    render() {
        return (
            <div>
                <div id="home">
                    <div className="wm offset container">
                        <div className="jumbotron1">
                            <div className="col-12 text-center">
                                <h3 className="heading">Track IRAN Visa</h3>
                            </div>

                            <div className="col-12 text-center">
                                <p className="heading1">To Track Your Iran Visa Status, You Just Need To Enter
                                    Your Tracking code and Press Track Button</p>
                            </div>

                            <div className="row">
                                <div className="col-8">
                                    <form>
                                        <div className="form-group visa-code text-center float-right">
                                            <input type="email" className="form-control text-center" id="track-id"
                                                   aria-describedby="emailHelp"
                                                   placeholder="-------"/>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-3 float-right">
                                    <button type="button" className="btn btn-outline-success text-uppercase">
                                        TRACK
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="offset">
                    <div className="jumbotron">

                        <div className="col-12 text-center">
                            <h3 className="heading-center">Iran Visa Application Status Check</h3>
                        </div>
                        <div className="col-12 d-flex justify-content-center">

                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th scope="col">Traveler</th>
                                    <th scope="col">Nationality</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Mohammad Ghasemi</td>
                                    <td>Malaysian</td>
                                    <td>Male</td>
                                    <th scope="row">Step 4 - Pending</th>
                                </tr>
                                <tr>

                                    <td>Amir Hosein Poormorad</td>
                                    <td>Thornton</td>
                                    <td>Male</td>
                                    <th scope="row">Step 6 - Rejected</th>
                                </tr>
                                <tr>
                                    <td>Khavar Khavarestani</td>
                                    <td>Pakistanian</td>
                                    <td>Female</td>
                                    <th scope="row">Step 6 - Approved</th>
                                </tr>
                                <tr>
                                    <td>Amir Hosein Poormorad</td>
                                    <td>Malaysian</td>
                                    <td>Male</td>
                                    <th scope="row">Step 6 - Rejected</th>
                                </tr>
                                </tbody>
                            </table>


                        </div>
                        <div className="col-12 text-center">
                            <label className="label-check">For more information about your visa requests,
                                you can<Link to="/" className="text-decoration-none"> Login</Link>
                                to your account too see more detail of your visa requests.
                                Also you can check Tracking Iran visa frequently asked question
                                section<Link to="/" className="text-decoration-none"> here</Link>.</label>
                        </div>

                    </div>
                </div>

                <div className="offset">
                    <div className="jumbotron2">

                        <div className="col-12 text-center ">
                            <h3 className="heading-center head-text">Understanding Iran Visa Issue Process Step by
                                Step</h3>
                        </div>

                        <div className="container px-5 py-5 size">
                            <div className="row text-center">

                                <div className="col mx-1">
                                    <div className="feature">
                                        <blockquote>
                                            <img src={CheckList} alt="checklist" className="img-size"/>
                                            <label className="text-center visa-label">1- Filling Iran</label>
                                            <label className="text-center visa-label2">Visa Application Form</label>
                                        </blockquote>

                                    </div>
                                </div>

                                <div className="col mx-1">
                                    <div className="feature">
                                        <img src={Arrow} alt="Arrow" className="arrow"/>
                                    </div>
                                </div>

                                <div className="col mx-1">
                                    <div className="feature">
                                        <blockquote>
                                            <img src={Pay} alt="debtCard" className="img-size"/>
                                            <label className="text-center visa-label">2- Payment</label>
                                            <label className="text-center visa-label2">Visa Service Fee</label>
                                        </blockquote>

                                    </div>
                                </div>

                                <div className="col mx-1">
                                    <div className="feature">
                                        <img src={Arrow} alt="Arrow" className="arrow"/>
                                    </div>
                                </div>

                                <div className="col mx-1">
                                    <div className="feature">
                                        <blockquote>
                                            <img src={ID} alt="Check Documents" className="img-size"/>
                                            <label className="text-center visa-label">3- Check Documents</label>
                                            <label className="text-center visa-label2">By VisaToIran</label>
                                        </blockquote>

                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="container px-5 py-5 size">
                            <div className="row text-center">

                                <div className="col mx-1">
                                    <div className="feature">

                                        <blockquote>
                                            <img src={MFA} alt="MFA" className="img-size"/>
                                            <label className="text-center visa-label">4- Send To MFA</label>
                                            <label className="text-center visa-label2">Visa Section</label>
                                        </blockquote>

                                    </div>
                                </div>

                                <div className="col mx-1">
                                    <div className="feature">
                                        <img src={Arrow} alt="Arrow" className="arrow"/>
                                    </div>

                                </div>

                                <div className="col mx-1">
                                    <div className="feature">
                                        <blockquote>
                                            <img src={Qualification} alt="Qualification" className="img-size"/>
                                            <label className="text-center visa-label">5- Qualification</label>
                                            <label className="text-center visa-label2">Check By MFA</label>
                                        </blockquote>

                                    </div>
                                </div>

                                <div className="col mx-1">
                                    <div className="feature">
                                        <img src={Arrow} alt="Arrow" className="arrow"/>
                                    </div>
                                </div>

                                <div className="col mx-1">
                                    <div className="feature">
                                        <blockquote>
                                            <img src={Result} alt="Check Documents" className="img-size"/>
                                            <label className="text-center visa-label">6- Final Result</label>
                                            <label className="text-center visa-label2">Receive Reference Number</label>
                                        </blockquote>

                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="col-12 float-left">
                            <img src={CheckList} className="float-left col-2  img-desc" alt="Form"/>
                            <div className="col-10 float-left">
                                <label className="float-left label-desc">1- Filling Iran Visa Application Form</label>
                                <label className="float-left label-desc2">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                    ultrices gravida.
                                    Risus commodo viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit
                                    amet,
                                    consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Quis
                                    ipsum
                                    suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                    facilisis.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore
                                    et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                    viverra
                                    maecenas
                                    accumsan lacus vel facilisis.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore
                                    et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                    viverra
                                    maecenas
                                    accumsan lacus vel facilisis.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore
                                    et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                    viverra
                                    maecenas
                                    accumsan lacus vel facilisis.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore
                                    et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                    viverra
                                    maecenas
                                    accumsan lacus vel facilisis. . </label>

                            </div>

                            <div className="col-12 float-left">
                                <img src={Pay} className="float-left col-2  img-desc" alt="Payment"/>
                                <div className="col-10 float-left">
                                    <label className="float-left label-desc">2- Payment Visa Service Fee</label>
                                    <label className="float-left label-desc2">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                                        suspendisse ultrices
                                        gravida. Risus commodo viverra maecenas accumsan lacus vel facilisisLorem ipsum
                                        dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore
                                        magna aliqua.
                                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                                        lacus vel
                                        facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo viverra
                                        maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo viverra
                                        maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo viverra
                                        maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo viverra
                                        maecenas accumsan lacus vel facilisis. . </label>

                                </div>
                            </div>

                            <div className="col-12 float-left">
                                <img src={ID} className="float-left col-2  img-desc" alt="Check Documents"/>
                                <div className="col-10 float-left">
                                    <label className="float-left label-desc">3- Check Documents By VisaToIran</label>
                                    <label className="float-left label-desc2">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                                        suspendisse ultrices
                                        gravida. Risus commodo viverra maecenas accumsan lacus vel facilisisLorem ipsum
                                        dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore
                                        magna aliqua.
                                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                                        lacus vel
                                        facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo viverra
                                        maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo viverra
                                        maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo viverra
                                        maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo viverra
                                        maecenas accumsan lacus vel facilisis. . </label>

                                </div>
                            </div>

                            <div className="col-12 float-left">
                                <img src={MFA} className="float-left col-2  img-desc" alt="MFA"/>
                                <div className="col-10 float-left">
                                    <label className="float-left label-desc">4- Sent To MFA (Ministry Of Foreign Affair)
                                        Visa
                                        Section</label>
                                    <label className="float-left label-desc2">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                                        suspendisse ultrices
                                        gravida. Risus commodo viverra maecenas accumsan lacus vel facilisisLorem ipsum
                                        dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore
                                        magna aliqua.
                                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                                        lacus vel
                                        facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo viverra
                                        maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo viverra
                                        maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo viverra
                                        maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo viverra
                                        maecenas accumsan lacus vel facilisis. . </label>

                                </div>
                            </div>

                            <div className="col-12 float-left">
                                <img src={Qualification} className="float-left col-2  img-desc" alt="Qualification"/>
                                <div className="col-10 float-left">
                                    <label className="float-left label-desc">5- Qualification Check By MFA</label>
                                    <label className="float-left label-desc2">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                                        suspendisse ultrices
                                        gravida. Risus commodo viverra maecenas accumsan lacus vel facilisisLorem ipsum
                                        dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore
                                        magna aliqua.
                                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                                        lacus vel
                                        facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo viverra
                                        maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo viverra
                                        maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo viverra
                                        maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo viverra
                                        maecenas accumsan lacus vel facilisis. . </label>

                                </div>
                            </div>

                            <div className="col-12 float-left">
                                <img src={Result} className="float-left col-2  img-desc" alt="Final Result"/>
                                <div className="col-10 float-left">
                                    <label className="float-left label-desc">6- Final Result (Receive Reference
                                        Number)</label>
                                    <label className="float-left label-desc2">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                                        suspendisse ultrices
                                        gravida. Risus commodo viverra maecenas accumsan lacus vel facilisisLorem ipsum
                                        dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore
                                        magna aliqua.
                                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                                        lacus vel
                                        facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo viverra
                                        maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo viverra
                                        maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo viverra
                                        maecenas accumsan lacus vel facilisis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo viverra
                                        maecenas accumsan lacus vel facilisis. . </label>

                                </div>
                            </div>


                        </div>

                        <div className="col-12 text-center ">
                            <h3 className="heading-center faq-text">Iran Visa Tracking FAQ</h3>
                        </div>

                        <div className="col-11 mr-auto ml-auto">
                            <div className="accordion" id="accordion">
                                <div className="card">
                                    <div className="card-header p-0" id="headingOne">
                                        <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
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
export default Track;