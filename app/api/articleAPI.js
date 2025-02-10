import axios from "axios";
import { useEffect, useState } from "react";
import apiConfig from "../config/apiConfig";

const ArticleAPI = () => {
  return {
    articles: [],
    isLoading: false,
    error: null,
  };
};

export default ArticleAPI;
