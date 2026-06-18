const BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export const API_ENDPOINTS = {
    PRODUCTS: `${BASE_URL}/products`,
    PRODUCTS_CATEGORIES: `${BASE_URL}/products/categories`,
    PRODUCTS_SEARCH: `${BASE_URL}/products/search`,
    PRODUCTS_CATEGORY: `${BASE_URL}/products/category`,
    PRODUCTS_ID: `${BASE_URL}/products/:id`,
    PRODUCTS_CATEGORY_ID: `${BASE_URL}/products/category/:id`,
    USER: `https://dummyjson.com/user/:id`,
};

// Unwraps the NestJS { message, data } response envelope.
// Falls back to the raw JSON if there is no `data` field (e.g. dummyjson).
export async function apiFetch<T>(url: string, options?: RequestInit): Promise<T> {
    const res = await fetch(url, options);
    const json = await res.json();
    return (json.data !== undefined ? json.data : json) as T;
}
