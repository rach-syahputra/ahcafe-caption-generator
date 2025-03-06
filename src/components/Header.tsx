const Header = () => {
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='flex flex-col items-center gap-2 text-[28px] font-bold md:text-4xl'>
        <div className='w-fit rounded-md bg-dark-primary px-4 py-2'>
          <span className='text-primary'>Adam & Hawa Cafe </span>
        </div>
        Caption Generator
      </h1>
      <p className='md:text-lg'>
        Buat caption Instagram menarik dengan gaya khas Adam & Hawa Cafe secara
        otomatis.
      </p>
    </div>
  )
}

export default Header
