import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../store/actions/toggleModalActions';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { format } from "date-fns";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { setSelectedDate, setSelectedDatesArray } from '../../store/actions/dateActions';

const ModalCalendar = React.memo(() => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

    const isOpenModal = useSelector(store => store.toggleModalReducer.isOpen);
    const selectedDate = useSelector(store => store.dateReducer.selectedDate);
    const selectedDatesArray = useSelector(store => store.dateReducer.selectedDatesArray);

    console.log('selectedDate', selectedDate);

    // const handleClickOpen = () => {
    //     dispatch(toggleModal(true));
    // };

    const handleClose = () => {
        dispatch(toggleModal(false));
    };

    const handleClickCloseByButton = (selectedDate) =>{
        const newArraySelectedDates = selectedDatesArray.filter(item => {
            return item !== selectedDate;
        });

        dispatch(setSelectedDate(null));
        dispatch(setSelectedDatesArray(newArraySelectedDates));

        dispatch(toggleModal(false));

    };

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={isOpenModal}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <IconButton aria-label="close" className={classes.closeButton} onClick={() => handleClickCloseByButton(selectedDate)}>
                    <CloseIcon />
                </IconButton>
                    <div style={{display: 'flex', justifyContent: 'space-around', marginBottom:'20px'}}>
                        <OutlinedInput
                            id="outlined-adornment-weight1"
                            defaultValue={ format(new Date(selectedDate), 'MMMM')}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            labelWidth={0}
                        />
                        <label>Day
                        <OutlinedInput
                            id="outlined-adornment-weight2"
                            defaultValue={ format(new Date(selectedDate), 'do iiii')}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            labelWidth={0}
                        />
                        </label>
                    </div>

            </Dialog>
        </div>
    );
});

export default ModalCalendar;
