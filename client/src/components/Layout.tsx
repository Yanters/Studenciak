import React from 'react'
import MenuItem from './MenuItem'
import BreakLine from './BreakLine'
import LogoItem from './LogoItem'
import { PiStudentBold, PiExam } from 'react-icons/pi'
import { BsCalendarWeek } from 'react-icons/bs'
import { LiaClipboardListSolid } from 'react-icons/lia'
import { MdGroups } from 'react-icons/md'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <div className='w-1/6 bg-gray-900 h-screen'>
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
      <div className='w-5/6 bg-gray-800 h-screen'>{children}</div>
    </div>
  )
}

export default Layout
