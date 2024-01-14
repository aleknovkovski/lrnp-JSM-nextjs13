import { JobFilterParams } from "./shared.types";

async function fetchApi(url: string, headers?: any) {
    try {
        const response = await fetch(url, { headers });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchLocation = async () => {
    const location = await fetchApi('http://ip-api.com/json/?fields=country');
    return location.country;
}

export const fetchCountries = async () => {
    return await fetchApi('https://restcountries.com/v3.1/all');
}

export const fetchJobs = async (filters: JobFilterParams) => {
    const { query, page } = filters;

    const headers = {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || '',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    };

    const result = await fetchApi(`https://jsearch.p.rapidapi.com/search?query=${query}&page=${page}`, headers);

    return result.data;
}