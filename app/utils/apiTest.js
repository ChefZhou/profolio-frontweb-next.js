import axios from "axios";
import apiConfig from "../config/apiConfig";

export const testApiConnection = async () => {
  try {
    // 測試API連接
    const response = await axios.get(
      `${apiConfig.baseURL}${apiConfig.apiPath}${apiConfig.endpoints.articles}`,
      {
        headers: apiConfig.headers,
        params: {
          pagination: {
            page: 1,
            pageSize: 1,
          },
        },
      }
    );

    console.log("API連接成功！");
    console.log("服務器回應:", response.status);
    console.log("認證狀態: 成功");
    return true;
  } catch (error) {
    console.error("API連接測試失敗");
    console.error("錯誤狀態碼:", error.response?.status);
    console.error("錯誤信息:", error.response?.data || error.message);
    return false;
  }
};

export const validateApiSetup = async () => {
  // 檢查環境變數
  if (
    !process.env.NEXT_PUBLIC_API_URL ||
    !process.env.NEXT_PUBLIC_STRAPI_API_TOKEN
  ) {
    console.error("環境變數未正確設置");
    return false;
  }

  return await testApiConnection();
};
