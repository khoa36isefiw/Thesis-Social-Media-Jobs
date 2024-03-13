import React from 'react';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box } from '@mui/material';

export default function VideoInput({ width, height }) {
    const inputRef = React.useRef();
    const [source, setSource] = React.useState();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setSource(url);
    };

    const handleChoose = (event) => {
        inputRef.current.click();
    };

    return (
        <Box>
            {source && (
                <video
                    className="VideoInput_video"
                    width="100%"
                    height={height}
                    controls
                    src={source}
                />
            )}
            <IconButton
                onClick={handleChoose}
                aria-label="upload video"
                disableTouchRipple
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                }}
            >
                <CloudUploadIcon fontSize="large" />
            </IconButton>
            <input
                ref={inputRef}
                type="file"
                onChange={handleFileChange}
                accept=".mov,.mp4"
                style={{ display: 'none' }} // Hide the input field
            />
        </Box>
    );
}
