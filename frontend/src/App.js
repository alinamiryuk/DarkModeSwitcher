import { useState } from 'react'

export default function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className={`min-w-full md:h-screen ${dark ? 'dark' : ''}`}>
      <div className="flex justify-center items-center bg-white dark:bg-true-gray-900 min-w-full md:h-screen">
        <div className="contentWrapper flex justify-between items-center rounded-lg border border-solid border-cool-gray-200 bg-white dark:bg-true-gray-800 dark:border-true-gray-400">
          <div
            className="switchWrapper rounded-sm"
            onClick={() => setDark((state) => !state)}
          ></div>
          <div className="progressbarWrapper"></div>
        </div>
      </div>
    </div>
  )
}
