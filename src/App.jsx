import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showLimit, setShowLimit] = useState(false)

  const showLimitFunction = () => {
    setShowLimit(true)

    setTimeout(() => {
      setShowLimit(false)
    }, 1000)
  }

  const handleCountIncrease = () => {
    if (count != 10) {
      setCount(() => count + 1)
    } else {
      showLimitFunction()
    }
  }

  const handleCountDecrease = () => {
    if (count != 0) {
      setCount(() => count - 1)
    } else {
      showLimitFunction()
    }
  }

  return (
    <>
      <div className='w-full h-full flex flex-col items-center justify-center bg-slate-300'>
        {showLimit && (
          <p className='text-red-500 tracking-wide mb-4'>Limit Reached</p>
        )}
        <h1 className='text-6xl mb-12'>{count}</h1>
        <div className='flex gap-6 max-[400px]:flex-col'>
          <button className='button' onClick={handleCountIncrease}>
            Increase
          </button>
          <button className='button' onClick={handleCountDecrease}>
            Decrease
          </button>
        </div>
        <button
          onClick={() => {
            setCount(0)
          }}
          className='mt-6 w-20 h-8 rounded-lg tracking-wide bg-slate-700 text-white hover:text-slate-700 hover:bg-white cursor-pointer transition-colors duration-300 border-2 border-slate-700'
        >
          Reset
        </button>
      </div>
    </>
  )
}

export default App
