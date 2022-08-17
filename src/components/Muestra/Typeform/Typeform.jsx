import { PopupButton } from '@typeform/embed-react'

const Typeform = ({ title, formID }) => {
  return (
    <PopupButton id={formID} inlineOnMobile={false} width={340} height={200} className='muestra_button' >
      {title}
    </PopupButton>
  )
}

export default Typeform