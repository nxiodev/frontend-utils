import { Injectable } from '@angular/core';
import axios, { AxiosError } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly baseUrl = 'http://localhost:8000/api';

  constructor() {}

  async getAllUsers(): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/users/`);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(`Error Code: ${error.response?.status}\nMessage: ${error.message}`);
      } else {
        console.error('Unknown error occurred:', error);
      }
      throw error;
    }
  }

  async login(email: string, password: string): Promise<any> {
    try {
      const response = await axios.post(`${this.baseUrl}/token/`, {
        email,
        password
      });
      const token = response.data.access;
      const refreshToken = response.data.refresh;
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('refreshToken', refreshToken);
      return token;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(`Error Code: ${error.response?.status}\nMessage: ${error.message}`);
      } else {
        console.error('Unknown error occurred:', error);
      }
      throw error;
    }
  }

  async logout(): Promise<void> {
    const refreshToken = sessionStorage.getItem('refreshToken');
    try {
      await axios.post(`${this.baseUrl}/logout/`, {
        refresh: refreshToken
      });
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('refresh_token');
    }
  }

}
