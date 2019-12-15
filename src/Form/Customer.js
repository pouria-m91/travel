import React, {Component} from 'react';
import './form.css';
import {useFetch} from "../API";
import Icon from "../assets/icon.png";


class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: "pouria_m90@yahoo.com",
                first_name: "pouria",
                last_name: "mohammadi",
                national_id: 1,
                password: "12345678",
                address: {
                    country_id: 1,
                    text: "this is test text on user",
                    city_name: "Tehran",
                    zipcode: ""
                }
            },
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
            this.props.onNext();
        }).catch(error => {
            this.setState({loader: false});
            alert(error.message);
        });
    }


    userChange(event) {
        let user = this.state.user;
        if (event.target.getAttribute('group') == 'address')
            user.address[event.target.id] = event.target.value;
        else
            user[event.target.id] = event.target.value;
        this.setState({user});
    }

    onChangeConfirmPass(event) {
        this.setState({confirmPass: event.target.value})
    }

    render() {
        const {user, loader, confirmPass, countries} = this.state;
        if (loader)
            return (<div>Loading...</div>);
        else
            return (
                <div className="form1 d-flex flex-column ml-auto mr-auto">
                    <div className="row">
                        <div className="col-12 bg-form text-left">
                            <h5 className="head-form">Customer Information:</h5>
                            <form>
                                <div className="form-row col-6 float-left">
                                    <label htmlFor="inputNameCm"
                                           className="col-form-label mt-auto mb-auto">Name:</label>
                                    <div className="col-10">
                                        <input type="text" className="form-control bg-transparent" id="first_name"
                                               value={user.first_name} onChange={this.userChange}/>
                                    </div>
                                </div>

                                <div className="form-row col-6 float-left">
                                    <label htmlFor="inputLastNameCm"
                                           className="col-form-label mt-auto mb-auto ">LastName:</label>
                                    <div className="col-9">
                                        <input type="text" className="form-control bg-transparent"
                                               id="last_name"
                                               value={user.last_name} onChange={this.userChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-row col-6 float-left">
                                    <label htmlFor="inputEmail"
                                           className="col-form-label mt-auto mb-auto">Email:</label>
                                    <div className="col-10">
                                        <input type="email" className="form-control bg-transparent" id="email"
                                               value={user.email} onChange={this.userChange}/>
                                    </div>
                                </div>

                                <div className="form-row col-7 float-left">
                                    <label htmlFor="inputVisaType" className="col-form-label mt-auto mb-auto">Select Visa Type:</label>
                                    <img src={Icon} alt="info" className="form-info"/>
                                    <div className="col-7">
                                        <select id="national" className="form-control bg-transparent"
                                                onChange={this.userChange}>
                                            {countries.map((country, index) =>
                                                <option key={index} value={country.id}>{country.national}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row col-6 float-left">
                                    <label htmlFor="inputPassword"
                                           className="col-form-label mt-auto mb-auto">Password:</label>
                                    <div className="col-9">
                                        <input type="password" className="form-control bg-transparent"
                                               id="password"
                                               value={user.password} onChange={this.userChange}/>
                                    </div>
                                </div>
                                <div className="form-row col-6 float-left">
                                    <label htmlFor="inputRePassword" className="col-form-label mt-auto mb-auto ">reEnter
                                        Password:</label>
                                    <div className="col-7">
                                        <input type="password" className="form-control bg-transparent"
                                               value={confirmPass} onChange={this.onChangeConfirmPass}/>
                                    </div>
                                </div>

                                <div className="form-row col-7 float-left">
                                    <label htmlFor="inputVisaType" className="col-form-label mt-auto mb-auto">Select Country</label>
                                    <img src={Icon} alt="info" className="form-info"/>
                                    <div className="col-7">
                                        <select id="country_id" className="form-control bg-transparent" group="address"
                                                onChange={this.userChange}>
                                            {countries.map((country, index) =>
                                                <option key={index} value={country.id}>{country.name}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row col-6 float-left">
                                    <label htmlFor="inputLastNameCm"
                                           className="col-form-label mt-auto mb-auto ">City Name:</label>
                                    <div className="col-9">
                                        <input type="text" className="form-control bg-transparent"
                                               id="city_name" group="address"
                                               value={user.address.city_name} onChange={this.userChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-row col-6 float-left">
                                    <label htmlFor="inputLastNameCm"
                                           className="col-form-label mt-auto mb-auto ">Zip Code:</label>
                                    <div className="col-9">
                                        <input type="number" className="form-control bg-transparent"
                                               id="zipcode" group="address"
                                               value={user.address.zipcode} onChange={this.userChange}
                                        />
                                    </div>
                                </div>


                                <div className="form-row col-12 float-left">
                                    <div className="col-3">
                                        <label htmlFor="inputHomeAddress"
                                               className="col-form-label mt-auto mb-auto text-center form-textarea-label2">Home
                                            Address:</label>
                                    </div>
                                    <div className="col-9">
                                    <textarea className="form-control" rows="5" group="address" id="text"
                                              value={user.address.text} onChange={this.userChange}/>
                                    </div>
                                </div>

                            </form>
                            <div className="col-12 float-left">
                                <p className="form-p">if you have already registered, please Login to your account.</p>
                            </div>
                            <div className="col-12">
                                <div className="col-6 float-left">
                                    <ul className="link2">
                                        <li><label>Your email is already used for a account.</label></li>
                                        <li><label>Text of error number 2</label></li>
                                        <li><label>Text of error number 3</label></li>
                                    </ul>
                                </div>
                                <div className="col-2 float-right mt-4">
                                    <button type="button" className="btn btn-next"
                                            onClick={this.onNext}
                                    >NEXT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default Customer;