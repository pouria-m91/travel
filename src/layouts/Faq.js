import React from 'react';
import './faq.css';
import HeadPic from '../assets/faq.png';
import ConversationBlack from '../assets/conversation-black.png';
import VisaBlack from '../assets/visa-black.png';
import CoinBlack from '../assets/coin-black.png';
import Question from '../assets/question.png';
import {Link} from "react-router-dom";

const Faq = () => {
    return (
        <div>
            <header id="home">
                <div className="offset">
                    <div className="container col-12">
                        <div className="row ">
                            <div className="col-md-5 ml-5">
                                <div className="section-heading">
                                    <h3 id="f1">Frequently
                                        <br/>
                                        Asked<br/>
                                        Question’s</h3>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <img className="img-fluid" src={HeadPic} alt="FAQ"/>
                            </div>

                        </div>
                        <div className="header-label col-5 ml-5 mb-4">
                            <label>VisaToIran / FAQ</label>

                        </div>
                        <hr className="bg-dark"/>
                    </div>

                </div>
            </header>

            <div className="offset">
                <div className="jumbotron">

                    <div className="row">
                        <div className="col-3">
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                 aria-orientation="vertical">
                                <Link className="nav-link active pt-3 pb-3 m-2 card-border text-center link"
                                      id="v-pills-home-tab" data-toggle="pill" to="#v-pills-home" role="tab"
                                      aria-controls="v-pills-home" aria-selected="true">
                                    <img src={ConversationBlack} className="img-fluid float-left nav-img"
                                         alt="conversation"/> General <br/>And Profile</Link>
                                <Link className="nav-link pt-3 pb-3 m-2 card-border text-center link"
                                      id="v-pills-profile-tab" data-toggle="pill" to="#v-pills-profile" role="tab"
                                      aria-controls="v-pills-profile" aria-selected="false">
                                    <img src={VisaBlack} className="img-fluid float-left nav-img"
                                         alt="Visa And Passport"/>Visa And<br/> Passport</Link>
                                <Link className="nav-link pt-3 pb-3 m-2 card-border text-center link"
                                      id="v-pills-messages-tab" data-toggle="pill" to="#v-pills-messages" role="tab"
                                      aria-controls="v-pills-messages" aria-selected="false">
                                    <img src={CoinBlack} className="img-fluid float-left nav-img"
                                         alt="Pricing And Payment"/>Pricing And <br/>Payment</Link>
                                <Link className="nav-link pt-3 pb-3 m-2 card-border text-center link"
                                      id="v-pills-settings-tab" data-toggle="pill" to="#v-pills-settings" role="tab"
                                      aria-controls="v-pills-settings" aria-selected="false">
                                    <img src={ConversationBlack} className="img-fluid float-left nav-img"
                                         alt="Other Questions"/>Other<br/> Questions</Link>
                            </div>
                        </div>

                        <div className="col-9">
                            <div className="tab-content p-3 m-2 card-border bg-white" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                                     aria-labelledby="v-pills-home-tab">

                                    <div className="accordion" id="general">

                                        <div className="card">
                                            <div className="card-header p-0" id="generalHeadingOne">
                                                <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
                                                <label className="mt-3 mb-0">How can I track my iran visa application
                                                    form?</label>
                                                <button className="btn btn-link float-right text-decoration-none cl-btn"
                                                        type="button"
                                                        data-toggle="collapse" data-target="#generalCollapseOne"
                                                        aria-expanded="true"
                                                        aria-controls="generalCollapseOne">
                                                    +
                                                </button>
                                            </div>

                                            <div id="generalCollapseOne" className="collapse show"
                                                 aria-labelledby="generalHeadingOne" data-parent="#general">
                                                <div className="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit
                                                    amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Quis
                                                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                    accumsan lacus vel
                                                    facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis. .
                                                </div>
                                            </div>

                                        </div>

                                        <div className="card">
                                            <div className="card-header p-0" id="generalHeadingTwo">
                                                <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
                                                <label className="mt-3 mb-0">How can I track my iran visa application
                                                    form?</label>
                                                <button
                                                    className="btn btn-link float-right text-decoration-none cl-btn collapsed"
                                                    type="button"
                                                    data-toggle="collapse" data-target="#generalCollapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="generalCollapseTwo">
                                                    +
                                                </button>

                                            </div>
                                            <div id="generalCollapseTwo" className="collapse"
                                                 aria-labelledby="generalHeadingTwo" data-parent="#general">
                                                <div className="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit
                                                    amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Quis
                                                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                    accumsan lacus vel
                                                    facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis. .
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header p-0" id="generalHeadingThree">
                                                <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
                                                <label className="mt-3 mb-0">How can I track my iran visa application
                                                    form?</label>
                                                <button
                                                    className="btn btn-link float-right text-decoration-none cl-btn collapsed"
                                                    type="button"
                                                    data-toggle="collapse" data-target="#generalCollapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="generalCollapseThree">
                                                    +
                                                </button>

                                            </div>
                                            <div id="generalCollapseThree" className="collapse"
                                                 aria-labelledby="generalHeadingThree" data-parent="#general">
                                                <div className="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit
                                                    amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Quis
                                                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                    accumsan lacus vel
                                                    facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis. .
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header p-0" id="generalHeadingFour">
                                                <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
                                                <label className="mt-3 mb-0">How can I track my iran visa application
                                                    form?</label>
                                                <button
                                                    className="btn btn-link float-right text-decoration-none cl-btn collapsed"
                                                    type="button"
                                                    data-toggle="collapse" data-target="#generalCollapseFour"
                                                    aria-expanded="false"
                                                    aria-controls="generalCollapseFour">
                                                    +
                                                </button>

                                            </div>
                                            <div id="generalCollapseFour" className="collapse"
                                                 aria-labelledby="generalHeadingFour" data-parent="#general">
                                                <div className="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit
                                                    amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Quis
                                                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                    accumsan lacus vel
                                                    facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis. .
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                     aria-labelledby="v-pills-profile-tab">

                                    <div className="accordion" id="visa">

                                        <div className="card">
                                            <div className="card-header p-0" id="visaHeadingOne">
                                                <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
                                                <label className="mt-3 mb-0">How can I track my iran visa application
                                                    form?</label>
                                                <button className="btn btn-link float-right text-decoration-none cl-btn"
                                                        type="button"
                                                        data-toggle="collapse" data-target="#visaCollapseOne"
                                                        aria-expanded="true"
                                                        aria-controls="visaCollapseOne">
                                                    +
                                                </button>
                                            </div>

                                            <div id="visaCollapseOne" className="collapse show"
                                                 aria-labelledby="visaHeadingOne" data-parent="#visa">
                                                <div className="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit
                                                    amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Quis
                                                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                    accumsan lacus vel
                                                    facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis. .
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header p-0" id="visaHeadingTwo">
                                                <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
                                                <label className="mt-3 mb-0">How can I track my iran visa application
                                                    form?</label>
                                                <button
                                                    className="btn btn-link float-right text-decoration-none cl-btn collapsed"
                                                    type="button"
                                                    data-toggle="collapse" data-target="#visaCollapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="visaCollapseTwo">
                                                    +
                                                </button>

                                            </div>
                                            <div id="visaCollapseTwo" className="collapse"
                                                 aria-labelledby="visaHeadingTwo" data-parent="#visa">
                                                <div className="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit
                                                    amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Quis
                                                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                    accumsan lacus vel
                                                    facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis. .
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header p-0" id="visaHeadingThree">
                                                <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
                                                <label className="mt-3 mb-0">How can I track my iran visa application
                                                    form?</label>
                                                <button
                                                    className="btn btn-link float-right text-decoration-none cl-btn collapsed"
                                                    type="button"
                                                    data-toggle="collapse" data-target="#visaCollapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="visaCollapseThree">
                                                    +
                                                </button>

                                            </div>
                                            <div id="visaCollapseThree" className="collapse"
                                                 aria-labelledby="visaHeadingThree" data-parent="#visa">
                                                <div className="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit
                                                    amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Quis
                                                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                    accumsan lacus vel
                                                    facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis. .
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header p-0" id="visaHeadingFour">
                                                <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
                                                <label className="mt-3 mb-0">How can I track my iran visa application
                                                    form?</label>
                                                <button
                                                    className="btn btn-link float-right text-decoration-none cl-btn collapsed"
                                                    type="button"
                                                    data-toggle="collapse" data-target="#visaCollapseFour"
                                                    aria-expanded="false"
                                                    aria-controls="visaCollapseFour">
                                                    +
                                                </button>

                                            </div>
                                            <div id="visaCollapseFour" className="collapse"
                                                 aria-labelledby="visaHeadingFour" data-parent="#visa">
                                                <div className="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit
                                                    amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Quis
                                                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                    accumsan lacus vel
                                                    facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis. .
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel"
                                     aria-labelledby="v-pills-messages-tab">

                                    <div className="accordion" id="payment">

                                        <div className="card">
                                            <div className="card-header p-0" id="paymentHeadingOne">
                                                <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
                                                <label className="mt-3 mb-0">How can I track my iran visa application
                                                    form?</label>
                                                <button className="btn btn-link float-right text-decoration-none cl-btn"
                                                        type="button"
                                                        data-toggle="collapse" data-target="#paymentCollapseOne"
                                                        aria-expanded="true"
                                                        aria-controls="paymentCollapseOne">
                                                    +
                                                </button>
                                            </div>

                                            <div id="paymentCollapseOne" className="collapse show"
                                                 aria-labelledby="paymentHeadingOne" data-parent="#payment">
                                                <div className="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit
                                                    amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Quis
                                                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                    accumsan lacus vel
                                                    facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis. .
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header p-0" id="paymentHeadingTwo">
                                                <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
                                                <label className="mt-3 mb-0">How can I track my iran visa application
                                                    form?</label>
                                                <button
                                                    className="btn btn-link float-right text-decoration-none cl-btn collapsed"
                                                    type="button"
                                                    data-toggle="collapse" data-target="#paymentCollapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="paymentCollapseTwo">
                                                    +
                                                </button>

                                            </div>
                                            <div id="paymentCollapseTwo" className="collapse"
                                                 aria-labelledby="paymentHeadingTwo" data-parent="#payment">
                                                <div className="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit
                                                    amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Quis
                                                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                    accumsan lacus vel
                                                    facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis. .
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header p-0" id="paymentHeadingThree">
                                                <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
                                                <label className="mt-3 mb-0">How can I track my iran visa application
                                                    form?</label>
                                                <button
                                                    className="btn btn-link float-right text-decoration-none cl-btn collapsed"
                                                    type="button"
                                                    data-toggle="collapse" data-target="#paymentCollapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="paymentCollapseThree">
                                                    +
                                                </button>

                                            </div>
                                            <div id="paymentCollapseThree" className="collapse"
                                                 aria-labelledby="paymentHeadingThree" data-parent="#payment">
                                                <div className="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit
                                                    amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Quis
                                                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                    accumsan lacus vel
                                                    facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis. .
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header p-0" id="paymentHeadingFour">
                                                <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
                                                <label className="mt-3 mb-0">How can I track my iran visa application
                                                    form?</label>
                                                <button
                                                    className="btn btn-link float-right text-decoration-none cl-btn collapsed"
                                                    type="button"
                                                    data-toggle="collapse" data-target="#paymentCollapseFour"
                                                    aria-expanded="false"
                                                    aria-controls="paymentCollapseFour">
                                                    +
                                                </button>

                                            </div>
                                            <div id="paymentCollapseFour" className="collapse"
                                                 aria-labelledby="paymentHeadingFour" data-parent="#payment">
                                                <div className="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit
                                                    amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Quis
                                                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                    accumsan lacus vel
                                                    facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis. .
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel"
                                     aria-labelledby="v-pills-settings-tab">

                                    <div className="accordion" id="other">

                                        <div className="card">

                                            <div className="card-header p-0" id="otherHeadingOne">
                                                <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
                                                <label className="mt-3 mb-0">How can I track my iran visa application
                                                    form?</label>
                                                <button className="btn btn-link float-right text-decoration-none cl-btn"
                                                        type="button"
                                                        data-toggle="collapse" data-target="#otherCollapseOne"
                                                        aria-expanded="true"
                                                        aria-controls="otherCollapseOne">
                                                    +
                                                </button>
                                            </div>

                                            <div id="otherCollapseOne" className="collapse show"
                                                 aria-labelledby="otherHeadingOne" data-parent="#other">
                                                <div className="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit
                                                    amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Quis
                                                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                    accumsan lacus vel
                                                    facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis. .
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header p-0" id="otherHeadingTwo">
                                                <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
                                                <label className="mt-3 mb-0">How can I track my iran visa application
                                                    form?</label>
                                                <button
                                                    className="btn btn-link float-right text-decoration-none cl-btn collapsed"
                                                    type="button"
                                                    data-toggle="collapse" data-target="#otherCollapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="otherCollapseTwo">
                                                    +
                                                </button>

                                            </div>
                                            <div id="otherCollapseTwo" className="collapse"
                                                 aria-labelledby="otherHeadingTwo" data-parent="#other">
                                                <div className="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit
                                                    amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Quis
                                                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                    accumsan lacus vel
                                                    facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis. .
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header p-0" id="otherHeadingThree">
                                                <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
                                                <label className="mt-3 mb-0">How can I track my iran visa application
                                                    form?</label>
                                                <button
                                                    className="btn btn-link float-right text-decoration-none cl-btn collapsed"
                                                    type="button"
                                                    data-toggle="collapse" data-target="#otherCollapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="otherCollapseThree">
                                                    +
                                                </button>

                                            </div>
                                            <div id="otherCollapseThree" className="collapse"
                                                 aria-labelledby="otherHeadingThree" data-parent="#other">
                                                <div className="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit
                                                    amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Quis
                                                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                    accumsan lacus vel
                                                    facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis. .
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header p-0" id="otherHeadingFour">
                                                <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
                                                <label className="mt-3 mb-0">How can I track my iran visa application
                                                    form?</label>
                                                <button
                                                    className="btn btn-link float-right text-decoration-none cl-btn collapsed"
                                                    type="button"
                                                    data-toggle="collapse" data-target="#otherCollapseFour"
                                                    aria-expanded="false"
                                                    aria-controls="otherCollapseFour">
                                                    +
                                                </button>

                                            </div>
                                            <div id="otherCollapseFour" className="collapse"
                                                 aria-labelledby="otherHeadingFour" data-parent="#other">
                                                <div className="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit
                                                    amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Quis
                                                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                    accumsan lacus vel
                                                    facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis. .
                                                </div>
                                            </div>
                                        </div>
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
export default Faq;