import axios, { AxiosInstance } from 'axios';

const API_URL = 'http://localhost:4000';

class HttpClient {
  private static _instance = new HttpClient();

  private httpInstance: AxiosInstance;

  private authorization: string;

  constructor() {
    this.httpInstance = axios.create({
      baseURL: API_URL,
    });

    this.authorization = '';

    this.httpInstance.interceptors.request.use((config) => {
      if (this.authorization) {
        config.headers!['Authorization'] = this.authorization;
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
      },
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
    // @ts-expect-error 모든 API 는 { data: 결과 } 형태임을 가정한다.
    return res?.data?.data;
  }

  async post<T>(url: string, data: Record<string, any>): Promise<T> {
    const res = await this.httpInstance.post<T>(url, data);
    // @ts-expect-error 모든 API 는 { data: 결과 } 형태임을 가정한다.
    return res?.data?.data;
  }

  async put<T>(url: string, data: Record<string, any>): Promise<T> {
    const res = await this.httpInstance.put<T>(url, data);
    // @ts-expect-error 모든 API 는 { data: 결과 } 형태임을 가정한다.
    return res?.data?.data;
  }
}

const httpClient = HttpClient.instance;

export { httpClient };
