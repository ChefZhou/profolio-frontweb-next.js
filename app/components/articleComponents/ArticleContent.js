import ReactMarkdown from "react-markdown";
import { Box, Typography, styled } from "@mui/material";

const StyledContent = styled(Box)(({ theme }) => ({
  "& h1": {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(3),
    color: theme.palette.text.primary,
  },
  "& h2": {
    fontSize: "1.75rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(2.5),
    color: theme.palette.text.primary,
  },
  "& h3": {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  "& p": {
    fontSize: "1.1rem",
    lineHeight: 1.8,
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  "& ul, & ol": {
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
  },
  "& li": {
    marginBottom: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  "& blockquote": {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    paddingLeft: theme.spacing(2),
    margin: theme.spacing(2, 0),
    fontStyle: "italic",
    color: theme.palette.text.secondary,
  },
  "& code": {
    backgroundColor: theme.palette.action.hover,
    padding: theme.spacing(0.5, 1),
    borderRadius: theme.shape.borderRadius,
    fontFamily: "monospace",
  },
  "& pre": {
    backgroundColor: theme.palette.action.hover,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    overflow: "auto",
    marginBottom: theme.spacing(2),
    "& code": {
      backgroundColor: "transparent",
      padding: 0,
    },
  },
  "& a": {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  "& img": {
    maxWidth: "100%",
    height: "auto",
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
  },
  "& hr": {
    border: "none",
    height: "1px",
    backgroundColor: theme.palette.divider,
    margin: theme.spacing(3, 0),
  },
}));

export default function ArticleContent({ content }) {
  if (!content) return null;

  return (
    <StyledContent>
      <ReactMarkdown>{content}</ReactMarkdown>
    </StyledContent>
  );
}
