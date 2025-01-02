import { Typography } from "@mui/material";

export default function ArticleContent({ content }) {
  return (
    <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
      {content}
    </Typography>
  );
}
