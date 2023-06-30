import React from 'react'
import Link from 'next/link'
import Title from '@/components/Title'

const NotFound = () => {
  return (
    <div className='container min-h-screen min-w-full py-2 flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <Title title='404 | Page Not Found' />
        <Link
          href='/'
          className='my-4 hover:scale-105 transition-all duration-200 ease-in-out'
        >
          <span className='text-2xl font-bold text-center border-b-2 border-black dark:border-white cursor-pointer'>
            Go Back Home
          </span>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
