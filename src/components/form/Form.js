import React from 'react'
import Radiobutton from './Radiobutton'
import Slider from './Slider'
import Textfield from './Textfield'
import Button from '../Button'

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

      <Slider
        title='Kuinka tehokas tiimisi on tehtävissään?'
        minValue='0'
        maxValue='100'
        group='performance'
        minDescription='Tehoton'
        maxDescription='Erittäin tehokas'
      />

      <Slider
        title='Kuinka usein tiimisi pitää kiinni sovituista aikatauluista?'
        minValue='0'
        maxValue='100'
        group='punctuality'
        minDescription='Ei koskaan'
        maxDescription='Aina'
      />

      <Textfield 
        title='Kuinka monesta työntekijästä tiimisi koostuu?'
        group='size'
      />

      <Button title='Lähetä' type='submit' />

    </form>
  )
}

export default Form