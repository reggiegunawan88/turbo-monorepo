import React from 'react'

const Footer = () => {
  return (
    <div className="absolute bottom-0 py-3 h-10 bg-info-2 text-xs text-center text-white w-full">
      <span>©{new Date().getFullYear()} Alteacare All Rights Reserved </span>
    </div>
  )
}

export default Footer
