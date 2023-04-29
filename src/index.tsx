import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Alert from './components/alert/Alert';
import Menu from './components/menu/Menu';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';



import { MenuProps } from './components/menu/Menu';
import { MenuItemProps } from './components/menu/MenuItem';
import Icon from './components/icon/Icon';
import Input from './components/Input/Input';
import Todo from './components/todo/Todo';
const itemsData: MenuItemProps[] = [
  { label: 'hello', index: 1, disabled: true, className: 'hello' },
  { label: 'world', index: 2 },
  { label: <a href="">World</a>, index: 3 },
]
const data: MenuProps = { defaultIndex: 0, items: itemsData }


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   {/* <Input/> */}
   <Todo/>
  </React.StrictMode>
);

reportWebVitals();

// 1156 146
// 彻底疯狂

