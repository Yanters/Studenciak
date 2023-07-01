import React from 'react'

const BreakLine = ({ className }: { className?: string }) => {
  return (
    <div
      className={
        'w-full h-auto flex flex-col items-center justify-center py-4' +
        (className ? ' ' + className : '')
      }
    >
      <div className='w-11/12 h-1 rounded-full bg-gradient-radial from-slate-300 to-info dark:from-white dark:to-info' />
    </div>
  )
}

export default BreakLine
