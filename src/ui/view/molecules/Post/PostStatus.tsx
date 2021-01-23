import React from 'react';

import Box from '@view/atoms/Box';
import Text from '@view/atoms/Text';

import classes from '@view/molecules/Post/style.module.scss';

const PostActions = () => {
    return (
        <Box className={classes['status']}>
            <Text fontWeight="bold">
                <a href="#">thaihoanganh</a>
            </Text>
            &nbsp;
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rem possimus nostrum
                doloremque doloribus! Veritatis dicta laudantium accusantium nam molestiae harum
                neque tempora reiciendis rerum. Autem, molestias velit! Sit, ratione.
            </Text>
        </Box>
    );
};

export default PostActions;
