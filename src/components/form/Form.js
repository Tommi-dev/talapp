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

      <section className='slider-container' >
        <label className='slider-container-title' > <p>Kuinka tehokas tiimisi on tehtävissään?</p> </label>

        <input 
          type='range'
          min='0'
          max='100'
        />

        <div className='slider-subcontainer' >
          <label className='slider-subcontainer-label-1' >Tehoton</label>
          <label className='slider-subcontainer-label-2' >Erittäin tehokas</label>
        </div>

      </section>


      <section className='slider-container' >
        <label className='slider-container-title' > <p>Kuinka usein tiimisi pitää kiinni sovituista aikatauluista?</p> </label>

        <input 
          type='range'
          min='0'
          max='100'
        />

        <div className='slider-subcontainer' >
          <label className='slider-subcontainer-label-1' >Ei koskaan</label>
          <label className='slider-subcontainer-label-2' >Aina</label>
        </div>

      </section>

    </form>
  )
}

export default Form