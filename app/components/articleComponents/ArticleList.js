import { Box } from "@mui/material";
import { motion } from "framer-motion";
import ArticleCard from "./ArticleCard";

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
