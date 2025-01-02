import { Box } from "@mui/material";
import apiConfig from "../../config/apiConfig";
import { SIZES } from "../../styles/constants";

// 文章圖片組件：根據不同場景展示不同尺寸的圖片
export default function ArticleImage({ thumbnail, title, variant = "card" }) {
  // 圖片驗證與錯誤處理
  const isValidThumbnail = Array.isArray(thumbnail) && thumbnail[0]?.url;
  if (!isValidThumbnail) return null;

  const imageUrl = `${apiConfig.baseURL}${thumbnail[0].url}`;

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
        src={imageUrl}
        alt={title}
        style={{
          ...imageStyles,
          objectFit: "cover",
        }}
      />
    </Box>
  );
}
