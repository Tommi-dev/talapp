import React from 'react'

const Notification = ({message}) => {

  const style = {
    display: 'none'
  }

  if(message === '') {
    return(
      <div className='notification-container' style={style} ></div>
    )
  }

  return(
    <div className='notification-container' >
      <h2> {message} </h2>
    </div>
  )
}

export default Notification