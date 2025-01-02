import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { TRANSITIONS, SHADOWS, SIZES } from "../../styles/constants";

export const StyledPaper = styled(Paper)`
  position: relative;
  transition: ${TRANSITIONS.default};
  overflow: hidden;
  border-radius: ${SIZES.borderRadius.large};
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${SHADOWS.hover};
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
