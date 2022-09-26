import React from 'react'
import { AiFillStop, AiOutlineStop } from 'react-icons/ai'
import { FiArrowDown, FiArrowUp, FiStopCircle } from 'react-icons/fi'
import { GiDesk } from 'react-icons/gi'
import { HiStop } from 'react-icons/hi'
import { IoStop } from 'react-icons/io5'
import Desk from '../../features/desk/Desk'

type RightAsideProps = {}

const RightAside = ({}: RightAsideProps) => {
  return (
    <aside
      className='flex-none min-h-screen bg-secondary text-center w-3/12 flex flex-col justify-between py-40 px-20'
      aria-label='Sidebar'
    >
      <Desk />
    </aside>
  )
}

export default RightAside
