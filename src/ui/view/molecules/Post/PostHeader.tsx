import React from 'react';

import Avatar from '@view/atoms/Avatar';
import Box from '@view/atoms/Box';
import Button from '@view/atoms/Button';
import Icon from '@view/atoms/Icon';
import Text from '@view/atoms/Text';

import classes from '@view/molecules/Post/style.module.scss';

const PostHeader = () => {
    return (
        <Box className={classes['post-header']} bordered>
            <Box className={classes['header-avatar']}>
                <Avatar src="https://instagram.fsgn5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/112331157_764326777646280_8349960478372336396_n.jpg?_nc_ht=instagram.fsgn5-1.fna.fbcdn.net&_nc_ohc=h5_ux_YvNv4AX_AVMAM&tp=1&oh=abdd12562bcd3e294a77deb17ff61372&oe=603457D9" />
            </Box>
            <Box className={classes['header-title']}>
                <a href="/#">
                    <Text fontWeight="bold">thaihoanganh</Text>
                </a>
            </Box>
            <Box className={classes['header-extra']}>
                <Button>
                    <Icon>
                        <circle
                            clipRule="evenodd"
                            cx="8"
                            cy="24"
                            fillRule="evenodd"
                            r="4.5"
                        ></circle>
                        <circle
                            clipRule="evenodd"
                            cx="24"
                            cy="24"
                            fillRule="evenodd"
                            r="4.5"
                        ></circle>
                        <circle
                            clipRule="evenodd"
                            cx="40"
                            cy="24"
                            fillRule="evenodd"
                            r="4.5"
                        ></circle>
                    </Icon>
                </Button>
            </Box>
        </Box>
    );
};

export default PostHeader;
