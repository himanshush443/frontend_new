import { Button, Grid, makeStyles, Switch, TextField, Typography } from '@material-ui/core'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import DisabledInputElement from '../common/DisabledInputElement'
import RadioElement from '../common/RadioElement'

const useStyles = makeStyles(() => ({
    root: {
        width: '80%',
        marginTop: '120px',
        marginLeft: '9%'
    },
    save: {
        padding: '10px 40px',
        marginLeft: '50px',
        fontSize: '12px',
        background: 'lightgreen'
    },
    review: {
        padding: '10px 40px',
        fontSize: '12px',
        background: '#e07a72 ',
        color: 'white',
        right: '-5%'
    }
}))

function ThankyouPage() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography style={{ fontSize: '20px' }}>sdohfvns fwspojdwopijdfoiws oewhoidwjoeidj woiefd </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography style={{ fontSize: '30px' }}>sdohfvns fwspojdwopijdfoiws oewhoidwjoeidj woiefd </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Button className={classes.save} variant="contained" href="#contained-buttons">Explore other Insurance Products</Button>
                </Grid>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={4}>
                    <Button className={classes.review} variant="contained" href="#contained-buttons">Go to Dashboard</Button>
                </Grid>
            </Grid>

        </div>
    )
}

export default ThankyouPage
