import React from 'react'
import Radiobutton from './Radiobutton'

const Form = () => {
  return (
    <form className='form-container' >
      <h1>Kyselylomake</h1>

      <Radiobutton
        title='Kuinka motivoitunut tiimisi on?'
        group='motivation'
        buttons={['Ei lainkaan motivoitunut', 'Ei kovin motivoitunut', 'Melko motivoitunut', 'Varsin motivoitunut', 'Erittäin motivoitunut']}
      />

      <Radiobutton
        title='Kuinka hyvin henkilökemiat kohtaavat tiimissäsi?'
        group='chemistry'
        buttons={['Ei lainkaan', 'Ei kovin hyvin', 'Melko hyvin', 'Varsin hyvin', 'Erittäin hyvin']}
      />

    </form>
  )
}

export default Form