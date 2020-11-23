import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import {
    addMonths,
    subMonths,
    format,
    getTime
} from 'date-fns';

import {
    GridList,
    GridListTile,
    Typography,
    IconButton,
    Box,
    Divider
} from '@material-ui/core';

import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import { createMonthData } from '../../utils/createMonthData';

import { setNextMonth, setPrevMonth, setSelectedDate, setSelectedDatesArray } from '../../store/actions/dateActions';
import { toggleModal } from '../../store/actions/toggleModalActions';

import useStyles from './styles';

const daysArr = [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ];

const Calendar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const currentDate = useSelector(store => store.dateReducer.currentDate);
    const selectedDatesArray = useSelector(store => store.dateReducer.selectedDatesArray);

    const dateFormat = 'MMMM yyyy';


    const toPreviousMonth = () => {
        dispatch(setPrevMonth(subMonths(currentDate, 1)));

    };

    const toNextMonth = () => {
        dispatch(setNextMonth(addMonths(currentDate, 1)));
    };

    const handleTileClick = (event, tile) => {
        const timestamp = getTime(tile.dateFns);

        if (!selectedDatesArray.includes(timestamp)) {
            const newArray = [ ...selectedDatesArray, timestamp ];

            dispatch(setSelectedDatesArray(newArray));
        }

        dispatch(toggleModal(true));

        dispatch(setSelectedDate(timestamp));
    };


    const getTiles = (date) => {
        return createMonthData(date, selectedDatesArray);
    };

    return (
        <div className={ classes.root }>
            <Box className={ classes.calendar }>
                <header className={ classes.calendarHeader }>
                    <IconButton
                        aria-label="Last Month"
                        className={ classes.headerIcon }
                        onClick={ toPreviousMonth }
                    >
                        <KeyboardArrowLeftIcon fontSize="large" />
                    </IconButton>
                    <Typography variant="h5" className={ classes.headerText }>
                        { format(currentDate, dateFormat) }
                    </Typography>
                    <IconButton
                        aria-label="Next Month"
                        className={ classes.headerIcon }
                        onClick={ toNextMonth }
                    >
                        <KeyboardArrowRightIcon fontSize="large" />
                    </IconButton>

                </header>
                <Divider className={classes.line}/>

                {/*<CalendarGrid date={date} />*/ }
                <GridList
                    key="calendar"
                    cellHeight={ 30 }
                    cols={ 7 }
                    spacing={ 0 }
                    className={ classes.gridList }
                >
                    { getTiles(currentDate).map(week =>
                        week.map(tile => (

                            <GridListTile
                                key={ tile.id }
                                className={ classes.gridTile }
                            >
                                <div
                                    onClick={ (event) => handleTileClick(event, tile) }
                                    className={ [
                                        classes[tile.mode],
                                        classes.paper,
                                        tile.select ? classes.selected : '',
                                        tile.subtitle ? classes.today : ''
                                    ].join(' ') }
                                >
                                    { tile.title }
                                </div>
                            </GridListTile>
                        ))
                    ) }
                </GridList>
                <Divider className={classes.line}/>
                <GridList
                    key="calendar-header"
                    cellHeight={ 40 }
                    cols={ 7 }
                    className={ classes.headerTile }
                >

                    { daysArr.map((day, index) => (
                        <GridListTile key={ index } className={ classes.paper }>
                            <Typography variant="h6" className={ clsx(classes.paper) }>
                                { day }
                            </Typography>
                        </GridListTile>
                    )) }
                </GridList>
                <Divider className={classes.line}/>

            </Box>
        </div>
    );

}

export default Calendar;
