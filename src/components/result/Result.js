import React from 'react'
import Button from '../Button'

const Result = (props) => {

  const returnToTheFormPage = () => {
    props.setFormVisible(true)
  }

  return(
    <div className='result-container' >
      <h1>Kyselylomakkeen tulokset</h1>
      <Button title='Alkuun' type='button' changeView={returnToTheFormPage} />
    </div>
  )
}

export default Result