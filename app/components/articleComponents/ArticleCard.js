import { Box } from "@mui/material";
import Link from "next/link";
import { StyledPaper } from "./StyledPaper";
import ArticleImage from "./ArticleImage";
import ArticleMetadata from "./ArticleMetadata";
import ArticleTitle from "./ArticleTitle";

// 文章卡片組件：展示文章預覽信息
export default function ArticleCard({ article }) {
  if (!article) return null;

  return (
    <Link href={`/article/${article.slug}`} style={{ textDecoration: "none" }}>
      <StyledPaper sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "flex-start",
            minHeight: "140px",
          }}
        >
          {/* 左側：標題、標籤和摘要區 */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              height: "100%",
            }}
          >
            <ArticleTitle title={article.title} variant="card" />
            <ArticleMetadata
              category={article.category}
              createdAt={article.createdAt}
            />
            {article.summary && (
              <Box
                sx={{
                  color: "text.secondary",
                  fontSize: "0.9rem",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {article.summary}
              </Box>
            )}
          </Box>

          {/* 右側：文章縮圖 */}
          <ArticleImage
            thumbnail={article.thumbnail}
            title={article.title}
            variant="card"
          />
        </Box>
      </StyledPaper>
    </Link>
  );
}
