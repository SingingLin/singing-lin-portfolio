import { useEffect, useRef, useState } from 'react'

/**
 * 捲動進場動畫用的 hook：回傳一個 ref 掛在目標元素上。
 *
 * 客戶回饋（v11）：每次捲動到該區塊都要重新播放一次淡入動畫，離開視窗時要有淡出效果，
 * 不能只播放一次。原本進入視窗觸發一次就 `observer.disconnect()`，之後不再變化。
 * 這裡改成持續觀察：進入視窗 visible 設 true（觸發淡入），離開視窗 visible 設 false
 * （觸發淡出，因為 .reveal/.reveal.is-visible 兩個 class 之間本來就有雙向 transition，
 * 見 src/index.css），不再呼叫 disconnect／unobserve，讓它每次進出視窗都重新觸發。
 *
 * prefers-reduced-motion 的處理維持在 CSS 端（見 src/index.css 的對應 media query），
 * 不受這裡的邏輯影響：即使 visible 持續切換，reduced-motion 使用者看到的內容依然
 * 全程可見、無位移、無 transition。
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
          setVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}
