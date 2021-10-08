import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, FormHelperText, Input, InputLabel, List, ListItem, ListItemAvatar, ListItemText, makeStyles, useTheme, MenuItem, NativeSelect, Select, TextField, Typography, ListItemSecondaryAction, Checkbox } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "10%",
        margin: "40px",
    },
    listItem: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    form: {
        margin: "0px",
        fontSize: '12px'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    card: {
        padding: "2%",
        margin: '1%',
        borderBottom: '1px solid lightgrey',
        fontSize: '11px !important'
    },
    error: {
        color: theme.palette.error.dark,
        fontSize: '1em'
    },
    addons: {
        width: "180px",
        marginTop: '-10px'
    },
    insuranceInfo: {
        width: "140px",
        paddingRight: '24px'
    },
    head: {
        fontSize: '14px'
    },
    values: {
        marginLeft: '10px'
    },
    priceSection: {
        display: 'flex',
        flexDirection: 'column'
    }
}));

const InsuranceList = () => {

    const classes = useStyles()
    const theme = useTheme()
    const [skills, setSkills] = useState([])
    const [selectedSkills, setSelectedSkills] = useState([])
    const [open, setOpen] = React.useState(false);
    const [age, setAge] = React.useState('');
    const [value, setValue] = React.useState(null);
    const [personName, setPersonName] = React.useState([]);
    const [checked, setChecked] = React.useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };

    const handleChange = (event) => {
        setPersonName(event.target?.value)
        console.log(personName)
    };

    const handleAge = (event) => {
        setAge(Number(event.target.value) || '')
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const insurers = [
        { id: 1, name: 'Acko General Insurance Ltd.', price: 10000, addons: ['kjdfh', 'ksdjhf0', 'aiksud'], coverage: ['kjdfh', 'ksdjhf0', 'aiksud'] },
        { id: 2, name: 'Aditya Birla Health Insurance Co. Ltd.', price: 10000 },
        { id: 3, name: 'Agriculture Insurance Company of India Ltd.', price: 10000 },
        { id: 4, name: 'Bajaj Allianz General Insurance Co. Ltd', price: 10000 },
        { id: 5, name: 'Care Health Insurance Ltd(formerly known as Religare Health Insurance Co. Ltd.)', price: 10000 },
        { id: 6, name: 'Royal Sundaram General Insurance Co. Ltd.', price: 10000 },
        { id: 7, name: 'SBI General Insurance Co. Ltd.', price: 10000 },
        { id: 8, name: 'Star Health & Allied Insurance Co.Ltd.', price: 10000 },
        { id: 9, name: 'Acko General Insurance Ltd.', price: 10000 },
        { id: 10, name: 'Acko General Insurance Ltd.', price: 10000 },
        { id: 11, name: 'Acko General Insurance Ltd.', price: 10000 },
    ]

    function getStyles(name, personName, theme) {
        return {
            fontWeight:
                personName.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={3}>
                    <Grid container className={classes.card}>
                        <Grid item xs={8}>
                            <h9>Company Name and Model Year</h9>
                        </Grid>
                        <Grid item xs={4}>
                            <Button>Edit</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <h9>Policy Expiry Date:</h9>
                        </Grid>
                        <Grid item xs={6}>
                            <form className={classes.form} noValidate>
                                <TextField
                                    id="date"
                                    type="date"
                                    defaultValue="2005-01-01"
                                    className={classes.expiryDate}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </form>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.card}>
                        <Grid item xs={7}>
                            <h9>Insured Value (IDV):</h9>
                        </Grid>
                        <Grid item xs={5}>
                            <Button onClick={handleClickOpen}>Select IDV</Button>
                            <Dialog open={open} onClose={handleClose} className={classes.idvDialog}>
                                <DialogTitle>Insured Value (IDV):</DialogTitle>
                                <DialogContent>
                                    <form>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel id="demo-dialog-select-label">Age</InputLabel>
                                            <Select
                                                labelId="demo-dialog-select-label"
                                                id="demo-dialog-select"
                                                value={age}
                                                onChange={handleAge}
                                                input={<Input />}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </form>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        Cancel
                                    </Button>
                                    <Button onClick={handleClose} color="primary">
                                        Ok
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.card}>
                        <Grid item xs={7} container>
                            <Grid item xs={12}><h9>NCB Value:</h9></Grid>
                            <Grid item xs={12}><h9 style={{ fontSize: '8px' }}>Not Verified, set to 50%</h9></Grid>
                        </Grid>
                        <Grid item xs={5}>
                            <FormControl>
                                <NativeSelect
                                    defaultValue={50}
                                    inputProps={{
                                        name: 'ncb',
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                    <option value={10}>30%</option>
                                    <option value={10}>50%</option>
                                    <option value={10}>80%</option>
                                </NativeSelect>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.card}>
                        <Grid item xs={7}>
                            <h9>Insurance Companies:</h9>
                        </Grid>
                        <Grid item xs={5}>
                            <FormControl>
                                <NativeSelect
                                    defaultValue={50}
                                    inputProps={{
                                        name: 'insurers',
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                    <option value={10}>30%</option>
                                    <option value={10}>50%</option>
                                    <option value={10}>80%</option>
                                </NativeSelect>
                                <FormHelperText>Not Verified, set to 50%</FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.card}>
                        <Grid item xs={4}>
                            <h9>Addons:</h9>
                        </Grid>
                        <Grid item xs={8}>
                            <FormControl className={classes.addons}>
                                <InputLabel id="demo-simple-select-label">select Addons</InputLabel>
                                <Select
                                    labelId="demo-mutiple-name-label"
                                    id="demo-mutiple-name"
                                    multiple
                                    value={personName}
                                    onChange={handleChange}
                                    input={<Input />}
                                    MenuProps={MenuProps}
                                >
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    {/* {
                        addonList? <></>? <></>
                    } */}

                    <Grid container>
                        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            {personName.map((value) => {
                                const labelId = `checkbox-list-secondary-label-${value}`;
                                return (
                                    <ListItem key={value} button>
                                        <ListItemAvatar>
                                            <Avatar
                                                alt={`Avatar n°${value + 1}`}
                                                src={`/static/images/avatar/${value + 1}.jpg`}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText primary={`${value }`} />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Grid>
                </Grid>
                <Grid item sm={9}>
                    <List>
                        {insurers.map(insurance => {
                            return (
                                <>
                                    <Divider variant="inset" component="li" />
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>

                                        <ListItemText className={classes.insuranceInfo} style={{ margin: '2% 0px' }}
                                            primary={
                                                <>
                                                    <Typography>{insurance.name}</Typography>
                                                </>
                                            }
                                        />
                                        <ListItemText
                                            secondary={
                                                <>
                                                    <Typography className={classes.head}>IDV :</Typography>
                                                    <Typography
                                                        component="span"
                                                        variant="body2"
                                                        className={classes.values}
                                                        color="textPrimary"
                                                    >
                                                        {insurance.price}
                                                    </Typography>
                                                    <Typography className={classes.head}>Addons :</Typography>
                                                    {insurance?.addons?.map(addon => {
                                                        return (<Typography className={classes.values}>{addon}</Typography>)
                                                    })
                                                    }
                                                </>
                                            }
                                        />
                                        <ListItemText
                                            secondary={
                                                <>
                                                    <Typography className={classes.head}>Coverage :</Typography>
                                                    {insurance?.coverage?.map(coverage => {
                                                        return (<Typography className={classes.values}>{coverage}</Typography>)
                                                    })
                                                    }
                                                </>
                                            }
                                        />
                                        <div className={classes.priceSection}>
                                            <Button variant="contained" color="primary" style={{ padding: '7px 36px' }}>{insurance.price}</Button>
                                            <Button>Policy Details</Button>
                                        </div>

                                    </ListItem>
                                </>
                            )
                        })}

                    </List>
                </Grid>
            </Grid>
        </div>
    )
}

export default InsuranceList;