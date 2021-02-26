import React from 'react'

const Radiobutton = (props) => {
  return (
    <section className='radiobutton-container' >
      <label className='radiobutton-container-title' > <p> {props.title} </p> </label>

      {props.buttons.map((button, i) =>

        <div key={button} className='radiobutton-subcontainer' >
          <label className='radiobutton-subcontainer-container' >
            <input
              type='radio'
              name={props.group}
              value={i}
              onChange={({target}) => props.setValueToBeChanged(target.value)}
            />
            <span className='check' ></span>
            {button}
          </label>
        </div>

      )}

    </section>
  )
}

export default Radiobutton