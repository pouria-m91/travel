import React,{Component} from 'react';
import './form.css';


class Confirm extends Component{
    constructor(props){
        super(props);
        this.state = {


        }
    }
    render() {
        return(
            <div className="form2 d-flex flex-column ml-auto mr-auto">
                <div className="row">
                    <div className="col-12 bg-form text-left">
                        <h5 className="head-form">Payment Invoice:</h5>

                        <div className="col-5 float-left">
                            <label className="label-form">Visa Type:</label>
                            <label className="label-content" id="visaType">Tourist Visa (Type B)</label>
                        </div>
                        <div className="col-3 float-left">
                            <label className="label-form">Entry Type:</label>
                            <label className="label-content" id="entryType">Single</label>
                        </div>
                        <div className="col-4 float-left">
                            <label className="label-form">Duration Of Stay:</label>
                            <label className="label-content" id="Duration">10Days</label>
                        </div>

                        <div className="col-6 float-left">
                            <label className="label-form">Travel Start Date:</label>
                            <label className="label-content" id="travelStart">20/02/2020</label>
                        </div>
                        <div className="col-6 float-left">
                            <label className="label-form">Travel End Date:</label>
                            <label className="label-content" id="travelEnd">30/02/2020</label>
                        </div>

                        <div className="col-12 float-left">
                            <label className="label-form">Pickup Location:</label>
                            <label className="label-content" id="pickupLocation">Imam Khomeini International
                                Airport</label>
                        </div>

                        <div className="col-6 float-left">
                            <label className="label-form">Number Of Traveler:</label>
                            <label className="label-content" id="travelers">3 Person</label>
                        </div>
                        <div className="col-6 float-left">
                            <label className="label-form">Cost per Traveler:</label>
                            <label className="label-content" id="costTravel">20 Euro</label>
                        </div>

                        <div className="col-12 text-right">
                            <label className="label-form-cost">Total Cost:</label>
                            <label className="label-cost" id="totalCost">60 Euro</label>
                        </div>

                        <div className="col-12 float-left">
                            <button type="button" className="btn btn-next float-right">PAY</button>
                            <button type="button" className="btn btn-previous float-left">Previous</button>
                            <button type="button" className="btn btn-previous float-left">Cancel</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}
export default Confirm;