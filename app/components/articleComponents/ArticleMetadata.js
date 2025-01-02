import { Box, Chip, Typography } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function ArticleMetadata({ category, createdAt, showReadTime }) {
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
      {showReadTime && (
        <Chip
          icon={<AccessTimeIcon />}
          label="5 min read"
          size="small"
          variant="outlined"
        />
      )}
      <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
        {new Date(createdAt).toLocaleDateString("zh-TW")}
      </Typography>
    </Box>
  );
}
