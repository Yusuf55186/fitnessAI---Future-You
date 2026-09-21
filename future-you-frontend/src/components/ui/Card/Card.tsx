import { type HTMLAttributes, type ReactNode } from "react"
interface Props extends HTMLAttributes<HTMLDivElement>{
    children?:ReactNode
}
export const Card = ({children,...rest}:Props) => {
    return (
        <div {...rest}>
            
            {children}
            
            
        </div>
    )
    
}