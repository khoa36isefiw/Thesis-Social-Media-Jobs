import React, { useState } from 'react';
import {
    Box,
    Divider,
    Typography,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
} from '@mui/material';

import { CustomizeBox } from '../../components/CustomizeBox/CustomizeBox';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';
import TagIcon from '@mui/icons-material/Tag';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import HubIcon from '@mui/icons-material/Hub';
import { useNavigate } from 'react-router-dom';
import { mobileScreen, theme } from '../../components/Theme/Theme';

function ManageMyNetwork() {
    return (
        <Box sx={{ backgroundColor: '#f3f2f0' }}>
            <CustomizeBox
                sx={{
                    padding: 0,
                    [mobileScreen]: {
                        borderRadius: 0,
                    },
                }}
            >
                <NestedList />
            </CustomizeBox>
        </Box>
    );
}

export default ManageMyNetwork;
const listNetworks = [
    {
        iconBtn: <PeopleAltIcon sx={{ fontSize: '24px' }} />,
        pageName: 'Connections',
        numberOf: '2',
        targetTo: '/my-network/connections',
    },
    {
        iconBtn: <PersonIcon sx={{ fontSize: '24px' }} />,
        pageName: 'Following & followers',
        numberOf: null,
        targetTo: '/my-network/people-follow/following',
    },
    {
        iconBtn: <ContactPageIcon sx={{ fontSize: '24px' }} />,
        pageName: 'Pages',
        numberOf: '8',
        targetTo: '#',
    },
    {
        iconBtn: <TagIcon sx={{ fontSize: '24px' }} />,
        pageName: 'Hashtags',
        numberOf: '2',
        targetTo: '#',
    },
];
function NestedList() {
    const [open, setOpen] = React.useState(true);
    const navigate = useNavigate();

    const handleClick = () => {
        setOpen(!open);
    };
    const navigateTo = (destination) => {
        navigate(destination);
    };

    return (
        <List
            sx={{
                width: '100%',
                bgcolor: 'background.paper',
                borderRadius: '12px',
                py: 0,
                [mobileScreen]: {
                    borderRadius: 0,
                },
            }}
        >
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <HubIcon />
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography sx={{ fontSize: '14px', color: '#404040', fontWeight: 'bold' }}>
                            Manage my network
                        </Typography>
                    }
                />
                {open ? (
                    <ExpandMore sx={{ fontSize: '24px' }} />
                ) : (
                    <ExpandLess sx={{ fontSize: '24px' }} />
                )}
            </ListItemButton>

            <Collapse in={!open} timeout="auto" unmountOnExit>
                <Divider />
                <List component="div" disablePadding>
                    {listNetworks.map((network, index) => (
                        <ListItemButton
                            sx={{ pl: 2 }}
                            key={index}
                            onClick={() => navigateTo(network.targetTo)}
                        >
                            <ListItemIcon>
                                {/* <StarBorder /> */}
                                {network.iconBtn}
                            </ListItemIcon>

                            <ListItemText
                                primary={
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        {/* manage name */}
                                        <Typography sx={{ fontSize: '14px' }}>
                                            {network.pageName}
                                        </Typography>
                                        {/* manage number */}
                                        <Typography sx={{ fontSize: '14px' }}>
                                            {network.numberOf}
                                        </Typography>
                                    </Box>
                                }
                            />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        </List>
    );
}
