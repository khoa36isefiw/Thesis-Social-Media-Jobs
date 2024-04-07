import React from 'react';
import { CustomizeBox } from '../components/CustomizeBox/CustomizeBox';
import { Box, IconButton, Tab, Typography, Tabs, Divider } from '@mui/material';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { CustomizeTypography } from '../components/CustomizeTypography/CustomizeTypography';
import { backToPreviousPage } from '../components/BackToPreviousPage/BackToPreviousPage';
import { TabPanel } from '../components/TabPanel/TabPanel';
import CompaniesAndShoolsAreFollowing from '../components/CompaniesIsFollowing/CompaniesAndShoolsAreFollowing';
import { companiesData, schoolData } from '../components/CompaniesIsFollowing/data';

const interestsData = ['Companies', 'Schools'];
function UserInterestPage() {
    const [value, setValue] = React.useState(0);
    const [isActive, setIsActive] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setIsActive(!isActive);
    };
    return (
        <CustomizeBox sx={{ padding: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '12px 12px 0' }}>
                <IconButton onClick={backToPreviousPage}>
                    <KeyboardBackspaceOutlinedIcon sx={{ fontSize: '28px' }} />
                </IconButton>
                <CustomizeTypography fs="20px" fw={true} marginLeft={2}>
                    Interest
                </CustomizeTypography>
            </Box>
            {/* Tab Region */}
            <Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="Tabs Interest Details"
                    sx={{
                        borderBottom: '1px solid #e8e8e8',
                        px: '8px',
                        '.MuiTabs-indicator': {
                            backgroundColor: 'green',
                        },
                    }}
                >
                    {interestsData.map((tab, index) => (
                        <Tab
                            key={index}
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                },
                            }}
                            label={
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        textTransform: 'capitalize',
                                        color: index === value ? 'green' : 'black',
                                        fontWeight: index === value ? 'bold' : 'normal',
                                    }}
                                >
                                    {tab}
                                </Typography>
                            }
                        />
                    ))}
                </Tabs>
                <Box sx={{ px: 1 }}>
                    <TabPanel value={value} index={0}>
                        {/* Tab 1 Content */}
                        <CompaniesAndShoolsAreFollowing data={companiesData} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        {/* <FollowSchool /> */}
                        <CompaniesAndShoolsAreFollowing data={schoolData} />
                    </TabPanel>
                </Box>
            </Box>
        </CustomizeBox>
    );
}

export default UserInterestPage;
