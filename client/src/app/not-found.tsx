import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='container min-h-screen min-w-full py-2 flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <span className='text-3xl font-bold text-center sm:text-6xl'>
          404 | Page Not Found
        </span>
        <Link href='/' className='my-4 hover:scale-105 transition-all duration-200 ease-in-out'>
          <span className='text-2xl font-bold text-center border-b-2 border-black dark:border-white cursor-pointer'>
            Go Back Home
          </span>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
