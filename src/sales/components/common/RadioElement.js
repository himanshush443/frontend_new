import { Switch } from '@material-ui/core'
import React from 'react'

const label = { inputProps: { 'aria-label': 'Switch demo' } }

function RadioElement() {
    return (
        <div className="radio_flex">
            {/* <div className="inputBox" style={{ marginRight: "34px" }}>
                <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span className="radiospan1">Multi Story</span>
                </label>
            </div> */}
            {/* <div className="inputBox" style={{ marginRight: "50px" }}>
                <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span className="radiospan2">Single Property</span>
                </label>
            </div> */}
            <Switch  />
        </div>
    )
}

export default RadioElement
