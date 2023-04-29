import React from 'react';
import classNames from 'classnames';


export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

export interface BaseBtnData {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  href?: string;

}

interface BtnPorops {
  data: BaseBtnData;
  children: React.ReactNode;
}

type NativeButtonProps = BtnPorops & React.ButtonHTMLAttributes<HTMLElement>
type AnchorProps = BtnPorops & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorProps>
const Button: React.FC<ButtonProps & { data: BaseBtnData }> = (props) => {
  const {
    data,
    children,
    ...restProps
  } = props;
  const {
    className,
    disabled,
    size,
    btnType,
    href,
  } = data;

  // btn btn-lg btn-primary
  const classes = classNames('btn', {
    [`btn-${size}`]: size,
    [`btn-${btnType}`]: btnType,
    'disabled': (btnType === ButtonType.Link && disabled),
  })

  if (btnType === ButtonType.Link) {
    return (
      <a
        {...restProps}
        className={classes}
        href={href}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        {...restProps}
        className={classes}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  data: {
    disabled: false,
    btnType: ButtonType.Default,
  }
}

export default Button;
