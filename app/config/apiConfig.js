const apiConfig = {
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "https://backend-web-node-js.onrender.com",
  strapiURL: "https://backend-web-node-js.onrender.com",
  apiPath: "/api",
  headers: {
    Authorization: `Bearer 2f0fc8c3392bc34fdf1639141e67bf51bc900246cca0c595dc81aa2a0ae380d0fd050cb553245820bdb8f1eb33940e546b50b6c138041881a67f535df458fe455a509cbfb78a885f1a9fc4e4e8d307c03b220d6231e0d712ed1242b554f9980d1a808e677607ed80564261c79a3614d99a9119fcff0920974bcd72d7625a32be`,
    "Content-Type": "application/json",
  },
  endpoints: {
    articles: "/articles",
  },
};

export default apiConfig;
