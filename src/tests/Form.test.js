import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Form from '../components/form/Form'

describe('Testataan komponenttia <Form >', () => {
  test('renderöi elementin, joka sisältää komponentin otsikon', () => {

    const component = render(
      <Form />
    )
  
    const element = component.getByText(
      'Kyselylomake'
    )
    expect(element).toBeDefined()
  
  })
})