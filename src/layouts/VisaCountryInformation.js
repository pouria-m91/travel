import React, {Component} from 'react';
import '../styles/visaCountryInformation.css';
import HeadPic from '../assets/citizen.png';
import Flag from '../assets/flag.png';
import Question from '../assets/question.png';
import {Loader} from "../Tools";
import {useFetch} from "../API";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import ReactDOM from "react-dom";


class VisaInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: true,
            visa_info: {},
            title: props.title ? props.title : props.match.params.title,
        };
        this.loadContent = this.loadContent.bind(this);
    }

    componentDidMount() {
        const {title} = this.state;
        useFetch('vi/' + title).get().then((data) => {
            this.setState({visa_info: data, loader: false});
        }).catch(error => {
            this.setState({visa_info: {}, loader: false});
            // if (error.code == 1010)
            //     this.props.onNext('step3');
            // else
            //     alert(error.message);
        });
    }

    loadContent() {
        const {visa_info} = this.state;
        if (visa_info.content) {
            return {__html: visa_info.content};
        } else {
            return ('');
        }
    }

    render() {
        const {loader, visa_info} = this.state;
        if (loader)
            return (
                <Loader/>
            )
        else
            return (
                <div>
                    <header id="home">
                        <div className="offset">
                            <div className="container col-12">
                                <div className="row ">
                                    <div className="col-md-5 text-center">
                                        <div className="section-heading">
                                            <h3 id="f1">
                                                {visa_info.title ? visa_info.title : ''}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <img className="img-fluid" src={visa_info.banner ? visa_info.banner : ''}
                                             alt="citizen"/>
                                    </div>

                                </div>
                                <div className="header-label col-5 text-center">
                                    <label>VisaToIran / Visa / Iran Visa For American</label>
                                </div>
                            </div>

                        </div>
                    </header>

                    <div className="offset">
                        <div className="jumbotron">

                            <Row>
                                <Col xs={9} className={'float-left'}>
                                    <div dangerouslySetInnerHTML={this.loadContent()}/>
                                </Col>
                                <Col xs={3} className="float-right">
                                    <div className="card col-12 p-3 sticky-top card-width" id="card">
                                        <img className="card-img-top" src={Flag} alt="Flag"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Issuable Visa Type:</h5>
                                            <h5 className="card-text">Tourist (Type B)</h5>
                                            <h5 className="card-title1">Avg Required Time:</h5>
                                            <h5 className="card-text">2 Month Before Travel</h5>
                                            <h5 className="card-title1">Stay Validity Period:</h5>
                                            <h5 className="card-text">30 Days</h5>
                                            <h5 className="card-title1">Price:</h5>
                                            <h5 className="card-text1 text-center mt-2 mb-0">80 $</h5>
                                            <div className="d-flex justify-content-center">
                                                <button type="button"
                                                        className="btn btn-outline-success mt-3 text-uppercase">
                                                    APPLY NOW
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </div>

                    <div className="offset">
                        <div className="jumbotron2">

                            <div className="col-12 ml-4">
                                <h3 className="heading-center faq-text">FAQ of Iranian Visa for American Citizens</h3>
                            </div>

                            <div className="col-9 ml-4">
                                <div className="accordion" id="accordion">
                                    <div className="card">

                                        <div className="card-header p-0" id="headingOne">
                                            <img src={Question} alt="question" className="acr-img ml-3 mr-2 mb-1"/>
                                            <label className="mt-3 mb-0">How can I track my iran visa application
                                                form?</label>
                                            <button className="btn btn-link float-right text-decoration-none cl-btn"
                                                    type="button"
                                                    data-toggle="collapse" data-target="#collapseOne"
                                                    aria-expanded="true"
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
                                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                                magna
                                                aliqua. Quis
                                                ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                accumsan
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
                                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                                magna
                                                aliqua. Quis
                                                ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                accumsan
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
                                                data-toggle="collapse" data-target="#collapseThree"
                                                aria-expanded="false"
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
                                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                                magna
                                                aliqua. Quis
                                                ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                accumsan
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
                                                data-toggle="collapse" data-target="#collapseThree"
                                                aria-expanded="false"
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
                                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                                magna
                                                aliqua. Quis
                                                ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                accumsan
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

                            <div className="col-12 ml-4">
                                <h3 className="heading-center faq-text">Iran Visa For Other Nationality:</h3>
                            </div>

                            <div className="col-8 float-left">

                                <div className="form-group col-6 float-left button">
                                    <select className=" form-control insideButton" id="country">
                                        <option>Select Other Country</option>
                                        <option>america</option>
                                        <option>england</option>
                                        <option>spain</option>
                                        <option>check</option>
                                    </select>
                                </div>

                                <div className="col-4 float-left">
                                    <button type="button" className="btn sub-btn pl-4 pr-4">GO</button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            )
    }
}

export default VisaInfo;