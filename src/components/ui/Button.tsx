import type React from "react"
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, children, ...props}) => {
    return (
        <button className={`inline-flex items-center cursor-pointer justify-center rounded-md text-sm font-medium transition-colors ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button