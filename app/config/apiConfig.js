const apiConfig = {
  baseURL: "http://localhost:1337",
  apiPath: "/api",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
  },
  endpoints: {
    articles: "/articles",
  },
};

export default apiConfig;
