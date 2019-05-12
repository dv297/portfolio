import React from 'react'

import './Pill.css'

const Pill = ({ children, ...restProps }) => {
  return (
    <span className="pill" {...restProps}>
      {children}
    </span>
  )
}

export default Pill
