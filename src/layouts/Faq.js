import React, {Component} from 'react';
import '../styles/faq.css';
import HeadPic from '../assets/faq.png';
import ConversationBlack from '../assets/conversation-black.png';
import VisaBlack from '../assets/visa-black.png';
import CoinBlack from '../assets/coin-black.png';
import Question from '../assets/question.png';
import {Container} from "@material-ui/core";
import Row from "reactstrap/es/Row";
import Accordion from "../Accordion";
import Col from "reactstrap/es/Col";

const tabs = [
    {title: "Profile", image: ConversationBlack},
    {title: "Passport", image: VisaBlack},
    {title: "Payment", image: CoinBlack},
    {title: "Question", image: ConversationBlack}
];

function Tab(props) {
    const tab = props.value;
    return (
        <Col xs={3} md={12} className="p-1 pb-3">
            <Row className="p-2 card-border text-center link">
                <Col xs={12} md={5} className="m-0 p-0 d-none d-sm-block">
                    <img src={tab.image} width={60} height={60} className="p-2"
                         alt={tab.title}/>
                </Col>
                <Col xs={12} md={7} className="text-center">
                    <label className="d-flex justify-content-center">{tab.title}</label>
                </Col>
            </Row>
        </Col>
    )

}

class Faq extends Component {
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
                                        <div className="section-heading text-center">
                                            <label className="font-head p-0 mb-3">Frequently Asked Question’s</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-6 col-sm-12 p-2 m-0">
                                        <img className="img-fluid" src={HeadPic} alt="FAQ"/>
                                    </div>
                                </div>

                                <div className="header-label col-5 m-0 p-0">
                                    <label>VisaToIran / FAQ</label>
                                </div>
                            </Container>
                        </div>
                    </div>
                </header>

                <div className="offset">
                    <hr className="bg-dark p-0 m-0"/>
                    <div className="jumbotron4 p-0 m-0">
                        <Container>
                            <Row className="d-flex justify-content-center">
                                <Col xs={12} md={3} lg={2} className="p-0 m-0">
                                    <Row className="p-0 m-0 mt-3">
                                        {tabs.map((tab, index) =>
                                            <Tab key={index} value={tab}/>
                                        )}
                                    </Row>

                                </Col>


                            <Col xs={12} md={8} lg={9} className="my-1 d-flex justify-content-center">
                                <Col xs={12} md={10} className="bg-white rounded">
                                    <Accordion/>
                                </Col>
                            </Col>

                            </Row>
                            {/*<div className="col-3">*/}
                            {/*    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"*/}
                            {/*         aria-orientation="vertical">*/}
                            {/*        <Link className="nav-link active "*/}
                            {/*              id="v-pills-home-tab" data-toggle="pill" to="#v-pills-home" role="tab"*/}
                            {/*              aria-controls="v-pills-home" aria-selected="true">*/}
                            {/*            </Link>*/}
                            {/*        <Link className="nav-link pt-3 pb-3 m-2 card-border text-center link"*/}
                            {/*              id="v-pills-profile-tab" data-toggle="pill" to="#v-pills-profile" role="tab"*/}
                            {/*              aria-controls="v-pills-profile" aria-selected="false">*/}
                            {/*            <img src={VisaBlack} className="img-fluid float-left nav-img"*/}
                            {/*                 alt="Visa And Passport"/>Visa And<br/> Passport</Link>*/}
                            {/*        <Link className="nav-link pt-3 pb-3 m-2 card-border text-center link"*/}
                            {/*              id="v-pills-messages-tab" data-toggle="pill" to="#v-pills-messages" role="tab"*/}
                            {/*              aria-controls="v-pills-messages" aria-selected="false">*/}
                            {/*            <img src={CoinBlack} className="img-fluid float-left nav-img"*/}
                            {/*                 alt="Pricing And Payment"/>Pricing And <br/>Payment</Link>*/}
                            {/*        <Link className="nav-link pt-3 pb-3 m-2 card-border text-center link"*/}
                            {/*              id="v-pills-settings-tab" data-toggle="pill" to="#v-pills-settings" role="tab"*/}
                            {/*              aria-controls="v-pills-settings" aria-selected="false">*/}
                            {/*            <img src={ConversationBlack} className="img-fluid float-left nav-img"*/}
                            {/*                 alt="Other Questions"/>Other<br/> Questions</Link>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*<div className="col-9">*/}
                            {/*    <div className="tab-content p-3 m-2 card-border bg-white" id="v-pills-tabContent">*/}
                            {/*        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"*/}
                            {/*             aria-labelledby="v-pills-home-tab">*/}

