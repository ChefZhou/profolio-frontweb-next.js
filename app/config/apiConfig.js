if (!process.env.NEXT_PUBLIC_API_URL) {
  console.error("警告: API URL 未設置");
}

if (!process.env.NEXT_PUBLIC_STRAPI_API_TOKEN) {
  console.error("警告: API Token 未設置");
}

const apiConfig = {
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "https://backend-web-node-js.onrender.com",
  apiPath: "/api",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    "Content-Type": "application/json",
  },
  endpoints: {
    articles: "/articles",
  },
};

export default apiConfig;
