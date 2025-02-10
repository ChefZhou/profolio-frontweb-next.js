"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import { footerLinks } from "../config/footerLinks";

const StyledLink = styled("span")`
  text-decoration: none;
  display: inline-block;
  transition: transform 0.3s;
  color: ${(props) => props.theme.palette.primary.main};
  margin: 0 12px;
  cursor: pointer;

  &:hover {
    animation: flipVertical 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes flipVertical {
    0% {
      transform: rotateX(0deg);
    }
    100% {
      transform: rotateX(360deg);
    }
  }
`;

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(8px)",
        py: 2,
        position: "static",
        width: "100%",
        zIndex: 2,
      }}
    >
      <Container
        sx={{
          px: 0,
          maxWidth: "100% !important",
        }}
      >
        <Box
          sx={{
            display: "flex",
            position: "relative",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            minHeight: { xs: "120px", sm: "auto" },
          }}
        >
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: { xs: 1, sm: 2 },
              ml: { xs: 0, sm: 2 },
              position: { xs: "static", sm: "absolute" },
              left: 0,
              bottom: 0,
              flexWrap: "wrap",
              justifyContent: "center",
              mb: { xs: 2, sm: 0 },
            }}
          >
            {footerLinks.map((link) => (
              <Link key={link.text} href={link.href} passHref>
                <StyledLink target={link.target}>{link.text}</StyledLink>
              </Link>
            ))}
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "primary.main",
              position: { xs: "static", sm: "absolute" },
              width: "100%",
              textAlign: "center",
              left: 0,
              pointerEvents: "none",
              fontSize: { xs: "0.8rem", sm: "0.875rem" },
            }}
          >
            © {new Date().getFullYear()} Denny&apos;s product。
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
