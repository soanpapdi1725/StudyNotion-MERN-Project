import React from 'react'

const ConfirmationModal = ({modalData}) => {
  return (
    <div>
      <div>
        <p>
          {modalData.text1}
        </p>
        <p>
          {modalData.text2}
        </p>
        {/* Buttons */}
        <div>
          {/* IconButtons */}
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal
