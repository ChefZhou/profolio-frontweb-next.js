"use client";

import { useEffect, useState } from "react";
import { use } from "react";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import ErrorMessage from "../../components/common/ErrorMessage";
import ArticleTitle from "../../components/articleComponents/ArticleTitle";
import ArticleImage from "../../components/articleComponents/ArticleImage";
import ArticleMetadata from "../../components/articleComponents/ArticleMetadata";
import ArticleContent from "../../components/articleComponents/ArticleContent";
import { useArticle } from "../../hooks/useArticle";

export default function ArticleDetail({ params }) {
  const router = useRouter();
  const slug = use(params).slug;
  const { article, isLoading, error } = useArticle(slug);

  if (isLoading) return <LoadingSpinner />;
  if (error || !article)
    return <ErrorMessage message={error || "文章不存在"} />;

  return (
    <Box
      sx={{ pt: 12, px: { xs: 2, sm: 6 }, maxWidth: "800px", margin: "0 auto" }}
    >
      <ArticleTitle title={article.title} variant="detail" />
      <ArticleImage
        thumbnail={article.thumbnail}
        title={article.title}
        variant="detail"
      />
      <ArticleMetadata
        category={article.category}
        createdAt={article.createdAt}
        showReadTime={true}
      />
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
