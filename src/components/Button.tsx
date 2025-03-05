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
      className='hover:bg-primary-hover flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-white transition-all duration-300 ease-in-out xs:place-self-end md:text-base'
    >
      <img src={wandMagicIcon} alt='wand magic icon' width={16} />
      {children}
    </button>
  )
}

export { GenerateCaptionButton }
