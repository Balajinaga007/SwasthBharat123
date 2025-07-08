
import React from 'react'

const Button = ({label,className,link,handleClick,disabled}) => {
  return (
    link?
    <a href={link||""}>
  <div
  onClick={handleClick}
  className={`flex items-center flex-col justify-center rounded-[23px]   text-16-scale md:text-[16px] ${className}`}>
  {label}
  </div>
   </a>:
   <button className={`rounded-[12px]   text-16-scale md:text-16-scale-lg  ${className}` }
   onClick={handleClick} disabled={disabled}>
   {label}
    </button>
  
  )
}

export default Button
