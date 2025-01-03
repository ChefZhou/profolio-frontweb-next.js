import { useState, useEffect } from "react";
import axios from "axios";
import apiConfig from "../config/apiConfig";

export const useArticle = (slug) => {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
        const encodedSlug = encodeURIComponent(slug);
        const response = await axios.get(
          `${apiConfig.baseURL}${apiConfig.apiPath}${apiConfig.endpoints.articles}`,
          {
            params: {
              "filters[slug][$eq]": encodedSlug,
              populate: "*",
            },
            headers: apiConfig.headers,
          }
        );

        if (!response.data?.data?.[0]) {
          throw new Error("文章不存在");
        }

        setArticle(response.data.data[0]);
        setError(null);
      } catch (err) {
        console.error("錯誤詳情:", err.response?.data || err.message);
        setError(err.response?.data?.error?.message || "無法載入文章");
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  return { article, isLoading, error };
};
