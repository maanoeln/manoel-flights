import axios from 'axios';

const API_BASE_URL = 'https://sky-scrapper.p.rapidapi.com';
const API_KEY = 'f4cf9519d9msh252278be925fe81p144797jsnf5d5366719b7';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
  },
});
