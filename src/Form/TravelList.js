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
import Traveler from "./Traveler";
import moment from "moment";

const date = moment(new Date()).format('YYYY-MM-DD');

const traveler = {
    first_name: "",
    last_name: "",
    passport_number: "",
    national_id: 0,
    father_name: "",
    place_birth: "",
    job: "",
    gender: 1,
    marriage: 1,
    birthday: date,
    passport_issue: date,
    passport_expire: date,
    previous_nationality_id: 1,
    passport_type: 1,
    home_address: {
        country_id: 1,
        text: "",
        city_name: "",
        zipcode: ""
    }
};

class TravelList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            travelers: props.value,
            loader: true,
            countries: props.countries,
        };
        // this.onNext = this.onNext.bind(this);
        this.travelChange = this.travelChange.bind(this);
    }

    componentDidMount() {
        const {travelers} = this.state;
        if (travelers.length == 0) {
            travelers.push(traveler);
            this.setState({loader: false, travelers});
        } else {
            this.setState({loader: false});
        }
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
        const {loader, travelers, countries} = this.state;
        if (loader)
            return (<div>Loading...</div>);
        else
            return (
                <div>
                    <div className="form2 d-flex flex-column ml-auto mr-auto">
                        <div className="row">
                            <div className="col-12 bg-form text-left">
                                <h5 className="head-form">Travel Information:</h5>
                            </div>
                        </div>
                    </div>
                    {travelers.map((traveler, index) =>
                        <Traveler
                            key={index}
                            index={index}
                            countries={countries}
                            traveler={traveler}/>
                    )}
                    <div className="form2 d-flex flex-column ml-auto mr-auto">
                        <div className="row">
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