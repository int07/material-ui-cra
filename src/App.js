import * as React from 'react';
import {Container, Typography, Box, Link} from '@mui/material';

import ProTip from './ProTip';


export default function App() {
    return (
        <Container maxWidth="sm" sx={{backgroundColor: "darkBlue"}}>
            <Box sx={{my: 4}}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Material UI Create React App example
                </Typography>
                <ProTip/>

            </Box>
        </Container>
    );
}