                            {/*            <Accordion/>*/}

                            {/*        </div>*/}

                            {/*        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel"*/}
                            {/*             aria-labelledby="v-pills-profile-tab">*/}

                            {/*            <Accordion/>*/}

                            {/*        </div>*/}

                            {/*        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel"*/}
                            {/*             aria-labelledby="v-pills-messages-tab">*/}

                            {/*            <div className="accordion" id="payment">*/}

                            {/*                <div className="card">*/}
                            {/*                    <div className="card-header p-0" id="paymentHeadingOne">*/}
                            {/*                        <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>*/}
                            {/*                        <label className="mt-3 mb-0">How can I track my iran visa application*/}
                            {/*                            form?</label>*/}
                            {/*                        <button className="btn btn-link float-right text-decoration-none card-header"*/}
                            {/*                                type="button"*/}
                            {/*                                data-toggle="collapse" data-target="#paymentCollapseOne"*/}
                            {/*                                aria-expanded="true"*/}
                            {/*                                aria-controls="paymentCollapseOne">*/}
                            {/*                            +*/}
                            {/*                        </button>*/}
                            {/*                    </div>*/}

                            {/*                    <div id="paymentCollapseOne" className="collapse show"*/}
                            {/*                         aria-labelledby="paymentHeadingOne" data-parent="#payment">*/}
                            {/*                        <div className="card-body">*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit*/}
                            {/*                            amet, consectetur*/}
                            {/*                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et*/}
                            {/*                            dolore magna aliqua. Quis*/}
                            {/*                            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas*/}
                            {/*                            accumsan lacus vel*/}
                            {/*                            facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis. .*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}

                            {/*                <div className="card">*/}
                            {/*                    <div className="card-header p-0" id="paymentHeadingTwo">*/}
                            {/*                        <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>*/}
                            {/*                        <label className="mt-3 mb-0">How can I track my iran visa application*/}
                            {/*                            form?</label>*/}
                            {/*                        <button*/}
                            {/*                            className="btn btn-link float-right text-decoration-none cl-btn collapsed"*/}
                            {/*                            type="button"*/}
                            {/*                            data-toggle="collapse" data-target="#paymentCollapseTwo"*/}
                            {/*                            aria-expanded="false"*/}
                            {/*                            aria-controls="paymentCollapseTwo">*/}
                            {/*                            +*/}
                            {/*                        </button>*/}

                            {/*                    </div>*/}
                            {/*                    <div id="paymentCollapseTwo" className="collapse"*/}
                            {/*                         aria-labelledby="paymentHeadingTwo" data-parent="#payment">*/}
                            {/*                        <div className="card-body">*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit*/}
                            {/*                            amet, consectetur*/}
                            {/*                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et*/}
                            {/*                            dolore magna aliqua. Quis*/}
                            {/*                            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas*/}
                            {/*                            accumsan lacus vel*/}
                            {/*                            facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis. .*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}

                            {/*                <div className="card">*/}
                            {/*                    <div className="card-header p-0" id="paymentHeadingThree">*/}
                            {/*                        <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>*/}
                            {/*                        <label className="mt-3 mb-0">How can I track my iran visa application*/}
                            {/*                            form?</label>*/}
                            {/*                        <button*/}
                            {/*                            className="btn btn-link float-right text-decoration-none cl-btn collapsed"*/}
                            {/*                            type="button"*/}
                            {/*                            data-toggle="collapse" data-target="#paymentCollapseThree"*/}
                            {/*                            aria-expanded="false"*/}
                            {/*                            aria-controls="paymentCollapseThree">*/}
                            {/*                            +*/}
                            {/*                        </button>*/}

