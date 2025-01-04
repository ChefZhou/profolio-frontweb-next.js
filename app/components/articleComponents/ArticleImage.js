import { Box } from "@mui/material";
import { SIZES } from "../../styles/constants";

/**
 * 文章圖片組件
 * @param {object} thumbnail - 圖片資料，支援多種格式：陣列、物件或直接URL
 * @param {string} title - 圖片標題，用於alt屬性
 * @param {string} variant - 顯示模式，可選："card" 或 "detail"
 */
export default function ArticleImage({ thumbnail, title, variant = "card" }) {
  const thumbnailData = Array.isArray(thumbnail)
    ? thumbnail[0]
    : thumbnail?.data?.attributes || thumbnail;

  const getImageUrl = () => {
    if (!thumbnailData?.url && !thumbnailData?.formats) return null;
    return (
      thumbnailData.url ||
      thumbnailData.formats?.[variant === "card" ? "small" : "large"]?.url
    );
  };

  const thumbnailUrl = getImageUrl();
  if (!thumbnailUrl) return null;

  const imageStyles = {
    card: {
      width: SIZES.cardImageWidth,
      height: SIZES.cardImageHeight,
    },
    detail: {
      width: "100%",
      height: SIZES.detailImageHeight,
      borderRadius: SIZES.borderRadius.large,
      objectFit: "contain",
    },
  }[variant];

  return (
    <Box
      sx={{
        flexShrink: 0,
        overflow: "hidden",
        borderRadius: SIZES.borderRadius.default,
        ...(variant === "detail" && { mb: 4 }),
      }}
    >
      <img
        src={thumbnailUrl}
        alt={title}
        style={{
          ...imageStyles,
          objectFit: variant === "detail" ? "contain" : "cover",
        }}
      />
    </Box>
  );
}
