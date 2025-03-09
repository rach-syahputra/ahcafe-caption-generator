/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react'

import { generateCaption, generatePrompt } from '../utils/utils'
import Caption from '../components/Caption'
import { GenerateCaptionButton } from '../components/Button'
import Input from '../components/Input'
import Header from '../components/Header'

const Home = () => {
  const captionRef = useRef<HTMLElement | null>(null)
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

  useEffect(() => {
    if (caption && captionRef.current) {
      captionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [caption])

  return (
    <div className='flex min-h-screen w-full flex-col justify-between'>
      <div className='mx-auto flex w-screen max-w-screen-sm flex-col gap-6 p-4 pb-10'>
        <Header />

        <section className='flex w-full flex-col gap-4'>
          <Input
            name='theme'
            label='Tema'
            value={theme}
            onValueChange={setTheme}
            placeholder='Ramadhan, Olahraga'
          />
          <Input
            name='menu'
            label='Menu'
            value={menu}
            onValueChange={setMenu}
            placeholder='Kopi Adam, Nasi Goreng, Ayam Geprek'
          />
        </section>

        <GenerateCaptionButton disabled={isLoading} onClick={getCaption} />

        <Caption
          ref={captionRef}
          isLoading={isLoading}
          caption={caption}
          error={errorMessage}
        />
      </div>
    </div>
  )
}

export default Home
