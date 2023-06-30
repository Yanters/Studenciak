import React from 'react'
import Link from 'next/link'

const MenuItem = ({
  text,
  icon,
  location,
}: {
  text: string
  icon: React.ReactNode
  location: string
}) => {
  return (
    <Link
      className='w-full h-auto flex flex-row items-center justify-start px-10 py-3 hover:bg-secondary-200'
      href={location}
    >
      <div className='flex flex-row space-x-3'>
        <div className='w-8 h-8 text-info'>{icon}</div>
        <div className='text-2xl font-bold-500'>{text}</div>
      </div>
    </Link>
  )
}

export default MenuItem
