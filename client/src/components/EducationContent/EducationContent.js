import React, { useState } from 'react';
import { Box, styled, Typography, TextField } from '@mui/material';

import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { TextFieldConstant } from '../EditInformationForm/EditInformationForm';
const CustomizeBoxForm = styled(Box)(({ spacingInTop }) => ({
    marginTop: spacingInTop || '8px',
}));

function EducationContent() {
    return (
        <Box>
            <CustomizeBoxForm>
                {/* need get API all University to show when user searchs on this textfield */}
                <TextFieldConstant label={'School'} isRequired={true} />

                <TextFieldConstant label={'Degree'} />
                <TextFieldConstant label={'Field of Study'} />
            </CustomizeBoxForm>

            {/* Start Date at School includes: month and year */}
            <StudyDate timeStudy={'Start date'} />
            {/* End Date at School --> graduated */}
            <StudyDate timeStudy={'End date'} />

            <Box sx={{ mt: 2 }}>
                <TextFieldConstant label={'Grade'} />
            </Box>

            {/* chỉnh lại theo cái text field */}
            <TextFieldConstant
                label={'Description '}
                maxHeight={'80px'}
                mRows={true}
                atLeast={2}
                suggestText={'Write your description here...'}
            />
            {/* <TextField
                fullWidth
                placeholder="MultiLine with rows: 2 and rowsMax: 4MultiLine with rows: 2 and rowsMax: 4MultiLine with rows: 2 and rowsMax: 4MultiLine with rows: 2 and rowsMax: 4MultiLine with rows: 2 and rowsMax: 4MultiLine with rows: 2 and rowsMax: 4MultiLine with rows: 2 and rowsMax: 4MultiLine with rows: 2 and rowsMax: 4"
                multiline
                rows={2}
                maxRows={4}
            /> */}

            {/* Skills and  Media??? --> can cai nay khong? */}
        </Box>
    );
}

export default EducationContent;

export const StudyDate = ({ timeStudy }) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const [selectedMonth, setSelectedMonth] = useState('Month');
    const [selectedYear, setSelectedYear] = useState('Year');

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

    const handleMonthChange = (event) => {
        const selectedMonth = event.target.value;
        setSelectedMonth(selectedMonth);
    };

    const handleYearChange = (event) => {
        const selectedYear = event.target.value;
        setSelectedYear(selectedYear);
    };

    return (
        <Box sx={{ mt: 2 }}>
            <div style={{ marginBottom: 10 }}>
                <CustomizeTypography sx={{ color: '#404040', marginRight: 10 }} fs="14px">
                    {/* Start date: */}
                    {timeStudy}
                </CustomizeTypography>
                {/* get month from dropdown */}
                <Box sx={{ display: 'flex' }}>
                    <select
                        value={selectedMonth}
                        onChange={handleMonthChange}
                        style={{
                            borderRadius: 5,
                            padding: '5px 10px',
                            // backgroundColor: '#FAFAFA',
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

                    {/* get year from dropdown */}
                    <select
                        value={selectedYear}
                        onChange={handleYearChange}
                        style={{
                            borderRadius: 5,
                            padding: '5px 10px',
                            // backgroundColor: '#FAFAFA',
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
