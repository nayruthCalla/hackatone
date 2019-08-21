import React from 'react'

const Inputs = ({divInput, type, value, label, update, placeholder, classValue}) => {

  return (
    <div>
        <input type={type} value={value} onChange={update} className={classValue}  aria-label={label} placeholder={placeholder} required />
      
    </div>

      )
}

export default Inputs