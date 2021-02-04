import { useState } from 'react'

export default function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className={`min-w-full md:h-screen ${dark ? 'dark' : ''}`}>
      <div className="container bg-true-gray-400 dark:bg-true-gray-900 min-w-full md:h-screen">
        <div className="contentWrapper bg-white dark:bg-true-gray-800">
          <div
            className="switchWrapper"
            onClick={() => setDark((state) => !state)}
          ></div>
          <div className="progressbarWrapper"></div>
        </div>
      </div>
    </div>
  )
}
