import { useEffect, useRef, useState } from 'react'

/**
 * 判斷「使用者是不是真的用手機/平板這類觸控裝置在瀏覽」。
 *
 * 客戶（v12）特別強調：這不是偵測螢幕/視窗寬度是否落在手機斷點——桌機使用者把瀏覽器
 * 視窗縮小到很窄，不該被當成手機。真正可靠的訊號是「主要輸入方式是不是粗略（touch）」，
 * 也就是 CSS 的 `pointer` media feature：滑鼠/觸控板是 fine，手指觸控是 coarse。
 *
 * 選 `(pointer: coarse)` 而不是 `'ontouchstart' in window`：後者只代表瀏覽器「支援」
 * 觸控事件 API，很多支援觸控螢幕的 Windows 筆電（主要輸入其實還是滑鼠/觸控板）也會回
 * true，容易誤判；`pointer: coarse` 問的是「目前主要指標裝置是不是粗略輸入」，語意上
 * 才是真正對應「這是不是一台手機/平板」，跟視窗寬度完全無關（不會因為使用者縮小桌機
 * 視窗寬度而變化）。
 */
function isCoarsePointerDevice(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false
  }
  return window.matchMedia('(pointer: coarse)').matches
}

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
 *
 * 客戶回饋（v12）：偵測到是真的觸控主導的手機/平板裝置時，直接關掉這個淡入淡出特效
 * （內容一開始就完整顯示），這是疊加在 prefers-reduced-motion 之上的額外條件，不是
 * 取代它——用 `useState` 的 lazy initializer 在第一次 render 就同步判斷好初始值，
 * 這個 App 是純 CSR（沒有 SSR/預先輸出的 HTML），畫面第一次真正繪製出來時就已經是
 * 最終的 visible 狀態，不會有「先閃一下 opacity:0 再變 visible」的畫面閃爍問題。
 * 觸控裝置也直接跳過 IntersectionObserver 的建立，省掉持續監看捲動交叉狀態的運算與
 * setState 重繪成本（客戶提到的手機效能考量）。
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(() => isCoarsePointerDevice())

  useEffect(() => {
    const node = ref.current
    if (!node) {
      return undefined
    }

    if (isCoarsePointerDevice()) {
      setVisible(true)
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
