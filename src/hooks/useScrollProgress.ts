import { useEffect, useState } from 'react'

/**
 * Header 頂部捲動進度條用：回傳目前捲動百分比（0-100）。
 * 沿用 useScrollReveal 的寫法風格：純讀取捲動狀態，不影響既有的 scrollspy（active nav）邏輯。
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const ratio = scrollHeight > 0 ? window.scrollY / scrollHeight : 0
      setProgress(Math.min(100, Math.max(0, ratio * 100)))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return progress
}

/**
 * Header sticky 陰影用：回傳是否已捲動超過門檻（預設 8px）。
 */
export function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > threshold)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}
