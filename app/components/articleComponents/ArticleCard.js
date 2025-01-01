import { Box, Typography, Chip } from "@mui/material";
import Link from "next/link";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { StyledPaper } from "./styled/StyledPaper";

export default function ArticleCard({ article }) {
  return (
    <Link href={article.link} style={{ textDecoration: "none" }}>
      <StyledPaper sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ color: "primary.main", mb: 2 }}>
          {article.title}
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          {article.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Chip
              icon={<LocalOfferIcon />}
              label={article.category}
              size="small"
              color="primary"
              variant="outlined"
            />
            <Chip
              icon={<AccessTimeIcon />}
              label="5 min read"
              size="small"
              variant="outlined"
            />
          </Box>

          <Typography variant="caption" color="text.secondary">
            {article.date}
          </Typography>
        </Box>
      </StyledPaper>
    </Link>
  );
}
