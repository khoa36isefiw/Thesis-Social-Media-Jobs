import React from 'react';
import { Box, Container } from '@mui/material';

export default function ShowVideoUploaded({ width, height, srcVideo }) {
    return (
        <React.Fragment>
            {srcVideo && <video width="100%" height={height} controls src={srcVideo} />}
        </React.Fragment>
    );
}
