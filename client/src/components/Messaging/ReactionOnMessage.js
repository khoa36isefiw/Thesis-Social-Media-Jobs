import React, { useState } from 'react';
import { Avatar, Box, Menu, MenuList, MenuItem, ListItemText, Typography } from '@mui/material';
import Liked from '../../assets/images/like_reactions.png';
import Love from '../../assets/images/heart_reactions.png';
import Laugh from '../../assets/images/laughing_reactions.png';
import Reply from '../../assets/images/left_reactions.png';
import MoreOption from '../../assets/images/option_reactions.png';

// const reactionsOnMessaging = [
//     { reactionsImage: Liked, reactionsName: 'Liked a Message' },
//     { reactionsImage: Love, reactionsName: 'Loved a Message' },
//     { reactionsImage: Laugh, reactionsName: 'Laugh a Message' },
//     { reactionsImage: Reply, reactionsName: 'Reply a Message' },
// ];

const moreActionsList = ['Forward', 'Delete', 'Edit'];

function ReactionOnMessage({ listDataReactions, handCloseReactions, onReactionSelect, msgIndex }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [showOptions, setShowOptions] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setShowOptions(true); // Mở menu options khi click vào biểu tượng "more options"
    };

    const handleClose = () => {
        setAnchorEl(null);
        setShowOptions(false); // Đóng menu options khi click vào một tùy chọn hoặc bất kỳ nơi nào khác trên màn hình
        handCloseReactions(); // Đóng menu reactions nếu cần
    };

    const handleReactionSelection = (reaction) => {
        handCloseReactions(); // Đóng menu phản ứng sau khi đã chọn
        onReactionSelect(reaction, msgIndex); // Truyền thông tin biểu tượng phản ứng đã chọn lên thành phần cha
    };

    return (
        <Box
            sx={{
                height: '30px',
                width: '150px',
                backgroundColor: '#fff',
                border: '1px solid #d9d9d9',
                borderRadius: '8px',
                p: '4px',
                mt: -4,
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: '4px',
                }}
            >
                {listDataReactions.map((reaction, index) => (
                    <Box
                        key={index}
                        sx={{
                            '&:hover': {
                                cursor: 'pointer',
                                transform: 'scale(1.25)',
                            },
                        }}
                        // onClick={handleClose} // Ẩn menu reactions khi click vào một phản ứng
                        onClick={() => handleReactionSelection(reaction)}
                    >
                        <Avatar
                            src={reaction.reactionsImage}
                            sx={{
                                height: '20px',
                                width: '20px',
                                borderRadius: '0',
                                zIndex: 2,
                            }}
                            alt={reaction.reactionsName}
                        />
                    </Box>
                ))}
                <Box
                    sx={{
                        '&:hover': {
                            cursor: 'pointer',
                            transform: 'scale(1.25)',
                        },
                    }}
                    onClick={handleClick} // Hiển thị menu options khi click vào biểu tượng "more options"
                >
                    <Avatar
                        src={MoreOption}
                        sx={{
                            height: '20px',
                            width: '20px',
                            borderRadius: '0',
                            zIndex: 2,
                        }}
                        alt="More Options"
                    />
                </Box>
            </Box>

            <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
                <Menu
                    anchorEl={anchorEl}
                    open={showOptions} // Hiển thị menu options khi showOptions là true
                    onClose={handleClose}
                    sx={{
                        // ml: -18,
                        position: 'absolute',
                        top: '-150px',
                        right: 0,
                    }}
                >
                    <MenuList sx={{ width: '150px', px: 0, py: 0 }}>
                        {moreActionsList.map((action, index) => (
                            <MenuItem key={index} onClick={handleClose}>
                                <ListItemText>
                                    <Typography sx={{ fontSize: '14px', color: '#191919' }}>
                                        {action}
                                    </Typography>
                                </ListItemText>
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </Box>
        </Box>
    );
}

export default ReactionOnMessage;
