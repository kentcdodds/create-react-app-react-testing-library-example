import React from 'react'
import {render} from 'react-testing-library'
import App from './App'

it('renders without crashing', () => {
  const {getByText} = render(<App />)
  expect(getByText('Learn React')).toBeInTheDOM()
})
