import React, { type ReactNode } from "react"

const Button = ({
    className,
    children,
    ...props
  }:{
    className?: string,
    children?: ReactNode,
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return(
    <button 
      className={`p-2 px-4 rounded-full ${className}`} 
      {...props}
    >
        {children}
    </button>
  )
}

export default Button;