import header from "../assets/man.png";
import Form from "../assets/checklist.png";
import Arrow from "../assets/rightArrow.png";
import Pay from "../assets/debtCard.png";
import Wait from "../assets/hourglass.png";
import Passport from "../assets/passport.png";
import Come from "../assets/azadi.png";
import Support from "../assets/passport-copy.png";
import Price from "../assets/money-bag.png";
import Dashboard from "../assets/tasks.png";
import Fast from "../assets/clock.png";
import './home.css';
import React, {Component} from "react";
import {useFetch} from "../API";

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
                <div>
                    <header className="offset mt-5 col-md-12">
                        <div className="container p-0 m-0 ml-2">

                            <div className="row p-0 m-0 ">

                                <div className="col-md-8 text-left">
                                    <label className="font-head">Do You Want Apply</label>
                                    <br/>
                                    <label className="font-head">For IRAN Visa?</label>

                                    <div className="row col-12 p-0 m-0">
                                        <div className=" col-9 p-0 m-0">
                                            <div className=" form-group col-9 button">
                                                <select className=" form-control insideButton" id="sel1">
                                                    <option>Select Your Nationality</option>
                                                    {countries.map((country, index) =>
                                                        <option key={index} value={country.id}>{country.name}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>


                                    </div>

                                    <div className="col-8 p-0 m-0">
                                        <div className="form-group col-8 button">
                                            <select className=" form-control insideButton" id="sel2">
                                                <option>Select Visa Type</option>
                                                <option>america</option>
                                                <option>england</option>
                                                <option>spain</option>
                                                <option>check</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-8 p-0 ml-3">
                                        <button type="button" className="submit-btn px-4 py-2 m-0">APPLY</button>
                                    </div>

                                </div>
                                <div className="col-md-8">
                                    <img className="img-fluid offset-md-3" src={header} alt=""/>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="offset">

                        <div className="jumbotron px-0 py-2 m-0">

                            <div className="col-md-12 text-center p-0 m-0">
                                <h3 className="heading">Steps To Get Visa Of IRAN</h3>
                            </div>

                            <div className="container px-5 py-5 size">
                                <div className="row text-center">

                                    <div className="col mx-1">
                                        <div className="feature">
                                            <blockquote>
                                                <img src={Form} alt="checklist" className="img-size"/>

                                            </blockquote>
                                            <blockquote className="f-size">
                                                <i className="fas fa-info-circle"> </i>
                                                Fill a Form
                                            </blockquote>
                                        </div>
                                    </div>
                                    <div className="col mx-1">
                                        <div className="feature">
                                            <img src={Arrow} alt="Arrow" className="arrow"/>
                                        </div>
                                    </div>

                                    <div className="col mx-1">
                                        <div className="feature">
                                            <blockquote>
                                                <img src={Pay} alt="checklist" className="img-size"/>
                                            </blockquote>
                                            <blockquote className="f-size">
                                                <i className="fas fa-info-circle"> </i>
                                                Pay
                                            </blockquote>
                                        </div>
                                    </div>

                                    <div className="col mx-1">
                                        <div className="feature">
                                            <img src={Arrow} alt="Arrow" className="arrow"/>
                                        </div>
                                    </div>

                                    <div className="col mx-1">
                                        <div className="feature">
                                            <blockquote>
                                                <img src={Wait} alt="checklist" className="img-size"/>
                                            </blockquote>
                                            <blockquote className="f-size">
                                                <i className="fas fa-info-circle"> </i>
                                                Wait
                                            </blockquote>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="container px-5 py-5 size">
                                <div className="row text-center">

                                    <div className="col mx-1">
                                        <div className="feature">
                                            <blockquote>
                                                <img src={Passport} alt="checklist" className="img-size1"/>

                                            </blockquote>
                                            <blockquote className="f-size1">
                                                <i className="fas fa-info-circle"> </i>
                                                Pickup Your
                                                Passport
                                            </blockquote>
                                        </div>
                                    </div>
                                    <div className="col mx-1">
                                        <div className="feature">
                                            <img src={Arrow} alt="Arrow" className="arrow1"/>
                                        </div>
                                    </div>

                                    <div className="col mx-1">
                                        <div className="feature">
                                            <blockquote>
                                                <img src={Come} alt="checklist" className="img-size1"/>
                                            </blockquote>
                                            <blockquote className="f-size1">
                                                <i className="fas fa-info-circle"> </i>
                                                Come To
                                                IRAN
                                            </blockquote>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="offset">

                        <div className="jumbotron1">

                            <div className="col-12 text-center">
                                <h3 className="heading">Track Your Iran Visa Status</h3>
                            </div>

                            <div className="col-12 text-center">
                                <p className="heading1">To Track Your Iran Visa Status,
                                    You Just Need To EnterYour Tracking code and Press Track Button</p>
                            </div>

                            <div className="row">
                                <div className="col-8 ">
                                    <form>
                                        <div className="form-group visa-code text-center float-right">
                                            <input type="email" className="form-control text-center"
                                                   aria-describedby="emailHelp"
                                                   value={this.track}
                                                   onChange={this.onChangeTrack}
                                                   placeholder="-------"/>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-3 float-right">
                                    <button type="button" className="btn btn-outline-success text-uppercase"
                                            onClick={this.goToTrack}>TRACK
                                    </button>
                                </div>
                            </div>

                            <div className="col-12 text-center">
                                <p className="heading2">If You Have Any Question About Your Visa Requests,
                                    Logttin To Your Account and check My Requests Page
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="offset">

                        <div className="jumbotron">

                            <div className="col-12 text-center">
                                <h3 className="heading3">What Is Our Benefits?</h3>
                            </div>

                            <div className="col-12 text-center">
                                <p className="heading4">We Do Our Bests To Giving You Feel Like Never Before
                                    Here Is Some Reason Why We Give You Best Service </p>
                            </div>

                            <div className="container px-5 py-5 size">
                                <div className="row text-center">

                                    <div className="col mx-1 border-dark">
                                        <div className="feature">
                                            <blockquote>
                                                <img src={Support} alt="checklist" className="img-size1"/>
                                                <p className="font-p-1">SUPPORT 7/24</p>
                                            </blockquote>
                                        </div>
                                    </div>

                                    <div className="col mx-1 border-dark">
                                        <div className="feature">
                                            <blockquote>
                                                <img src={Support} alt="checklist" className="img-size1"/>
                                                <p className="font-p-1">Fully Online Process</p>
                                            </blockquote>
                                        </div>
                                    </div>

                                    <div className="col mx-1 border-dark">
                                        <div className="feature">
                                            <blockquote>
                                                <img src={Price} alt="checklist" className="img-size1"/>
                                                <p className="font-p-1">Best Price</p>
                                            </blockquote>
                                        </div>
                                    </div>

                                    <div className="col mx-1 border-dark">
                                        <div className="feature">
                                            <blockquote>
                                                <img src={Dashboard} alt="checklist" className="img-size1"/>
                                                <p className="font-p-1">User Dashboard</p>
                                            </blockquote>
                                        </div>
                                    </div>

                                    <div className="col mx-1 border-dark">
                                        <div className="feature">
                                            <blockquote>
                                                <img src={Fast} alt="checklist" className="img-size1"/>
                                                <p className="font-p-1">Fast and Riliable</p>
                                            </blockquote>
                                        </div>
                                    </div>

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
                        </div>
                    </div>

                    <div className="offset">

                        <div className="jumbotron1">

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

                </div>
            )
        else return (<center>
            <div>Loading...</div>
        </center>);
    }
}

export default Home;