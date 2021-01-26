import React from 'react'
import classnames from "classnames"
import classes from './style.module.scss';
export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string;
    disabled?: boolean;
    type?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    value?: string;
    id?: string;
    readonly?: boolean;
    size?: number;
    maxlength?: number;
    min?: string | number;
    max?: string | number;
    multiple?: boolean;
    pattern?: string;
    placeholder?: string;
    required?: boolean;
    onChange?: (e) => void;
    step?: string | number;
    autofocus?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
    const { className, type = "text", ...inputProps } = props;
    return (
        <input className={classnames(className)} {...inputProps} type={type} />
    )
}

export default Input
