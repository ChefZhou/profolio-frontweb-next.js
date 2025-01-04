import { Box, Chip, Typography } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

/**
 * 文章元數據元件
 * 顯示文章分類標籤和發布時間
 */
export default function ArticleMetadata({ category, createdAt }) {
  return (
    <Box
      sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}
    >
      <Chip
        icon={<LocalOfferIcon />}
        label={category}
        size="small"
        color="primary"
        variant="outlined"
      />
      <Typography variant="caption" color="text.secondary">
        {new Date(createdAt).toLocaleDateString()}
      </Typography>
    </Box>
  );
}
