import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export const StyledPaper = styled(Paper)`
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${(props) => props.theme.palette.primary.main};
  }
`;
