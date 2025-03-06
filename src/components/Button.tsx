import wandMagicIcon from '../assets/wand-magic.svg'

type GenerateCaptionButtonProps = {
  onClick: () => void
  children: React.ReactNode
}

const GenerateCaptionButton = ({
  onClick,
  children
}: GenerateCaptionButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 font-semibold text-white transition-all duration-300 ease-in-out hover:bg-primary-hover xs:place-self-end'
    >
      <img src={wandMagicIcon} alt='wand magic icon' width={16} />
      {children}
    </button>
  )
}

export { GenerateCaptionButton }
