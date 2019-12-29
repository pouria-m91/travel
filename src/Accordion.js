import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Question from './assets/question.png';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default function ControlledExpansionPanels(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary style={{backgroundColor:"#F1F3F3" }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <img src={Question} alt="question" className="acr-img mr-2 mb-auto mt-auto"/>
                    <label className="mb-auto mt-auto">How can I track my iran visa application form?</label>
                    {/*<Typography className={classes.heading}>How can I track my iran visa application form?</Typography>*/}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary style={{backgroundColor:"#F1F3F3" }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <img src={Question} alt="question" className="acr-img mr-2 mb-auto mt-auto"/>
                    <label className="mb-auto mt-auto">How can I track my iran visa application form?</label>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                        diam eros in elit. Pellentesque convallis laoreet laoreet.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <ExpansionPanelSummary  style={{backgroundColor:"#F1F3F3" }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <img src={Question} alt="question" className="acr-img mr-2 mb-auto mt-auto"/>
                    <label className="mb-auto mt-auto">How can I track my iran visa application form?</label>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                        vitae egestas augue. Duis vel est augue.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <ExpansionPanelSummary  style={{backgroundColor:"#F1F3F3" }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <img src={Question} alt="question" className="acr-img mr-2 mb-auto mt-auto"/>
                    <label className="mb-auto mt-auto">How can I track my iran visa application form?</label>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                        vitae egestas augue. Duis vel est augue.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}