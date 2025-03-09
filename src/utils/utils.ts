import { GoogleGenerativeAI } from '@google/generative-ai'

import { PromptOptions } from '../interfaces/prompt'
import { apiKey } from './constants'

export const generatePrompt = ({ theme, menu }: PromptOptions) => {
  let additionalPrompt: string = ''

  if (theme && menu) {
    additionalPrompt = `Caption harus mempunyai tema ${theme} dan menyertakan kata ${menu}, yang merupakan menu dari Adam & Hawa Cafe. Caption boleh menggambarkan suasana yang mewakili tema tersebut jika cocok dan penyampaian yang segar setiap kali caption dibuat. Caption harus menyertakan kata ${menu}, yang merupakan menu dari Adam & Hawa Cafe. Buat caption yang menarik dan menggugah selera.`
  } else if (theme) {
    additionalPrompt = `Caption harus mempunyai tema ${theme} dan menyertakan kata ${menu}, yang merupakan menu dari Adam & Hawa Cafe. Caption boleh menggambarkan suasana yang mewakili tema tersebut jika cocok dan penyampaian yang segar setiap kali caption dibuat.`
  } else if (menu) {
    additionalPrompt = `Caption harus menyertakan kata ${menu}, yang merupakan menu dari Adam & Hawa Cafe. Buat caption yang menarik dan menggugah selera..`
  }

  const prompt = `
        Aku adalah seorang content creator untuk sebuah coffee shop bernama Adam & Hawa Cafe. Tugasku adalah membuat konten yang menarik berupa foto dan video yang diunggah di akun Instagram resmi coffee shop ini. Aku mengalami kesulitan dalam menentukan caption yang kreatif dan engaging untuk setiap postingan Instagram setelah selesai membuat konten.

        Bantu aku membuat caption Instagram yang tidak hanya informatif tetapi juga memiliki sentuhan kreatif, unik, dan membangkitkan emosi. Sesuaikan gaya bahasa, panjang kalimat, dan nada penulisan dengan caption-caption yang pernah aku buat sebelumnya, namun tetap menghasilkan sentuhan yang segar, modern, dan mengundang interaksi dari audiens. Gunakan variasi diksi dan struktur kalimat agar setiap caption terasa berbeda dan tidak repetitif. 

        Berikut adalah beberapa contoh caption yang pernah aku buat:
        - Jadikan camilan ringan sebagai pilihan terbaik untuk menikmati waktu santaimu.
        - Ruangan ini menjadi saksi setiap cerita baru untuk memulai sesuatu hal, dari obrolan santai sampai kerjaan.
        - Selalu memeriksa prosesnya, untuk membawa hasil yang berkualitas baik pada kopi dan minuman kita.
        - Rasakan suasana tropis yang nyaman di Adam & Hawa Cafe.
        - Nikmati nasi goreng seafood kami yang lezat dan juicy, disajikan dengan sayuran segar dan telur goreng.
        - Jangan biarkan harimu dingin, hangatkan dengan cokelat panas yang kaya dan creamy.
        - Kursi yang nyaman di sudut, hidangan yang menyenangkan, dan kebersamaan bertemu. Setiap momen menjadi istimewa!
        - Vietnam drip, kopi yang memiliki rasa yang kaya dan aroma yang menggugah.
        - Minuman Pour Coffee adalah jawaban untuk melepas dahaga di tengah hari yang panas.
        - Seperti kita menikmati setiap suapan es krim, mari kita nikmati setiap momen hidup.
        - Nasi ayam kalasan, rasa yang tak terkalahkan. Nikmati nasi ayam kalasan dengan rasa khas Jawa hanya di Adam & Hawa Cafe.
        - Rasakan kesempurnaan rasa cemilan dan minuman yang bikin hari anda lebih bahagia!
        - Mencari sesuatu yang berbeda? Kunjungi Adam & Hawa Cafe di lantai 2 untuk pengalaman bersantai yang indah.
        - Nikmati kesempurnaan rasa kopi panas dengan seni latte yang unik!
        - Nikmati kesegaran hari ini dengan Magic Aurora dan Pour Chicken Bites.
        - Kami menyajikan yang terbaik untuk anda, nasi ayam sambal terasi khas Adam & Hawa Cafe.
        - Puaskan keinginanmu akan sesuatu yang manis dan berbuih dengan soda berkilauan kami!
        - Rasakan layanan terbaik dari tim Adam & Hawa Cafe! Kami berdedikasi untuk menyediakan pelanggan tercinta kami dengan layanan luar biasa dan suasana yang hangat dan ramah.
        - Ubah momen-momen biasa menjadi kenangan luar biasa dengan minuman kami yang istimewa!

        Berikan aku satu caption baru yang memiliki gaya bahasa yang sama dengan contoh di atas, namun tetap menghasilkan sentuhan yang kreatif, segar, dan mampu menarik perhatian audiens. ${additionalPrompt && `${additionalPrompt}. `} Tulis caption tanpa penjelasan tambahan.
      `

  return prompt
}

export const generateCaption = async (prompt: string) => {
  const genAI = new GoogleGenerativeAI(apiKey)
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })

  const response = await model.generateContent(prompt)

  return response.response.text()
}
