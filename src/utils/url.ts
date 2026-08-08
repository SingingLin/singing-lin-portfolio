/**
 * 組出正確的靜態資源路徑（public/ 底下的檔案）。
 *
 * Vite 的 `base`（見 vite.config.ts，目前為 '/singing-lin-portfolio/'）只會自動套用在
 * index.html 裡的資源引用、以及用 `import` 進來的模組資源，並不會套用在 JS/TS 程式碼裡
 * 寫死的絕對路徑字串（例如 '/images/avatar.webp'）。若直接把這種字串丟給 <img src>，
 * 部署到有 base path 的環境（如 GitHub Pages 的專案頁）時會抓錯根目錄，圖片全部讀不到。
 *
 * 統一透過這個函式組路徑，確保任何環境（本機 dev、build+preview、正式部署）都能正確
 * 套用當下的 base path。
 */
export function withBase(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
