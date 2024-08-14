import React from 'react'

export const Input = ({ type, id, placeholder,  className, name }) => {
  return (
    <label>
      <input
        id={id}
        type={type}
        className={className}
        placeholder={placeholder}
        required
      />
    </label>
  )
}
