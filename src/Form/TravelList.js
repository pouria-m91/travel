import React, {Component} from 'react';
import './form.css';
import Icon from "../assets/icon.png";
import X from "../assets/X.png";
import Upload from "../assets/upload.png";
import {Link} from "react-router-dom";
import Plus from "../assets/plus.png";
import DateFnsUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {marriage, passportTypes} from "../Constant";

class TravelList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            travelers: props.value,
            loader: false,
            ports: props.ports,
            visaPickUps: props.visaPickUps,
            countries: props.countries,
        };
        // this.onNext = this.onNext.bind(this);
        this.travelChange = this.travelChange.bind(this);
    }

    travelChange(event) {
        let travelers = this.state.travelers;
        if (event.target.getAttribute('group') == 'home_address')
            travelers.home_address[event.target.id] = event.target.value;
        else
            travelers[event.target.id] = event.target.value;
        this.setState({travelers});
    }


    render() {
        const {loader, travelers, visaPickUps, ports, countries} = this.state;
        console.log(ports);
        if (loader)
            return (<div>Loading...</div>);
        else
            return (
                <div className="form2 d-flex flex-column ml-auto mr-auto">
                    <div className="row">
                        <div className="col-12 bg-form text-left">
                            <h5 className="head-form">Travel Information:</h5>
                            <label className="head-form-label">Traveler Number 1:</label>


                            <form>
                                <div className="form-row col-6 float-left">
                                    <label htmlFor="inputName" className="col-form-label mt-auto mb-auto">First
                                        Name:</label>
                                    <div className="col-8">
                                        <input type="text" className="form-control" id="first_name"
                                               value={travelers.first_name}
                                               onChange={this.travelChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-row col-6 float-left">
                                    <label htmlFor="inputLastName" className="col-form-label mt-auto mb-auto ">Last
                                        Name:</label>
                                    <div className="col-8">
                                        <input type="text" className="form-control" id="last_name"
                                               value={travelers.last_name}
                                               onChange={this.travelChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-row col-6 float-left">
                                    <label htmlFor="inputNationality"
                                           className="col-form-label mt-auto mb-auto">Nationality:</label>
                                    <div className="col-8">
                                        <select id="national" className="form-control bg-transparent"
                                                onChange={this.travelChange}>
                                            {countries.map((country, index) =>
                                                <option key={index} value={country.id}>{country.name}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row col-6 float-left">
                                    <label htmlFor="inputPassportNumber" className="col-form-label mt-auto mb-auto ">Passport
                                        Number:</label>
                                    <div className="col-7">
                                        <input type="text" className="form-control" id="passport_number"
                                               value={travelers.passport_number}
                                               onChange={this.travelChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-row col-6 float-left">
                                    <center>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                margin="normal"
                                                id="birthday"
                                                label="BirthDay"
                                                format="YYYY-MM-DD"
                                                value={travelers.birthday}
                                                onChange={(date, value) => {
                                                    travelers.birthday = value;
                                                    this.setState({travelers});
                                                }}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </MuiPickersUtilsProvider>
                                    </center>
                                </div>
                                <div className="form-row col-6 float-left">
                                    <label htmlFor="inputFatherName" className="col-form-label mt-auto mb-auto ">Father
                                        Name:</label>
                                    <div className="col-8">
                                        <input type="text" className="form-control" id="father_name"
                                               value={travelers.father_name}
                                               onChange={this.travelChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-row col-4 float-left">
                                    <label htmlFor="inputGender"
                                           className="col-form-label mt-auto mb-auto">Gender:</label>
                                    <div className="col-6">
                                        <select id="inputGender" className="form-control">
                                            <option selected>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row col-4 float-left">
                                    <label htmlFor="inputMaritalStatus" className="col-form-label mt-auto mb-auto ">Marital
                                        Status:</label>
                                    <div className="col-6">
                                        <select id="passport_type" className="form-control bg-transparent"
                                                onChange={this.travelChange}>
                                            {marriage.map((married, index) =>
                                                <option key={index} value={index + 1}>{married}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row col-4 float-left">
                                    <label htmlFor="inputJob" className="col-form-label mt-auto mb-auto ">Job:</label>
                                    <div className="col-9">
                                        <input type="text" className="form-control" id="job"
                                        value={travelers.job}
                                               onChange={this.travelChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-row col-6 float-left">
                                    <center>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                margin="normal"
                                                id="passport_issue"
                                                label="Passport Issue Date:"
                                                format="YYYY-MM-DD"
                                                value={travelers.passport_issue}
                                                onChange={(date, value) => {
                                                    travelers.passport_issue = value;
                                                    this.setState({travelers});
                                                }}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </MuiPickersUtilsProvider>
                                    </center>
                                </div>

                                <div className="form-row col-6 float-left">
                                    <center>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                margin="normal"
                                                id="passport_expire"
                                                label="Passport Expiry Date:"
                                                format="YYYY-MM-DD"
                                                value={travelers.passport_expire}
                                                onChange={(date, value) => {
                                                    travelers.passport_expire = value;
                                                    this.setState({travelers});
                                                }}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </MuiPickersUtilsProvider>
                                    </center>
                                </div>

                                <div className="form-row col-6 float-left">
                                    <label htmlFor="inputPreviousNationality"
                                           className="col-form-label mt-auto mb-auto">Previous
                                        Nationality:</label>
                                    <div className="col-6">
                                        <select id="previous_nationality" className="form-control bg-transparent"
                                                onChange={this.travelChange}>
                                            {countries.map((country, index) =>
                                                <option key={index} value={country.id}>{country.name}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row col-6 float-left">
                                    <label htmlFor="inputPassportType" className="col-form-label mt-auto mb-auto">Passport
                                        Type:</label>
                                    <div className="col-7">
                                        <select id="passport_type" className="form-control bg-transparent"
                                                onChange={this.travelChange}>
                                            {passportTypes.map((type, index) =>
                                                <option key={index} value={index + 1}>{type}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row col-12 float-left">
                                    <div className="col-3">
                                        <label htmlFor="inputHomeAddress"
                                               className="col-form-label mt-auto mb-auto text-center form-textarea-label2">Home
                                            Address:</label>
                                    </div>
                                    <div className="col-9">
                                        <textarea className="form-control" rows="5" id="home_address"
                                        value={travelers.home_address.text}
                                                  onChange={this.travelChange}
                                        > </textarea>
                                    </div>
                                </div>
                            </form>
                            <div className="col-6 float-left">
                                <label className="upload-form">Upload Scan Of Passport:</label>
                                <div>
                                    <img src={X} alt="close" className="float-right close-img"/>
                                    <img src={Upload} alt="upload" className="float-right img-thumbnail border-dark"/>

                                </div>
                            </div>
                            <div className="col-6 float-left">
                                <label className="upload-form">Upload Personal Photo:</label>
                                <div>
                                    <img src={X} alt="close" className="float-right close-img"/>
                                    <img src={Upload} alt="upload" className="float-right img-thumbnail border-dark"/>
                                </div>
                            </div>

                            <div className="col-12 float-left">
                                <label className="upload-form">For see what is requirements for photos,
                                    <Link to="/" className="text-decoration-none"> Click Here.</Link></label>
                                <hr className="clients-hr col-4"/>
                            </div>
                            <div className="col-6">
                                <Link to="/">
                                    <img src={Plus} alt="add" className="add-form float-left"/>
                                    <label className="add-label float-left mt-1">Add Another Traveler</label>
                                </Link>
                            </div>


                            <div className="col-12 float-left">
                                <button type="button" className="btn btn-next float-right">NEXT</button>
                                <button type="button" className="btn btn-previous float-left">Previous</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }

}

export default TravelList;