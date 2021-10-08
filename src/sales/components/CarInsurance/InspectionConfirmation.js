import { Button, Grid, makeStyles, Switch, TextField, Typography } from '@material-ui/core'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import DisabledInputElement from '../common/DisabledInputElement'
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
        right: '-5%'
    }
}))

function InspectionConfirmation() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography className={classes.heading}>Car Owner Details</Typography>
                </Grid>
                <Grid item xs={5}>
                    <DisabledInputElement label="Car Owner as in RC copy" type="name" />
                </Grid>
                <Grid item xs={3}>
                    <DisabledInputElement label="Email" type="email" />
                </Grid>
                <Grid item xs={4}>
                    <DisabledInputElement label="Mobile Number" type="number" />
                </Grid>
                <Grid item xs={5}>
                    <Typography className={classes.heading}>Personal Details</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography className={classes.heading}>Nominee Details</Typography>
                </Grid>
                <Grid item xs={2}>
                    Male<Switch disabled />Female
                </Grid>
                <Grid item xs={3}>
                    Yes<Switch disabled />No
                </Grid>
                <Grid item xs={3}>
                    <DisabledInputElement label="Nominee Name" type="email" />
                </Grid>
                <Grid item xs={1}>
                    <DisabledInputElement label="Age" type="number" />
                </Grid>
                <Grid item xs={3}>
                    <DisabledInputElement label="Relationship" type="number" />
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.heading}>Car Owner Details</Typography>
                </Grid>
                <Grid item xs={5}>
                    <DisabledInputElement label="Car Owner as in RC copy" type="name" />
                </Grid>
                <Grid item xs={2}>
                    <DisabledInputElement label="Pincode" type="email" />
                </Grid>
                <Grid item xs={2}>
                    <DisabledInputElement label="City" type="email" />
                </Grid>
                <Grid item xs={3}>
                    <DisabledInputElement label="State" type="number" />
                </Grid>
                <Grid item xs={7}>
                    <Typography className={classes.heading}>Car Owner Details</Typography>
                </Grid>
                <Grid item xs={5}>
                    <Typography className={classes.subHeading}>Is the car currently on Loan?</Typography>
                </Grid>
                <Grid item xs={5}>
                    <DisabledInputElement label="Car Owner as in RC copy" type="name" />
                </Grid>
                <Grid item xs={2}>
                    <DisabledInputElement label="Pincode" type="email" />
                </Grid>
                <Grid item xs={2}>
                    Yes<Switch disabled />No
                </Grid>
                <Grid item xs={3}>
                    <DisabledInputElement label="State" type="number" />
                </Grid>
                <Grid item xs={12}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " />
                    </FormGroup>

                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={6}>
                    <Button className={classes.save} variant="contained" href="#contained-buttons">SAVE DETAILS</Button>
                </Grid>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={4}>
                    <Button className={classes.review} variant="contained" href="#contained-buttons">APPLY FOR INSPECTION</Button>
                </Grid>
            </Grid>

        </div>
    )
}

export default InspectionConfirmation
