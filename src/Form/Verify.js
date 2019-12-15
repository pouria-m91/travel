import React, {Component} from 'react';
import '../Tracking/trackApplication.css'
import {useFetch} from "../API";


class Verify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verificationCode: '',
            loader: false,
        };
        this.onChangeVerification=this.onChangeVerification.bind(this);
        this.verify=this.verify.bind(this);
    }

    verify(){
        this.setState({loader: true});
        const {verificationCode}=this.state;
        useFetch('user/verify/' + verificationCode).post().then((data) => {
            this.setState({loader: false});
            this.props.onNext();
        }).catch(error => {
            this.setState({loader: false});
            alert(error.message);
        });
    }



    onChangeVerification(event){
        this.setState({verificationCode:event.target.value})
    }

    render() {
        const {verificationCode}=this.state;
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
                            <div className="form-group visa-code text-center float-right">
                                <input type="email" className="form-control text-center"
                                       aria-describedby="emailHelp"
                                    value={verificationCode}
                                       onChange={this.onChangeVerification}
                                       placeholder="-------"/>
                            </div>
                        </form>
                    </div>
                    <div className="col-3 float-right">
                        <button type="button" className="btn btn-outline-success text-uppercase"
                                onClick={this.verify}>TRACK
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Verify;



