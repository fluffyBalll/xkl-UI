import classNames from 'classnames';
import React, { useContext } from 'react'
import { MenuContext } from './Menu';
import { log } from 'console';

export interface MenuItemProps {
    label: React.ReactNode;
    index: number;
    className?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
    children?: MenuItemProps[];
}

const MenuItem: React.FC<MenuItemProps & React.LiHTMLAttributes<HTMLElement>> = (props) => {
    const { selectedNum, onSlect } = useContext(MenuContext);

    const {
        label,
        index,
        className,
        disabled,
        style,
        onClick,
        ...restProps
    } = props;

    const classes = classNames('menu-item', className, {
        'disabled': disabled,
        'active': index === selectedNum,
    })

    const handleClick = () => {
        if (onSlect && !disabled) {
            console.log(className);
            onSlect(index);
        }
    }



    return (
        <li
            className={classes}
            style={style}
            onClick={handleClick}
            {...restProps}>
            {label}
        </li>
    )
}

export default MenuItem;
