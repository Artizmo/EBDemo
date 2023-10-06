'use client'

import { LegacyRef, forwardRef, useState } from 'react'
import CheckIcon from '@/components/icons/check'

type props = {
  label: string
  onChange?: Function
  value?: boolean
}

const EBCheckbox = forwardRef(function EBCheckbox({ 
  label,
  onChange,
  value = false, 
}: props, ref: LegacyRef<HTMLButtonElement>) {
  const [check, setCheck] = useState(false)

  const handleOnChange = () => {
    // onChange(checkState)
    // console.log('bingo change', check)
  }

  const test = () => {
    // setCheck(check => {
      setCheck(!check)
      console.log('bingo test click', check)
    //   return !check
    // })
  }

  return (
    <div className="flex gap-x-2 items-center [&>input]:hidden leading-[initial]">
      <input type="checkbox" checked={check} onChange={handleOnChange} />
      <button ref={ref} id={label} type='button' 
        className={`flex items-center justify-center cursor-default w-[18px] h-[18px] border ${check ? 'border-teal' : 'border-[#737373]'} rounded-[3px]`}
        onClick={test}
      >
        {/* {check && <div className="w-[10px] h-[10px] bg-teal rounded-[.2rem]" />} */}
        {check && <CheckIcon className="fill-white bg-teal" />}
      </button>
      {label && <label className="text-[14px] active:select-none" htmlFor={label}>{label}</label>}
    </div>
  )
})

export default EBCheckbox