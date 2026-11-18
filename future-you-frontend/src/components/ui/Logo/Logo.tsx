import type { ComponentProps } from "react";

type LogoProps = ComponentProps<"span">;

export const Logo = ({ children, ...props }: LogoProps) => (
    <span {...props} className={`inline-flex items-center gap-fy-1 whitespace-nowrap font-fy-display text-fy-xl font-fy-bold leading-none ${props.className ?? ""}`}>
        <span className="tracking-tight text-fy-text">FUTURE</span>
        <span className="inline-flex -rotate-3">
            <span className="inline-flex -skew-x-12 rounded-fy-sm bg-fy-surface px-fy-3 py-fy-1">
                <span className="skew-x-12 text-fy-accent">
                 YOU 
                </span>
            </span>
        </span>
        {children}
    </span>
);