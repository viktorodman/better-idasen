import React from 'react'

type DeskUnitSelectorProps = {}

const DeskUnitSelector = ({}: DeskUnitSelectorProps) => {
  return (
    <div className='w-full flex flex-col h-1/6'>
      <div className='pb-20'>
        <span className='uppercase text-dark-two font-extrabold text-1xl'>Current Desk Height</span>
      </div>
      <div className='space-y-14'>
        <div>
          <span className='uppercase text-dark-two font-extrabold text-6xl'>100</span>
        </div>
        <ul className='text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow flex w-4/6 mx-auto'>
          <li className='w-full'>
            <a
              href='#'
              className='inline-block p-4 w-full text-white bg-mah-blue rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white'
              aria-current='page'
            >
              CM
            </a>
          </li>
          <li className='w-full'>
            <a
              href='#'
              className='inline-block p-4 w-full bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300'
            >
              Inches
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DeskUnitSelector
