import header from "../assets/man.png";
import Form from "../assets/checklist.png";
import Arrow from "../assets/rightArrow.png";
import Pay from "../assets/debtCard.png";
import Wait from "../assets/hourglass.png";
import Passport from "../assets/passport.png";
import Come from "../assets/azadi.png";
import Support from "../assets/support.png";
import Price from "../assets/money-bag.png";
import Dashboard from "../assets/tasks.png";
import Fast from "../assets/clock.png";
import '../styles/home.css';
import React, {Component} from "react";
import {useFetch} from "../API";
import Container from "@material-ui/core/Container";
import Col from "reactstrap/es/Col";
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from "@material-ui/core/Tooltip";
import {FillAForm, LightTooltip, useStyles} from "../Tooltips";
import Grid from "@material-ui/core/Grid";


const api = useFetch('country');


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            items: [],
            track: '',
            loader: false,
        };
        this.goToTrack = this.goToTrack.bind(this);
        this.onChangeTrack = this.onChangeTrack.bind(this);
    }


    componentDidMount() {
        api.list().then((data) => {
            this.setState({countries: data, loader: true})
        }).catch(error => {
            alert(error.message);
            this.setState({countries: [], loader: true})

        });
    }

    onChangeTrack(event) {
        this.setState({track: event.target.value});
    }

    goToTrack(event) {
        this.props.history.push('/track/' + this.state.track);
    }

    render() {

        const {loader, track, countries} = this.state;
        if (loader)
            return (
                <Container maxWidth="lg">
                    <header className="offset col-md-12 mt-4 p-0 m-0">

                        <div className="row col-md-12 p-0 m-0">

                            <div className="col-md-6">
                                <label className="font-head text-left ml-3">Do You Want Apply</label>
                                <br/>
                                <label className="font-head text-left ml-3">For IRAN Visa?</label>


                                {/*<div className="col-8 p-0 m-0">*/}
                                {/*    <div className="form-group col-8 button">*/}
                                {/*        <select className=" form-control insideButton" id="sel2">*/}
                                {/*            <option>Select Visa Type</option>*/}
                                {/*            <option>america</option>*/}
                                {/*            <option>england</option>*/}
                                {/*            <option>spain</option>*/}
                                {/*            <option>check</option>*/}
                                {/*        </select>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className="row  p-0 m-0">
                                    <div className=" form-group col-9 col-sm-7 col-md-9 col-lg-8 button">
                                        <select className=" form-control insideButton" id="sel1">
                                            <option>Select Your Nationality</option>
                                            {countries.map((country, index) =>
                                                <option key={index} value={country.id}>{country.name}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>


                                <div className="col-8 p-0 ml-3">
                                    <button type="button" className="submit-btn px-4 py-2 m-0">APPLY</button>
                                </div>


                            </div>
                            <Col xs={12} md={6}>

                                <img className="img-fluid" style={{top: 0}} src={header} alt=""/>
                            </Col>

                        </div>

                    </header>

                    <div className="offset">

                        <div className="jumbotron4 p-0 m-0">
                            <hr className="bg-dark m-0"/>
                            <div className="col-md-12 text-center p-0 m-0">
                                <h3 className="heading p-0 m-0 py-4">Steps To Get Visa Of IRAN</h3>
                            </div>

                            <div className="container col-md-12">
                                <div className="row d-flex justify-content-center text-center">

                                    <div className="col-sm-6 col-md-3 col-xl-2 col-8 py-0 px-5">
                                        <img src={Form} alt="checklist" className="img-fluid p-3"/>
                                        <div className="beside">
                                            <InfoIcon color="action"/>
                                            <label className="title-step">Fill a Form</label>
                                        </div>
                                    </div>


                                    <div className="col-md-1 my-auto ">
                                        <img src={Arrow} alt="Arrow" className="img-fluid m-auto d-none d-md-block"/>
                                    </div>


                                    <div className="col-md-3 col-sm-6 col-xl-2 col-8 py-0 px-5">
                                        <img src={Pay} alt="checklist" className="img-fluid p-3"/>
                                        <div className="beside mr-auto ml-auto">
                                            <InfoIcon color="action"/>
                                            <label className="title-step">Pay</label>
                                        </div>
                                    </div>

                                    <div className="col-md-1 my-auto">
                                        <img src={Arrow} alt="Arrow" className="img-fluid m-auto d-none d-md-block"/>
                                    </div>


                                    <div className="col-md-3 col-sm-6 col-xl-2 col-8 py-0 px-5">
                                        <img src={Wait} alt="checklist" className="img-fluid p-3"/>
                                        <div className="beside">
                                            <InfoIcon color="action"/>
                                            <label className="title-step">Wait</label>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="container col-md-12">
                                <div className="row d-flex justify-content-center text-center">

                                    <div className="col-md-3 col-sm-6 col-xl-2 col-8 py-0 px-5">

                                        <img src={Passport} alt="checklist" className="img-fluid p-3"/>
                                        <div className="beside">
                                            <InfoIcon color="action"/>
                                            <label className="title-step">Pickup Your Passport</label>
                                        </div>
                                    </div>


                                    <div className="col-md-1 my-auto ">
                                        <img src={Arrow} alt="Arrow" className="img-fluid m-auto d-none d-md-block"/>
                                    </div>


                                    <div className="col-md-3 col-sm-6 col-xl-2 col-8 py-0 px-5">
                                        <img src={Come} alt="checklist" className="img-fluid p-3"/>
                                        <div className="beside mr-auto ml-auto">
                                            <LightTooltip title={FillAForm} placement="left-start">
                                                <InfoIcon color="action"/>
                                            </LightTooltip>

                                            <label className="title-step">Come To IRAN</label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <hr className="bg-dark m-0"/>
                        </div>

                    </div>

                    <div className="offset">

                        <div className="jumbotron5 p-0 m-0">
                            <hr className="bg-dark m-0"/>
                            <div className="col-md-12 text-center pt-4 p-0 m-0">
                                <h3 className="heading p-0 m-0 py-4">Track Your Iran Visa Status</h3>
                            </div>

                            <div className="col-md-12 text-center ">
                                <p className="heading-track">To Track Your Iran Visa Status,
                                    You Just Need To EnterYour Tracking code and Press Track Button</p>
                            </div>

                            <div className="col-md-12 track-style d-flex justify-content-center p-0 m-0">
                                <div className="row col-md-7 col-lg-8 col-sm-8 p-0 m-0 border-color">

                                    <div className="form-group col-md-12 button text-center p-0 m-0 ">
                                        <input type="email" className="form-control text-center p-4 m-0"
                                               aria-describedby="emailHelp"
                                               value={this.track}
                                               onChange={this.onChangeTrack}
                                               placeholder="-------"/>
                                    </div>

                                </div>
                                <div
                                    className="col-md-2 col-sm-2 col-lg-2 p-0 m-0 mb-auto mt-auto ml-3 d-flex justify-content-center">
                                    <button type="button" className="btn-track text-uppercase px-4 py-3"
                                            onClick={this.goToTrack}>TRACK
                                    </button>
                                </div>
                            </div>

                            <div className="col-md-12 py-4 p-0 m-0 text-center">
                                <p className="heading-track">If You Have Any Question About Your Visa Requests,
                                    <a href="/" className="link-color text-decoration-none">Login</a> To Your Account
                                    and check My Requests Page
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="offset">

                        <div className="jumbotron4 p-0 m-0">
                            <hr className="bg-dark m-0"/>
                            <div className="col-md-12 text-center p-0 m-0">
                                <h3 className="heading py-4 p-0 m-0">What Is Our Benefits?</h3>
                            </div>

                            <div className="col-6 mr-auto ml-auto text-center">
                                <p className="heading-track">We Do Our Bests To Giving You Feel Like Never Before
                                    Here Is Some Reason Why We Give You Best Service </p>
                            </div>

                            <Grid container direction="row-reverse" justify="center" alignItems="center">

                                <Grid item md={2} xs={6} sm={4} xl={2} className="ml-2">
                                    <div className="border-dark m-0 p-0">
                                        <img src={Support} alt="checklist" className="card-img p-3"/>
                                <br/>
                                <div className="text-center">
                                    <label className="title-support">SUPPORT 7/24</label>
                                </div>
                                    </div>
                                </Grid>

                                <Grid item md={2} xs={6} sm={4} xl={2} className="ml-2">
                                    <div className="border-dark m-0 p-0">
                                        <img src={Passport} alt="checklist" className="img-fluid p-3"/>
                                        <br/>
                                        <div className="text-center">
                                            <label className="title-support">Fully Online Process</label>
                                        </div>
                                    </div>
                                </Grid>

                                <Grid item md={2} xs={6} sm={4} xl={2} className="ml-2">
                                    <div className="border-dark m-0 p-0">
                                        <img src={Price} alt="checklist" className="img-fluid p-3"/>
                                        <br/>
                                        <div className="text-center">
                                            <label className="title-support">Best Price</label>
                                        </div>
                                    </div>
                                </Grid>

                                <Grid item md={2} xs={6} sm={4} xl={2} className="ml-2">
                                    <div className="border-dark m-0 p-0">
                                        <img src={Dashboard} alt="checklist" className="card-img"/>
                                        <br/>
                                        <div className="text-center">
                                            <label className="title-support">User Dashboard</label>
                                        </div>
                                    </div>
                                </Grid>

                                <Grid item md={2} xs={6} sm={4} xl={2} className="ml-2">
                                    <div className="border-dark m-0 p-0">
                                        <img src={Fast} alt="checklist" className="card-img"/>
                                        <br/>
                                        <div className="text-center">
                                            <label className="title-support">Fast and Reliable</label>
                                        </div>
                                    </div>
                                </Grid>

                            </Grid>


                            <div className="col-12 text-center">
                                <p className="heading5">Some Other:</p>
                            </div>

                            <div className="col-6 unordered">
                                <ul className="link2">
                                    <li><a href="/">Safe and Trusted Payment Method</a></li>
                                    <li><a href="/">Online Application Tracking</a></li>
                                    <li><a href="/">Offline Visa Application</a></li>
                                </ul>
                            </div>

                            <div className="col-6 unordered">
                                <ul className="link2">
                                    <li><a href="/">Step By Step Notification</a></li>
                                    <li><a href="/">Expertise in Visa Services</a></li>
                                    <li><a href="/">Money Back Gurantee</a></li>
                                </ul>
                            </div>


                        </div>
                    </div>

                    <div className="offset">

                        <div className="jumbotron5 p-0 m-0">
                            <hr className="bg-dark m-0"/>
                            <div className="col-12 text-center">
                                <h3 className="heading">Most Popular On Blog</h3>
                            </div>

                            <div className="col-12 text-center">
                                <p className="heading1">Know EveryThing You
                                    Should Know Before And When Traveling To IRAN </p>
                            </div>


                            <div className="col-12 text-center">
                                <h3 className="heading2">Most Popular On Blog</h3>
                            </div>
                        </div>
                    </div>
                    <hr className="bg-dark m-0"/>

                </Container>
            );
        else return (<center>
            <div>Loading...</div>
        </center>);
    }
}

export default Home;