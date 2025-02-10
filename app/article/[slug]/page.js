"use client";

import { useRouter } from "next/navigation";
import { Box, Button, Typography } from "@mui/material";

export default function ArticleDetail() {
  const router = useRouter();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        px: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "text.secondary",
          textAlign: "center",
          fontWeight: 500,
        }}
      >
        文章內容建置中，敬請期待...
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => router.push("/article")}
      >
        返回文章列表
      </Button>
    </Box>
  );
}
