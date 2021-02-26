import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Result from '../components/result/Result'

test('renders the title of the Result component', () => {

  const component = render(
    <Result />
  )

  const element = component.getByText(
    'Kyselylomakkeen tulokset'
  )
  expect(element).toBeDefined()

})