import React from 'react'
import Button from '../Button'

const Result = (props) => {

  const returnToTheFormPage = () => {
    props.setFormVisible(true)
  }

  console.log(props.teams[props.teams.length - 1])

  return(
    <div className='result-container' >
      <h1>Kyselylomakkeen tulokset</h1>

      <section className='result-formdata-container' >
        <div className='result-formdata-container-title' >
          <h2>Annetut arvot</h2>
        </div>

        <div className='result-formadata-subcontainer' >

          <div className='result-formdata-subcontainer-item' >
            <p>Tiimin koko</p>
            <div className='result-formdata-subcontainer-item-container' >
              <div className='result-formdata-subcontainer-item-subcontainer' >
                <p> {props.teams[props.teams.length - 1].size} </p>
              </div>
            </div>
          </div>

          <div className='result-formdata-subcontainer-item' >
            <p>Motivaatio</p>
            <div className='result-formdata-subcontainer-item-container' >
              <div className='result-formdata-subcontainer-item-subcontainer' >
                <p> {props.teams[props.teams.length - 1].motivation} </p>
              </div>
            </div>
          </div>

          <div className='result-formdata-subcontainer-item' >
            <p>Henkilökemiat</p>
            <div className='result-formdata-subcontainer-item-container' >
              <div className='result-formdata-subcontainer-item-subcontainer' >
                <p> {props.teams[props.teams.length - 1].chemistry} </p>
              </div>
            </div>
          </div>

          <div className='result-formdata-subcontainer-item' >
            <p>Tehokkuus</p>
            <div className='result-formdata-subcontainer-item-container' >
              <div className='result-formdata-subcontainer-item-subcontainer' >
                <p> {props.teams[props.teams.length - 1].performance} </p>
              </div>
            </div>
          </div>

          <div className='result-formdata-subcontainer-item' >
            <p>Täsmällisyys</p>
            <div className='result-formdata-subcontainer-item-container' >
              <div className='result-formdata-subcontainer-item-subcontainer' >
                <p> {props.teams[props.teams.length - 1].punctuality} </p>
              </div>
            </div>
          </div>

        </div>

      </section>

      <Button title='Alkuun' type='button' changeView={returnToTheFormPage} />
    </div>
  )
}

export default Result