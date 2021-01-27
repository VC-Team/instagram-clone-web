import ProfileBio from '@view/molecules/profile__item/profile__bio'
import ProfileImage from '@view/molecules/profile__item/profile__image'
import ProfileStatus from '@view/molecules/profile__item/profile__status'
import ProfileUserSetting from '@view/molecules/profile__item/profile__user-setting'
import React from 'react'
import classes from "./style.module.scss"
const ProfileHeader = () => {
    return (
        <div className={classes[ "profile" ]}>
            <ProfileImage />
            <ProfileUserSetting />
            <ProfileStatus />
            <ProfileBio />
        </div>
    )
}

export default ProfileHeader
