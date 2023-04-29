import { render,screen,fireEvent } from "@testing-library/react";

import Menu,{MenuProps} from "./Menu";
import { MenuItemProps } from "./MenuItem";

function getItem(
    label: React.ReactNode,
    index:number,
):MenuItemProps
{
    return {
        label,
        index,
    }
}

const items: MenuItemProps[] = [
   getItem('Hello',0),
   getItem('world',1),
];

const testProps: MenuProps = {
    defaultIndex:0,
    items: items,
    onSelect: jest.fn(),
}
const testHorProps: MenuProps = {
    defaultIndex:0,
    items: items,
    mode: 'horizontal',
}

describe('测试 Menu 组件',() => {
    test('测试是否正确渲染到界面',() => {
        render(<Menu {...testProps}/>);
        const element = screen.getByTestId('test-menu');
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('xinkule-menu');
    });

    test('测试是否有正确的类名',() => {

    })

    test('测试事件响应函数',() => {

    })
})