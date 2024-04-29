import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography, Button } from '@mui/material';
import { TabPanel } from '../../TabPanel/TabPanel';
import { CustomizeTypography } from '../../CustomizeTypography/CustomizeTypography';
import { mobileScreen } from '../../Theme/Theme';
import CheckIcon from '@mui/icons-material/Check';
import ShowUserInterestCompaniesAndSchools from '../../ShowUserInterestCompaniesAndSchools/ShowUserInterestCompaniesAndSchools';
import { companiesData, schoolData } from '../../CompaniesIsFollowing/data';

function UserInterest() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                minHeight: '25px',
                width: '100%',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                my: 2,
                py: 1,
                [mobileScreen]: {
                    borderRadius: 0,
                },
            }}
        >
            <CustomizeTypography fs="20px" fw={true} sx={{ mt: 2, px: 3 }}>
                Interests
            </CustomizeTypography>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Tabs Interest"
                sx={{ borderBottom: '1px solid #333', p: 0 }}
            >
                <Tab
                    sx={{
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        },
                    }}
                    label={
                        <Typography sx={{ fontSize: '14px', textTransform: 'capitalize' }}>
                            Companies
                        </Typography>
                    }
                />
                <Tab
                    sx={{
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        },
                    }}
                    label={
                        <Typography sx={{ fontSize: '14px', textTransform: 'capitalize' }}>
                            Schools
                        </Typography>
                    }
                />
            </Tabs>
            <TabPanel value={value} index={0}>
                {/* Tab 1 Content */}
                <ShowUserInterestCompaniesAndSchools listData={companiesData} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ShowUserInterestCompaniesAndSchools listData={schoolData} />
            </TabPanel>
        </Box>
    );
}

export default UserInterest;
