/**
 * 專案資料配置
 * @typedef {Object} Project
 * @property {number} id - 專案唯一識別碼
 * @property {string} title - 專案標題
 * @property {string} imageUrl - 專案圖片路徑
 * @property {string} description - 專案描述
 * @property {string} link - 專案連結
 * @property {('web'|'video'|'other')} category - 專案分類
 */

export const products = [
  {
    id: 1,
    title: "MapYourTrip",
    imageUrl: "/product1.png",
    description:
      "這個網站專為選擇困難的人設計，幫助您快速做出決定。無論是找美食還是旅遊景點，都能輕鬆解決。\n\n" +
      "主要功能：\n" +
      "• 直觀地圖界面：在地圖上標記感興趣的地點\n" +
      "• 智能推薦：根據當前位置提供隨機推薦\n" +
      "• 省時省心：告別選擇困難\n\n" +
      "簡單三步驟：登入網站、探索地點、獲得推薦。讓您輕鬆探索未知地點，享受隨機帶來的驚喜，使生活更加愉快。",
    link: "https://map-your-trip.netlify.app/",
    category: "web",
  },
  {
    id: 2,
    title: "Hotel Management System",
    imageUrl: "/product2.png",
    description:
      "這個專案模擬了旅館的員工後台管理系統，前端使用 Vite/React，後端資料庫採用 Supabase。\n\n" +
      "主要功能：\n" +
      "• 安全的登入系統：支援登入/登出及新帳號創建，新帳號需透過默認帳號建立並經由 Supabase 寄送驗證信\n" +
      "• 個人會員中心：可修改密碼、頭像和名稱，提升個人資料管理便利性\n" +
      "• 模式切換：支援普通/暗黑模式，透過右上角圖標切換\n" +
      "• 營業儀表板：即時顯示營業資訊，包含營業額和入住狀況報表\n" +
      "• 訂單管理：處理顧客入住/退房事宜（目前使用模擬資料）\n" +
      "• 房型設置：管理房間價格和相關規定\n" +
      "• 員工帳號管理：模擬新進員工帳號建立流程",
    link: "https://hotel-backend-system-react.netlify.app/dashboard?last=90",
    category: "web",
  },
  {
    id: 3,
    title: "Recipe Finder",
    imageUrl: "/product3.png",
    description:
      "這是一個方便實用的食譜搜尋網站，使用者可以透過英文關鍵字搜尋各種食譜。\n\n" +
      "主要功能：\n" +
      "• 食譜搜尋：輸入英文關鍵字即可搜尋想做的菜餚\n" +
      "• 視覺化瀏覽：搜尋結果以圖文並茂的方式呈現，方便快速選擇\n" +
      "• 詳細食譜：提供完整的食材清單和烹飪步驟說明\n" +
      "• 本地收藏：可將喜愛的食譜儲存在瀏覽器中，無需註冊帳號\n" +
      "• 隱私保護：所有資料都儲存在使用者本地，確保個人隱私\n\n" +
      "使用提醒：請使用英文關鍵字搜尋以獲得最佳搜尋結果。",
    link: "https://recipe-js-denny.netlify.app/",
    category: "web",
  },
];
