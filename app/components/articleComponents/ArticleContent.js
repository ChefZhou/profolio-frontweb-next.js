import parse from "html-react-parser";
import { Box } from "@mui/material";
import { StyledContent } from "./styles/StyledContent";
import { ImageRenderer, processMarkdownImage } from "./ImageRenderer";
import { processLists } from "./ListProcessor";

/**
 * 文章內容渲染組件
 * @param {string} content - Markdown 格式的文章內容
 */
export default function ArticleContent({ content }) {
  if (!content) return null;

  /**
   * 內容處理主函數
   * 處理順序：1.圖片 2.列表
   */
  const processContent = (content) => {
    let processedContent = content;
    processedContent = processMarkdownImage(processedContent);
    processedContent = processLists(processedContent);
    return processedContent;
  };

  const parseOptions = {
    replace: (domNode) => {
      if (domNode.type === "tag" && domNode.name === "img") {
        // 檢查前後節點是否也是圖片
        const prevNode = domNode.prev;
        const nextNode = domNode.next;
        const isInSequence =
          prevNode?.name === "img" || nextNode?.name === "img";

        return (
          <Box
            sx={{
              display: isInSequence ? "inline-flex" : "block",
              gap: 2,
              justifyContent: "center",
            }}
          >
            <ImageRenderer
              src={domNode.attribs.src}
              alt={domNode.attribs.alt}
              isInSequence={isInSequence}
            />
          </Box>
        );
      }
    },
  };

  const processedContent = processContent(content);
  return <StyledContent>{parse(processedContent, parseOptions)}</StyledContent>;
}