                            {/*                    </div>*/}
                            {/*                    <div id="paymentCollapseThree" className="collapse"*/}
                            {/*                         aria-labelledby="paymentHeadingThree" data-parent="#payment">*/}
                            {/*                        <div className="card-body">*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit*/}
                            {/*                            amet, consectetur*/}
                            {/*                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et*/}
                            {/*                            dolore magna aliqua. Quis*/}
                            {/*                            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas*/}
                            {/*                            accumsan lacus vel*/}
                            {/*                            facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis. .*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}

                            {/*                <div className="card">*/}
                            {/*                    <div className="card-header p-0" id="paymentHeadingFour">*/}
                            {/*                        <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>*/}
                            {/*                        <label className="mt-3 mb-0">How can I track my iran visa application*/}
                            {/*                            form?</label>*/}
                            {/*                        <button*/}
                            {/*                            className="btn btn-link float-right text-decoration-none cl-btn collapsed"*/}
                            {/*                            type="button"*/}
                            {/*                            data-toggle="collapse" data-target="#paymentCollapseFour"*/}
                            {/*                            aria-expanded="false"*/}
                            {/*                            aria-controls="paymentCollapseFour">*/}
                            {/*                            +*/}
                            {/*                        </button>*/}

                            {/*                    </div>*/}
                            {/*                    <div id="paymentCollapseFour" className="collapse"*/}
                            {/*                         aria-labelledby="paymentHeadingFour" data-parent="#payment">*/}
                            {/*                        <div className="card-body">*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit*/}
                            {/*                            amet, consectetur*/}
                            {/*                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et*/}
                            {/*                            dolore magna aliqua. Quis*/}
                            {/*                            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas*/}
                            {/*                            accumsan lacus vel*/}
                            {/*                            facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis. .*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}

                            {/*            </div>*/}

                            {/*        </div>*/}

                            {/*        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel"*/}
                            {/*             aria-labelledby="v-pills-settings-tab">*/}

                            {/*            <div className="accordion" id="other">*/}

                            {/*                <div className="card">*/}

                            {/*                    <div className="card-header p-0" id="otherHeadingOne">*/}
                            {/*                        <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>*/}
                            {/*                        <label className="mt-3 mb-0">How can I track my iran visa application*/}
                            {/*                            form?</label>*/}
                            {/*                        <button className="btn btn-link float-right text-decoration-none cl-btn"*/}
                            {/*                                type="button"*/}
                            {/*                                data-toggle="collapse" data-target="#otherCollapseOne"*/}
                            {/*                                aria-expanded="true"*/}
                            {/*                                aria-controls="otherCollapseOne">*/}
                            {/*                            +*/}
                            {/*                        </button>*/}
                            {/*                    </div>*/}

                            {/*                    <div id="otherCollapseOne" className="collapse show"*/}
                            {/*                         aria-labelledby="otherHeadingOne" data-parent="#other">*/}
                            {/*                        <div className="card-body">*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit*/}
                            {/*                            amet, consectetur*/}
                            {/*                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et*/}
                            {/*                            dolore magna aliqua. Quis*/}
                            {/*                            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas*/}
                            {/*                            accumsan lacus vel*/}
                            {/*                            facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis. .*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}

                            {/*                <div className="card">*/}
                            {/*                    <div className="card-header p-0" id="otherHeadingTwo">*/}
                            {/*                        <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>*/}
                            {/*                        <label className="mt-3 mb-0">How can I track my iran visa application*/}
                            {/*                            form?</label>*/}
                            {/*                        <button*/}
                            {/*                            className="btn btn-link float-right text-decoration-none cl-btn collapsed"*/}
                            {/*                            type="button"*/}
                            {/*                            data-toggle="collapse" data-target="#otherCollapseTwo"*/}
                            {/*                            aria-expanded="false"*/}
                            {/*                            aria-controls="otherCollapseTwo">*/}
                            {/*                            +*/}
                            {/*                        </button>*/}

