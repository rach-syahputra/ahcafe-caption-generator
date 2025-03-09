import plusIcon from '../assets/plus.svg'
import wandMagicIcon from '../assets/wand-magic.svg'

type GenerateCaptionButtonProps = {
  onClick: () => void
}

const OptionButton = () => {
  return (
    <button className='flex h-11 w-fit items-center gap-2 rounded-md bg-dark-primary px-3 py-2 text-white'>
      <img src={plusIcon} alt='plus icon' width={16} />
      Tambahkan Opsi
    </button>
  )
}

const GenerateCaptionButton = ({ onClick }: GenerateCaptionButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='flex h-11 w-full items-center justify-center gap-2 rounded-md bg-dark-primary px-4 font-semibold text-white transition-all duration-300 ease-in-out xs:place-self-end'
    >
      <img src={wandMagicIcon} alt='wand magic icon' width={16} />
      Buat Caption
    </button>
  )
}

export { OptionButton, GenerateCaptionButton }
