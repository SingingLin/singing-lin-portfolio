import { useEffect, useRef, useState } from 'react'

/**
 * 捲動進場動畫用的 hook：回傳一個 ref 掛在目標元素上，
 * 元素進入視窗時 visible 會變 true（只觸發一次，不會反覆閃爍）。
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) {
      return undefined
    }

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}
