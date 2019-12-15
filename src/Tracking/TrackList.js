import {Link} from "react-router-dom";
import CheckList from '../assets/checklist.png';
import Arrow from '../assets/rightArrow.png';
import Pay from '../assets/debtCard.png';
import ID from '../assets/id.png';
import MFA from '../assets/mfa.png';
import Qualification from '../assets/qualification.png';
import Result from '../assets/find-result.png';
import Question from '../assets/question.png';
import './track.css';
import React, {Component} from "react";
import {gender,requestStatus} from '../Constant'

function RequestRow(props) {
    const item = props.item;
    return (
        <tr>
            <td>{item.first_name + ' ' + item.last_name}</td>
            <td>{item.national.national}</td>
            <td>{gender[item.gender - 1] }</td>
            <th scope="row">Step {item.last_step}/{item.total_steps} - {requestStatus[item.status]}</th>
        </tr>
    )

}

class TrackList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            items: props.items,
        }
    }

    render() {
        const {items} = this.state;
        return (
            <div className="jumbotron">

                <div className="col-12 text-center">
                    <h3 className="heading-center">Iran Visa Application Status Check</h3>
                </div>
                <div className="col-12 d-flex justify-content-center">

                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">Traveler</th>
                            <th scope="col">Nationality</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map((item, index) =>
                            <RequestRow key={index} item={item}/>
                        )}
                        </tbody>
                    </table>

                </div>
                <div className="col-12 text-center">
                    <label className="label-check">For more information about your visa requests,
                        you can<Link to="/" className="text-decoration-none"> Login</Link>
                        to your account too see more detail of your visa requests.
                        Also you can check Tracking Iran visa frequently asked question
                        section<Link to="/" className="text-decoration-none"> here</Link>.</label>
                </div>

            </div>
        )
    }
}

export default TrackList;