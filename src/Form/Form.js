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


class Form extends Component {
    constructor(props) {
        super(props);
        let date = moment(new Date()).format('YYYY-MM-DD');
        this.state = {
            formState: 'step4',
            countries: [],
            ports: [],
            visaPickUps: [],
            travelers: [],
            travelInfo: {
                purpose_traveling: "xxxxxxx",
                start_travel: date,
                duration_stay: 5,
                accomodation_address: "sad sdd as,d asd,asd ,asd,ad",
                entry_port_id: 1,
                departure_port_id: 2,
                visa_get_place_id: 3
            }
        };
        this.formSwitch = this.formSwitch.bind(this);
    }

    componentDidMount() {
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


    formSwitch() {
        const {formState, countries, ports, visaPickUps, travelInfo, travelers} = this.state;
        switch (formState) {
            case "step2":
                return (<Verify onNext={() => this.setState({formState: 'step3'})}/>);
            case "step3":
                return (<TravelInfo value={travelInfo} ports={ports}
                                    visaPickUps={visaPickUps}
                                    onNext={(travelInfo) => this.setState({
                                        travelInfo: travelInfo,
                                        formState: 'step4'
                                    })}/>);
            case "step4":
                return (<TravelList value={travelers} countries={countries}/>);
            case "step5":
                return (<Confirm/>);
            default:
                return (<Customer countries={countries} onNext={() => this.setState({formState: 'step2'})}/>)
        }
    }


    render() {
        const {ports, visaPickUps, countries} = this.state;
        // if (ports.length && visaPickUps.length && countries.length)
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

                    <div className="offset">

                        <div className="jumbotron">

                            <div className="col-12 text-left">
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
                            </div>
                        </div>
                    </div>

                    <div className="offset">
                        {this.formSwitch()}
                    </div>


                </div>
            );
        // else return (<div>Loading...</div>);
    }

}

export default Form;
