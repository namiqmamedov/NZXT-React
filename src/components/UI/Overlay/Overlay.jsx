import React from 'react'
import '../../../styles/overlay.css'

const Overlay = ({ isOpen, onClose }) => {
  return (
    <>
        {isOpen && (
          <div className="overlay">
            <div className="overlay__background" onClick={onClose} />
          </div>
        )}
    </>
  )
}

export default Overlay