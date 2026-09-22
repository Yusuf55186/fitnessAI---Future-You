import { type HTMLAttributes, type ReactNode } from "react"

interface Props extends HTMLAttributes<HTMLDivElement>{
    children?:ReactNode
}
export const Card = ({children,className="",...rest}:Props) => {
    return (
        <div className={`rounded-lg p-4 bg-fy-surface border border-fy-border  ${className}`} {...rest}>
        
            {children}
            
            
        </div>
    )
    
}