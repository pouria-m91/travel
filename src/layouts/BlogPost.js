import React from 'react';
import {Link} from "react-router-dom";
import Flag from '../assets/flag.png';
import './blogPost.css';

const BlogPost = () => {
    return (
        <div>
            <header id="home">

                <div className="offset">
                    <div className="row bg-white">
                        <div className="col-md-12 text-center">
                            <label className="header-title">Visa To Iran Blog</label>
                            <p className="col-md-8 mr-auto ml-auto mt-1 header-content">here is our blog. You can easily
                                find everything
                                about traveling to Iran
                                Our articles are written speciality by expert writters who are exprienced in Travel for
                                years.
                                Our blog is useful before, On While and After Traveling to Iran.</p>
                            <label className="mt-1 bread-crumb">VisaToIran / Blog / What Is Iran Dress Code?</label>
                        </div>
                    </div>
                </div>
            </header>

            <div className="offset">
                <div className="jumbotron">

                    <div className="col-md-10 pt-4 pb-0 px-0 ml-auto mr-auto ">
                        <div className="row">

                            <input className="form-control col-md-5 text-center input-sr ml-2 mr-2" type="text"
                                   placeholder="What is looking for? Type it ..."/>

                            <div className="form-group col-md-3 p-0 ml-2 mr-2 form-gp">
                                <select className=" form-control insideButton" id="sel3">
                                    <option>Explore By Category</option>
                                    <option>america</option>
                                    <option>england</option>
                                    <option>spain</option>
                                    <option>check</option>
                                </select>
                            </div>
                            <div className=" col-md-3 ml-2 mr-2 p-0 ">
                                <button type="button" className="col-md-12 py-1 btn sub-btn1">Search</button>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center pr-0 pb-0 ml-2 mr-2 mt-2">

                        <div className="col-md-8 p-0 mr-2 ml-2 mb-2">

                            <div className="row">
                                <div className="p-2 bg-white card-left">
                                    <div className="row no-gutters ">
                                        <div className="col-md-4 p-0">
                                            <img src={Flag} className="card-img" alt="..."/>
                                        </div>
                                        <div className="col-md-8 p-0">
                                            <div className="card-body p-0 ml-3 ">
                                                <h4 className="card-title font-weight-bold">Why Tehran is Becoming Best
                                                    Place?</h4>
                                                <div className="row">
                                                    <p className="card-text col-md-6 p-0 text-left">
                                                        <small className="text-muted">Blog / Category 1</small>
                                                    </p>
                                                    <p className="card-text col-md-6 p-0 text-right">
                                                        <small className="text-muted">7 / November / 2019</small>
                                                    </p>
                                                </div>
                                                <p className="card-text p-font">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit
                                                    , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Quis ipsum suspendisse ultrices gravida.
                                                    Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Quis ipsum suspendisse ultrices gravida.
                                                    Risus commodo viverra maecenas accumsan lacus vel facilisis.... </p>
                                                <p className="card-text read-more text-right">Read More</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="col-md-3 ml-2 mr-2 p-0">
                            <div className="row">

                                <div className="col-md-12 card-right bg-white">
                                    <h4 className="text-center">Apply For Iran E-Visa</h4>
                                    <label className="right-card-text ml-3 mt-3">Select Your Nationality:</label>


                                    <div className="row p-0">
                                        <div className="form-group col-xl-12 button">
                                            <select className=" form-control insideButton" id="sel2">
                                                <option>-----------</option>
                                                <option>america</option>
                                                <option>england</option>
                                                <option>spain</option>
                                                <option>check</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center pb-2">
                                        <button type="button" className="btn col-md-10 py-1 sub-btn">APPLY</button>
                                    </div>
                                </div>

                                <div className="col-md-12 bg-white  mt-5 mb-5 card-right">
                                    <h4>Top 5 Articles</h4>
                                    <label className="right-card-text mt-1">Read most visited articles</label>

                                    <div className="row p-0 mt-4 list">
                                        <Link to="#" className="list-group-item list-group-item-action p-2 mb-3"><label
                                            className="col-2 p-1 text-center m-0 bg-white mr-2 font-weight-bold">1</label> Why
                                            Get
                                            Iran Visa?</Link>
                                        <Link to="#" className="list-group-item list-group-item-action p-2 mb-3"><label
                                            className="col-2 p-1 text-center m-0 bg-white mr-2 font-weight-bold">2</label> How
                                            To
                                            Grab Driver in Iran?</Link>
                                        <Link to="#" className="list-group-item list-group-item-action p-2 mb-3"><label
                                            className="col-2 p-1 text-center m-0 bg-white mr-2 font-weight-bold">3</label> Best
                                            Places To Eat Drinks in tehran</Link>
                                        <Link to="#" className="list-group-item list-group-item-action p-2 mb-3"><label
                                            className="col-2 p-1 text-center m-0 bg-white mr-2 font-weight-bold">4</label> Blog
                                            Title 1 sintirifort nite</Link>
                                        <Link to="#" className="list-group-item list-group-item-action p-2"><label
                                            className="col-2 p-2 text-center m-0 bg-white mr-2 font-weight-bold">5</label> Blog
                                            Title 1 sintirifort nite</Link>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
};
export default BlogPost;