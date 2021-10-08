import { makeStyles, TextField } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    input: {
        margin: '0px'
    },
})

function InputElement(props) {
    const classes = useStyles(props)
    return (
        <>
            <TextField className={classes.input}
                id="outlined-secondary"
                label={props.label}
                variant="outlined"
                fullWidth
            />
        </>
    )
}

export default InputElement
