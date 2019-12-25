import React, {Component} from 'react';
import './App.css';
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import {BrowserRouter as Router, Switch, Route, Redirect, HashRouter} from "react-router-dom";
import routes from "./routes";
import {Container} from "@material-ui/core";

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <Container>
                <Navbar/>
                <Router>
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
                            <Redirect from="/" to="/"/>
                        </Switch>
                    </React.Suspense>
                </Router>
                {/*<HashRouter>*/}
                {/*    <React.Suspense fallback={loading()}>*/}
                {/*        <Switch>*/}
                {/*            {routes.map((route, idx) => {*/}
                {/*                return route.component ? (*/}
                {/*                    <Route*/}
                {/*                        key={idx}*/}
                {/*                        path={route.path}*/}
                {/*                        exact={route.exact}*/}
                {/*                        name={route.name}*/}
                {/*                        render={props => (*/}
                {/*                            <route.component {...props} />*/}
                {/*                        )}*/}
                {/*                    />*/}
                {/*                ) : (null);*/}
                {/*            })}*/}
                {/*            <Redirect from="/" to="/"/>*/}
                {/*        </Switch>*/}
                {/*    </React.Suspense>*/}
                {/*</HashRouter>*/}
                <Footer/>
            </Container>


        )
    }
}

export default App;
