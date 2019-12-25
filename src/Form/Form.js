import React, {Component} from 'react';
import './form.css';
import HeadPic from '../assets/form-header.png';
import Customer from "./Customer";
import Verify from "./Verify";
import TravelInfo from "./TravelInfo";
import TravelList from "./TravelList";
import Confirm from "./Confirm";
import {useFetch} from "../API";
import moment from "moment";
import {CircularProgress} from "@material-ui/core";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import Container from "reactstrap/es/Container";
import {Loader} from "../Tools";
import Login from "./Login";


class Form extends Component {
    constructor(props) {
        super(props);
        let date = moment(new Date()).format('YYYY-MM-DD');
        this.state = {
            formState: 'step4',
            countries: [],
            ports: [],
            loader: true,
            user: {},
            visaPickUps: [],
            travelers: [],
            visa: [],
        };
        this.formSwitch = this.formSwitch.bind(this);
        this.init = this.init.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
    }

    componentDidMount() {
        useFetch('visa').list().then((data) => {
            this.setState({visa: data, loader: false});
            this.init();
        }).catch(error => {
            this.setState({visa: []});
            alert(error.message);
        });
    }

    init() {
        useFetch('user/info').get().then((data) => {
            this.setState({user: data, formState: 'step4'});
        }).catch(error => {
            this.setState({user: {}, formState: 'step1'});
        });
        useFetch('country').list().then((data) => {
            this.setState({countries: data});
        }).catch(error => {
            this.setState({countries: []});
            alert(error.message);
        });
        useFetch('port').list().then((data) => {
            this.setState({ports: data});
        }).catch(error => {
            this.setState({ports: []});
            alert(error.message);
        });
        useFetch('visagetplace').list().then((data) => {
            this.setState({visaPickUps: data});
        }).catch(error => {
            this.setState({visaPickUps: []});
            alert(error.message);
        });
    }

    onChangeState(state) {
        this.setState({
            formState: state
        });
    }

    formSwitch() {
        const {formState, countries, user, visa, ports, visaPickUps, travelInfo, travelers} = this.state;
        switch (formState) {
            case "step2":
                return (<Verify onNext={() => this.setState({formState: 'step3'})}/>);
            case "step3":
                return (<Login onNext={() => this.setState({formState: 'step4'})}/>);
            case "step4":
                return (<TravelList
                    ports={ports}
                    visa={visa}
                    visaPickUps={visaPickUps}
                    onNext={(travelers) => this.setState({
                        travelers: travelers,
                        formState: 'step5'
                    })}
                    value={travelers}
                    countries={countries}/>);
            case "step5":
                if (travelers.length > 0 && travelers.length <= 10)
                    return (<Confirm
                        user={user}
                        travelers={travelers}
                        visa={visa}
                        onChangeState={this.onChangeState}
                    />);
                else {
                    this.setState({formState: 'step4'});
                }

            default:
                return (<Customer countries={countries} onNext={(step) => this.setState({formState: step})}/>)
        }
        return ('');
    }


    render() {
        const {ports, loader, visaPickUps, countries} = this.state;
        if (loader) {
            return (
                <Loader/>
            )
        } else {
            return (
                <div>
                    <header id="home">
                        <section>
                            <div className="wm offset">
                                <div className="container">
                                    <div className="row align-items-lg-center">
                                        <div className="col-12 col-md-6 text-center text-md-left">
                                            <div className="section-heading text-center">
                                                <label id="f1">Iran Online Visa</label>
                                                <br/>
                                                <label id="f2">Application Form</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6" id="f3">
                                            <img className="img-fluid" src={HeadPic} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </header>

                    <div className={'offset'}>
                        <Row className={'jumbotron'}>
                            <Col xs={12}>
                                <h3 className="heading">How To Get Iran Online Visa:</h3>
                                <p className="heading-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod
                                    tempor
                                    incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                    gravida.
                                    Risus
                                    commodo
                                    viverra maecenas accumsan lacus vel facilisisLorem ipsum dolor sit amet, consectetur
                                    adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                                    suspendisse
                                    ultrices
                                    gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut
                                    labore et
                                    dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                                    maecenas
                                    accumsan
                                    lacus vel facilisis.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut
                                    labore et
                                    dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                                    maecenas
                                    accumsan
                                    lacus vel facilisis.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut
                                    labore et
                                    dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                                    maecenas
                                    accumsan
                                    lacus vel facilisis.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut
                                    labore et
                                    dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                                    maecenas
                                    accumsan
                                    lacus vel facilisis. . </p>
                            </Col>
                        </Row>
                    </div>

                    <div className="offset" style={{minHeight: 100}}>
                        {(ports.length && visaPickUps.length && countries.length) ? this.formSwitch() : <div>
                            <center><CircularProgress/></center>
                        </div>}
                    </div>


                </div>
            )
        }
    }
}

export default Form;
