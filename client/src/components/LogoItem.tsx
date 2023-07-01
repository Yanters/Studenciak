import React from 'react'
import Link from 'next/link'
import { VscMenu } from 'react-icons/vsc'

const LogoItem = ({
  text,
  icon,
  isOpen,
  setIsOpen,
}: {
  text: string
  icon: React.ReactNode
  isOpen: boolean
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <Link
      className={
        'w-full h-auto flex flex-row items-center pt-5 pb-3' +
        (isOpen ? ' justify-start px-4' : ' justify-center')
      }
      href='/'
    >
      <div
        className={
          'flex flex-row items-center  w-full' +
          (isOpen ? ' justify-between' : ' justify-center')
        }
      >
        <div className='flex flex-row space-x-3 items-center '>
          {isOpen && <div className='w-12 h-12 text-info'>{icon}</div>}
          {isOpen && <div className='text-2xl font-bold-500'>{text}</div>}
        </div>
        <VscMenu
          className={'w-8 h-8 text-info cursor-pointer'}
          onClick={() => setIsOpen && setIsOpen(!isOpen)}
        />
      </div>
    </Link>
  )
}

export default LogoItem
