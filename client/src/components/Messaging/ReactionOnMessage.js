import React, { useState } from 'react';
import { Avatar, Box, Menu, MenuList, MenuItem, ListItemText, Typography } from '@mui/material';
import MoreOption from '../../assets/images/option_reactions.png';

const moreActionsList = ['Forward', 'Delete', 'Edit'];

function ReactionOnMessage({
    listDataReactions,
    handCloseReactions,
    onReactionSelect,
    msgIndex,
    imgAndFileIndex = null,
    deleteMessage,
    deleteAble, // true ---> can delete and show button delete on menu
}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [showOptions, setShowOptions] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        // mở menu options khi click vào biểu tượng "more options"
        setShowOptions(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        // đóng menu options khi click vào một tùy chọn hoặc bất kỳ nơi nào khác trên màn hình
        setShowOptions(false);
        handCloseReactions();
    };

    const handleReactionSelection = (reaction) => {
        // đóng menu reactions sau khi đã chọn
        handCloseReactions();

        onReactionSelect(reaction, msgIndex);
    };

    const handleDelete = () => {
        deleteMessage(msgIndex, imgAndFileIndex);
        handleClose();
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
                        // onClick={handleClose} // Ẩn menu reactions khi click vào một reaction on message
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
                    // show  menu options khi click vào biểu tượng "more options"
                    onClick={handleClick}
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
                    // Hiển thị menu options khi showOptions là true
                    open={showOptions}
                    onClose={handleClose}
                    sx={{
                        // ml: -18,
                        position: 'absolute',
                        top: '-150px',
                        right: 0,
                    }}
                >
                    <MenuList sx={{ width: '150px', px: 0, py: 0 }}>
                        {moreActionsList.map((action, index) =>
                            // if deleteAble is false and action is not Delete --> Menu not render 'Delete' --> render the others
                            action !== 'Delete' || deleteAble ? ( // show all menu --> if it's true
                                <MenuItem
                                    key={index}
                                    onClick={action === 'Delete' ? handleDelete : handleClose}
                                >
                                    <ListItemText>
                                        <Typography sx={{ fontSize: '14px', color: '#191919' }}>
                                            {action}
                                        </Typography>
                                    </ListItemText>
                                </MenuItem>
                            ) : null,
                        )}
                    </MenuList>
                </Menu>
            </Box>
        </Box>
    );
}

export default ReactionOnMessage;
