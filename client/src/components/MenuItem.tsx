import React from 'react'
import Link from 'next/link'

const MenuItem = ({
  text,
  icon,
  location,
  isOpen,
}: {
  text: string
  icon: React.ReactNode
  location: string
  isOpen: boolean
}) => {
  return (
    <Link
      className={
        'w-full  flex flex-row items-center py-3 hover:bg-secondary-200' +
        (isOpen
          ? ' justify-start pl-8 md:h-auto hidden md:flex'
          : ' justify-center')
      }
      href={location}
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
