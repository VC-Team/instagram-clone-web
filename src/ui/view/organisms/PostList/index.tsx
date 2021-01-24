import React from 'react';

import Box from '@view/atoms/Box';

import Post from '@view/molecules/Post';

import classes from '@view/organisms/PostList/style.module.scss';

const PostList = () => {
    return (
        <Box className={classes['post-list']}>
            <Post />
            {/* <Post /> */}
            {/* <Post /> */}
        </Box>
    );
};

export default PostList;
