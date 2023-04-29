import React, { useEffect, useState } from 'react'

interface ACProps {
    searchParams: string;
    // 最多显示几条数据
    maxItems?: number;
}

export interface ItemProps {
    id: number;
    label: string;
}

const fakeData = [
    { id: 1, label: 'apple' },
    { id: 2, label: 'orange' },
    { id: 3, label: 'banana' },
]

// 需求，inputfocus的时候，显示列表，发起网络请求dispatch(action)，将数据缓存到本地，
// 什么时候清楚缓存,重新发送请求呢 ,
// 根据业务逻辑来确定什么时候更新数据
// 失去焦点隐藏列表
// 细化，聚焦时显示推荐搜索或者历史搜索，change时使用参数搜索
// onchange 时使用参数从本地缓存中筛选出符合条件的数据
// 失去焦点再次聚焦,仍然显示筛选后的数据,所以组件不卸载

import useResponse from '../../hooks/useResponse';

const AutoComplete: React.FC<ACProps> = (props) => {
    const { searchParams } = props;
    // 可以提取出一个hook，发送请求然后改变状态
    const listData = useResponse<ItemProps>('');
    let renderedList;
    const renderList = (listArr: ItemProps[]) => {
        return listArr.map((item) => {
            return (
                <li key={item.id}>
                    {item.label}
                </li>
            );
        });
    }
    renderedList = renderList(listData);
  return (
    <div>
        <ul>
            {renderedList}
        </ul>
    </div>
  )
}

export default AutoComplete;
https://github.com/fluffyBalll/xkl-UI.git