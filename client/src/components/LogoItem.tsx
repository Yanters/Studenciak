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
    if (isMobile() && !isOpen) {
      setIsOpen && setIsOpen(!isOpen)
    }
  }
  return (
    <div
      className={
        'w-full h-auto flex flex-row items-center pt-5 pb-3 px-4' +
        (isOpen ? ' justify-start ' : ' justify-center md:px-0')
      }
    >
      <div
        className={
          'flex flex-row items-center  w-full ' +
          (isOpen ? ' justify-between' : 'justify-between md:justify-center')
        }
      >
        <Link
          className={
            'flex flex-row space-x-3 items-center ' +
            (isOpen ? ' md:w-full' : ' ')
          }
          href='/'
          onClick={toggleSidebar}
        >
          <div className={'w-12 h-12 text-info' + (isOpen ? '' : ' md:hidden')}>
            {icon}
          </div>
          <div
            className={'text-2xl font-bold-500 ' + (isOpen ? '' : ' md:hidden')}
          >
            {text}
          </div>
        </Link>
        <VscMenu
          className={'w-8 h-8 text-info cursor-pointer'}
          onClick={() => setIsOpen && setIsOpen(!isOpen)}
        />
      </div>
    </div>
  )
}

export default LogoItem
