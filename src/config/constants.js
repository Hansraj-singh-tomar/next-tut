// build ke hisaab se ham application ki api ki url ko kaise change kar sakte hai
export const API_BASE_URL =
  process.env.NODE_ENV == "development"
    ? "www.api.dev.example.com"
    : "www.api.prod.example.com";
