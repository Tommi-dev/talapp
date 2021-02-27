import React, { useState } from 'react'
import Radiobutton from './Radiobutton'
import Slider from './Slider'
import Textfield from './Textfield'
import Button from '../Button'
import Notification from './Notification'
import teamService from '../../services/teams'

const Form = (props) => {
  const [motivation, setMotivation] = useState(null)
  const [chemistry, setChemistry] = useState(null)
  const [performance, setPerformance] = useState(0)
  const [punctuality, setPunctuality] = useState(0)
  const [size, setSize] = useState('')
  const [errorMessage, setErrorMessage] = useState({
    textfield: '',
    radiobutton: ''
  })

  const submitForm = async (event) => {
    event.preventDefault()

    const newObject = {
      ...props.teams,
      motivation: parseInt(motivation / 4 * 100),
      chemistry: parseInt(chemistry / 4 * 100),
      performance: parseInt(performance),
      punctuality: parseInt(punctuality),
      size: parseInt(size),
      date: new Date()
    }

    const returnedData = teamService.create(newObject)
    props.setTeams(props.teams.concat(returnedData))
    
    setMotivation(null)
    setChemistry(null)
    setPerformance(0)
    setPunctuality(0)
    setSize('')

  }

  console.log('motivation value: ', motivation)
  console.log('chemistry value: ', chemistry)
  console.log('performance value: ', performance)
  console.log('punctuality value: ', punctuality)
  console.log('size value: ', size)
  console.log('Error message: ', errorMessage)

  return (
    <form className='form-container' onSubmit={submitForm} >
      <h1>Kyselylomake</h1>

      <Radiobutton
        title='Kuinka motivoitunut tiimisi on?'
        group='motivation'
        buttons={['Ei lainkaan motivoitunut', 'Ei kovin motivoitunut', 'Melko motivoitunut', 'Varsin motivoitunut', 'Erittäin motivoitunut']}
        setValueToBeChanged={setMotivation}
      />

      <Radiobutton
        title='Kuinka hyvin henkilökemiat kohtaavat tiimissäsi?'
        group='chemistry'
        buttons={['Ei lainkaan', 'Ei kovin hyvin', 'Melko hyvin', 'Varsin hyvin', 'Erittäin hyvin']}
        setValueToBeChanged={setChemistry}
      />

      <Slider
        title='Kuinka tehokas tiimisi on tehtävissään?'
        minValue='0'
        maxValue='100'
        group='performance'
        minDescription='Tehoton'
        maxDescription='Erittäin tehokas'
        changeableValue={performance}
        setValueToBeChanged={setPerformance}
      />

      <Slider
        title='Kuinka usein tiimisi pitää kiinni sovituista aikatauluista?'
        minValue='0'
        maxValue='100'
        group='punctuality'
        minDescription='Ei koskaan'
        maxDescription='Aina'
        changeableValue={punctuality}
        setValueToBeChanged={setPunctuality}
      />

      <Textfield 
        title='Kuinka monesta työntekijästä tiimisi koostuu?'
        group='size'
        changeableValue={size}
        setValueToBeChanged={setSize}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />

      <Notification message={errorMessage.textfield} />

      <Button title='Lähetä' type='submit' />

    </form>
  )
}

export default Form