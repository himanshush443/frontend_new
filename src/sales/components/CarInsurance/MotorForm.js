import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Divider, InputBase, Paper } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { getMotorData } from '../api'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F1F4FB',
        width: "60%",
        margin: '10% 16%',
        padding: '3%'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: "center"
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    vehForm: {
        display: 'flex',
        direction: "column",
        padding: '1% 2%',
        margin: '4% 5%',
        alignItems: 'center',
    },
    vehInput: {
        display: "flex",
        justifyContent: "center",
        margin: "0px"
    },
    input: {
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function MotorForm() {
    const classes = useStyles();
    const theme = useTheme();

    const [regNumber, setRegNumber] = useState('');
    const [error, setError] = useState(false);
    

    const handleChange = e => {
        setRegNumber(e.target.value);
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        let regNo = regNumber.split('');
        const regres = regNo.filter((item) => item !== '-')
        const res = regres.join("").toUpperCase()
        const data = getMotorData(res, 'xpc');
        console.log(data);
        if(data !== "error") {
            
            setError(true)
        }
        else {
            setError(false)
        }
    } 

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Save upto 80%+ on car insurance
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Renew in 2 minutes
                    </Typography>
                </CardContent>
                <Paper component="form" className={classes.vehForm}>
                    <form className={classes.vehInput}>
                        <InputBase
                            className={classes.input}
                            placeholder="Enter Your Vehicle Number"
                            value={regNumber} onChange={handleChange}
                        />
                        <Divider className={classes.divider} orientation="vertical" />
                        <IconButton onClick={handleSubmit} type="submit" color="primary" className={classes.iconButton} aria-label="directions">
                            <ArrowForwardIcon />
                        </IconButton>
                    </form>
                </Paper>
                {(error) && 
                    <Typography style={{color: 'red'}}>Please provide Valid Car Registration Number </Typography>
                }
                <Divider variant="middle" />
                <Typography component="h6" variant="h6">
                    Or
                </Typography>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Check Without Vehicle Number
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
}
