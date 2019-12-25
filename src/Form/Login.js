import React, {Component} from 'react';
import '../Tracking/trackApplication.css'
import {useFetch} from "../API";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import {Button, TextField} from "@material-ui/core";
import Container from "reactstrap/es/Container";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.onChange = this.onChange.bind(this);
        this.login = this.login.bind(this);
    }

    login() {
        useFetch('auth/login')
            .post({email: this.state.email, password: this.state.password}, false)
            .then(data => {
                localStorage.setItem('token', data.access_token);
                this.props.onNext();
            }).catch(error => {
            alert(error.message);
        });
    }

    onChange(event) {
        if (event.target.id == 'email') {
            this.setState({email: event.target.value});
        }
        if (event.target.id == 'password') {
            this.setState({password: event.target.value});
        }
    }

    render() {
        const {email, password} = this.state;
        return (
            <div className="jumbotron1">

                <div className="col-12 text-center">
                    <h3 className="heading">Track IRAN Visa</h3>
                </div>

                <div className="col-12 text-center">
                    <p className="heading1">To Track Your Iran Visa Status, You Just Need To Enter
                        Your Tracking code and Press Track Button</p>
                </div>

                <div className="row">
                    <div className="col-8">
                        <form>
                            <Container>
                                <Row>
                                    <Col xs={12}>
                                        <TextField
                                            id="email"
                                            label="Email"
                                            variant="outlined"
                                            value={email}
                                            fullWidth
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                    <Col xs={12}>
                                        <TextField
                                            id="password"
                                            label="Password"
                                            type='password'
                                            variant="outlined"
                                            value={password}
                                            fullWidth
                                            onChange={this.onChange}/>
                                    </Col>
                                    <Col xs={12}>
                                        <Button className="float-right" variant="contained" color="primary"
                                                onClick={this.login}>Login
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;



