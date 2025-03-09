type LoadingSpinnerProps = {
  className?: string
}

const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
  return (
    <div className={`${className} flex items-center justify-center gap-2`}>
      <div
        className='text-gray-primary inline-block h-4 w-4 animate-spin place-self-center rounded-full border-[2.5px] border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
        role='status'
      >
        <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
          Loading...
        </span>
      </div>
      <span className='text-gray-primary text-sm'>Loading...</span>
    </div>
  )
}

export default LoadingSpinner
