import React, { useState } from 'react';
import {
    Typography,
    Box,
    Avatar,
    IconButton,
    Divider,
    Menu,
    MenuList,
    MenuItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { blue, green } from '@mui/material/colors';
import { CustomizeBox } from '../components/CustomizeBox/CustomizeBox';
import { CustomizeTypography } from '../components/CustomizeTypography/CustomizeTypography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import UserAvatar from '../assets/images/avatar.jpeg';
import Post from '../components/MakePosts/Post';
import { posts } from '../components/MakePosts/Feed';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import LinkIcon from '@mui/icons-material/Link';
import { useNavigate } from 'react-router-dom';

const authenticatedActionsWithPost = [
    {
        icon: <TurnedInNotIcon sx={{ fontSize: '20px' }} />,
        actionText: 'Save',
        // navigateTo: '/user-profile',
    },
    {
        icon: <TurnedInIcon sx={{ fontSize: '20px' }} />,
        actionText: 'Unsave',
        // navigateTo: '/user/recent-activity/all',
    },
    {
        icon: <LinkIcon sx={{ fontSize: '20px' }} />,
        actionText: 'Copy link to post',
        // navigateTo: '/',
    },
];
const filterButton = ['Posts', 'Reactions'];

function ShowUserActivity() {
    const [activeButton, setActiveButton] = useState('Posts');

    const handleButtonClick = (label) => {
        setActiveButton(label);
    };

    return (
        <CustomizeBox>
            <CustomizeTypography fw={true} fs={'20px'}>
                All activity
            </CustomizeTypography>
            <CustomizeBox sx={{ py: 2, mb: 2, mt: 1 }}>
                {filterButton.map((action, index) => (
                    <FilterButton
                        key={index}
                        label={action}
                        active={activeButton === action}
                        onClick={() => handleButtonClick(action)}
                    />
                ))}
            </CustomizeBox>
            {activeButton === 'Reactions' ? (
                <ShowUserActivityReactions typeOfPost={'likes'} />
            ) : (
                // if user doesn't post anything will show this
                <Box
                    sx={
                        {
                            // display: 'flex',
                            // flexDirection: 'column',
                            // alignItems: 'center',
                            // justifyContent: 'center',
                        }
                    }
                >
                    {posts ? (
                        // content of user post
                        <Box>
                            <ShowUserActivityReactions typeOfPost={'posts'} />
                        </Box>
                    ) : (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <CustomizeTypography fw={true} fs={'24px'}>
                                Nothing to see for now
                            </CustomizeTypography>
                            <Box width={'50%'}>
                                <CustomizeTypography>
                                    Content you post, share, react to, or comment on will be
                                    displayed here.
                                </CustomizeTypography>
                            </Box>
                        </Box>
                    )}
                </Box>
            )}
        </CustomizeBox>
    );
}

export default ShowUserActivity;

const FilterButton = ({ label, active, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                textTransform: 'capitalize',
                fontSize: '14px',
                padding: '6px 16px',
                backgroundColor: active ? green[800] : '#fff',
                color: active ? 'white' : '#333',
                border: '1px solid #2e7d32',
                borderRadius: '24px',
                marginRight: '8px',
                cursor: 'pointer',
            }}
        >
            {label}
        </button>
    );
};

function ShowUserActivityReactions({ typeOfPost }) {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
            {posts.map((post) => (
                <Box sx={{ mb: 4 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 2,
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar
                                src={UserAvatar}
                                alt="User Avatar"
                                sx={{
                                    '&:hover': {
                                        cursor: 'pointer',
                                    },
                                }}
                            />
                            <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        '&:hover': {
                                            cursor: 'pointer',
                                            textDecoration: 'underline',
                                            color: blue[600],
                                        },
                                    }}
                                    onClick={() => navigate('/user-profile')}
                                >
                                    Huynh Dang Khoa
                                </Typography>{' '}
                                <Typography sx={{ fontSize: '14px', ml: '4px' }}>
                                    {typeOfPost} this
                                    {/* likes this */}
                                </Typography>
                            </Box>
                        </Box>
                        <IconButton onClick={handleClick}>
                            <MoreHorizIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            sx={{
                                marginLeft: -16,
                            }}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    // filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    boxShadow: '0 2px 4px #b3b3b3',
                                },
                            }}
                        >
                            <MenuList>
                                {authenticatedActionsWithPost.map((item, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={handleClose}
                                        sx={{
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                                transform: 'scale(1.05)',
                                            },
                                        }}
                                    >
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText>
                                            <Typography sx={{ fontSize: '13px' }}>
                                                {item.actionText}
                                            </Typography>
                                        </ListItemText>
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    </Box>

                    <Divider sx={{ mb: 2 }} />

                    <Post
                        key={post.id}
                        avatarSrc={post.avatarSrc}
                        displayName={post.displayName}
                        followers={post.followers}
                        time={post.time}
                        content={post.content}
                        numberOfReaction={post.numberOfReaction}
                        numberOfComment={post.numberOfComment}
                        imageUrl={post.imageUrl}
                    >
                        {/* Tách nội dung thành các đoạn văn */}
                        {Array.isArray(post.content) ? (
                            post.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                        ) : (
                            <Typography>{post.content}</Typography>
                        )}
                    </Post>
                </Box>
            ))}
        </Box>
    );
}
