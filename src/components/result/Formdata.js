import React from 'react'

const Formdata = (props) => {
  
  return (
    <div className='result-formadata-subcontainer' >

      {props.attributes.map((item, i) =>
        <div key={i} className='result-formdata-subcontainer-item' >
          <p> {props.titles[i]} </p>
          <div className='result-formdata-subcontainer-item-container' >
            <div className='result-formdata-subcontainer-item-subcontainer' >
              {props.attributes[i] === 'size' ? 
                <p> {props.data[item]} </p> : 
                <p> {props.data[item]}% </p>
              }
            </div>
          </div>
        </div>
      )}

    </div>
  )
  
}

export default Formdata