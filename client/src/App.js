import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';


import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import bricks from './images/bricks.png';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
       <Container maxwidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>Bricks</Typography>
                <img className={classes.image} src = {bricks} alt='bricks' height='60'/>

            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer}   justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId = {setCurrentId} />

                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId = {currentId} setCurrentId = {setCurrentId} />

                        </Grid>

                    </Grid>

                </Container>

            </Grow>

       </Container>
    );
}

export default App;

// passed as a prop to all children components the function setCurrentId and the data currentId so that a post can be updated.