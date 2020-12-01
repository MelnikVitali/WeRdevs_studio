import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from "date-fns";

import {
    Box,
    Typography,
    Dialog,
    IconButton,
    OutlinedInput,
    Hidden,
    DialogActions,
    Button,
} from "@material-ui/core";

import CloseIcon from '@material-ui/icons/Close';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { toggleModal } from '../../store/actions/toggleModalActions';
import { setSelectedDate, setSelectedDatesArray } from '../../store/actions/dateActions';

import useStyles from './styles';

const ModalCalendar = React.memo(() => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

    const isOpenModal = useSelector(store => store.toggleModalReducer.isOpen);
    const selectedDate = useSelector(store => store.dateReducer.selectedDate);
    const selectedDatesArray = useSelector(store => store.dateReducer.selectedDatesArray);

    const handleClose = () => {
        dispatch(toggleModal(false));
    };

    const handleClickCloseByButton = (selectedDate) => {
        const newArraySelectedDates = selectedDatesArray.filter(item => {
            return item !== selectedDate;
        });

        dispatch(setSelectedDate(null));
        dispatch(setSelectedDatesArray(newArraySelectedDates));

        dispatch(toggleModal(false));
    };

    return (
        <Dialog
            fullScreen={fullScreen}
            open={isOpenModal}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            className={classes.root}
        >
            <Hidden xsDown >
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={() => handleClickCloseByButton(selectedDate)}
                >
                    <CloseIcon className={classes.closeIcon} />
                </IconButton >
            </Hidden >
            <div className={classes.formContainer} >
                <Box >
                    <Typography component='p' className={classes.modalTitle} >Month</Typography >
                    <OutlinedInput
                        id="outlined-adornment-weight1"
                        defaultValue={format(new Date(selectedDate), 'MMMM')}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        margin={"dense"}
                        labelWidth={0}
                        className={classes.input}
                    />
                </Box >
                <Box className={classes.marginInput} >
                    <Typography component='p' className={classes.modalTitle} >Day</Typography >
                    <OutlinedInput
                        id="outlined-adornment-weight2"
                        defaultValue={format(new Date(selectedDate), 'do iiii')}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        labelWidth={0}
                        className={classes.input}
                    />
                </Box >
            </div >
            <Hidden smUp >
                <DialogActions >
                    <Button
                        className={classes.btn}
                        onClick={() => handleClickCloseByButton(selectedDate)}
                    >
                        Cancel
                    </Button >
                    <Button
                        className={classes.btn}
                        onClick={handleClose}
                    >
                        Select
                    </Button >
                </DialogActions >
            </Hidden >
        </Dialog >
    );
});

export default ModalCalendar;
