import { Typography } from "@mui/material";

export default function ArticleTitle({ title, variant = "card" }) {
  const styles = {
    card: {
      variant: "h5",
      sx: {
        color: "primary.main",
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
        color: "primary.main",
      },
    },
  }[variant];

  return <Typography {...styles}>{title}</Typography>;
}
