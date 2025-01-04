import { Box } from "@mui/material";
import { motion } from "framer-motion";
import ArticleCard from "./ArticleCard";

/**
 * 文章列表展示組件
 * @description 使用 Material-UI 的 Box 組件作為容器，展示文章列表
 * @description 使用 framer-motion 實現列表項目的進場動畫效果
 * @param {Array} articles - 要展示的文章資料陣列
 */
export default function ArticleList({ articles }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {articles.map((article) => (
        <motion.div
          key={article.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ArticleCard article={article} />
        </motion.div>
      ))}
    </Box>
  );
}
