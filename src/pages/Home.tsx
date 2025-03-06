/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'

import { generateCaption, generatePrompt } from '../utils/utils'
import Caption from '../components/Caption'
import { GenerateCaptionButton } from '../components/Button'
import Input from '../components/Input'
import Header from '../components/Header'

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
    <div className='mx-auto flex min-h-screen w-full max-w-screen-sm flex-col items-center gap-6 p-4 py-10 text-center'>
      <Header />

      <div className='flex w-full flex-col gap-4'>
        <Input
          name='theme'
          label='Tema'
          value={theme}
          onValueChange={setTheme}
          placeholder='Ramadhan, Kemerdekaan'
        />
        <Input
          name='menu'
          label='Menu'
          value={menu}
          onValueChange={setMenu}
          placeholder='Kopi Adam, Blue Lagoon, Ayam Geprek'
        />
      </div>

      <GenerateCaptionButton onClick={getCaption}>
        Buat Caption
      </GenerateCaptionButton>

      <Caption isLoading={isLoading} caption={caption} error={errorMessage} />
    </div>
  )
}

export default Home
