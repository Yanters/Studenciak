import React from 'react'
import MenuItem from './MenuItem'
import BreakLine from './BreakLine'
import LogoItem from './LogoItem'
import { PiStudentBold, PiExam } from 'react-icons/pi'
import { BsCalendarWeek } from 'react-icons/bs'
import { LiaClipboardListSolid } from 'react-icons/lia'
import { MdGroups } from 'react-icons/md'
import { LuLogOut } from 'react-icons/lu'
import ThemeToggler from './ThemeToggler'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <div className='w-1/6 bg-secondary h-screen flex flex-col items-center justify-between'>
        <div className='w-full h-fit'>
          <LogoItem
            text='Studenciak'
            icon={<PiStudentBold className='w-12 h-12' />}
          />
          <BreakLine />
          <MenuItem
            text='Calendar'
            icon={<BsCalendarWeek className='w-8 h-8' />}
            location='/calendar'
          />
          <MenuItem
            text='Groups'
            icon={<MdGroups className='w-8 h-8' />}
            location='/groups'
          />
          <MenuItem
            text='Tester'
            icon={<PiExam className='w-8 h-8' />}
            location='/tester'
          />
          <MenuItem
            text='Lists'
            icon={<LiaClipboardListSolid className='w-8 h-8' />}
            location='/lists'
          />
        </div>
        <div className='w-full h-fit mb-4'>
          <ThemeToggler />
          <MenuItem
            text='Logout'
            icon={<LuLogOut className='w-8 h-8' />}
            location='/logout'
          />
        </div>
      </div>
      <div className='w-5/6 bg-primary-100 h-screen'>{children}</div>
    </div>
  )
}

export default Layout
