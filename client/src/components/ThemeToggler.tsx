'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { BsFillSunFill, BsMoonFill } from 'react-icons/bs'

const ThemeToggler = ({ isOpen }: { isOpen: boolean }) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <button
      className={
        'w-full h-auto flex flex-row items-center py-3 hover:bg-secondary-200' +
        (isOpen
          ? ' justify-start pl-8 md:h-auto hidden md:flex'
          : ' justify-center')
      }
      onClick={toggleTheme}
    >
      <div className='flex flex-row space-x-3'>
        <div className='w-8 h-8 text-info'>
          {theme === 'light' ? (
            <BsMoonFill className='w-7 h-7' />
          ) : (
            <BsFillSunFill className='w-7 h-7' />
          )}
        </div>
        {isOpen && (
          <div className='text-2xl font-bold-500'>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </div>
        )}
      </div>
    </button>
  )
}

export default ThemeToggler
