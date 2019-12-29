import React, {Component} from 'react';
import './form.css';
import Icon from "../assets/icon.png";
import DateFnsUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {Button, TextField} from "@material-ui/core";
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";

class TravelInfoo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            travelInfo: props.value,
            loader: false,
            ports: props.ports,
            visaPickUps: props.visaPickUps,
        };
        this.onNext = this.onNext.bind(this);
        this.travelChange = this.travelChange.bind(this);
    }

    onNext() {
        this.props.onNext(this.state.travelInfo)
    }

    travelChange(event) {
        let travelInfo = this.state.travelInfo;
        travelInfo[event.target.id] = event.target.value;
        this.setState({travelInfo});
    }

    render() {
        const {loader, travelInfo, visaPickUps, ports} = this.state;
        console.log(ports)
        if (loader)
            return (<div>Loading...</div>);
        else
            return (
                <div className="form2 d-flex flex-column ml-auto mr-auto">
                    <div className="row">
                        <div className="col-12 bg-form text-left">
                            <h5 className="head-form">Travel Information:</h5>
                            <form>
                                <Row>
                                    <Col xs={12} md={4}>
                                        <TextField
                                            id="purpose_traveling"
                                            label="Purpose Of Traveling"
                                            variant="outlined"
                                            value={travelInfo.purpose_traveling}
                                            fullWidth
                                            onChange={this.travelChange}
                                        />
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                margin="normal"
                                                fullWidth
                                                id="start_travel"
                                                label="Start Traveler"
                                                format="YYYY-MM-DD"
                                                value={travelInfo.start_travel}
                                                onChange={(date, value) => {
                                                    travelInfo.start_travel = value;
                                                    this.setState({travelInfo});
                                                }}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </MuiPickersUtilsProvider>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <TextField
                                            id="duration_stay"
                                            label="Duration Of Stay"
                                            variant="outlined"
                                            type='number'
                                            InputProps={{inputProps: {min: 1}}}
                                            value={travelInfo.duration_stay}
                                            fullWidth
                                            onChange={this.travelChange}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={4}>
                                        <TextField
                                            select
                                            id="entry_port_id"
                                            label="Select Entry Port"
                                            SelectProps={{
                                                native: true,
                                            }}
                                            variant="outlined"
                                            fullWidth
                                            value={travelInfo.entry_port_id}
                                            onChange={this.travelChange}>
                                            {ports.map((port, index) =>
                                                <option key={index} value={port.id}>{port.title} </option>
                                            )}
                                        </TextField>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <TextField
                                            select
                                            id="visa_get_place_id"
                                            label="Select Pickup Location"
                                            SelectProps={{
                                                native: true,
                                            }}
                                            variant="outlined"
                                            fullWidth
                                            value={travelInfo.visa_get_place_id}
                                            onChange={this.travelChange}>
                                            {visaPickUps.map((visaPickUp, index) =>
                                                <option key={index} value={visaPickUp.id}>{visaPickUp.title} </option>
                                            )}
                                        </TextField>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <TextField
                                            select
                                            id="departure_port_id"
                                            label="Select Departure Port"
                                            SelectProps={{
                                                native: true,
                                            }}
                                            variant="outlined"
                                            fullWidth
                                            value={travelInfo.departure_port_id}
                                            onChange={this.travelChange}>
                                            {ports.map((port, index) =>
                                                <option key={index} value={port.id}>{port.title} </option>
                                            )}
                                        </TextField>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <TextField
                                            label="Accommodation Address In IRAN"
                                            id="accomodation_address"
                                            variant="outlined"
                                            multiline
                                            fullWidth
                                            rows="5"
                                            value={travelInfo.accomodation_address}
                                            onChange={this.travelChange}
                                            helperText='(Accommodation address or hotels name'
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <Button className="float-right" variant="contained" color="primary"
                                                onClick={this.onNext}>Next
                                        </Button>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </div>
                </div>
            )
    }

}

export default TravelInfoo;