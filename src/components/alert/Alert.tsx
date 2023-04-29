import classNames from 'classnames';
import React from 'react'

interface AlertData {
    color?: string;
    className?: string;
    message?: string;
}

interface BaseAlertProps {
    data: AlertData;
    children?: React.ReactNode;
}

const Alert: React.FC<BaseAlertProps> = ({ data }) => {
    const {
        color,
        message,
    } = data;
    const style = {
        backgroundColor: color,
    }
    // 添加类名，在css文件中写样式
    const classes = classNames('alert')
    return (
        <div
            style={style}
            className={classes}
        >
            <button
                className='close-btn'
            >
                X
            </button>
            <h2>Alert</h2>
            {
                message
                    ? (<p>
                        {message}
                    </p>)
                    : ''
            }
        </div>
    )
}

Alert.defaultProps = {
    data: {}
}

export default Alert;
// 青 红 用红
// 青 紫 用青
// 紫 蓝 用紫
// 蓝白  用蓝
// 白红  红
// 青白  白
