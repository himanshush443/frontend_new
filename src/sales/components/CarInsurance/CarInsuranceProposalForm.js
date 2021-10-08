import { Button, Grid, makeStyles, Switch, TextField, Typography } from '@material-ui/core'
import React from 'react'
import InputElement from '../common/InputElement'
import RadioElement from '../common/RadioElement'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        width: '80%',
        marginLeft: '10%',
        marginTop: '100px'
    },
    heading: {
        fontSize: '20px',
        color: 'grey',
        margin: '10px 0px'
    },
    subHeading: {
        color: 'grey',
        marginTop: '30px'
    },
    save: {
        padding: '10px 40px',
        fontSize: '20px',
        background: 'darkGrey'
    },
    review: {
        padding: '10px 40px',
        fontSize: '20px',
        background: '#e07a72 ',
        color: 'white',
        right: '-12%'
    }
}))

function CarInsuranceProposalForm() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography className={classes.heading}>Car Owner Details</Typography>
                </Grid>
                <Grid item xs={5}>
                    <InputElement label="Car Owner as in RC copy" type="name" />
                </Grid>
                <Grid item xs={3}>
                    <InputElement label="Email" type="email" />
                </Grid>
                <Grid item xs={4}>
                    <InputElement label="Mobile Number" type="number" />
                </Grid>
                <Grid item xs={5}>
                    <Typography className={classes.heading}>Personal Details</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography className={classes.heading}>Nominee Details</Typography>
                </Grid>
                <Grid item xs={2}>
                    Male<Switch />Female
                </Grid>
                <Grid item xs={3}>
                    Yes<Switch />No
                </Grid>
                <Grid item xs={3}>
                    <InputElement label="Nominee Name" type="email" />
                </Grid>
                <Grid item xs={1}>
                    <InputElement label="Age" type="number" />
                </Grid>
                <Grid item xs={3}>
                    <InputElement label="Relationship" type="number" />
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.heading}>Car Owner Details</Typography>
                </Grid>
                <Grid item xs={5}>
                    <InputElement label="Car Owner as in RC copy" type="name" />
                </Grid>
                <Grid item xs={2}>
                    <InputElement label="Pincode" type="email" />
                </Grid>
                <Grid item xs={2}>
                    <InputElement label="City" type="email" />
                </Grid>
                <Grid item xs={3}>
                    <InputElement label="State" type="number" />
                </Grid>
                <Grid item xs={7}>
                    <Typography className={classes.heading}>Car Owner Details</Typography>
                </Grid>
                <Grid item xs={5}>
                    <Typography className={classes.subHeading}>Is the car currently on Loan?</Typography>
                </Grid>
                <Grid item xs={5}>
                    <InputElement label="Car Owner as in RC copy" type="name" />
                </Grid>
                <Grid item xs={2}>
                    <InputElement label="Pincode" type="email" />
                </Grid>
                <Grid item xs={2}>
                    Yes<Switch />No
                </Grid>
                <Grid item xs={3}>
                    <InputElement label="State" type="number" />
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={6}>
                    <Button className={classes.save} variant="contained" href="#contained-buttons">SAVE DETAILS</Button>
                </Grid>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.review} variant="contained" href="#contained-buttons">REVIEW DETAILS</Button>
                </Grid>
            </Grid>

        </div>
    )
}

export default CarInsuranceProposalForm
