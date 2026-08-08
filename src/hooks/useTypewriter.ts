import { useEffect, useState } from 'react'

/**
 * Hero 職稱文字的打字機效果：掛載時逐字輸出一次，不循環、不刪字，
 * 避免過度花俏影響第一印象的專業感。
 */
export function useTypewriter(text: string, speed = 90) {
  const [output, setOutput] = useState('')

  useEffect(() => {
    setOutput('')
    let i = 0
    const timer = window.setInterval(() => {
      i += 1
      setOutput(text.slice(0, i))
      if (i >= text.length) {
        window.clearInterval(timer)
      }
    }, speed)

    return () => window.clearInterval(timer)
  }, [text, speed])

  return output
}
