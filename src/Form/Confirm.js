import React, {Component} from 'react';
import './form.css';
import {Button} from "@material-ui/core";
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import {withRouter} from 'react-router-dom';
import {useFetch} from "../API";
import {visaTypes} from "../Constant";
import {blob2file, Loader} from "../Tools";
import {visaEntryTypes} from "../Constant";
import index from "react-images-upload";

function RowTraveler(props) {
    const traveler = props.traveler;
    const num = props.num;
    const visa = props.visa;
    return (
        <div className="form2 d-flex flex-column ml-auto mr-auto bg-form">
            {/*<Row>*/}
            {/*    <Col xs={12}>*/}
            {/*        <label className="head-form-label">Traveler {num}:</label>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            <Row>
                <Col className='text-center' xs={12} md={4}>
                    Traveler {num} : {traveler.info.first_name} {traveler.info.last_name}
                </Col>
                <Col className='text-center' xs={12} md={4}>
                    PassNumber : {traveler.info.passport_number}
                </Col>
                <Col className='text-center' xs={12} md={4}>
                    Visa Type : {visa.name}
                </Col>
            </Row>
            <Row>
                <Col className='text-center' xs={12} md={4}>
                    Entry Type : {visaEntryTypes[visa.entry_type]}
                </Col>
                <Col className='text-center' xs={12} md={4}>
                    Duration Of Stay : {traveler.travelInfo.duration_stay}
                </Col>
                <Col className='text-center' xs={12} md={4}>
                    Start Travel Date : {traveler.travelInfo.start_travel}
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <label className="float-right">Cost : {visa.price}</label>
                </Col>
            </Row>
        </div>
    );
}

class Confirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visa: props.visa,
            user: props.user,
            loader: true,
            travelers: props.travelers,
            total_cost: 0,
        }
        this.onPay = this.onPay.bind(this);
        this.onBack = this.onBack.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.getVisa = this.getVisa.bind(this);
    }

    componentDidMount() {
        const {travelers} = this.state;
        let body = [];
        console.log(travelers)
        travelers.map((traveler, index) => {
            body.push({visa_id: traveler.visa_id, national_id: traveler.info.national_id})
        });
        useFetch('quick/Invoice')
            .post({travelers: body}).then((data) => {
            this.setState({total_cost: data.total_cost, loader: false})
        }).catch(error => {
            if (error.code == 1006)
                this.props.onChangeState('step3')
            // history.push('/');
        });
    }

    getVisa(visa_id) {
        const {visa} = this.state;
        return visa.find(function (v) {
            return v.id == visa_id;
        });
    }

    onPay() {
        const {travelers} = this.state;
        let data = [];
        let formData = new FormData();
        travelers.map((traveler, index) => {
            formData.append('portraits[' + index + ']', traveler.portrait.file, traveler.portrait.file.name);
            formData.append('passports[' + index + ']', traveler.passport.file, traveler.passport.file.name);
            data.push({
                traveler_info: traveler.info,
                travel_info: traveler.travelInfo,
                visa_id: traveler.visa_id,
            });
        });
        formData.append('travelers', JSON.stringify(data));
        useFetch('quick').postFormData(formData).then((data) => {
            alert('success');
        }).catch(error => {
            alert(error.message);
        });
    }

    onBack() {
        this.props.onChangeState('step4')
    }

    onCancel() {
        this.props.history.push({pathname: '/'});
    }

    render() {
        const {visa, total_cost, travelers, user, loader} = this.state;
        if (loader)
            return (
                <Loader/>
            )
        else
            return (
                <div>
                    <div className="d-flex flex-column ml-auto mr-auto">
                        <Row>
                            <Col xs={12}>
                                <center><label className="label-cost">Invoice</label></center>
                            </Col>
                        </Row>
                    </div>
                    <div className="form2 d-flex flex-column ml-auto mr-auto">
                        <Row className='bg-form'>
                            <Col className='text-center' xs={12} md={4}>
                                Customer : {user.first_name} {user.last_name}
                            </Col>
                            <Col className='text-center' xs={12} md={4}>
                                Email : {user.email}
                            </Col>
                            <Col className='text-center' xs={12} md={4}>
                                Number Of Travelers : {travelers.length}
                            </Col>
                        </Row>
                    </div>
                    {travelers.map((traveler, index) => <RowTraveler key={index} num={index + 1}
                                                                     visa={this.getVisa(traveler.visa_id)}
                                                                     traveler={traveler}/>)}
                    <div className="form2 d-flex flex-column ml-auto mr-auto">

                        <div className="row">
                            <div className="col-12 bg-form text-left">
                                <div className="col-12 text-right">
                                    <label className="label-form-cost">Total Cost:</label>
                                    <label className="label-cost">{total_cost} Euro</label>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="form2 d-flex flex-column ml-auto mr-auto">
                        <Row>
                            <Col md={1} xs={3}>
                                <Button className="float-left" variant="contained" color="secondary"
                                        onClick={this.onBack}>Back
                                </Button>
                            </Col>
                            <Col md={1} xs={3}>
                                <Button className="float-left" variant="contained" color="default"
                                        onClick={this.onCancel}>Cancel
                                </Button>
                            </Col>
                            <Col md={10} xs={6}>
                                <Button className="float-right" variant="contained" color="primary"
                                        onClick={this.onPay}>Pay
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            )
    }

}

export default withRouter(Confirm);