'use client'
import BreakLine from '@/components/BreakLine'
import Title from '@/components/Title'
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
      <Title title='Home' />
      <BreakLine />
      <div>
        The current theme is: {theme}
        <br />
        <button onClick={() => setTheme('light')}>Light Mode</button>{' '}
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
      <Title title='Home' />
      <BreakLine />
      <div>
        The current theme is: {theme}
        <br />
        <button onClick={() => setTheme('light')}>Light Mode</button>{' '}
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
      <Title title='Home' />
      <BreakLine />
      <div>
        The current theme is: {theme}
        <br />
        <button onClick={() => setTheme('light')}>Light Mode</button>{' '}
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
      <Title title='Home' />
      <BreakLine />
      <div>
        The current theme is: {theme}
        <br />
        <button onClick={() => setTheme('light')}>Light Mode</button>{' '}
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
      <Title title='Home' />
      <BreakLine />
      <div>
        The current theme is: {theme}
        <br />
        <button onClick={() => setTheme('light')}>Light Mode</button>{' '}
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
      <Title title='Home' />
      <BreakLine />
      <div>
        The current theme is: {theme}
        <br />
        <button onClick={() => setTheme('light')}>Light Mode</button>{' '}
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
    </div>
  )
}
