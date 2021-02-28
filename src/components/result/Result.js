import React from 'react'
import Button from '../Button'
import Formdata from './Formdata'
import Linechart from './Linechart'

import { CgPerformance } from 'react-icons/cg'
import { BsFillPeopleFill } from 'react-icons/bs'
import { GiFist, GiRelationshipBounds} from 'react-icons/gi'
import { AiFillSchedule } from 'react-icons/ai'

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

      <section className='result-historicaldata-container' >
        <div className='result-historicaldata-container-title' >
          <h2>Historiallinen kehitys</h2>
        </div>

        <div className='result-historicaldata-subcontainer' >

          <div className='result-historicaldata-subcontainer-item' >
            <p>Tiimin koko</p>
            <BsFillPeopleFill className='result-historicaldata-subcontainer-item-icon' />
            <Linechart 
              data={props.teams}
              lines={
                [
                  {
                    'attribute': 'size',
                    'color': '#8c00ff'
                  },
                ]
              }
              width={320}
              height={200}            
            />
          </div>

          <div className='result-historicaldata-subcontainer-item' >
            <p>Motivaatio</p>
            <GiFist className='result-historicaldata-subcontainer-item-icon' />
            <Linechart 
              data={props.teams}
              lines={
                [
                  {
                    'attribute': 'motivation',
                    'color': '#82ca9d'
                  },
                ]
              }
              width={320}
              height={200}            
            />
          </div>

          <div className='result-historicaldata-subcontainer-item' >
            <p>Henkilökemiat</p>
            <GiRelationshipBounds className='result-historicaldata-subcontainer-item-icon' />
            <Linechart 
              data={props.teams}
              lines={
                [
                  {
                    'attribute': 'chemistry',
                    'color': '#9c8500'
                  },
                ]
              }
              width={320}
              height={200}            
            />
          </div>

          <div className='result-historicaldata-subcontainer-item' >
            <p>Tehokkuus</p>
            <CgPerformance className='result-historicaldata-subcontainer-item-icon' />
            <Linechart 
              data={props.teams}
              lines={
                [
                  {
                    'attribute': 'performance',
                    'color': '#9c0000'
                  },
                ]
              }
              width={320}
              height={200}            
            />
          </div>

          <div className='result-historicaldata-subcontainer-item' >
            <p>Täsmällisyys</p>
            <AiFillSchedule className='result-historicaldata-subcontainer-item-icon' />
            <Linechart 
              data={props.teams}
              lines={
                [
                  {
                    'attribute': 'punctuality',
                    'color': '#00379c'
                  },
                ]
              }
              width={320}
              height={200}            
            />
          </div>

        </div>
      </section>

      <Button title='Alkuun' type='button' changeView={returnToTheFormPage} />
    </div>
  )
}

export default Result