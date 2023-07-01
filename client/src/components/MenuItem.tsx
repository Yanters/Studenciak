import React from 'react'
import Link from 'next/link'

const MenuItem = ({
  text,
  icon,
  location,
  isOpen,
  setIsOpen,
}: {
  text: string
  icon: React.ReactNode
  location: string
  isOpen: boolean
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  // detect if we are on mobile or desktop by reading the window width
  // if the window width is less than 768px, we are on mobile
  // if the window width is more than 768px, we are on desktop

  const isMobile = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768
    }
    return false
  }

  const toggleSidebar = () => {
    if (isMobile()) {
      setIsOpen && setIsOpen(!isOpen)
    }
  }

  return (
    <Link
      className={
        'w-full  flex flex-row items-center py-3 hover:bg-secondary-200' +
        (isOpen
          ? ' justify-start pl-8 md:h-auto hidden md:flex'
          : ' justify-center')
      }
      href={location}
      onClick={toggleSidebar}
    >
      <div className='flex flex-row space-x-4'>
        <div className='w-8 h-8 text-info'>{icon}</div>
        <div
          className={'text-2xl font-bold-500 ' + (isOpen ? '' : ' md:hidden')}
        >
          {text}
        </div>
      </div>
    </Link>
  )
}

export default MenuItem
