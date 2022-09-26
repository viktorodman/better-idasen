import { RadioGroup } from '@headlessui/react'
import { FiCheck } from 'react-icons/fi'
import React, { useState } from 'react'

type DeviceSelectorProps = {}

const devices = [
  {
    name: 'Better Idåsen',
    description: 'Control your Ikea Idasen desk',
  },
  {
    name: 'Philipse Hue',
    description: 'Control your Philips Hue light',
  },
  {
    name: 'Something else',
    description: 'Control something with this',
  },
]

const DeviceSelector = ({}: DeviceSelectorProps) => {
  const [selected, setSelected] = useState(devices[0])

  return (
    <div className='w-5/6 flex justify-end'>
      <div className='w-5/6'>
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className='sr-only'>Device Select</RadioGroup.Label>
          <div className='space-y-2'>
            {devices.map((device) => (
              <RadioGroup.Option
                key={device.name}
                value={device}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                      : ''
                  }
                  ${checked ? 'bg-mah-blue text-white' : 'bg-white'}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className='flex w-full items-center justify-between'>
                      <div className='flex items-center'>
                        <div className='text-sm'>
                          <RadioGroup.Label
                            as='p'
                            className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'}`}
                          >
                            {device.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as='span'
                            className={`inline ${checked ? 'text-sky-100' : 'text-gray-500'}`}
                          >
                            <span>{device.description}</span>{' '}
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        /*  <div className='shrink-0 text-white bg-dark-two'>
                          <FiCheck />
                        </div> */
                        <div className='inline-flex overflow-hidden relative justify-center items-center w-6 h-6 bg-dark-one rounded-full'>
                          <FiCheck />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

export default DeviceSelector
