'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className='container flex flex-col items-center justify-center min-h-screen min-w-full py-2'>
      <h1 className='text-6xl font-bold text-center dark:text-cyan-100 text-cyan-500'>
        Studenciak
      </h1>
      <div>
        The current theme is: {theme}
        <br />
        <button onClick={() => setTheme('light')}>Light Mode</button>{' '}
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
    </div>
  )
}
