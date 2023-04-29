// tsx input component
import React,{InputHTMLAttributes,ReactElement} from 'react';

type InputSize = 'lg' | 'sm';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>,'size'> {
    disabled?: boolean;
    size?: InputSize;
    // 前缀
    prepand?: React.ReactNode;
    // 后缀
    append?: React.ReactNode;
}

const Input:React.FC<InputProps> = (props) => {
  return (
    <div>index</div>
  )
}

export default Input;

