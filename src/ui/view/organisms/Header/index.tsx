import React, { createRef, useState, useEffect } from 'react';

import Avatar from '@view/atoms/Avatar';
import Box from '@view/atoms/Box';
import Button from '@view/atoms/Button';

import Logo from '@view/molecules/Logo';
import TopSearch from '@view/molecules/TopSearch';
import TopNavigation from '@view/molecules/TopNavigation';
import ProfileCard from '@view/molecules/ProfileCard';

import classes from './style.module.scss';

const Header = () => {
    const searchFormRef: any = createRef();
    const searchDataRef: any = createRef();
    const notificationRef: any = createRef();

    const [state, setState] = useState(() => {
        return {
            openNotification: false,
            notificationData: [1, 2, 3, 4, 5],
            searchValue: '',
            searchData: [1],
        };
    });

    useEffect(() => {
        // 
    }, [state.searchValue]);

    useEffect(() => {
        document.addEventListener('mousedown', onClickOutside);
        document.addEventListener('touchstart', onClickOutside);

        return () => {
            document.removeEventListener('mousedown', onClickOutside);
            document.removeEventListener('touchstart', onClickOutside);
        };
    });

    function onClickOutside(event: any) {
        if (
            state.searchData.length &&
            !searchDataRef.current.contains(event.target) &&
            !searchFormRef.current.contains(event.target)
        ) {
            setState((prevState) => {
                return { ...prevState, searchData: [] };
            });
        }

        if (state.openNotification && !notificationRef.current.contains(event.target)) {
            setState((prevState) => {
                return { ...prevState, openNotification: false };
            });
        }
    }

    return (
        <Box className={classes['header']}>
            <Box className={classes['header-logo']}>
                <Logo />
            </Box>
            <div className={classes['header-search']} ref={searchFormRef}>
                <TopSearch
                    onSearch={(value) =>
                        setState((prevState) => {
                            return { ...prevState, searchValue: value };
                        })
                    }
                />

                {state.searchData.length !== 0 && (
                    <div ref={searchDataRef}>
                        <Box className={classes['header-search-data']} bordered>
                            {state.searchData.map((value, index) => (
                                <ProfileCard
                                    key={index}
                                    icon={<Avatar src="https://picsum.photos/150/150" />}
                                    title="HoangAnh"
                                    subtitle="ThaiHoangAnh"
                                />
                            ))}
                        </Box>
                    </div>
                )}
            </div>
            <Box className={classes['header-navigation']}>
                <TopNavigation
                    openNotification={state.openNotification}
                    onOpenNotification={() =>
                        setState((prevState) => {
                            return { ...prevState, openNotification: true };
                        })
                    }
                />
            </Box>

            {state.openNotification && (
                <div ref={notificationRef}>
                    <Box className={classes['header-notification']} bordered>
                        {state.notificationData.map((value, index) => (
                            <ProfileCard
                                key={index}
                                icon={<Avatar src="https://picsum.photos/150/150" />}
                                title="HoangAnh"
                                subtitle="ThaiHoangAnh"
                                action={
                                    <React.Fragment>
                                        <Button variant="contained">Theo dõi</Button>
                                        <Button variant="outlined">Xóa</Button>
                                    </React.Fragment>
                                }
                            />
                        ))}
                    </Box>
                </div>
            )}
        </Box>
    );
};

export default Header;
