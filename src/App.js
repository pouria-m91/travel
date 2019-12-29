import React, {Component} from 'react';
import './App.css';
import Navbar from "./layouts/Navbar";
import Home from "./layouts/Home";
import Footer from "./layouts/Footer";
import {BrowserRouter as Router, Switch, Route , Redirect , HashRouter} from "react-router-dom";
import AboutUs from "./layouts/AboutUs";
import BlogContent from "./layouts/BlogContent";
import BlogPost from "./layouts/BlogPost";
import ContactUs from "./layouts/ContactUs";
import Faq from "./layouts/Faq";
import Form from "./Form/Form";
import Track from "./Tracking/Track";
import TrackApplication from "./Tracking/TrackApplication";
import VisaCountryInformation from "./layouts/VisaCountryInformation";
import routes from "./routes";
import {Container} from "@material-ui/core";

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,

        }
    }



    render() {
        return (
            <div>
                <Navbar/>
            <HashRouter>

                <React.Suspense fallback={loading()}>
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component ? (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props => (
                                        <route.component {...props} />
                                    )}
                                />
                            ) : (null);
                        })}
                        {/*<Redirect from="/" to="/dashboard"/>*/}
                    </Switch>




                    {/*<Switch>*/}
                    {/*    <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />*/}
                    {/*    <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />*/}
                    {/*    <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />*/}
                    {/*    <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />*/}
                    {/*    <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />*/}
                    {/*</Switch>*/}
                </React.Suspense>
            </HashRouter>
                <Footer/>
            </div>


        )
    }
}

export default App;
