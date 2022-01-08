import axios, { AxiosInstance } from "axios";

const BASE_URL = "http://localhost:4000";

class HttpClient {
  private static _instance = new HttpClient();

  private httpInstance: AxiosInstance;

  private authorization: string;

  constructor() {
    this.httpInstance = axios.create({
      baseURL: BASE_URL,
    });

    this.authorization = "";

    this.httpInstance.interceptors.request.use((config) => {
      if (this.authorization) {
        // @ts-ignore
        config.headers.Authorization = this.authorization;
      }

      return config;
    });

    this.httpInstance.interceptors.response.use(
      (res) => res,
      (err) => {
        if (err?.response?.data?.errorMessage) {
          err.message = err?.response?.data?.errorMessage || err.message;
        }
        return Promise.reject(err);
      }
    );
  }

  static get instance() {
    return this._instance;
  }

  hasAuthorization() {
    return !!this.authorization;
  }

  setAuthorization(authorization: string) {
    this.authorization = authorization;
  }

  async get<T>(url: string, config?: { params?: any }): Promise<T> {
    const res = await this.httpInstance.get<T>(url, config);
    return res?.data;
  }

  async post<T>(url: string, data: Record<string, any>): Promise<T> {
    const res = await this.httpInstance.post<T>(url, data);
    return res?.data;
  }
}

export const httpClient = HttpClient.instance;
