import React, {Component} from 'react';
import './form.css';
import Upload from "../assets/upload.png";
import DateFnsUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {gender, marriage, passportTypes, visaTypes} from "../Constant";
import {
    Card,
    CardHeader,
    Collapse,
    CardMedia,
    TextField,
    CircularProgress,
    FormControlLabel,
    Checkbox
} from "@material-ui/core";

import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';


export function Traveler(props) {
    const countries = props.countries;
    const index = props.index;
    const traveler = props.traveler;
    const visa = props.visaList;
    const enableDelete = props.enableDelete;
    let portrait, passport;

    const onClickCollapse = () => {
        props.handleCollapse(index);
    }
    const onClickDelete = () => {
        props.handleDelete(index);
    }
    const onInfoChange = (event) => {
        props.handleInfo(index, event);
    }
    const onDateChange = (type, value) => {
        props.handleDate(index, type, value);
    }
    const uploadPortrait = (event) => {
        props.handleUpload(index, 'portrait', event.target.files[0]);
    }
    const uploadPassport = (event) => {
        props.handleUpload(index, 'passport', event.target.files[0]);
    }
    const deletePortrait = () => {
        props.handleDeleteUpload(index, 'portrait');
    }
    const deletePassport = () => {
        props.handleDeleteUpload(index, 'passport');
    }
    const getVisa = () => {
        let out = [];
        visa.map((v, i) => {
            let b = true;
            v.black_list_countries.map((country, i) => {
                if (traveler.info.national_id == country.id) {
                    b = false;
                }
            });
            if (b)
                out.push(v);
        });
        return out;
    }
    const showVisa = getVisa();
    return (
        <div className="form2 d-flex flex-column ml-auto mr-auto bg-form">
            <Row>
                <Col xs={11} onClick={onClickCollapse}>
                    <label
                        className="head-form-label">Traveler Number {index + 1}:</label>
                </Col>
                <Col xs={1}>
                    <IconButton
                        className="float-right"
                        disabled={enableDelete}
                        onClick={onClickDelete}
                        color="secondary"
                        aria-label="delete">
                        <CloseIcon/>
                    </IconButton>
                </Col>
            </Row>
            <Collapse in={traveler.open} timeout="auto" unmountOnExit>
                <Row>
                    <Col xs={12}>
                        <form>
                            <Row>
                                <Col xs={12} md={6}>
                                    <TextField
                                        select
                                        id="national_id"
                                        label="Select National"
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="outlined"
                                        fullWidth
                                        value={traveler.info.national_id}
                                        onChange={onInfoChange}>
                                        {countries.map((country, index) =>
                                            <option key={index} value={country.id}>{country.national}</option>
                                        )}
                                    </TextField>
                                </Col>
                                <Col xs={12} md={6}>
                                    <TextField
                                        select
                                        label="Select Visa"
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="outlined"
                                        fullWidth
                                        value={traveler.visa_id}
                                        onChange={onInfoChange}>
                                        {showVisa.map((visa, index) =>
                                            <option key={index} value={visa.id}>{visa.name}</option>
                                        )}
                                    </TextField>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={6}>
                                    <TextField
                                        id="first_name"
                                        label="First Name"
                                        variant="outlined"
                                        value={traveler.info.first_name}
                                        fullWidth
                                        onChange={onInfoChange}/>
                                </Col>
                                <Col xs={12} md={6}>
                                    <TextField
                                        id="last_name"
                                        label="Last Name"
                                        variant="outlined"
                                        value={traveler.info.last_name}
                                        fullWidth
                                        onChange={onInfoChange}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={3}>
                                    <TextField
                                        id="father_name"
                                        label="Father Name"
                                        variant="outlined"
                                        value={traveler.info.father_name}
                                        fullWidth
                                        onChange={onInfoChange}/>
                                </Col>
                                <Col xs={12} md={3}>
                                    <TextField
                                        id="passport_number"
                                        label="Passport Number"
                                        variant="outlined"
                                        value={traveler.info.passport_number}
                                        fullWidth
                                        onChange={onInfoChange}/>
                                </Col>
                                <Col xs={12} md={3}>
                                    <TextField
                                        id="place_birth"
                                        label="Place Birth"
                                        variant="outlined"
                                        value={traveler.info.place_birth}
                                        fullWidth
                                        onChange={onInfoChange}/>
                                </Col>
                                <Col xs={12} md={3}>
                                    <TextField
                                        id="job"
                                        label="Job"
                                        variant="outlined"
                                        value={traveler.info.job}
                                        fullWidth
                                        onChange={onInfoChange}/>
                                </Col>
                            </Row>
                            <Row>

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
                                        value={traveler.info.previous_nationality}
                                        onChange={onInfoChange}>
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
                                        value={traveler.info.passportTypes}
                                        onChange={onInfoChange}>
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
                                        value={traveler.info.gender}
                                        onChange={onInfoChange}>
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
                                        value={traveler.info.marriage}
                                        onChange={onInfoChange}>
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
                                                value={traveler.info.birthday}
                                                onChange={(date, value) => {
                                                    onDateChange('birthday', value);
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
                                                value={traveler.info.passport_issue}
                                                onChange={(date, value) => {
                                                    onDateChange('passport_issue', value);
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
                                            value={traveler.info.passport_expire}
                                            onChange={(date, value) => {
                                                onDateChange('passport_expire', value);
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
                                        name='home_address'
                                        fullWidth
                                        value={traveler.info.home_address.country_id}
                                        onChange={onInfoChange}>
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
                                        name='home_address'
                                        value={traveler.info.home_address.city_name}
                                        fullWidth
                                        onChange={onInfoChange}/>
                                </Col>
                                <Col xs={12} md={4}>
                                    <TextField
                                        id="zipcode"
                                        label="Zip Code"
                                        variant="outlined"
                                        name='home_address'
                                        type='number'
                                        InputProps={{inputProps: {min: 0}}}
                                        value={traveler.info.home_address.zipcode}
                                        fullWidth
                                        onChange={onInfoChange}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <TextField
                                        label="Address"
                                        id="text"
                                        variant="outlined"
                                        multiline
                                        fullWidth
                                        name='home_address'
                                        rows="4"
                                        value={traveler.info.home_address.text}
                                        onChange={onInfoChange}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6}>
                                    <input
                                        type="file"
                                        accept={'.jpg,.png'}
                                        ref={(ref) => portrait = ref}
                                        style={{display: 'none'}}
                                        onChange={uploadPortrait}/>
                                    <Card>
                                        <CardHeader
                                            action={
                                                <IconButton
                                                    color="secondary"
                                                    disabled={!traveler.portrait.blob}
                                                    onClick={deletePortrait}
                                                    aria-label="delete">
                                                    <CloseIcon/>
                                                </IconButton>
                                            }/>
                                        <center>
                                            <CardMedia
                                                onClick={(e) => portrait.click()}
                                                style={{
                                                    height: 200,
                                                    width: 200,
                                                }}
                                                image={traveler.portrait.blob ? traveler.portrait.blob : Upload}
                                                title="Upload Personal"/>
                                        </center>
                                    </Card>
                                </Col>
                                <Col xs={6}>
                                    <input
                                        type="file"
                                        accept={'.jpg,.png'}
                                        ref={(ref) => passport = ref}
                                        style={{display: 'none'}}
                                        onChange={uploadPassport}/>
                                    <Card>
                                        <CardHeader
                                            action={
                                                <IconButton
                                                    color="secondary"
                                                    disabled={!traveler.passport.blob}
                                                    onClick={deletePassport}
                                                    aria-label="delete">
                                                    <CloseIcon/>
                                                </IconButton>
                                            }/>
                                        <center>
                                            <CardMedia
                                                onClick={(e) => passport.click()}
                                                style={{
                                                    height: 200,
                                                    width: 200,
                                                }}
                                                image={traveler.passport.blob ? traveler.passport.blob : Upload}
                                                title="Upload Personal"/>
                                        </center>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <label
                                        className="head-form-label">
                                        Travel Information:</label>
                                </Col>
                            </Row>
                            {index == 0 ? <TravelInfo {...props}/> :
                                <div>
                                    <TravelerSelector {...props}/>
                                    <TravelInfo {...props}/>
                                </div>
                            }
                        </form>

                        {/*<div className="col-12 float-left">*/}
                        {/*    <label className="upload-form">For see what is requinrements for photos,*/}
                        {/*        <Link to="/" className="text-decoration-none"> Click Here.</Link></label>*/}
                        {/*    <hr className="clients-hr col-4"/>*/}
                        {/*</div>*/}
                    </Col>
                </Row>
            </Collapse>
        </div>
    )
}

function TravelerSelector(props) {
    const onChange = (event) => {
        if (event.target.value == -1)
            props.setTravelInfo(props.index, undefined)
        else
            props.setTravelInfo(props.index, props.travelers[event.target.value].travelInfo)
    }
    return (
        <Row>
            <Col xs={12}>
                <TextField
                    select
                    label="Select Travel Info"
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                    fullWidth
                    onChange={onChange}>
                    <option key={0} value={-1}>Custom</option>
                    {props.travelers.map((traveler, index) => {
                        if (index != props.index)
                            return (<option key={index + 1} value={index}>Traveler {index + 1}</option>);
                    })}
                </TextField>
            </Col>
        </Row>
    )
}

function TravelInfo(props) {
    const index = props.index;
    const traveler = props.traveler;
    const onTravelInfoChange = (event) => {
        props.handleTravelInfo(index, event);
    }
    return (
        <div>
            <Row>
                <Col xs={12} md={4}>
                    <TextField
                        id="purpose_traveling"
                        label="Purpose Of Traveling"
                        variant="outlined"
                        value={traveler.travelInfo.purpose_traveling}
                        fullWidth
                        onChange={onTravelInfoChange}
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
                            value={traveler.travelInfo.start_travel}
                            onChange={(date, value) => {
                                traveler.travelInfo.start_travel = value;
                                // this.setState({travelInfo});
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
                        value={traveler.travelInfo.duration_stay}
                        fullWidth
                        onChange={onTravelInfoChange}/>
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
                        value={traveler.travelInfo.entry_port_id}
                        onChange={onTravelInfoChange}>
                        {props.ports.map((port, index) =>
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
                        value={traveler.travelInfo.visa_get_place_id}
                        onChange={onTravelInfoChange}>
                        {props.visaPickUps.map((visaPickUp, index) =>
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
                        value={traveler.travelInfo.departure_port_id}
                        onChange={onTravelInfoChange}>
                        {props.ports.map((port, index) =>
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
                        value={traveler.travelInfo.accomodation_address}
                        onChange={onTravelInfoChange}
                        helperText='(Accommodation address or hotels name)'
                    />
                </Col>
            </Row>
        </div>
    );
}