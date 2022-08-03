import React from 'react'
import { PopupButton } from '@typeform/embed-react'

const Typeform = ({formID, title}) => {
  return (
    <PopupButton id={formID} className='muestra_button'>
      {title}
    </PopupButton>
  )
}

export default Typeform