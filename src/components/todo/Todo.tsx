import React, { useState } from 'react'

// 写一个todo组件
const Todo = () => {
    const [value, setValue] = useState(false);
    const [childrenValue, setChildrenValue] = useState([
        { id: 1, name: 'apple', value: false },
        { id: 2, name: 'orange', value: false },
        { id: 3, name: 'banana', value: false }
    ]);
    const handleChildChange = (index: number) => {
        setChildrenValue(childrenValue.map((item, i) => {
            if (i === index) {
                item.value = !item.value;
            }
            return item;
        }))
        // 检查每一项的value,如果全为true,则返回true,如果不全为true,则返回false
        let result = childrenValue.find(item => item.value === false);
        setValue(result ? false : true);

    }
    const handleParentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(prevalue => !prevalue);
        // 将value赋值给childrenValue
        setChildrenValue(childrenValue.map((item, i) => {
            // 获得current value
            item.value = e.target.checked;
            return item;
        }))
    }
    return (
        <div>
            <div className='parent'>
                <label htmlFor="parent"

                >Check/Uncheck All</label>
                <input
                    type="checkbox"
                    id='parent'
                    checked={value}
                    onChange={handleParentChange}
                />
            </div>
            <div className='children'>
                {childrenValue.map((item, index) => {
                    return (
                        <label htmlFor={item.name} key={item.id}>{item.name}
                            <input
                                type="checkbox"
                                id={item.name}
                                checked={item.value}
                                onChange={() => handleChildChange(index)}
                            />
                        </label>

                    );
                })}
            </div>
        </div>
    )
}

export default Todo;
