"use client";

import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  transition: "transform 0.2s, box-shadow 0.2s",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[4],
  },
}));

const ToolBoxItem = ({ icon: Icon, name, color }) => {
  return (
    <Box
      sx={{
        flexGrow: 0,
        width: {
          xs: "calc(50% - 12px)",
          sm: "calc(33.333% - 16px)",
          md: "calc(25% - 18px)",
        },
      }}
    >
      <StyledPaper elevation={2}>
        <Box sx={{ color: color }}>
          <Icon size={50} />
        </Box>
        <Typography variant="subtitle1" sx={{ mt: 1 }}>
          {name}
        </Typography>
      </StyledPaper>
    </Box>
  );
};

export default ToolBoxItem;
