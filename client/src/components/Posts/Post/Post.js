import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbAltUpIcon from '@material-ui/icons/ThumbAltUpIcon';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useStyles from './styles';

const Post = (post) => {
    const classes = useStyles();
    return(
        <Card className={ classes.card }>
            <CardMedia className={classes.media} image = { post.selectedFile } title = { post.title } />

        </Card>
    );
}

export default Post;