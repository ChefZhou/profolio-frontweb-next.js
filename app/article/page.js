"use client";

import { useState } from "react";
import { Box, Typography, Chip } from "@mui/material";
import ArticleList from "../components/articleComponents/ArticleList";

function Page() {
  const [selectedCategory, setSelectedCategory] = useState("全部");

  // 暫時設定為空陣列
  const articles = [];
  const isLoading = false;
  const categories = [];

  return (
    <Box
      sx={{
        pt: 12,
        px: { xs: 2, sm: 6 },
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* 標題區域 */}
      <Box sx={{ mb: 6, textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{
            color: "text.primary",
            fontWeight: "bold",
            mb: 2,
            fontFamily: "Orbitron",
            letterSpacing: "0.1em",
          }}
        >
          Articles
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Buliding... 🚀
        </Typography>
      </Box>

      {/* 分類選擇區 */}
      <Box sx={{ mb: 4, display: "flex", gap: 1, flexWrap: "wrap" }}>
        {categories.map((category) => (
          <Chip
            key={category}
            label={category}
            onClick={() => setSelectedCategory(category)}
            color={selectedCategory === category ? "primary" : "default"}
            sx={{ borderRadius: "8px", "&:hover": { opacity: 0.8 } }}
          />
        ))}
      </Box>

      {/* 顯示建置中訊息 */}
      <Box sx={{ pt: 4, textAlign: "center" }}>
        <Typography variant="h5" color="text.secondary">
          文章內容建置中，敬請期待...
        </Typography>
      </Box>
    </Box>
  );
}

export default Page;
