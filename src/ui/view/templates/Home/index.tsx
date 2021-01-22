import React from 'react';

import Header from '@view/organisms/Header';
import PostList from '@view/organisms/PostList';

import classes from '@view/templates/Home/style.module.scss';

const Home = () => {
    return (
        <div className={classes['layout']}>
            <div className={classes['layout-header']}>
                <Header />
            </div>
            <div className={classes['layout-main']}>
                <PostList />
            </div>
        </div>
    );
};

export default Home;
