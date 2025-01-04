import { Typography } from "@mui/material";

/**
 * 文章標題元件
 * @param {string} title - 標題文字
 * @param {string} variant - 顯示模式: 'card' 用於卡片模式, 'detail' 用於詳細頁面
 */
export default function ArticleTitle({ title, variant = "card" }) {
  const styles = {
    card: {
      variant: "h5",
      sx: {
        fontSize: "1.5rem",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        display: "-webkit-box",
      },
    },
    detail: {
      variant: "h3",
      sx: {
        mb: 3,
        fontWeight: "bold",
      },
    },
  }[variant];

  return (
    <Typography {...styles} color="primary">
      {title}
    </Typography>
  );
}
