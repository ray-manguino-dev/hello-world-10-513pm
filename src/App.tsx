import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [greeting, setGreeting] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      setGreeting(`Welcome back, ${name.trim()}!`)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="greeting-card rounded-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#e07a3d' }}>
          Hello World
        </h1>
        <p className="text-lg mb-8" style={{ color: '#6b5344' }}>
          We're glad you're here
        </p>

        {!greeting ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
                style={{ color: '#4a3728' }}
              >
                What's your name?
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border-2 border-orange-200 focus:border-orange-400 focus:outline-none text-lg"
                style={{ backgroundColor: '#fff8f0' }}
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="btn-greet w-full py-3 rounded-lg text-white font-semibold text-lg"
            >
              Say Hello
            </button>
          </form>
        ) : (
          <div className="animate-fade-in">
            <p className="text-2xl font-semibold" style={{ color: '#e07a3d' }}>
              {greeting}
            </p>
            <button
              onClick={() => { setGreeting(''); setName('') }}
              className="mt-6 text-sm underline cursor-pointer"
              style={{ color: '#6b5344' }}
            >
              Say hello to someone else
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App