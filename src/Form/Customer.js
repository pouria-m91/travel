import React, {Component} from 'react';
import './form.css';
import {useFetch} from "../API";
import Icon from "../assets/icon.png";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import {Button, TextField} from "@material-ui/core";
import {Loader} from "../Tools";


class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: "",
                first_name: "",
                last_name: "",
                national_id: 1,
                password: "",
                address: {
                    country_id: 1,
                    text: "",
                    city_name: "",
                    zipcode: ""
                }
            },
            errors: [],
            loader: false,
            confirmPass: '',
            countries: props.countries,
        };
        this.onNext = this.onNext.bind(this);
        this.userChange = this.userChange.bind(this);
        this.onChangeConfirmPass = this.onChangeConfirmPass.bind(this);
    }

    onNext() {
        console.log(this.state.user);
        this.setState({loader: true});
        useFetch('user/register').post(this.state.user).then((data) => {
            this.setState({loader: false});
            this.props.onNext('step2');
        }).catch(error => {
            this.setState({loader: false});
            if (error.code == 1010)
                this.props.onNext('step3');
            else
                alert(error.message);
        });
    }


    userChange(event) {
        let user = this.state.user;
        if (event.target.getAttribute('name') == 'address')
            user.address[event.target.id] = event.target.value;
        else
            user[event.target.id] = event.target.value;
        this.setState({user});
    }

    onChangeConfirmPass(event) {
        this.setState({confirmPass: event.target.value})
    }

    render() {
        const {user, loader, confirmPass, countries, errors} = this.state;
        if (loader)
            return (
                <Loader/>
            )
        else
            return (
                <div className="form1 d-flex flex-column ml-auto mr-auto">
                    <div className="row">
                        <div className="col-12 bg-form text-left">
                            <h5 className="head-form">Customer Information:</h5>
                            <form>
                                <Row>
                                    <Col xs={12} md={4}>
                                        <TextField
                                            id="first_name"
                                            label="First Name"
                                            variant="outlined"
                                            value={user.first_name}
                                            fullWidth
                                            onChange={this.userChange}
                                        />
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <TextField
                                            id="last_name"
                                            label="Last Name"
                                            variant="outlined"
                                            value={user.last_name}
                                            fullWidth
                                            onChange={this.userChange}
                                        />
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <TextField
                                            id="email"
                                            label="Email"
                                            variant="outlined"
                                            value={user.email}
                                            fullWidth
                                            onChange={this.userChange}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={4}>
                                        <TextField
                                            select
                                            id="national_id"
                                            label="Select National"
                                            SelectProps={{
                                                native: true,
                                            }}
                                            variant="outlined"
                                            fullWidth
                                            value={user.national_id}
                                            onChange={this.userChange}>
                                            {countries.map((country, index) =>
                                                <option key={index} value={country.id}>{country.national}</option>
                                            )}
                                        </TextField>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <TextField
                                            id="password"
                                            label="Password"
                                            type='password'
                                            variant="outlined"
                                            value={user.password}
                                            fullWidth
                                            onChange={this.userChange}/>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <TextField
                                            label="Confirm Password"
                                            variant="outlined"
                                            type='password'
                                            value={confirmPass}
                                            fullWidth
                                            onChange={this.onChangeConfirmPass}/>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={12}>
                                        <label
                                            className="head-form-label">
                                            Address:</label>
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
                                            name='address'
                                            fullWidth
                                            value={user.address.country_id}
                                            onChange={this.userChange}>
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
                                            name='address'
                                            value={user.address.city_name}
                                            fullWidth
                                            onChange={this.userChange}/>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <TextField
                                            id="zipcode"
                                            label="Zip Code"
                                            variant="outlined"
                                            name='address'
                                            type='number'
                                            InputProps={{inputProps: {min: 0}}}
                                            value={user.address.zipcode}
                                            fullWidth
                                            onChange={this.userChange}/>
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
                                            name='address'
                                            rows="4"
                                            value={user.address.text}
                                            onChange={this.userChange}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <p className="form-p">if you have already registered, please Login to your
                                            account.</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={10}>
                                        <ul className="link2">
                                            {errors.map((error, index) =>
                                                <li key={index}><label>{error}</label></li>
                                            )}
                                        </ul>
                                    </Col>
                                    <Col xs={2}>
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

export default Customer;