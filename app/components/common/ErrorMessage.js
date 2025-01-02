import { Box, Typography } from "@mui/material";

export default function ErrorMessage({ message }) {
  return (
    <Box sx={{ pt: 12, textAlign: "center" }}>
      <Typography color="error">{message}</Typography>
    </Box>
  );
}
