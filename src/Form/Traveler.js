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
import {gender, marriage, passportTypes} from "../Constant";
import {Collapse, TextField} from "@material-ui/core";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";

class Traveler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            traveler: props.traveler,
            index: props.index,
            loader: true,
            open: true,
            countries: props.countries,
        };
        this.travelChange = this.travelChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        console.log(this.props.key)
    }

    componentDidMount() {
        this.setState({loader: false});
    }

    handleClick() {
        this.setState({open: !this.state.open});
    };

    travelChange(event) {
        let traveler = this.state.traveler;
        if (event.target.getAttribute('group') == 'home_address')
            traveler.home_address[event.target.id] = event.target.value;
        else
            traveler[event.target.id] = event.target.value;
        this.setState({traveler});
    }


    render() {
        const {loader, open, traveler, index, countries} = this.state;
        if (loader)
            return (<div>Loading...</div>);
        else
            return (
                <div className="form2 d-flex flex-column ml-auto mr-auto bg-form">
                    <Row onClick={this.handleClick}>
                        <Col xs={10}>
                            <label
                                className="head-form-label">
                                Traveler Number {index + 1}:</label>
                        </Col>
                        <Col xs={2}>
                            <label className="head-form-label">X</label>
                        </Col>
                    </Row>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Row>
                            <Col xs={12}>
                                <form>
                                    <Row>
                                        <Col xs={12} md={6}>
                                            <TextField
                                                id="first_name"
                                                label="First Name"
                                                variant="outlined"
                                                value={traveler.first_name}
                                                fullWidth
                                                onChange={this.travelChange}/>
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <TextField
                                                id="last_name"
                                                label="Last Name"
                                                variant="outlined"
                                                value={traveler.last_name}
                                                fullWidth
                                                onChange={this.travelChange}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={3}>
                                            <TextField
                                                id="father_name"
                                                label="Father Name"
                                                variant="outlined"
                                                value={traveler.father_name}
                                                fullWidth
                                                onChange={this.travelChange}/>
                                        </Col>
                                        <Col xs={12} md={3}>
                                            <TextField
                                                id="passport_number"
                                                label="Passport Number"
                                                variant="outlined"
                                                value={traveler.passport_number}
                                                fullWidth
                                                onChange={this.travelChange}/>
                                        </Col>
                                        <Col xs={12} md={3}>
                                            <TextField
                                                id="place_birth"
                                                label="Place Birth"
                                                variant="outlined"
                                                value={traveler.place_birth}
                                                fullWidth
                                                onChange={this.travelChange}/>
                                        </Col>
                                        <Col xs={12} md={3}>
                                            <TextField
                                                id="job"
                                                label="Job"
                                                variant="outlined"
                                                value={traveler.job}
                                                fullWidth
                                                onChange={this.travelChange}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={6}>
                                            <TextField
                                                select
                                                id="national"
                                                label="Select National"
                                                SelectProps={{
                                                    native: true,
                                                }}
                                                variant="outlined"
                                                fullWidth
                                                value={traveler.national}
                                                onChange={this.travelChange}>
                                                {countries.map((country, index) =>
                                                    <option key={index} value={country.id}>{country.national}</option>
                                                )}
                                            </TextField>
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <TextField
                                                select
                                                id="previous_nationality"
                                                label="Select Previous Nationality"
                                                SelectProps={{
                                                    native: true,
                                                }}
                                                variant="outlined"
                                                fullWidth
                                                value={traveler.previous_nationality}
                                                onChange={this.travelChange}>
                                                {countries.map((country, index) =>
                                                    <option key={index} value={country.id}>{country.national}</option>
                                                )}
                                            </TextField>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={4}>
                                            <TextField
                                                select
                                                label="Select Passport Type"
                                                id="passport_type"
                                                SelectProps={{
                                                    native: true,
                                                }}
                                                fullWidth
                                                variant="outlined"
                                                value={traveler.passportTypes}
                                                onChange={this.travelChange}>
                                                {passportTypes.map((type, index) =>
                                                    <option key={index} value={index + 1}>{type}</option>
                                                )}
                                            </TextField>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <TextField
                                                select
                                                id="gender"
                                                label="Select Gender"
                                                SelectProps={{
                                                    native: true,
                                                }}
                                                variant="outlined"
                                                fullWidth
                                                value={traveler.gender}
                                                onChange={this.travelChange}>
                                                {gender.map((g, index) =>
                                                    <option key={index} value={index + 1}>{g}</option>
                                                )}
                                            </TextField>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <TextField
                                                select
                                                id="marriage"
                                                label="Select Marriage"
                                                SelectProps={{
                                                    native: true,
                                                }}
                                                variant="outlined"
                                                fullWidth
                                                value={traveler.marriage}
                                                onChange={this.travelChange}>
                                                {marriage.map((married, index) =>
                                                    <option key={index} value={index + 1}>{married}</option>
                                                )}
                                            </TextField>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={4}>
                                            <center>
                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                    <KeyboardDatePicker
                                                        margin="normal"
                                                        fullWidth
                                                        id="birthday"
                                                        label="BirthDay"
                                                        format="YYYY-MM-DD"
                                                        value={traveler.birthday}
                                                        onChange={(date, value) => {
                                                            traveler.birthday = value;
                                                            this.setState({traveler});
                                                        }}
                                                        KeyboardButtonProps={{
                                                            'aria-label': 'change date',
                                                        }}
                                                    />
                                                </MuiPickersUtilsProvider>
                                            </center>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <center>
                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                    <KeyboardDatePicker
                                                        margin="normal"
                                                        fullWidth
                                                        id="passport_issue"
                                                        label="Passport Issue Date:"
                                                        format="YYYY-MM-DD"
                                                        value={traveler.passport_issue}
                                                        onChange={(date, value) => {
                                                            traveler.passport_issue = value;
                                                            this.setState({traveler});
                                                        }}
                                                        KeyboardButtonProps={{
                                                            'aria-label': 'change date',
                                                        }}
                                                    />
                                                </MuiPickersUtilsProvider>
                                            </center>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <KeyboardDatePicker
                                                    fullWidth
                                                    margin="normal"
                                                    id="passport_expire"
                                                    label="Passport Expiry Date:"
                                                    format="YYYY-MM-DD"
                                                    value={traveler.passport_expire}
                                                    onChange={(date, value) => {
                                                        traveler.passport_expire = value;
                                                        this.setState({traveler});
                                                    }}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                />
                                            </MuiPickersUtilsProvider>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs={12}>
                                            <label
                                                className="head-form-label">
                                                Traveler Home Address:</label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={4}>
                                            <TextField
                                                select
                                                id="country_id"
                                                label="Select Country"
                                                SelectProps={{
                                                    native: true,
                                                }}
                                                variant="outlined"
                                                group='home_address'
                                                fullWidth
                                                value={traveler.home_address.country_id}
                                                onChange={this.travelChange}>
                                                {countries.map((country, index) =>
                                                    <option key={index} value={country.id}>{country.name}</option>
                                                )}
                                            </TextField>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <TextField
                                                id="city_name"
                                                label="City Name"
                                                variant="outlined"
                                                group='home_address'
                                                value={traveler.city_name}
                                                fullWidth
                                                onChange={this.travelChange}/>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <TextField
                                                id="zipcode"
                                                label="Zip Code"
                                                variant="outlined"
                                                group='home_address'
                                                type='number'
                                                value={traveler.zipcode}
                                                fullWidth
                                                onChange={this.travelChange}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={12}>
                                            <TextField
                                                label="Address"
                                                id="text"
                                                variant="outlined"
                                                multiline
                                                fullWidth
                                                group='home_address'
                                                rows="4"
                                                value={traveler.home_address.text}
                                                onChange={this.travelChange}
                                            />
                                        </Col>
                                    </Row>
                                </form>
                                <div className="col-6 float-left">
                                    <label className="upload-form">Upload Scan Of Passport:</label>
                                    <div>
                                        <img src={X} alt="close" className="float-right close-img"/>
                                        <img src={Upload} alt="upload"
                                             className="float-right img-thumbnail border-dark"/>

                                    </div>
                                </div>
                                <div className="col-6 float-left">
                                    <label className="upload-form">Upload Personal Photo:</label>
                                    <div>
                                        <img src={X} alt="close" className="float-right close-img"/>
                                        <img src={Upload} alt="upload"
                                             className="float-right img-thumbnail border-dark"/>
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
                            </Col>
                        </Row>
                    </Collapse>
                </div>
            )
    }
}

export default Traveler;