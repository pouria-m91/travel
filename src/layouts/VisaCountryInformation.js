import React, {Component} from 'react';
import '../styles/visaCountryInformation.css';
import {Loader} from "../Tools";
import {useFetch} from "../API";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import ReactDOM from "react-dom";
import FAQComponent from "../FAQComponent";
import {FAQ2JSON} from "../Tools";

class VisaInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: true,
            visa_info: {},
            countries: props.countries ? props.countries : [],
            title: props.title ? props.title : props.match.params.title,
        };
        this.loadContent = this.loadContent.bind(this);
    }

    componentDidMount() {
        const {title, countries} = this.state;
        useFetch('vi/' + title).get().then((data) => {
            this.setState({visa_info: data, loader: false});
        }).catch(error => {
            this.setState({visa_info: {}, loader: false});
            // if (error.code == 1010)
            //     this.props.onNext('step3');
            // else
            //     alert(error.message);
        });
        if (countries.length == 0)
            useFetch('country').list().then((data) => {
                this.setState({countries: data});
            }).catch(error => {
                this.setState({countries: []});
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
        const {loader, visa_info, countries} = this.state;
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
                                {/*<Col xs={12} className={'d-md-none'}>*/}
                                {/*    <Col xs={12} className="card p-3 sticky-top w-100" id="card">*/}
                                {/*        <img className="card-img-top h-auto w-100"*/}
                                {/*             src={'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/' + 'ir' + '.svg'}*/}
                                {/*             alt="Flag"/>*/}
                                {/*        <div className="card-body">*/}
                                {/*            <h5 className="card-title">Issuable Visa Type:</h5>*/}
                                {/*            <h5 className="card-text">Tourist (Type B)</h5>*/}
                                {/*            <h5 className="card-title1">Avg Required Time:</h5>*/}
                                {/*            <h5 className="card-text">2 Month Before Travel</h5>*/}
                                {/*            <h5 className="card-title1">Stay Validity Period:</h5>*/}
                                {/*            <h5 className="card-text">30 Days</h5>*/}
                                {/*            <h5 className="card-title1">Price:</h5>*/}
                                {/*            <h5 className="card-text1 text-center mt-2 mb-0">80 $</h5>*/}
                                {/*            <div className="d-flex justify-content-center">*/}
                                {/*                <button type="button"*/}
                                {/*                        className="btn btn-outline-success mt-3 text-uppercase">*/}
                                {/*                    APPLY NOW*/}
                                {/*                </button>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </Col>*/}
                                {/*</Col>*/}
                                <Col xs={12} md={9} className={'float-left'}>
                                    <div dangerouslySetInnerHTML={this.loadContent()}/>
                                </Col>
                                <Col xs={12} md={3}>
                                    <Col xs={12} className="card p-3 sticky-top w-100" id="card">
                                        <img className="card-img-top h-auto w-100"
                                             src={'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/' + 'ir' + '.svg'}
                                             alt="Flag"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Issuable Visa Type:</h5>
                                            <h5 className="card-text">{visa_info.issuable ? visa_info.issuable : ''}</h5>
                                            <h5 className="card-title1">Avg Required Time:</h5>
                                            <h5 className="card-text">{visa_info.required_time ? visa_info.required_time : ''}</h5>
                                            <h5 className="card-title1">Stay Validity Period:</h5>
                                            <h5 className="card-text">{visa_info.stay_period ? visa_info.stay_period : ''}</h5>
                                            <h5 className="card-title1">Price:</h5>
                                            <h5 className="card-text1 text-center mt-2 mb-0">{visa_info.price ? visa_info.price : ''}</h5>
                                            <div className="d-flex justify-content-center">
                                                <button type="button"
                                                        className="btn btn-outline-success mt-3 text-uppercase">
                                                    APPLY NOW
                                                </button>
                                            </div>
                                        </div>
                                    </Col>
                                </Col>
                            </Row>

                        </div>
                    </div>

                    <div className="offset">
                        <div className="jumbotron2">

                            <div className="col-12 ml-4">
                                <h3 className="heading-center faq-text">FAQ of Iranian Visa for American Citizens</h3>
                            </div>

                            {visa_info.faq ?
                                <Row>
                                    <Col xs={12} md={9}>
                                        {visa_info.faq.map((faq, index) =>
                                            <FAQComponent key={index} faq={faq}/>
                                        )}
                                    </Col>
                                    {FAQ2JSON(visa_info.faq)}
                                </Row>
                                : ''}
                            <div className="col-12 ml-4">
                                <h3 className="heading-center faq-text">Iran Visa For Other Nationality:</h3>
                            </div>

                            <div className="col-8 float-left">

                                <div className="form-group col-6 float-left button">
                                    <select className=" form-control insideButton" id="sel1">
                                        <option>Select Your Nationality</option>
                                        {countries.map((country, index) =>
                                            <option key={index} value={country.id}>{country.name}</option>
                                        )}
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