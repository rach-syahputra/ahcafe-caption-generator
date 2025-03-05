import { useState } from 'react'
import arrowUp from '../assets/arrow-up.svg'
import x from '../assets/x-mark.svg'

type InputProps = {
  name: string
  label: string
  value: string
  onValueChange: (value: string) => void
  asTextArea?: boolean
}

type InputTriggerProps = {
  label: string
  open: boolean
  onOpenChange: () => void
}

type ClearProps = {
  onClick: () => void
}

const Input = ({
  name,
  label,
  value,
  onValueChange,
  asTextArea
}: InputProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(e.target.value)
  }

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onValueChange(e.target.value)
  }

  const handleRemoveInput = () => {
    onValueChange('')
  }

  return (
    <div className='flex w-full flex-col'>
      <InputTrigger
        label={label}
        open={open}
        onOpenChange={() => setOpen(!open)}
      />

      <div
        className={`${open && asTextArea ? 'h-20 md:h-[92px]' : open ? 'h-10 md:h-11' : 'h-0'} relative w-full items-start gap-2 overflow-hidden transition-[height] duration-300 ease-in-out`}
      >
        <label
          htmlFor={name.toLowerCase()}
          className='sr-only text-sm text-gray-600 md:text-base'
        >
          {name}
        </label>

        {asTextArea ? (
          <textarea
            name={name.toLowerCase()}
            rows={3}
            value={value}
            onChange={handleTextAreaChange}
            className='h-full w-full rounded-md border border-gray-400 px-3 py-2 text-sm focus-within:border-gray-600 focus-within:outline-none md:text-base'
          />
        ) : (
          <input
            name={name.toLowerCase()}
            type='text'
            value={value}
            onChange={handleInputChange}
            className='h-full w-full rounded-md border border-gray-400 px-3 py-2 text-sm focus-within:border-gray-600 focus-within:outline-none md:text-base'
          />
        )}

        {value && !asTextArea && <Clear onClick={handleRemoveInput} />}
      </div>
    </div>
  )
}

const InputTrigger = ({ label, open, onOpenChange }: InputTriggerProps) => {
  return (
    <div
      onClick={onOpenChange}
      className='text-dark-primary flex h-10 w-full cursor-pointer items-center justify-start gap-2'
    >
      <span className='select-none text-sm md:text-base'>{label}</span>

      <img
        src={arrowUp}
        alt='arrow up icon'
        className={`${!open && 'rotate-180'} w-3 transition-all duration-300 ease-in-out md:w-[14px]`}
      />
    </div>
  )
}

const Clear = ({ onClick }: ClearProps) => {
  return (
    <div
      onClick={onClick}
      className='absolute right-0 top-0 flex h-10 w-8 cursor-pointer items-center justify-center md:h-11'
    >
      <img src={x} alt='x icon' className='w-3' />
    </div>
  )
}

export default Input
