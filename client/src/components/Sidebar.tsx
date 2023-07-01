'use client'

import React, { useState } from 'react'
import MenuItem from './MenuItem'
import BreakLine from './BreakLine'
import LogoItem from './LogoItem'
import { PiStudentBold, PiExam } from 'react-icons/pi'
import { BsCalendarWeek } from 'react-icons/bs'
import { LiaClipboardListSolid } from 'react-icons/lia'
import { MdGroups } from 'react-icons/md'
import { LuLogOut } from 'react-icons/lu'
import ThemeToggler from './ThemeToggler'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div
      className={
        'sticky top-0 bg-secondary md:min-h-screen md:h-screen flex flex-col items-center justify-between' +
        (isOpen ? ' md:min-w-[300px]' : ' md:min-w-[80px] min-h-screen') +
        ' md:flex overflow-hidden'
      }
    >
      <div className='w-full h-fit '>
        <LogoItem
          text='Studenciak'
          icon={<PiStudentBold className='w-12 h-12' />}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        {isOpen ? <BreakLine className='hidden md:flex' /> : <BreakLine />}

        <MenuItem
          text='Calendar'
          icon={<BsCalendarWeek className='w-full h-full' />}
          location='/calendar'
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <MenuItem
          text='Groups'
          icon={<MdGroups className='w-full h-full' />}
          location='/groups'
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <MenuItem
          text='Tester'
          icon={<PiExam className='w-full h-full' />}
          location='/tester'
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <MenuItem
          text='Lists'
          icon={<LiaClipboardListSolid className='w-full h-full' />}
          location='/lists'
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
      <div className='w-full h-fit md:mb-4'>
        <ThemeToggler isOpen={isOpen} />
        <MenuItem
          text='Logout'
          icon={<LuLogOut className='w-full h-full' />}
          location='/logout'
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  )
}

export default Sidebar
