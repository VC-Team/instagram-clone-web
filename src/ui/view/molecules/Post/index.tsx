import React from 'react';

import Box from '@view/atoms/Box';
import Modal from '@view/atoms/Modal';

import PostHeader from '@view/molecules/Post/PostHeader';
import PostContent from '@view/molecules/Post/PostContent';
import PostActions from '@view/molecules/Post/PostActions';
import PostCountHeart from '@view/molecules/Post/PostCountHeart';
import PostStatus from '@view/molecules/Post/PostStatus';
import PostCountComment from '@view/molecules/Post/PostCountComment';
import PostComment from '@view/molecules/Post/PostComment';
import PostAddComment from '@view/molecules/Post/PostAddComment';

import classes from '@view/molecules/Post/style.module.scss';

const Post = () => {
    return (
        <Box className={classes['post']} bordered>
            <PostHeader />
            <PostContent />
            <Box className={classes['post-footer']}>
                <PostActions />
                <PostCountHeart />
                <PostStatus />
                <PostCountComment />
                <PostComment />
                <PostAddComment />
            </Box>

            <Modal isOpen>
                <Box className={classes['post-modal']}>
                    <Box className={classes['post-modal-content']}>
                        <PostContent />
                    </Box>
                    <Box className={classes['post-modal-sidebar']}>
                        <PostHeader />
                        <Box style={{ flexGrow: 1 }}>
                            <Box>
                                <PostStatus />
                                <PostComment />
                            </Box>
                        </Box>
                        <PostActions />
                        <PostCountHeart />
                        <PostAddComment />
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default Post;
