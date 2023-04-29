import React from 'react'

import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import classNames from 'classnames';

// 事件,类名
// 需要实现什么功能
// 然后给样式
type ThemeProps = 'primary' | 'secondary' | 'scuccess' | 'info';
// 继承属性,添加自定义属性
interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps;
}

// 逻辑层渲染层分离
const Icon: React.FC<IconProps> = (props) => {
    const { theme, className, ...restProps } = props;
    const classes = classNames('xkl-icon', className, {
        [`icon-${theme}`]: theme
    });

    return (
            <FontAwesomeIcon
                className={classes}
                {...restProps}
            />
    )
}

export default Icon;

// 组件设计模式
// 高阶组件 HOC
// render props
// Compound components pattern 组合组件模式 无样式组件,改样式很方便,看情况使用
// context compound components pattern
// 自定义hool模式 Custome Hook 渲染层逻辑,业务逻辑分离 测试hooks很方便
// State Reducer Pattern
// Props getter Pattern

// 常见抓包工具
