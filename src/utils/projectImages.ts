/**
 * 專案截圖自動掃描（build time）。
 *
 * 用 `import.meta.glob` 掃描 `src/assets/projects/` 底下所有圖片，依「資料夾路徑」
 * （例如 `cathay/etf-app`）分組成 lookup table。resumeData 裡的專案只需要存
 * `imagesDir: 'cathay/etf-app'` 這種資料夾名稱字串，不用再手動列出每張圖片的檔名。
 *
 * 以後要幫某個專案新增截圖，只要把圖檔丟進 `src/assets/projects/<company>/<slug>/`，
 * 檔名建議依 `01.png`、`02.png`... 的慣例命名（決定顯示順序），重新 `npm run dev` 或
 * `npm run build` 一次，圖片就會自動出現，完全不用碰任何 `.tsx`/`.ts` 程式碼。
 *
 * 注意：`import.meta.glob` 只認得 `src/` 底下的模組資源，對 `public/` 資料夾無效
 * （`public/` 裡的檔案不會進入 Vite 的模組圖）。這是這次把專案截圖從
 * `public/images/projects/` 搬到 `src/assets/projects/` 的原因；也因此這裡回傳的路徑
 * 已經是 Vite 處理過的最終資源網址（含正確的 base path 與 hash），元件端不用再套用
 * `withBase()`。
 */
const modules = import.meta.glob('/src/assets/projects/**/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

interface Entry {
  filename: string
  url: string
}

const entriesByFolder = new Map<string, Entry[]>()

for (const [path, url] of Object.entries(modules)) {
  const match = path.match(/^\/src\/assets\/projects\/(.+)\/([^/]+)$/)
  if (!match) continue
  const [, folder, filename] = match

  const list = entriesByFolder.get(folder) ?? []
  list.push({ filename, url })
  entriesByFolder.set(folder, list)
}

const imagesByFolder = new Map<string, string[]>()
for (const [folder, entries] of entriesByFolder) {
  entries.sort((a, b) => a.filename.localeCompare(b.filename, undefined, { numeric: true }))
  imagesByFolder.set(
    folder,
    entries.map((entry) => entry.url),
  )
}

/** 依資料夾名稱（例如 `cathay/etf-app`）取得該專案底下所有截圖網址，依檔名排序。 */
export function getProjectImages(folder?: string): string[] {
  if (!folder) return []
  return imagesByFolder.get(folder) ?? []
}
