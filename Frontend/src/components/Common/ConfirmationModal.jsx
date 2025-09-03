import React from 'react'
import IconButton from './IconButton'

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
          <IconButton OnClickButton={modalData?.btn1Handler} text={modalData?.btn1Text}></IconButton>
          <IconButton OnClickButton={modalData?.btn2Handler} text={modalData?.btn2Text}></IconButton>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal
