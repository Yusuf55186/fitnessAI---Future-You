import "./Button.css";
import { type ReactNode,type ButtonHTMLAttributes} from "react";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary" | "ghost";
    children:ReactNode;
    
};
export const Button =({variant,children,...rest}:Props) =>{
    return (
        
        <button className={`button button--${variant}`} {...rest}>{children} </button>
    
        
    )
}