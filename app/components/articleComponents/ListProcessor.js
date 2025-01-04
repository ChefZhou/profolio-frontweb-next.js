/**
 * 列表處理器
 * 將 Markdown 的 - 列表語法轉換為 HTML ul/li 標籤
 */
export const processLists = (content) => {
  const lines = content.split("\n");
  let inList = false;

  const processed = lines
    .map((line) => {
      if (line.trim().startsWith("-")) {
        if (!inList) {
          inList = true;
          return "<ul><li>" + line.trim().substring(1).trim() + "</li>";
        }
        return "<li>" + line.trim().substring(1).trim() + "</li>";
      } else if (inList) {
        inList = false;
        return "</ul>" + line;
      }
      return line;
    })
    .join("\n");

  return inList ? processed + "</ul>" : processed;
};
