import React, { useState } from 'react';

import {
    AppBar,
    Toolbar,
    IconButton,
    Button,
    ButtonGroup,
    Checkbox,
    FormControlLabel,
    Paper,
    Box,
    TextField,
    Typography,
    Container, Grid,
} from '@material-ui/core';

import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
        backgroundColor: 'gray',
        border: 0,
        color: 'white',
    },
    btnStyled: {
        background: 'linear-gradient(45deg, #fe6b8b, #ff8e53)',
        border: 0,
        margin: 15,
        borderRadius: 15,
        color: 'white',
        padding: '5px 30px',
    },
    btn: {},
    label: {
        display: 'block',
        borderRadius: '1px',
    }
}));

const ButtonStyled = () => {
    const classes = useStyles();

    return (
        <Box component='div' >
            <Button className={classes.btnStyled} >
                Test Styled Button
            </Button >
        </Box >

    )
}

const CheckboxExample = () => {
    const [ checked, setChecked ] = useState(true);

    const classes = useStyles();

    return (
        <FormControlLabel
            className={classes.label}
            control={
                <Checkbox
                    checked={checked}
                    icon={<DeleteIcon color='primary' />}
                    checkedIcon={<SaveIcon color='primary' />}
                    onChange={(e) => setChecked(e.target.checked)}
                    inputProps={{
                        'arial-label': 'secondary checkbox'
                    }}
                    href='#' />
            }
            label='Testing Checkbox'
        />

    )
};

const Learn = () => {
    const classes = useStyles();

    return (
        <Container
            maxWidth='xl'
            className={classes.root}
        >
            <AppBar color='secondary'>
                <Toolbar>
                    <IconButton>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant='h6'>
                        MUI Theming
                    </Typography>
                    <Button>
                        Login
                    </Button>
                </Toolbar>

            </AppBar>
            <Typography
                variant='h2'
            >
                Welcome to MUI
            </Typography >
            <Typography
                variant='subtitle1'
            >
                Learn how to use Material Ui
            </Typography >
            <ButtonStyled />
            <Grid
                container
                spacing={2}
                justify='center'
                style={{ marginBottom: 8 }}
            >
                <Grid item xs={3} sm={6}>
                    <Paper style={{ height: 75, width: '100%' }} />
                </Grid >
                <Grid item xs={3} sm={6}>
                    <Paper style={{ height: 75, width: '100%' }} />
                </Grid >
                <Grid item xs={3} sm={6}>
                    <Paper style={{ height: 75, width: '100%' }} />
                </Grid >
            </Grid >

            <TextField
                variant='outlined'
                color='secondary'
                type='text'
                // label='The time'
                value='test@test.com'
            />
            <CheckboxExample />
            {/*<Grid container justify='flex-start' style={{ margin: '12px 0' }} >*/}
            <ButtonGroup
                variant='contained'
                color='primary'
                size='large'
                style={{ margin: '12px 0' }}
            >
                <Button
                    startIcon={<SaveIcon />}
                    onClick={() => alert('Hello')}
                    className={classes.btn}
                >
                    Save
                </Button >
                <Button
                    startIcon={<DeleteIcon />}
                    onClick={() => alert('Hello')}
                    className={classes.btn}
                >
                    Discard
                </Button >

            </ButtonGroup >

            {/*</Grid >*/}

        </Container >
    );
};

export default Learn;
