/**
 * 專案資料配置
 * @typedef {Object} Project
 * @property {number} id - 專案唯一識別碼
 * @property {string} title - 專案標題
 * @property {string} description - 專案描述
 * @property {string} link - 專案連結
 * @property {('web'|'video'|'other')} category - 專案分類
 * @property {string} date - 專案日期
 */

export const articles = [
  {
    id: 1,
    title: "文章系統測試",
    description: "測試，點擊並不會有反應",
    date: "2077-7-7",
    category: "Programming",
    link: "/article/first-react",
  },
];
