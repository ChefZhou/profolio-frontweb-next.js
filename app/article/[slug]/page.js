"use client";

import { useParams, useRouter } from "next/navigation"; // 添加 useRouter
import { Box, Button, Divider, Typography } from "@mui/material";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import ArticleTitle from "../../components/articleComponents/ArticleTitle";
import ArticleImage from "../../components/articleComponents/ArticleImage";
import ArticleMetadata from "../../components/articleComponents/ArticleMetadata";
import ArticleContent from "../../components/articleComponents/ArticleContent";
import { useArticle } from "../../hooks/useArticle";

export default function ArticleDetail() {
  const router = useRouter(); // 初始化 router
  const { slug } = useParams(); // 使用 useParams() 取得 slug 參數
  const { article, isLoading, error } = useArticle(slug);

  // 載入狀態
  if (isLoading) return <LoadingSpinner />;

  // 錯誤處理
  if (error) {
    return (
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          px: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#d32f2f",
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          {error.message || "發生錯誤，請稍後再試。"}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => router.push("/article")}
        >
          返回文章列表
        </Button>
      </Box>
    );
  }

  // 無文章資料
  if (!article) {
    return (
      <Box sx={{ pt: 12, px: { xs: 2, sm: 6 }, textAlign: "center" }}>
        <Typography variant="h5" color="text.secondary">
          找不到文章，請返回列表。
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push("/article")}
        >
          返回文章列表
        </Button>
      </Box>
    );
  }

  // 文章內容顯示
  return (
    <Box
      sx={{ pt: 12, px: { xs: 2, sm: 6 }, maxWidth: "800px", margin: "0 auto" }}
    >
      <ArticleTitle title={article.title} variant="detail" />
      <Box sx={{ my: 3 }}>
        <ArticleMetadata
          category={article.category}
          createdAt={article.createdAt}
        />
      </Box>
      <ArticleImage
        thumbnail={article.thumbnail}
        title={article.title}
        variant="detail"
      />
      <Divider sx={{ my: 4 }} />
      <ArticleContent content={article.content} />
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push("/article")}
        >
          返回文章列表
        </Button>
      </Box>
    </Box>
  );
}
