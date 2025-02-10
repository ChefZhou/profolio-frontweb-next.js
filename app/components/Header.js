"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Sidebar from "./Sidebar";

const StyledLink = styled("span")`
  text-decoration: none;
  display: inline-block;
  transition: transform 0.3s;
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

function Header() {
  const [currentTime, setCurrentTime] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const linkStyle = (path) => ({
    color: "primary.main",
    borderBottom: pathname === path ? "2px solid" : "none",
    paddingBottom: "4px",
  });

  const NavLinks = () => (
    <>
      {/* <Link href="/article" passHref>
        <StyledLink>
          <Typography
            variant={isMobile ? "body1" : "h6"}
            sx={{
              ...linkStyle("/article"),
              fontSize: isMobile ? "1rem" : "1.25rem",
            }}
          >
            Articles
          </Typography>
        </StyledLink>
      </Link> */}
      <Link href="/product" passHref>
        <StyledLink>
          <Typography
            variant={isMobile ? "body1" : "h6"}
            sx={{
              ...linkStyle("/product"),
              fontSize: isMobile ? "1rem" : "1.25rem",
            }}
          >
            Product
          </Typography>
        </StyledLink>
      </Link>
      <Link href="/tools" passHref>
        <StyledLink>
          <Typography
            variant={isMobile ? "body1" : "h6"}
            sx={{
              ...linkStyle("/tools"),
              fontSize: isMobile ? "1rem" : "1.25rem",
            }}
          >
            Tools Box
          </Typography>
        </StyledLink>
      </Link>
    </>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: "transparent",
          backdropFilter: "blur(8px)",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {isMobile && (
              <IconButton color="primary" onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
            <Link href="/" passHref>
              <StyledLink>
                <Typography variant="h6" sx={{ color: "primary.main" }}>
                  Denny&#39;s Blog
                </Typography>
              </StyledLink>
            </Link>
          </Box>

          {!isMobile && (
            <Typography
              variant="body1"
              sx={{
                color: "primary.main",
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span>Taiwan</span>
              <span>
                {currentTime?.toLocaleString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: true,
                })}
              </span>
            </Typography>
          )}

          {!isMobile && (
            <div style={{ display: "flex", gap: "16px" }}>
              <NavLinks />
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Sidebar
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        currentTime={currentTime}
      />
    </>
  );
}

export default Header;
