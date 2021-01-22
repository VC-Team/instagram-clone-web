import React from 'react';

import Box from '@view/atoms/Box';
import Modal from '@view/atoms/Modal';

import PostHeader from '@view/molecules/Post/PostHeader';
import PostContent from '@view/molecules/Post/PostContent';
import PostFooter from '@view/molecules/Post/PostFooter';

import classes from '@view/molecules/Post/style.module.scss';

const Post = () => {
    return (
        <Box className={classes['post']} bordered>
            <PostHeader />
            <PostContent />
            <PostFooter />

            <Modal isOpen>
                <Box className={classes['post-modal']}>
                    <Box className={classes['post-modal__content']}>
                        <PostContent />
                    </Box>
                    <Box className={classes['post-modal__sidebar']}>
                        <PostHeader />
                        <PostFooter />
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default Post;
