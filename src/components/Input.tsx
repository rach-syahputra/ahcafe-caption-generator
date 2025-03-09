import x from '../assets/x-mark.svg'

type InputProps = {
  name: string
  label: string
  value: string
  onValueChange: (value: string) => void
  placeholder: string
  asTextArea?: boolean
}

type ClearProps = {
  onClick: () => void
}

const Input = ({
  name,
  label,
  value,
  onValueChange,
  placeholder,
  asTextArea
}: InputProps) => {
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
      <div className='flex w-full flex-col items-start gap-1 overflow-hidden text-left transition-[height] duration-300 ease-in-out'>
        <label htmlFor={name.toLowerCase()} className='text-dark-primary'>
          {label}
        </label>
        <div className='relative w-full'>
          {asTextArea ? (
            <textarea
              name={name.toLowerCase()}
              rows={3}
              value={value}
              placeholder={placeholder}
              onChange={handleTextAreaChange}
              className='h-full w-full rounded-md border border-gray-400 px-3 py-2 focus-within:border-gray-600 focus-within:outline-none'
            />
          ) : (
            <input
              name={name.toLowerCase()}
              type='text'
              value={value}
              placeholder={placeholder}
              onChange={handleInputChange}
              className='h-11 w-full rounded-md border border-gray-300 px-3 py-2 focus-within:border-gray-500 focus-within:outline-none'
            />
          )}
          {value && !asTextArea && <Clear onClick={handleRemoveInput} />}
        </div>
      </div>
    </div>
  )
}

const Clear = ({ onClick }: ClearProps) => {
  return (
    <div
      onClick={onClick}
      className='absolute right-0 top-0 flex h-11 w-10 cursor-pointer items-center justify-center'
    >
      <img src={x} alt='x icon' className='w-3.5' />
    </div>
  )
}

export default Input
