import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Form from '../components/form/Form'

test('renders the title of the Form component', () => {

  const component = render(
    <Form />
  )

  const element = component.getByText(
    'Kyselylomake'
  )
  expect(element).toBeDefined()

})