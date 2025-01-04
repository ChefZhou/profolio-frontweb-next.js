import { useState, useEffect } from "react";
import axios from "axios";
import apiConfig from "../config/apiConfig";

/**
 * 文章資料擷取 Hook
 * @description 根據文章 slug 取得文章資料，處理載入狀態和錯誤情況
 * @param {string} slug - 文章的唯一識別碼
 * @returns {Object} { article, isLoading, error }
 */
export const useArticle = (slug) => {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${apiConfig.baseURL}${apiConfig.apiPath}${apiConfig.endpoints.articles}`,
          {
            params: {
              "filters[slug][$eq]": encodeURIComponent(slug),
              populate: "*",
            },
            headers: apiConfig.headers,
          }
        );

        if (!response.data?.data?.[0]) throw new Error("此文章不存在");
        setArticle(response.data.data[0]);
        setError(null);
      } catch (err) {
        setError("此文章不存在");
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) fetchArticle();
  }, [slug]);

  return { article, isLoading, error };
};
