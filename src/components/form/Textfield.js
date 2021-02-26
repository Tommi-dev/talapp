import React from 'react'

const Textfield = (props) => {
  return (
    <section className='textfield-container' >
      <label htmlFor={props.group} className='textfield-container-title' > <p> {props.title} </p> </label>
      <input
        type='text'
        id={props.group}
      />
    </section>
  )
}

export default Textfield