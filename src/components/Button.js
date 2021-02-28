import React from 'react'

const Button = (props) => {

  if (props.title === 'Alkuun') {
    return (
      <div className='button-container-2' >
        <button type={props.type} onClick={props.changeView} > {props.title} </button>
      </div>
    )
  }
  return (
    <div className='button-container' >
      <button type={props.type} > {props.title} </button>
    </div>
  )
}

export default Button