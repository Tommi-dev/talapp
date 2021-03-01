import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Button from '../components/Button'

describe('Testataan komponenttia <Button >', () => {

  test('napin painaminen kutsuu tapahtumankäsittelijää kerran', async () => {
  
    const mockHandler = jest.fn()

    const component = render(
      <Button title='Alkuun' type='button' changeView={mockHandler} />
    )
  
    const button = component.container.querySelector('button')
    fireEvent.click(button)
  
    expect(mockHandler.mock.calls).toHaveLength(1)
  })
})