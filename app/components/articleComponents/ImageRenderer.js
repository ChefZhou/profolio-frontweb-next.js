import { Box } from "@mui/material";

/**
 * Markdown 圖片語法處理器
 * 將 ![alt](url) 轉換為 HTML img 標籤
 */
export const processMarkdownImage = (content) => {
  return content.replace(/!\[(.*?)\]\((.*?)\)/g, (match, alt, url) => {
    return `<img src="${url}" alt="${alt || ""}" />`;
  });
};

/**
 * 圖片渲染組件
 * 提供統一的圖片樣式與響應式處理
 */
export const ImageRenderer = ({ src, alt, isInSequence }) => (
  <Box
    component="img"
    src={src}
    alt={alt || ""}
    sx={{
      maxWidth: isInSequence ? "45%" : "80%",
      height: "auto",
      display: "block",
      margin: isInSequence ? "0" : "20px auto",
      borderRadius: 1,
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
        cursor: "pointer",
      },
    }}
  />
);
