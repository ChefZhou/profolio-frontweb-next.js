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
