import React from 'react'
import Button from '../Button'
import Formdata from './Formdata'

const Result = (props) => {

  const returnToTheFormPage = () => {
    props.setFormVisible(true)
  }

  return (
    <div className='result-container' >
      <h1>Kyselylomakkeen tulokset</h1>

      <section className='result-formdata-container' >
        <div className='result-formdata-container-title' >
          <h2>Annetut arvot</h2>
        </div>
        <Formdata 
          titles={['Tiimin koko', 'Motivaatio', 'Henkilökemiat', 'Tehokkuus', 'Täsmällisyys']}
          attributes={['size', 'motivation', 'chemistry', 'performance', 'punctuality']}
          data={props.teams[props.teams.length - 1]}
        />
      </section>

      <Button title='Alkuun' type='button' changeView={returnToTheFormPage} />
    </div>
  )
}

export default Result