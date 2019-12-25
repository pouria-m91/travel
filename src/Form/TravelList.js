import React, {Component} from 'react';
import './form.css';
import {Traveler} from "./Traveler";
import moment from "moment";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";

import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import {checkFileSize, checkMimeType} from "../Tools";
import {Button} from "@material-ui/core";

const date = moment(new Date()).format('YYYY-MM-DD');

function getVisa(visa, national_id) {
    let out = 0;
    visa.map((v, i) => {
        let b = true;
        v.black_list_countries.map((country, i) => {
            if (national_id == country.id) {
                b = false;
            }
        });
        if (b)
            return out = v.id;
    });
    return out;
}


class TravelList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            travelers: props.value,
            visa: props.visa,
            ports: props.ports,
            visaPickUps: props.visaPickUps,
            loader: true,
            countries: props.countries,
        };
        this.onNext = this.onNext.bind(this);
        this.travelerChange = this.travelerChange.bind(this);
        this.travelInfoChange = this.travelInfoChange.bind(this);
        this.onClickAdd = this.onClickAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.upload = this.upload.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.deleteUpload = this.deleteUpload.bind(this);
        this.handleCollapse = this.handleCollapse.bind(this);
        this.setTravelInfo = this.setTravelInfo.bind(this);
    }

    onNext() {
        const {travelers} = this.state;
        this.props.onNext(travelers);
    }

    componentDidMount() {
        const {travelers} = this.state;
        if (travelers.length == 0) {
            this.onClickAdd();
            this.setState({loader: false});
        } else {
            this.setState({loader: false});
        }
    }

    onClickAdd() {
        const {travelers, visa, countries} = this.state;
        if (travelers.length < 10) {
            for (let i = 0; i < travelers.length; i++) {
                travelers[i].open = false;
            }
            travelers.push({
                info: {
                    first_name: "",
                    last_name: "",
                    passport_number: "",
                    national_id: countries[0].id,
                    father_name: "",
                    place_birth: "",
                    job: "",
                    gender: 1,
                    marriage: 1,
                    birthday: date,
                    passport_issue: date,
                    passport_expire: date,
                    previous_nationality_id: countries[0].id,
                    passport_type: 1,
                    home_address: {
                        country_id: 1,
                        text: "",
                        city_name: "",
                        zipcode: ""
                    }
                },
                travelInfo: {
                    purpose_traveling: "",
                    start_travel: date,
                    duration_stay: 1,
                    accomodation_address: "",
                    entry_port_id: 1,
                    departure_port_id: 1,
                    visa_get_place_id: 1
                },
                passport: {
                    file: undefined,
                    blob: undefined
                },
                portrait: {
                    file: undefined,
                    blob: undefined
                },
                open: true,
                visa_id: getVisa(visa, countries[0].id),
            });
            this.setState({travelers});
        }
    }

    handleCollapse(index) {
        const {travelers} = this.state;
        travelers[index].open = !travelers[index].open;
        this.setState({travelers});
    }

    handleDelete(index) {
        const {travelers} = this.state;
        if (travelers.length > 1) {
            if (index > -1 && travelers[index]) {
                travelers.splice(index, 1);
                console.log(travelers)
                this.setState({travelers});
            }
        }
    }

    deleteUpload(index, type) {
        let {travelers} = this.state;
        travelers[index][type].file = undefined;
        travelers[index][type].blob = undefined;
        this.setState({travelers});
    }

    upload(index, type, file, size = 307200, types = ['image/png', 'image/jpeg']) {
        if (file) {
            if (checkMimeType(file, types)) {
                alert(file.name + ' is not a supported format\n');
            } else {
                if (checkFileSize(file, size)) {
                    alert(file.name + ' is too large, please pick a smaller file\n')
                } else {
                    let {travelers} = this.state;
                    travelers[index][type].file = file;
                    travelers[index][type].blob = URL.createObjectURL(file);
                    this.setState({travelers});
                }
            }
        } else {
            let {travelers} = this.state;
            travelers[index][type].file = undefined;
            travelers[index][type].blob = undefined;
            this.setState({travelers});
        }

    }

    travelerChange(index, event) {
        let {travelers, visa} = this.state;
        if (event.target.getAttribute('name') == 'home_address')
            travelers[index].info['home_address'][event.target.id] = event.target.value;
        else {
            travelers[index].info[event.target.id] = event.target.value;
            if (event.target.id == 'national_id')
                travelers[index].visa_id = getVisa(visa, event.target.value);
        }
        this.setState({travelers});
    }

    travelInfoChange(index, event) {
        let {travelers} = this.state;
        travelers[index].travelInfo[event.target.id] = event.target.value;
        this.setState({travelers});
    }


    onDateChange(index, type, value) {
        let {travelers} = this.state;
        travelers[index].info[type] = value;
        this.setState({travelers});
    }

    setTravelInfo(index, value) {
        let {travelers} = this.state;
        if (value) {
            travelers[index].travelInfo.purpose_traveling = value.purpose_traveling;
            travelers[index].travelInfo.start_travel = value.start_travel;
            travelers[index].travelInfo.duration_stay = value.duration_stay;
            travelers[index].travelInfo.accomodation_address = value.accomodation_address;
            travelers[index].travelInfo.entry_port_id = value.entry_port_id;
            travelers[index].travelInfo.departure_port_id = value.departure_port_id;
            travelers[index].travelInfo.visa_get_place_id = value.visa_get_place_id;
        } else
            travelers[index].travelInfo = {
                purpose_traveling: "",
                start_travel: date,
                duration_stay: 1,
                accomodation_address: "",
                entry_port_id: 1,
                departure_port_id: 1,
                visa_get_place_id: 1
            };
        this.setState({travelers});
    }


    render() {
        const {loader, visaPickUps, visa, ports, travelers, countries} = this.state;
        console.log('render list')
        console.log(travelers)
        if (loader)
            return (<div>Loading...</div>);
        else
            return (
                <div>
                    <div className="form2 bg-form d-flex flex-column ml-auto mr-auto">
                        <Row>
                            <Col xs={11}>
                                <h5 className="head-form">Travel Information(max 10):</h5>
                            </Col>
                            <Col xs={1}>
                                <IconButton
                                    className="float-right"
                                    onClick={this.onClickAdd}
                                    color="primary"
                                    disabled={travelers.length >= 10}
                                    aria-label="Add">
                                    <AddIcon/>
                                </IconButton>
                            </Col>
                        </Row>
                    </div>
                    {travelers.map((traveler, index) =>
                        <Traveler
                            ports={ports}
                            visaPickUps={visaPickUps}
                            key={index}
                            index={index}
                            enableDelete={travelers.length == 1}
                            handleDelete={this.handleDelete}
                            handleCollapse={this.handleCollapse}
                            countries={countries}
                            handleUpload={this.upload}
                            handleDeleteUpload={this.deleteUpload}
                            handleDate={this.onDateChange}
                            handleInfo={this.travelerChange}
                            handleTravelInfo={this.travelInfoChange}
                            traveler={traveler}
                            travelers={travelers}
                            visaList={visa}
                            setTravelInfo={this.setTravelInfo}
                        />
                    )}
                    <div className="form2 d-flex flex-column ml-auto mr-auto">
                        <Row>
                            <Col xs={12}>
                                <Button className="float-right" variant="contained" color="primary"
                                        onClick={this.onNext}> Next </Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            )
    }

}

export default TravelList;