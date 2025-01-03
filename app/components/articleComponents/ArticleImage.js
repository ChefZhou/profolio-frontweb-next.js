import { Box } from "@mui/material";
import { SIZES } from "../../styles/constants";

// 文章圖片組件：根據不同場景展示不同尺寸的圖片
export default function ArticleImage({ thumbnail, title, variant = "card" }) {
  // 處理多種可能的縮圖數據格式
  const thumbnailData = Array.isArray(thumbnail)
    ? thumbnail[0]
    : thumbnail?.data?.attributes || thumbnail;

  // 根據不同場景選擇最適合的圖片尺寸
  const getImageUrl = () => {
    if (!thumbnailData) return null;

    if (thumbnailData.url) {
      return thumbnailData.url;
    }

    if (variant === "card") {
      return (
        thumbnailData.formats?.thumbnail?.url ||
        thumbnailData.formats?.small?.url
      );
    }
    return (
      thumbnailData.formats?.large?.url || thumbnailData.formats?.medium?.url
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
        onError={(e) => console.error("圖片載入失敗:", thumbnailUrl)}
        style={{
          ...imageStyles,
          objectFit: "cover",
        }}
      />
    </Box>
  );
}
