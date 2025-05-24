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
}
