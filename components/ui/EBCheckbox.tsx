'use client'

import { LegacyRef, forwardRef, useState } from 'react'
import CheckIcon from '@/components/icons/check'

type props = {
  label: string
  onChange?: Function
  value?: boolean
}

const EBCheckbox = forwardRef(({ 
  label,
  onChange,
  value = false, 
}: props, ref: LegacyRef<HTMLButtonElement>) => {
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
    <div className="flex gap-x-2 items-center [&>input]:hidden">
      <input type="checkbox" checked={check} onChange={handleOnChange} />
      <button ref={ref} id={label} type='button' className="flex items-center justify-center cursor-pointer w-[20px] h-[20px] border-2 border-black rounded-[5px]" onClick={test}>
        {check && <div className="w-[12px] h-[12px] bg-teal rounded-[3px]" />}
      </button>
      {label && <label className="active:select-none cursor-pointer" htmlFor={label}>{label}</label>}
    </div>
  )
})

export default EBCheckbox