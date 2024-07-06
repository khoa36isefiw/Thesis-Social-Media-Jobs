import React, { useState } from 'react';
import { Box } from '@mui/material';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { useDispatch } from 'react-redux';
import { getDay, getMonth, getYear } from '../../redux/ManageAccount/manageAccountAction';
import { useEffect } from 'react';

export const BirthDate = ({ isCreatedAccount }) => {
    const dispatch = useDispatch();
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const [selectedDay, setSelectedDay] = useState('Day');
    const [selectedMonth, setSelectedMonth] = useState('Month');
    const [selectedYear, setSelectedYear] = useState('Year');
    const [days, setDays] = useState([...Array(31).keys()].map((day) => day + 1));

    useEffect(() => {
        setSelectedDay('Day');
        setSelectedMonth('Month');
        setSelectedYear('Year');
    }, [isCreatedAccount]);

    const months = [
        { value: '01', label: 'January' },
        { value: '02', label: 'February' },
        { value: '03', label: 'March' },
        { value: '04', label: 'April' },
        { value: '05', label: 'May' },
        { value: '06', label: 'June' },
        { value: '07', label: 'July' },
        { value: '08', label: 'August' },
        { value: '09', label: 'September' },
        { value: '10', label: 'October' },
        { value: '11', label: 'November' },
        { value: '12', label: 'December' },
    ];

    const years = [];
    for (let year = currentYear; year >= currentYear - 100; year--) {
        years.push(year);
    }

    const calculateDays = (month, year) => {
        let daysInMonth;
        if (['01', '03', '05', '07', '08', '10', '12'].includes(month)) {
            daysInMonth = 31;
        } else if (['04', '06', '09', '11'].includes(month)) {
            daysInMonth = 30;
        } else if (month === '02') {
            // Check for leap year
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                daysInMonth = 29;
            } else {
                daysInMonth = 28;
            }
        } else {
            daysInMonth = 0;
        }
        const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
        setDays(daysArray);
    };

    const handleMonthChange = (event) => {
        const selectedMonth = event.target.value;
        setSelectedMonth(selectedMonth);
        if (selectedYear !== 'Year') {
            calculateDays(selectedMonth, selectedYear);
        }
        dispatch(getMonth(selectedMonth));
    };

    const handleYearChange = (event) => {
        const selectedYear = event.target.value;
        setSelectedYear(selectedYear);
        if (selectedMonth !== 'Month') {
            calculateDays(selectedMonth, selectedYear);
        }
        dispatch(getYear(selectedYear));
    };

    const handleDayChange = (event) => {
        const selectedDay = event.target.value;
        setSelectedDay(selectedDay);
        dispatch(getDay(selectedDay));
    };

    return (
        <Box sx={{ mt: 2 }}>
            <div style={{ marginBottom: 10 }}>
                <Box sx={{ display: 'flex' }}>
                    <select
                        value={selectedMonth}
                        onChange={handleMonthChange}
                        style={{
                            borderRadius: 5,
                            padding: '5px 10px',
                            border: '1px solid #ccc',
                            marginRight: 10,
                            width: '100%',
                        }}
                    >
                        <option value="Month">Month</option>
                        {months.map((month) => (
                            <option key={month.value} value={month.value}>
                                {month.label}
                            </option>
                        ))}
                    </select>
                    <select
                        value={selectedDay}
                        onChange={handleDayChange}
                        style={{
                            borderRadius: 5,
                            padding: '5px 10px',
                            border: '1px solid #ccc',
                            marginRight: 10,
                            width: '100%',
                        }}
                    >
                        <option value="Day">Day</option>
                        {days.map((day) => (
                            <option key={day} value={day}>
                                {day}
                            </option>
                        ))}
                    </select>

                    <select
                        value={selectedYear}
                        onChange={handleYearChange}
                        style={{
                            borderRadius: 5,
                            padding: '5px 10px',
                            border: '1px solid #ccc',
                            width: '100%',
                        }}
                    >
                        <option value="Year">Year</option>
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </Box>
            </div>
        </Box>
    );
};
