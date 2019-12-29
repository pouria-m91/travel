import React, {Component} from "react";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Question from "./assets/question.png";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";

class FAQComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faq: props.faq,
        };
    }

    render() {
        const {faq} = this.state;
        return (
            <ExpansionPanel className={'w-100'}>
                <ExpansionPanelSummary style={{backgroundColor: "#F1F3F3"}}
                                       expandIcon={<ExpandMoreIcon/>}
                                       aria-controls="panel1bh-content"
                                       id="panel1bh-header">
                    <img src={Question} alt="question" className="acr-img mr-2 mb-auto mt-auto"/>
                    <label className="mb-auto mt-auto">{faq.question ? faq.question : ''}</label>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        {faq.answer ? faq.answer : ''}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}

export default FAQComponent;
