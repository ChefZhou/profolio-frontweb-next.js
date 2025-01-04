/*
 * StyledPaper 組件 - 文章卡片的樣式容器
 * 特色:
 * 1. 懸停效果 - 上移動畫和陰影變化
 * 2. 左側邊框強調 - 使用主題主色
 * 3. 圓角設計
 * 4. 過渡動畫效果
 */

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
