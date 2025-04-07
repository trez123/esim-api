import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';

@Injectable()
export class KeepgoService {
  private readonly base_url = 'https://myaccount.keepgo.com';
  private readonly timeout_ms = 10 * 60 * 1000;
  private readonly headers = {
    apiKey: process.env.API_KEY,
    accessToken: process.env.ACCESS_TOKEN,
    'Content-Type': 'application/json',
  };

  async get(
    path: string,
    query: { [key: string]: string | number | boolean } = {},
  ): Promise<any> {
    const url = new URL(path, this.base_url);
    Object.keys(query).forEach((key) =>
      url.searchParams.append(key, String(query[key])),
    );
    const config: AxiosRequestConfig = {
      timeout: this.timeout_ms,
      headers: this.headers,
    };

    try {
      const response = await axios.get(url.toString(), config);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.response?.data || error.message);
        throw new Error(
          `Failed to Get: ${error.response?.status} - ${error.response?.data}`,
        );
      } else {
        console.error('Unexpected error:', error);
        throw new Error('An unexpected error occurred');
      }
    }
  }

  async post(path: string, data?: any): Promise<any> {
    const url = new URL(path, this.base_url);
    const config: AxiosRequestConfig = {
      timeout: this.timeout_ms,
      headers: this.headers,
    };

    try {
      const response = await axios.post(url.toString(), data, config);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.response?.data || error.message);
        throw new Error(
          `Failed to Post: ${error.response?.status} - ${error.response?.data}`,
        );
      } else {
        console.error('Unexpected error:', error);
        throw new Error('An unexpected error occurred');
      }
    }
  }

  async put(path: string, data: any): Promise<any> {
    const url = new URL(path, this.base_url);
    const config: AxiosRequestConfig = {
      timeout: this.timeout_ms,
      headers: this.headers,
    };

    try {
      const response = await axios.put(url.toString(), data, config);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.response?.data || error.message);
        throw new Error(
          `Failed to PUT: ${error.response?.status} - ${error.response?.data}`,
        );
      } else {
        console.error('Unexpected error:', error);
        throw new Error('An unexpected error occurred');
      }
    }
  }
}
