import React, {Component} from 'react';
import './form.css';
import Icon from "../assets/icon.png";
import DateFnsUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

class TravelInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            travelInfo:props.value,
            loader: false,
            ports: props.ports,
            visaPickUps: props.visaPickUps,
        };
        this.onNext = this.onNext.bind(this);
        this.travelChange = this.travelChange.bind(this);
    }

    onNext() {
        console.log(this.state.travelInfo);
       this.props.onNext(this.state.travelInfo)

    }
    travelChange(event){
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

                            <div className="form-row col-5 float-left">
                                <label htmlFor="inputEntryType" className="col-form-label mt-auto mb-auto ">Entry
                                    Port:</label>
                                <img src={Icon} alt="info" className="form-info"/>
                                <div className="col-7">
                                    <select id="entry_port_id" className="form-control bg-transparent">
                                        onChange={this.travelChange}>
                                        {ports.map((port, index) =>
                                            <option key={index} value={port.id}>{port.title} </option>
                                        )}
                                    </select>
                                </div>
                            </div>

                            <div className="form-row col-6 float-left">
                                <div className="col-7">
                                    <center>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                margin="normal"
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
                                    </center>

                                </div>
                            </div>

                            <div className="form-row col-5 float-left">
                                <label htmlFor="inputDuration" className="col-form-label mt-auto mb-auto">Duration
                                    Of
                                    Stay:</label>
                                <div className="col-3">
                                    <input type="number" className="form-control bg-transparent"
                                           id="duration_stay"
                                    value={travelInfo.duration_stay}
                                           onChange={this.travelChange}
                                    />
                                </div>
                                <label htmlFor="inputDuration"
                                       className="col-form-label mt-auto mb-auto ">Days</label>
                            </div>
                            <div className="form-row col-7 float-left">
                                <label htmlFor="inputPurpose" className="col-form-label mt-auto mb-auto ">Purpose Of
                                    Traveling:</label>
                                <img src={Icon} alt="info" className="form-info"/>
                                <div className="col-6">
                                    <input type="text" className="form-control bg-transparent" id="purpose_traveling"
                                           value={travelInfo.purpose_traveling}
                                           onChange={this.travelChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row col-7 float-left">
                                <label htmlFor="inputDeparturePort" className="col-form-label mt-auto mb-auto ">Departure
                                    Port:</label>
                                <div className="col-7">
                                    <select id="departure_port_id" className="form-control bg-transparent">
                                        onChange={this.travelChange}>
                                        {ports.map((port, index) =>
                                            <option key={index} value={port.id}>{port.title} </option>
                                        )}
                                    </select>
                                </div>
                            </div>

                            <div className="form-row col-10 float-left">
                                <label htmlFor="inputPickupLocation" className="col-form-label mt-auto mb-auto">Pickup
                                    Location:</label>
                                <img src={Icon} alt="info" className="form-info"/>
                                <div className="col-7">
                                    <select id="visa_get_place_id" className="form-control bg-transparent">
                                        onChange={this.travelChange}>
                                        {visaPickUps.map((visaPickUp, index) =>
                                            <option key={index} value={visaPickUp.id}>{visaPickUp.title} </option>
                                        )}
                                    </select>
                                </div>
                            </div>

                            <div className="form-row col-12 float-left">
                                <div className="col-5">
                                    <label htmlFor="inputAccommodation"
                                           className="col-form-label mt-auto mb-auto text-center form-textarea-label2">Accommodation
                                        Address In
                                        IRAN:</label>
                                    <label htmlFor="inputAccommodation"
                                           className="col-form-label mt-auto mb-auto text-center form-textarea-label">(Accommodation
                                        address or
                                        Hotels Name)</label>
                                </div>
                                <div className="col-7">
                                    <textarea className="form-control bg-transparent" rows="5"
                                              id="accomodation_address"
                                    value={travelInfo.accomodation_address}
                                              onChange={this.travelChange}
                                    > </textarea>
                                </div>

                            </div>

                        </form>
                        <div className="col-12 float-left">
                            <button type="button" className="btn btn-next float-right" onClick={this.onNext}>NEXT</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default TravelInfo;