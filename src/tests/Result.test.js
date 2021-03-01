import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Result from '../components/result/Result'

describe('Testataan komponenttia <Result >', () => {
  const teams = [
    {
      motivation: 1,
      size: 1,
      chemistry: 1,
      performance: 1,
      puncutality: 1
    }
  ]
  const component = render(
    <Result teams={teams} />
  )
    
  test('renderöi komponentin otsikon', () => {
  
    const div = component.container.querySelector('h1')
    expect(div).toHaveTextContent('Kyselylomakkeen tulokset')
  
  })
})