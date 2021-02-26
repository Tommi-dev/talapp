import React from 'react'

const Textfield = (props) => {

  const handleSizeChange = (event) => {

    try {

      if(!((event.target.value).match(/(^\d*$)+/))){
        throw new Error('Vain positiiviset kokonaisluvut ovat sallittu')
      } 
      if(((event.target.value).match(/(^0+)/))){
        throw new Error('Tiimin koko ei voi olla 0')
      } 
      
      props.setValueToBeChanged(event.target.value)

    } catch(exception) {
      console.log(exception.name + ' : ' + exception.message)
      const newErrorMessage = {
        ...props.errorMessage,
        textfield: exception.message
      }
      props.setErrorMessage(newErrorMessage)
      setTimeout(() => {
        props.setErrorMessage({...props.errorMessage, textfield: ''})
      }, 3000)
    }
  }

  return (
    <section className='textfield-container' >
      <label htmlFor={props.group} className='textfield-container-title' > <p> {props.title} </p> </label>
      <input
        type='text'
        id={props.group}
        value={props.changeableValue}
        onChange={handleSizeChange}
      />
    </section>
  )
}

export default Textfield