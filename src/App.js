import logo from './alphabet-hero.jpg'
import './App.css'
import { useState } from 'react'
import { findMaxStringValue } from './utils'

function App() {
  const [word, setWord] = useState('')
  const [result, setResult] = useState(null)

  const handleGo = () => {
    setResult(findMaxStringValue(word))
  }
  const handleNewWord = () => {
    setWord('')
    setResult(null)
  }

  return (
    <div className='App'>
      <main className='App-main'>
        <img src={logo} className='App-logo' alt='logo' />
        {!result && (
          <section>
            <p>Enter a word to check its highest possible score!</p>
            <form onSubmit={handleGo}>
              <input
                required
                type='text'
                placeholder="FERROCARRIL"
                value={word.trim().toUpperCase()}
                onChange={e => setWord(e.target.value.trim().toUpperCase())}
              />
              <button type='submit'>GO!</button>
            </form>
          </section>
        )}
        {!!result && (
          <section>
            <p>
              The highest possible score of{' '}
              <span className='word-number'>{word}</span> is{' '}
              <span className='word-number'>{result}</span>
            </p>
            <button type='button' onClick={handleNewWord}>
              Another word!
            </button>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
