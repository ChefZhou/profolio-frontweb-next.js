import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ThreeJSBanner from "./BannerAni";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "calc(100vh - 64px)", sm: "calc(100vh - 128px)" },
        background: "#ffffff",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!isMobile && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            zIndex: 3,
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ThreeJSBanner />
        </Box>
      )}

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(255, 255, 255, 0.7)",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          width: "100%",
          padding: { xs: "0 16px", sm: 0 },
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#000000",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
            fontFamily: "'Orbitron', sans-serif",
            letterSpacing: "0.05em",
            fontSize: {
              xs: "1.5rem",
              sm: "2.5rem",
              md: "3.25rem",
            },
            lineHeight: {
              xs: 1.3,
              sm: 1.4,
            },
          }}
        >
          Bonjour! I am Denny,
          <br /> a front-end developer and gamer.
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
