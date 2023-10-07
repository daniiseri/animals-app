import axios from 'axios';

export const apiNinja = axios.create({
  baseURL: process.env.NINJA_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})