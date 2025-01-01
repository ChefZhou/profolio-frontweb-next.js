"use client";

import { useState } from "react";
import { articles } from "../config/articles";
import { Box, Typography, Chip } from "@mui/material";
import ArticleList from "../components/articleComponents/ArticleList";

function Page() {
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const categories = [
    "全部",
    ...new Set(articles.map((article) => article.category)),
  ];
  const filteredArticles =
    selectedCategory === "全部"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

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
            color: "text.primary", // 改為黑色
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

      {/* 分類標籤 */}
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

      {/* 文章列表 */}
      <ArticleList articles={filteredArticles} />
    </Box>
  );
}

export default Page;
