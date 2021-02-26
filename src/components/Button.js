import React from 'react'

const Button = (props) => {
  return(
    <div className='button-container' >
      <button type={props.type} > {props.title} </button>
    </div>
  )
}

export default Button