import React from 'react'

const Textfield = (props) => {

  const handleSizeChange = (event) => {
    console.log(event.target.value)
    props.setValueToBeChanged(event.target.value)
  }

  return (
    <section className='textfield-container' >
      <label htmlFor={props.group} className='textfield-container-title' > <p> {props.title} </p> </label>
      <input
        type='text'
        id={props.group}
        onChange={handleSizeChange}
      />
    </section>
  )
}

export default Textfield