import React from 'react'

const Slider = (props) => {
  return (
    <section className='slider-container' >
      <label htmlFor={props.group} className='slider-container-title' > <p> {props.title} </p> </label>

      <input
        type='range'
        min={props.minValue}
        max={props.maxValue}
        id={props.group}
        value={props.changeableValue}
        onChange={({target}) => props.setValueToBeChanged(target.value)}
      />

      <div className='slider-subcontainer' >
        <label className='slider-subcontainer-label-1' > {props.minDescription} </label>
        <label className='slider-subcontainer-label-2' > {props.maxDescription} </label>
      </div>

    </section>
  )
}

export default Slider