                            {/*                    </div>*/}
                            {/*                    <div id="otherCollapseTwo" className="collapse"*/}
                            {/*                         aria-labelledby="otherHeadingTwo" data-parent="#other">*/}
                            {/*                        <div className="card-body">*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit*/}
                            {/*                            amet, consectetur*/}
                            {/*                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et*/}
                            {/*                            dolore magna aliqua. Quis*/}
                            {/*                            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas*/}
                            {/*                            accumsan lacus vel*/}
                            {/*                            facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis. .*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}

                            {/*                <div className="card">*/}
                            {/*                    <div className="card-header p-0" id="otherHeadingThree">*/}
                            {/*                        <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>*/}
                            {/*                        <label className="mt-3 mb-0">How can I track my iran visa application*/}
                            {/*                            form?</label>*/}
                            {/*                        <button*/}
                            {/*                            className="btn btn-link float-right text-decoration-none cl-btn collapsed"*/}
                            {/*                            type="button"*/}
                            {/*                            data-toggle="collapse" data-target="#otherCollapseThree"*/}
                            {/*                            aria-expanded="false"*/}
                            {/*                            aria-controls="otherCollapseThree">*/}
                            {/*                            +*/}
                            {/*                        </button>*/}

                            {/*                    </div>*/}
                            {/*                    <div id="otherCollapseThree" className="collapse"*/}
                            {/*                         aria-labelledby="otherHeadingThree" data-parent="#other">*/}
                            {/*                        <div className="card-body">*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit*/}
                            {/*                            amet, consectetur*/}
                            {/*                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et*/}
                            {/*                            dolore magna aliqua. Quis*/}
                            {/*                            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas*/}
                            {/*                            accumsan lacus vel*/}
                            {/*                            facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis. .*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}

                            {/*                <div className="card">*/}
                            {/*                    <div className="card-header p-0" id="otherHeadingFour">*/}
                            {/*                        <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>*/}
                            {/*                        <label className="mt-3 mb-0">How can I track my iran visa application*/}
                            {/*                            form?</label>*/}
                            {/*                        <button*/}
                            {/*                            className="btn btn-link float-right text-decoration-none cl-btn collapsed"*/}
                            {/*                            type="button"*/}
                            {/*                            data-toggle="collapse" data-target="#otherCollapseFour"*/}
                            {/*                            aria-expanded="false"*/}
                            {/*                            aria-controls="otherCollapseFour">*/}
                            {/*                            +*/}
                            {/*                        </button>*/}

                            {/*                    </div>*/}
                            {/*                    <div id="otherCollapseFour" className="collapse"*/}
                            {/*                         aria-labelledby="otherHeadingFour" data-parent="#other">*/}
                            {/*                        <div className="card-body">*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit*/}
                            {/*                            amet, consectetur*/}
                            {/*                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et*/}
                            {/*                            dolore magna aliqua. Quis*/}
                            {/*                            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas*/}
                            {/*                            accumsan lacus vel*/}
                            {/*                            facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis.*/}
                            {/*                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                            {/*                            eiusmod tempor incididunt ut*/}
                            {/*                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices*/}
                            {/*                            gravida. Risus commodo*/}
                            {/*                            viverra maecenas accumsan lacus vel facilisis. .*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}

                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}


                        </Container>
                    </div>
                </div>

            </div>
        )
    }

}

export default Faq;