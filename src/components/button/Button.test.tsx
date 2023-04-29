import { fireEvent, render, screen } from '@testing-library/react'
import Button, { ButtonSize } from './Button';
describe('test Button component', () => {
    // 测试tag 测试事件 测试类名
    test('test click event', () => {
        const handleClick = jest.fn();
        render(
            <Button
                onClick={handleClick}
                data={{ size: ButtonSize.Large }}
            >Test</Button>
        );
        const element = screen.getByText('Test');
        // 元素是否渲染
        expect(element).toBeInTheDocument();
        // 类名
        expect(element).toHaveClass('btn-lg');
        // 单击事件
        fireEvent.click(element);
        expect(handleClick).toHaveBeenCalledTimes(1);
    })

    // 测试disabled
    test('test disbled button',() => {
        const handleClick = jest.fn();
        render(
            <Button 
            onClick={handleClick}
            data={{disabled: true}}
            >disabled</Button>
        );
        // 获取元素
        const element = screen.getByText('disabled');
        // 模拟点击事件
        fireEvent.click(element);
        // 测试响应函数是否被调用
        expect(handleClick).toBeCalledTimes(0);
    })
});
// fireEvent 模拟某个元素上发生了某个事件