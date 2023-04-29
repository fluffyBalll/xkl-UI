import React, { ReactNode, useState } from 'react'
import classNames from 'classnames';
import MenuItem, { MenuItemProps } from './MenuItem'
import { createContext } from 'react';

type MenuMode = 'horizontal' | 'vertical'

interface MenuContextProps {
    selectedNum: number;
    onSlect?: (selectedIndex: number) => void;
}

export const MenuContext = createContext<MenuContextProps>({ selectedNum: 0 });



export interface MenuProps {
    items: MenuItemProps[];
    defaultIndex: number;// 默认高亮选项
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;// 用户自定义样式的接口
    onSelect?: (selectedIndex: number) => void;//高亮选中的选项
}

const Menu: React.FC<MenuProps> = (props) => {
    const {
        defaultIndex,
        className,
        mode,
        style,
        onSelect,//提供给用户添加额外点击行为的接口
        items,
    } = props;
    // 高亮点击的选项
    const [selectedItem, setSelectedItem] = useState(defaultIndex);
    // 类名
    const classes = classNames('xinkule-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode === 'horizontal',
    })

    const handleClick = (index: number) => {
        setSelectedItem(index);
        onSelect && onSelect(index);
    }

    let list: ReactNode[];
    list = items.map<ReactNode>(item => {
        const { index } = item;
        return (
            <MenuItem
                key={index}
                index={index}
                label={item.label}
                disabled = {item.disabled}
                className= {item.className}
            />
        );
    })

    const ContextValue: MenuContextProps = {
        selectedNum: selectedItem,
        onSlect: handleClick,// 父组件传递给后代的函数
    }

    return (
        <ul className={classes} style={style} data-testid = 'test-menu'>
            <MenuContext.Provider value={ContextValue}>
                {list}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    mode: 'vertical',
}

export default Menu