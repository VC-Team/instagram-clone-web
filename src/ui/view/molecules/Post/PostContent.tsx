import React from 'react';

import Avatar from '@view/atoms/Avatar';
import Box from '@view/atoms/Box';
import Button from '@view/atoms/Button';
import Icon from '@view/atoms/Icon';

import classes from '@view/molecules/Post/style.module.scss';

const PostContent = () => {
    return (
        <Box className={classes['post__content']}>
            <Box className={classes['post__content-scroll']}>
                <Box className={classes['content__item']}>
                    <img
                        src="https://instagram.fvca1-1.fna.fbcdn.net/v/t51.2885-15/e35/94387101_233255057788142_1521392946764886952_n.jpg?_nc_ht=instagram.fvca1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=S3fWkklSvOQAX-PFml2&tp=1&oh=3e5254ae3e6ca0b57769ba2368b75ca3&oe=60358B6F"
                        alt=""
                    />
                </Box>
                <Box className={classes['content__item']}>
                    <img
                        src="https://instagram.fvca1-1.fna.fbcdn.net/v/t51.2885-15/e35/94387101_233255057788142_1521392946764886952_n.jpg?_nc_ht=instagram.fvca1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=S3fWkklSvOQAX-PFml2&tp=1&oh=3e5254ae3e6ca0b57769ba2368b75ca3&oe=60358B6F"
                        alt=""
                    />
                </Box>
            </Box>
            <Box className={classes['content__overlay']}></Box>
        </Box>
    );
};

export default PostContent;
