// open detail list of reactions in each post
import React, { useState } from 'react';
import { Box, IconButton, Tabs, Tab, Typography, Avatar, Divider } from '@mui/material';
import { ipadProScreen, mobileScreen, tabletScreen } from '../Theme/Theme';
import CloseIcon from '@mui/icons-material/Close';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import Liked from '../../assets/images/like.png';
import Love from '../../assets/images/love.png';
import Laugh from '../../assets/images/laughing.png';
import UserImage from '../../assets/images/avatar.jpeg';
import { TabPanel } from '../TabPanel/TabPanel';
import ShowUserInterestCompaniesAndSchools from '../ShowUserInterestCompaniesAndSchools/ShowUserInterestCompaniesAndSchools';
import { companiesData, schoolData } from '../CompaniesIsFollowing/data';
function ReactionsDetailList({ onCloseReactionsListModal }) {
    const reactionsList = [
        { reactionImage: Liked, reactionText: 'Liked', numberOfReaction: '123' },
        { reactionImage: Love, reactionText: 'Loved', numberOfReaction: '345' },
        { reactionImage: Laugh, reactionText: 'Laughed', numberOfReaction: '101' },
    ];
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box
            sx={{
                position: 'relative',
                backgroundColor: 'white',
                maxWidth: '600px',
                height: '600px',
                margin: 'auto',
                mt: '64px',
                borderRadius: '12px',
                boxShadow: '0 4px 4px #333',
                //  close icon doesn't overflow
                // overflow: 'hidden',
                [ipadProScreen]: {
                    width: '70%',
                },
                [tabletScreen]: {
                    width: '90%',
                },
                [mobileScreen]: {
                    borderRadius: 0,
                    width: '100%',
                    height: 'auto',
                },
            }}
        >
            <Box sx={{}}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 1,
                    }}
                >
                    <CustomizeTypography fs={'20px'} fw={true} sx={{ mx: 2, flexGrow: 2 }}>
                        Reactions
                    </CustomizeTypography>
                    <IconButton
                        disableFocusRipple
                        sx={{
                            mx: '2px',
                            '&:hover': {
                                backgroundColor: '#d9d9d9',
                            },
                        }}
                        onClick={onCloseReactionsListModal}
                    >
                        <CloseIcon sx={{ fontSize: '28px' }} />
                    </IconButton>
                </Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    sx={{
                        borderBottom: '1px solid #333',
                        p: 0,
                        '.MuiTabs-indicator': {
                            height: '4px',
                        },
                    }}
                >
                    <Tab
                        sx={{
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                            },
                        }}
                        label={
                            <Typography sx={{ fontSize: '14px', textTransform: 'capitalize' }}>
                                All <span>123</span>
                            </Typography>
                        }
                    />
                    {reactionsList.map((reaction, index) => (
                        <Tab
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                },
                            }}
                            label={
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box
                                        component="img"
                                        src={reaction.reactionImage}
                                        alt={reaction.reactionText}
                                        sx={{ height: '24px', width: '24px' }}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'capitalize',
                                            ml: '4px',
                                        }}
                                    >
                                        {/*number of reactions in each action*/}
                                        {reaction.numberOfReaction}
                                    </Typography>
                                </Box>
                            }
                        />
                    ))}
                </Tabs>
            </Box>
            {/* list user for each reaction */}
            <Box sx={{ overflow: 'scroll', px: 4, height: '480px' }}>
                <TabPanel value={value} index={0}>
                    {/* Tab 1 Content */}
                    <ListUsersReactionDetail />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ShowUserInterestCompaniesAndSchools listData={companiesData} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ShowUserInterestCompaniesAndSchools listData={schoolData} />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <ListUsersReactionDetail />
                </TabPanel>
            </Box>
        </Box>
    );
}

export default ReactionsDetailList;

const ListUsersReactionDetail = () => {
    const listAllUsersReaction = [
        {
            userReactionIcon: Liked,
            userNameReacted: 'Luna Kei',
            userReactedImage: UserImage,
            userReactedPosition: 'Front-End Developer',
        },
        {
            userReactionIcon: Laugh,
            userNameReacted: 'Harris',
            userReactedImage:
                'https://builtin.com/sites/www.builtin.com/files/styles/og/public/2024-03/Blockchain%20Technology.jpg',
            userReactedPosition: 'Blockchain Developer',
        },
        {
            userReactionIcon: Love,
            userNameReacted: 'Luan Phan',
            userReactedImage:
                'https://verpex.com/assets/uploads/images/blog/How-to-become-a-Backend-Developer.jpg?v=1665484477',
            userReactedPosition: 'Back-End Developer',
        },
        {
            userReactionIcon: Laugh,
            userNameReacted: 'Thoai Huynh',
            userReactedImage:
                'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png',
            userReactedPosition: 'Fullstack Developer',
        },
    ];
    return (
        <React.Fragment>
            {listAllUsersReaction.map((user, index) => (
                <>
                    <Box sx={{ display: 'flex', alignItems: 'center', py: 1, cursor: 'pointer' }}>
                        {/* <Avatar src={UserImage} sx={{ height: '64px', width: '64px' }} /> */}
                        <Box
                            sx={{
                                height: '56px',
                                width: '56px',
                                position: 'relative',

                                // [mobileScreen]: {
                                //     height: '50px',
                                //     width: '50px',
                                // },
                                // [tabletScreen]: {
                                //     height: '60px',
                                //     width: '60px',
                                // },
                                // [ipadProScreen]: {
                                //     height: '70px',
                                //     width: '70px',
                                // },
                            }}
                        >
                            <Avatar
                                src={user.userReactedImage}
                                alt={'UserImage'}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    zIndex: 2,
                                    '&:hover': {
                                        cursor: 'pointer',
                                    },
                                    objectFit: 'cover',
                                }}
                            />
                            <Box
                                component={'img'}
                                src={user.userReactionIcon}
                                sx={{
                                    position: 'absolute',
                                    height: '20px',
                                    width: '20px',
                                    backgroundColor: 'green',
                                    right: 0,
                                    bottom: 0,
                                    borderRadius: '50%',
                                    border: '2px solid white',
                                    zIndex: 3,
                                }}
                            />
                        </Box>
                        <Box sx={{ ml: 1 }}>
                            <CustomizeTypography fw={true}>
                                {user.userNameReacted}
                            </CustomizeTypography>
                            <CustomizeTypography fs="13px">
                                {user.userReactedPosition}
                            </CustomizeTypography>
                        </Box>
                    </Box>
                    {/* don't show divider for the last user */}
                    {index !== listAllUsersReaction.length - 1 && <Divider />}
                </>
            ))}
        </React.Fragment>
    );
};
