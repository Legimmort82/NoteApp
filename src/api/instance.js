import axios from "axios";

const createApiClient = (baseUrl) => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 30000,
    headers: {
      Accept: "application/json",
    },
  });

  return instance;
};

const apiClient = createApiClient(process.env.NEXT_PUBLIC_API_URL);

export { apiClient };
