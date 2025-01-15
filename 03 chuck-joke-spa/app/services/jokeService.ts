import { ChuckNorrisJoke } from '../types/ChuckNorrisJoke';

const BASE_URL = 'https://api.chucknorris.io/jokes';

export const jokeService = {
    async getRandomJoke(category?: string): Promise<ChuckNorrisJoke> {
        const url = category && category !== 'random'
            ? `${BASE_URL}/random?category=${category}`
            : `${BASE_URL}/random`;
        const response = await fetch(url);
        return response.json();
    },

    async getCategories(): Promise<string[]> {
        const response = await fetch(`${BASE_URL}/categories`);
        return response.json();
    },

    async searchJokes(query: string): Promise<ChuckNorrisJoke[]> {
        const response = await fetch(`${BASE_URL}/search?query=${query}`);
        const data = await response.json();
        return data.result;
    }
};
