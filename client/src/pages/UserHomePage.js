import React from 'react';
import { styled, Box, Paper, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import MakePosts from '../components/MakePosts/MakePosts';
import Post from '../components/MakePosts/Post';
import Feed from '../components/MakePosts/Feed';
import { mobileScreen } from '../components/Theme/Theme';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: `1px solid #d3d3d3`,
}));

function UserHomePage() {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                    <Item
                        sx={{
                            borderRadius: '12px',
                            mb: 2,
                            [mobileScreen]: {
                                borderRadius: 0,
                            },
                        }}
                    >
                        <MakePosts />
                    </Item>

                    {/* <Post /> */}
                    <Feed />
                </Grid>
            </Grid>
        </Box>
    );
}

export default UserHomePage;
