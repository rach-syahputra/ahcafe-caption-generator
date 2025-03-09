import LoadingSpinner from './LoadingSpinner'
import copyIcon from '../assets/copy.svg'

type CaptionProps = {
  isLoading: boolean
  caption: string
  error: string
}

type CopyProps = {
  onClick: () => void
}

const Caption = ({ isLoading, caption, error }: CaptionProps) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(caption)
  }

  return (
    <div
      className={`${isLoading || caption ? 'block' : 'hidden'} border-gray-primary flex w-full flex-col rounded-md border`}
    >
      <div className='flex flex-col'>
        {isLoading ? (
          <LoadingSpinner className='p-3' />
        ) : caption ? (
          <>
            <p className='p-3'>{caption}</p>
            <Divider />
            <Copy onClick={handleCopy} />
          </>
        ) : (
          <p className='text-sm text-red-500 md:text-base'>{error}</p>
        )}
      </div>
    </div>
  )
}

const Divider = () => {
  return (
    <div className='px-3'>
      <hr className='border-gray-primary w-full rounded-full opacity-85'></hr>
    </div>
  )
}

const Copy = ({ onClick }: CopyProps) => {
  return (
    <div
      onClick={onClick}
      className='flex h-11 cursor-pointer items-center justify-center gap-2 place-self-end px-3 transition-all duration-300 ease-in-out'
    >
      <img src={copyIcon} alt='copy icon' width={15} />
      <span className='select-none text-sm text-dark-primary'>Salin</span>
    </div>
  )
}

export default Caption
