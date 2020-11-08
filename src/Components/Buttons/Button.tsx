import React from "react";
import "./button.scss";

interface ButtonProps {
  //ToDo: types of buttons can be one of the following: primary, icon-only, secondary-outline,
  type: string;
  label?: string;
  hasIcon?: boolean;
  iconName?: string;
  onClick: (...args: any[]) => any;
}

function Button(props: ButtonProps) {
  return (
    <button
      onClick={() => props.onClick()}
      className={`${props.type}-btn ${props.hasIcon ? "has-icon" : ""}`}
    >
      {props.label && <span>{props.label}</span>}
      {props.hasIcon && <span className={`furry-icon ${props.iconName}`}></span>}
    </button>
  );
}
Button.defaultProps = {
  type: "primary",
} as Partial<ButtonProps>;

export default Button;
