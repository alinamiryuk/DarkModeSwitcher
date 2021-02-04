import { useState } from 'react'

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`w-full md:h-screen ${dark ? 'dark' : ''}`}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white">
        <button onClick={() => setDark(state => !state)}>
          theme
        </button>
      </div>
    </div>
  );
}
