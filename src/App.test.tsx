import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('App', () => {
  it('renders the greeting form', () => {
    render(<App />)
    expect(screen.getByText('Hello World')).toBeTruthy()
    expect(screen.getByText("We're glad you're here")).toBeTruthy()
    expect(screen.getByLabelText("What's your name?")).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Say Hello' })).toBeTruthy()
  })

  it('shows personalized greeting when name is submitted', () => {
    render(<App />)
    const input = screen.getByLabelText("What's your name?")
    fireEvent.change(input, { target: { value: 'Alice' } })
    fireEvent.click(screen.getByRole('button', { name: 'Say Hello' }))
    expect(screen.getByText('Welcome back, Alice!')).toBeTruthy()
  })

  it('trims whitespace from name', () => {
    render(<App />)
    const input = screen.getByLabelText("What's your name?")
    fireEvent.change(input, { target: { value: '  Bob  ' } })
    fireEvent.click(screen.getByRole('button', { name: 'Say Hello' }))
    expect(screen.getByText('Welcome back, Bob!')).toBeTruthy()
  })

  it('does not show greeting when name is empty', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: 'Say Hello' }))
    expect(screen.queryByText(/Welcome back/)).toBeNull()
    expect(screen.getByLabelText("What's your name?")).toBeTruthy()
  })

  it('allows resetting to greet someone else', () => {
    render(<App />)
    const input = screen.getByLabelText("What's your name?")
    fireEvent.change(input, { target: { value: 'Carol' } })
    fireEvent.click(screen.getByRole('button', { name: 'Say Hello' }))
    expect(screen.getByText('Welcome back, Carol!')).toBeTruthy()

    const resetButton = screen.getByText('Say hello to someone else')
    fireEvent.click(resetButton)
    expect(screen.queryByText(/Welcome back/)).toBeNull()
    const inputEl = screen.getByLabelText("What's your name?")
    expect(inputEl).toBeTruthy()
    expect((inputEl as HTMLInputElement).value).toBe('')
  })
})
