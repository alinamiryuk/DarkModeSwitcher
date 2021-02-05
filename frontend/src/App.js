import { useState } from 'react'

export default function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className={`min-w-full md:h-screen ${dark ? 'dark' : ''}`}>
      <div className="flex justify-center items-center bg-white dark:bg-true-gray-900 min-w-full md:h-screen">
        <div className="flex justify-between items-center w-338px h-76px mr-22px ">
          <div className="flex w-30px h-60px">
            <label class="switch inline-block relative w-30px h-60px">
              <input
                class="w-0 h-0 opacity-0"
                type="checkbox"
                onClick={() => setDark((state) => !state)}
              />
              <span class="slider absolute inset-0 delay-200 rounded-sm bg-gray-100 cursor-pointer dark:bg-true-gray-400" />
            </label>
          </div>
          <div className="flex w-286px h-76px rounded-lg border border-solid border-cool-gray-200 bg-white dark:bg-true-gray-800 dark:border-true-gray-400"></div>
        </div>
      </div>
    </div>
  )
}
