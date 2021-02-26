import React from 'react'

const Form = () => {
  return(
    <form className='form-container' >
      <h1>Kyselylomake</h1>

      <section className='radiobutton-container' >
        <label className='radiobutton-container-title' > <p>Kuinka motivoitunut tiimisi on?</p> </label>

        <div className='radiobutton-subcontainer' >
          <label className='radiobutton-subcontainer-container' >
            <input 
              type='radio'
              name='motivation'
            />
            <span className='check' ></span>
            Ei lainkaan motivoitunut
          </label>
        </div>

        <div className='radiobutton-subcontainer' >
          <label className='radiobutton-subcontainer-container' >
            <input 
              type='radio'
              name='motivation'
            />
            <span className='check' ></span>
            Ei kovin motivoitunut
          </label>
        </div>

        <div className='radiobutton-subcontainer' >
          <label className='radiobutton-subcontainer-container' >
            <input 
              type='radio'
              name='motivation'
            />
            <span className='check' ></span>
            Melko motivoitunut
          </label>
        </div>

        <div className='radiobutton-subcontainer' >
          <label className='radiobutton-subcontainer-container' >
            <input 
              type='radio'
              name='motivation'
            />
            <span className='check' ></span>
            Varsin motivoitunut
          </label>
        </div>

        <div className='radiobutton-subcontainer' >
          <label className='radiobutton-subcontainer-container' >
            <input 
              type='radio'
              name='motivation'
            />
            <span className='check' ></span>
            Erittäin motivoitunut
          </label>
        </div>
      </section>

      <section className='radiobutton-container' >
        <label className='radiobutton-container-title' > <p>Kuinka hyvin henkilökemiat kohtaavat tiimissäsi?</p> </label>

        <div className='radiobutton-subcontainer' >
          <label className='radiobutton-subcontainer-container' >
            <input 
              type='radio'
              name='chemistry'
            />
            <span className='check' ></span>
            Ei lainkaan
          </label>
        </div>

        <div className='radiobutton-subcontainer' >
          <label className='radiobutton-subcontainer-container' >
            <input 
              type='radio'
              name='chemistry'
            />
            <span className='check' ></span>
            Ei kovin hyvin
          </label>
        </div>

        <div className='radiobutton-subcontainer' >
          <label className='radiobutton-subcontainer-container' >
            <input 
              type='radio'
              name='chemistry'
            />
            <span className='check' ></span>
            Melko hyvin
          </label>
        </div>

        <div className='radiobutton-subcontainer' >
          <label className='radiobutton-subcontainer-container' >
            <input 
              type='radio'
              name='chemistry'
            />
            <span className='check' ></span>
            Varsin hyvin
          </label>
        </div>

        <div className='radiobutton-subcontainer' >
          <label className='radiobutton-subcontainer-container' >
            <input 
              type='radio'
              name='chemistry'
            />
            <span className='check' ></span>
            Erittäin hyvin
          </label>
        </div>
      </section>

    </form>
  )
}

export default Form