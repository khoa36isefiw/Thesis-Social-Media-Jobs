import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { CustomizeTypography } from '../../CustomizeTypography/CustomizeTypography';
import { mobileScreen } from '../../Theme/Theme';

export default function AboutUser() {
    const textStr =
        'As a backend intern, I aim to improve skills such as designing solutions for software features, writing high-quality code to implement software features or fi bugs, as well as performing unit testing';
    console.log('length of String: ', textStr.length);
    return (
        <Box
            sx={{
                minHeight: '50px',
                width: '100%',
                borderRadius: '12px',
                border: '1px solid #d9d9d9',
                backgroundColor: '#fff',
                p: 3,
                mt: 2,
                mb: 2,
                [mobileScreen]: {
                    borderRadius: 0,
                },
            }}
        >
            <CustomizeTypography fs="20px" fw={true} sx={{ [mobileScreen]: { mb: 1 } }}>
                About
            </CustomizeTypography>
            {/* <CustomizeTypography fs={'14px'} sx={{ textAlign: 'justify' }}>
                As a backend intern, I aim to improve skills such as designing solutions for
                software features, writing high-quality code to implement software features or fix
                bugs, as well as performing unit testing. Through these efforts, I intend to acquire
                specialized knowledge that can be applied to the company's corresponding business
                needs, thereby assisting the company in future projects. My long-term goal is to
                advance to the role of Backend Developer within three years and, further down the
                road, to become a Fullstack Developer.
            </CustomizeTypography> */}
            <TruncateText
                text="As a backend intern, I aim to improve skills such as designing solutions for
                software features, writing high-quality code to implement software features or fix
                bugs, as well as performing unit testing. Through these efforts, I intend to acquire
                specialized knowledge that can be applied to the company's corresponding business
                needs, thereby assisting the company in future projects. My long-term goal is to
                advance to the role of Backend Developer within three years and, further down the
                road, to become a Fullstack Developer."
                maxLines={4}
                maxLength={190}
            />
        </Box>
    );
}

function TruncateText({ text, maxLines, maxLength }) {
    const [isShowMore, setIsShowMore] = useState(false);
    const truncateText = (text, maxLines, maxLength) => {
        const words = text.split(' ');
        let truncatedText = '';
        let lineCount = 0;
        let maxStringLength = 0;
        // maxLength for mobile and other device
        if (window.innerWidth < 739) {
            // for mobile device
            maxStringLength = isShowMore ? text.length : maxLength;
        } else {
            // for other devices
            maxStringLength = text.length;
        }

        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            if (lineCount < maxLines) {
                if (truncatedText.length + word.length <= maxStringLength) {
                    // Điều chỉnh độ dài tối đa của văn bản
                    truncatedText += word + ' ';
                } else {
                    truncatedText += '...';
                    break;
                }
                if (word.includes('\n')) {
                    lineCount++;
                }
            } else {
                truncatedText += '...';
                break;
            }
        }
        return truncatedText;
    };

    const handleShowMore = () => {
        setIsShowMore(!isShowMore);
    };
    return (
        <Box>
            <CustomizeTypography sx={{ textAlign: 'justify', fontSize: '14px' }}>
                {truncateText(text, maxLines, maxLength)}
            </CustomizeTypography>
            {!isShowMore ? (
                <Box
                    sx={{
                        display: 'none',
                        [mobileScreen]: {
                            display: 'block',
                        },
                    }}
                >
                    <Button
                        sx={{ textTransform: 'capitalize', fontSize: '14px', color: 'gray' }}
                        onClick={handleShowMore}
                    >
                        See more
                    </Button>
                </Box>
            ) : null}
        </Box>
    );
}
