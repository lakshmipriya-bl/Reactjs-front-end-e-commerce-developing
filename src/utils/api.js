const BASE_URL = 'https://dummyjson.com';

const EXCLUDED_CATEGORIES = ['motorcycle', 'vehicle'];

function filterCategories(categories) {
  return categories.filter(c => !EXCLUDED_CATEGORIES.includes(c));
}

export async function fetchProducts(limit = 100, skip = 0) {
  const res = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function fetchProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error('Product not found');
  return res.json();
}

export async function fetchCategories() {
  const res = await fetch(`${BASE_URL}/products/category-list`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  const categories = await res.json();
  return filterCategories(categories);
}

export async function fetchProductsByCategory(category) {
  const res = await fetch(`${BASE_URL}/products/category/${category}`);
  if (!res.ok) throw new Error('Failed to fetch products by category');
  return res.json();
}

export async function searchProducts(query) {
  const res = await fetch(`${BASE_URL}/products/search?q=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error('Search failed');
  return res.json();
}
