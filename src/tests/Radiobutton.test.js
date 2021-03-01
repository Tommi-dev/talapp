import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Radiobutton from '../components/form/Radiobutton'

describe('Testataan komponenttia <Radiobutton>', () => {
  let component

  const motivation = {
    title: 'Toimiiko testisi?',
    group:'motivation',
    buttons: ['Ei lainkaan', 'Ei kovin hyvin', 'Melko hyvin', 'Varsin hyvin', 'Erittäin hyvin']
  }

  beforeEach(() => {
    component = render(
      <Radiobutton 
        title={motivation.title}
        group={motivation.group}
        buttons={motivation.buttons}
      />
    )
  })

  test('renderöi komponentin otsikon', () => {
    const div = component.container.querySelector('.radiobutton-container-title')
    expect(div).toHaveTextContent('Toimiiko testisi?')
  })

  test('renderöi ensimmäisen radionapin nimen', () => {
    const div = component.container.querySelector('.radiobutton-subcontainer-container')
    expect(div).toHaveTextContent('Ei lainkaan')
  })

  test('renderöi radionappien nimet', () => {
    expect(component.container).toHaveTextContent('Ei kovin hyvin')
    expect(component.container).toHaveTextContent('Melko hyvin')
    expect(component.container).toHaveTextContent('Varsin hyvin')
    expect(component.container).toHaveTextContent('Erittäin hyvin')
  })

})