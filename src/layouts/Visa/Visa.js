import React, {Component} from 'react';
// import "./styles.css";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";

class Visa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
        };
        this.setContent = this.setContent.bind(this);
    }

    setContent(name) {
        this.setState({content: name});
    }

    render() {
        const {content} = this.state;

        return (
            <div>
                <MapChart setTooltipContent={this.setContent}/>
                <ReactTooltip>{content}</ReactTooltip>
            </div>
        );
    }
}

export default Visa;