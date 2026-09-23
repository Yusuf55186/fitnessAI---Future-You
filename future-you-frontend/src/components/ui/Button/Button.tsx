import "./Button.css";
import { type ReactNode,type ButtonHTMLAttributes} from "react";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary" | "ghost";
    children:ReactNode;
    className?:string;
    
};
export const Button =({variant,children,className,...rest}:Props) =>{
    return (
        
        <button className={`button button--${variant} ${className}`} {...rest}>{children} </button>
    
        
    )
}