import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('shows greeting after form submission', () => {
    render(<App />)
    const input = screen.getByPlaceholderText('Enter your name')
    fireEvent.change(input, { target: { value: 'Alice' } })
    fireEvent.click(screen.getByText('Say Hello'))
    expect(screen.getByText('Welcome back, Alice!')).toBeDefined()
  })
})