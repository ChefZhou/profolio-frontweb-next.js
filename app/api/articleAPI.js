import axios from "axios";
import { useEffect, useState } from "react";
import apiConfig from "../config/apiConfig";

const ArticleAPI = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${apiConfig.baseURL}${apiConfig.apiPath}${apiConfig.endpoints.articles}?populate=*`,
          { headers: apiConfig.headers }
        );

        if (!response.data?.data) {
          throw new Error("資料結構不正確");
        }

        // 直接使用原始資料，不做轉換
        setArticles(response.data.data);
        setError(null);
      } catch (err) {
        console.error("錯誤詳情:", err);
        setError("無法載入文章");
        setArticles([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { articles, isLoading, error };
};

export default ArticleAPI;
