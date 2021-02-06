import { useState } from 'react'

const valueChecker = (target) => {
  let result
  if (target > 100) {
    result = 100
  } else if (target < 0) {
    result = 0
  } else {
    result = target
  }
  return result
}

export default function App() {
  const [dark, setDark] = useState(false)
  const [progress, setProgress] = useState(21.13)

  return (
    <div className={`min-w-full md:h-screen ${dark ? 'dark' : ''}`}>
      <div className="flex justify-center items-center bg-white dark:bg-true-gray-900 min-w-full md:h-screen">
        <div className="flex justify-between items-center w-338px h-76px mr-22px ">
          <label className="switch inline-block relative w-30px h-60px">
            <input
              className="w-0 h-0 opacity-0"
              type="checkbox"
              onClick={() => setDark((state) => !state)}
            />
            <span
              class={`slider absolute inset-0 delay-200 rounded-sm bg-gray-100 bg-no-repeat cursor-pointer dark:bg-true-gray-400 ${
                dark ? 'bg-sun bg-top-light' : 'bg-moon  bg-bottom-dark'
              }`}
            />
          </label>
          <div className="flex justify-center items-center w-286px h-76px rounded-lg border border-solid border-cool-gray-200 bg-white dark:bg-true-gray-800 dark:border-true-gray-400">
            <input
              type="range"
              value={progress}
              min="0"
              max="100"
              step="0.01"
              onChange={(e) => setProgress(e.target.value)}
              className="w-140px mr-22px bg-cool-gray-200"
            />
            <label className="flex relative justify-center items-center text-center w-62px h-36px border border-solid border-cool-gray-200 rounded-sm">
            <input className='inline-block w-30px font-medium text-center text-12px bg-transparent dark:text-white'
              type="text"
              value={progress}
              onChange={(e) => setProgress(valueChecker(e.target.value))}
            />
            <span className='font-medium text-12px dark:text-white'>%</span>
          </label>
          </div>
        </div>
      </div>
    </div>
  )
}
