import React from 'react';
import { Box } from '@mui/material';

export default function ShowVideoUploaded({ width, height, srcVideo }) {
    return <Box>{srcVideo && <video width="100%" height={height} controls src={srcVideo} />}</Box>;
}
