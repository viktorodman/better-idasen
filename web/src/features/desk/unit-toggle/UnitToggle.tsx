import React from 'react'

const UnitToggle = () => {
  return (
    <ul className='text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow flex w-4/6 mx-auto'>
      <li className='w-full'>
        <a
          href='#'
          className='inline-block p-1 w-full text-white bg-mah-blue rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none'
          aria-current='page'
        >
          CM
        </a>
      </li>
      <li className='w-full'>
        <a
          href='#'
          className='inline-block p-1 w-full bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300'
        >
          Inches
        </a>
      </li>
    </ul>
  )
}

export default UnitToggle
