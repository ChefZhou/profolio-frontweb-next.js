import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import { footerLinks } from "../config/footerLinks";
import { usePathname } from "next/navigation";

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

function Sidebar({ open, onClose, currentTime }) {
  const pathname = usePathname();

  const linkStyle = (path) => ({
    color: "primary.main",
    borderBottom: pathname === path ? "2px solid" : "none",
    paddingBottom: "4px",
  });

  const NavLinks = () => (
    <>
      <Link href="/article" passHref>
        <StyledLink>
          <Typography
            variant="body1"
            sx={{
              ...linkStyle("/article"),
              fontSize: "1rem",
            }}
          >
            Articles
          </Typography>
        </StyledLink>
      </Link>
      <Link href="/product" passHref>
        <StyledLink>
          <Typography
            variant="body1"
            sx={{
              ...linkStyle("/product"),
              fontSize: "1rem",
            }}
          >
            Product
          </Typography>
        </StyledLink>
      </Link>
      <Link href="/tools" passHref>
        <StyledLink>
          <Typography
            variant="body1"
            sx={{
              ...linkStyle("/tools"),
              fontSize: "1rem",
            }}
          >
            Tools Box
          </Typography>
        </StyledLink>
      </Link>
    </>
  );

  const FooterLinks = () => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        borderTop: "1px solid",
        borderTopColor: "primary.main",
        paddingTop: 2,
        marginTop: "auto",
      }}
    >
      {footerLinks.map((link) => (
        <Link key={link.text} href={link.href} passHref>
          <StyledLink>
            <Typography
              variant="body1"
              sx={{
                color: "primary.main",
                fontSize: "1rem",
              }}
            >
              {link.text}
            </Typography>
          </StyledLink>
        </Link>
      ))}
    </Box>
  );

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 250,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "primary.main",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            borderBottom: "1px solid",
            paddingBottom: 2,
            marginBottom: 1,
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
        <NavLinks />
        <FooterLinks />
      </Box>
    </Drawer>
  );
}

export default Sidebar;
