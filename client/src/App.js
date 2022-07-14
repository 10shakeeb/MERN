import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import bricks from './images/bricks.png';

const App = () => {
    return (
       <Container maxwidth='lg'>
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'>Bricks</Typography>
                <img src = {bricks} alt='bricks' height='60'/>

            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>

                        </Grid>
                        <Grid item xs={12} sm={7}>

                        </Grid>

                    </Grid>

                </Container>

            </Grow>

       </Container>
    );
}

export default App;