import LoadingSpinner from './LoadingSpinner'
import copyIcon from '../assets/copy-icon.svg'

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
      className={`${isLoading || caption ? 'block' : 'hidden'} flex w-full flex-col rounded-md bg-gray-100 p-3`}
    >
      <div className='flex flex-col gap-3'>
        {isLoading ? (
          <LoadingSpinner />
        ) : caption ? (
          <>
            <p>{caption}</p>
            <div className='h-0.5 w-full rounded-full bg-gray-200 opacity-85'></div>
            <Copy onClick={handleCopy} />
          </>
        ) : (
          <p className='text-sm text-red-500 md:text-base'>{error}</p>
        )}
      </div>
    </div>
  )
}

const Copy = ({ onClick }: CopyProps) => {
  return (
    <div
      onClick={onClick}
      className='flex cursor-pointer items-center justify-center gap-2 place-self-end py-1 transition-all duration-300 ease-in-out hover:opacity-80 max-md:scale-95'
    >
      <img src={copyIcon} alt='copy icon' width={16} />
      <span className='select-none text-sm text-[#222222]'>Copy</span>
    </div>
  )
}

export default Caption
