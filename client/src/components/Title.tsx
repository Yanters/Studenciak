import React from 'react'

const Title = ({ title }: { title: string }) => {
  return (
    <span className='text-3xl font-bold text-center sm:text-6xl text-text'>
      {title}
    </span>
  )
}

export default Title
