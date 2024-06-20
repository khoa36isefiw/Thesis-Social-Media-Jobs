import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

function ImageOriginialSize({
    imageURL,
    maxImageHeight,
    maxImageWidth,
    customHeight,
    customWidth,
    handleFunction,
}) {
    const [originalWidth, setOriginalWidth] = useState(null);
    const [originalHeight, setOriginalHeight] = useState(null);
    useEffect(() => {
        const img = new Image();
        // img.src = imageURL && imageURL.url;
        img.src = imageURL ? imageURL : null;

        img.onload = () => {
            let newHeight = img.naturalHeight;
            let newWidth = img.naturalWidth;

            if (newHeight >= maxImageHeight) {
                newHeight = customHeight;
            }
            if (newWidth >= maxImageWidth) {
                newWidth = customWidth;
            }

            setOriginalWidth(newWidth);
            setOriginalHeight(newHeight);
        };
    });

    return (
        <Box
            component="img"
            src={imageURL}
            alt={'User Uploaded Image to Comment'}
            sx={{
                width: originalWidth,
                height: originalHeight,
                borderRadius: '12px',
                p: 1,
                objectFit: 'cover',
                '&:hover': {
                    cursor: 'pointer',
                },
            }}
            onClick={handleFunction}
        />
    );
}

export default ImageOriginialSize;
