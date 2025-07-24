'use client'
import React from 'react'

const BodyWrapper = ({ children }) => {
  return (
    <div className="template-index index-demo1">
      <div className="page-wrapper">
        {children}
      </div>
    </div>
  )
}

export default BodyWrapper
