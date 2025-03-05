/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'

import { generateCaption, generatePrompt } from '../utils/utils'
import Caption from '../components/Caption'
import { GenerateCaptionButton } from '../components/Button'
import Input from '../components/Input'

const Home = () => {
  const [caption, setCaption] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [theme, setTheme] = useState<string>('')
  const [menu, setMenu] = useState<string>('')

  const getCaption = async () => {
    try {
      setIsLoading(true)
      setErrorMessage('')

      const prompt = generatePrompt({
        theme,
        menu
      })
      if (!prompt) {
        setErrorMessage('Gagal membuat caption. Coba lagi nanti.')
        return
      }

      const generatedCaption = await generateCaption(prompt)
      if (generatedCaption) {
        setCaption(generatedCaption)
      } else {
        setErrorMessage('Gagal membuat caption. Coba lagi nanti.')
      }
    } catch (error: any) {
      console.error('API request failed:', error)

      if (error?.response?.status === 429) {
        setErrorMessage('Kamu telah mencapai limit. Coba lagi nanti.')
      } else {
        setErrorMessage('Gagal membuat caption. Coba lagi nanti.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='mx-auto flex min-h-screen w-full max-w-screen-md flex-col items-center gap-4 p-4 py-10 text-center md:py-20'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-bold max-xs:flex max-xs:flex-col md:text-3xl'>
          <span className='text-primary'>Adam & Hawa Cafe </span>
          Caption Generator
        </h1>
        <p className='text-sm md:text-base'>
          Buat caption Instagram menarik dengan gaya khas Adam & Hawa Cafe
          secara otomatis.
        </p>
      </div>

      <div className='flex w-full flex-col gap-2'>
        <Input
          name='theme'
          label='Tema'
          value={theme}
          onValueChange={setTheme}
        />
        <Input name='menu' label='Menu' value={menu} onValueChange={setMenu} />
      </div>

      <GenerateCaptionButton onClick={getCaption}>
        Buat Caption
      </GenerateCaptionButton>

      <Caption isLoading={isLoading} caption={caption} error={errorMessage} />
    </div>
  )
}

export default Home
