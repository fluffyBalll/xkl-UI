import React from 'react'
import MenuItem from './MenuItem';


interface SubMenuProps {
  label: React.ReactNode;
  index: number,
}

export const SubMenu: React.FC<SubMenuProps> = (props) => {
  // 在这个组件中进行嵌套调用，实现无限层级的组件
  // .close {display: none}
  // 
  return (
    <>
      <MenuItem />
      <ul className='sub-menu'>
        <MenuItem />
      </ul>
    </>
  )
}
