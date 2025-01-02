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
            height: "140px",
          }}
        >
          {/* 左側文章信息區 */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <ArticleTitle title={article.title} variant="card" />
            <ArticleMetadata
              category={article.category}
              createdAt={article.createdAt}
            />
          </Box>

          {/* 右側圖片區 */}
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
