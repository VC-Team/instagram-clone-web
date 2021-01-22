import React from 'react';
import classnames from 'classnames';

import classes from './style.module.scss';

export interface AvatarProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    alt?: string;
    className?: string;
    size?: 'large' | 'medium' | 'small';
    src?: string;
    spin?: boolean;
    style?: React.CSSProperties;
}

const Avatar: React.FC<AvatarProps> = (props) => {
    const { alt, className, size, src, style, ...avatarProps } = props;

    return (
        <button
            type="button"
            className={classnames(
                classes['avatar'],
                size !== 'medium' && classes[`avatar-${size}`],
                className
            )}
            style={style}
            {...avatarProps}
        >
            <img src={src} alt={alt} className={classes['avatar-image']} />
        </button>
    );
};

export default Avatar;
