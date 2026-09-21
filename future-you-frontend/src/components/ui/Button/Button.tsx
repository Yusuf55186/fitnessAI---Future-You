import { type ReactNode } from "react";
import "./Button.css";
type Props = {
    variant: "primary" | "secondary" | "ghost";
    children:ReactNode;
    onClick: => () ;
};
export const Button =({variant,children}:Props) =>{
    return (
        
        <button className={`button button--${variant}`}>{children}</button>
    
        
    )
}