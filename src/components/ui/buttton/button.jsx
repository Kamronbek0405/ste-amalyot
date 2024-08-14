import React from 'react'

export const Button = ({
    children,
    type,
    id,
    startIcon,
    className,
    onClick,
    endIcon, }) => {
    return (
        <>
            <button onClick={onClick} className={className} id={id} type={type} >
                {startIcon ? <span>{startIcon}</span> : ""}
                <span>{children}</span>
                {endIcon ? <span>{endIcon}</span> : ""}
            </button>
        </>
    )
}
