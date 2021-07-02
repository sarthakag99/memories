import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from "react-redux";
import Post from './Post/Post.js';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const { posts, isLoading } = useSelector((state) => state.posts); //this state.posts is from index.js of reducers from ending (posts:posts) part 
    const classes = useStyles();

    if (!posts.length && !isLoading) return 'No Posts';

    console.log(posts);
    return (
        isLoading ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    posts.map((post) => (
                        <Grid key={posts._id} item xs={12} sm={12} md={6} lg={3}>
                            <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    );

};
export default Posts;