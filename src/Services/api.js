// api.js (o productsService.js)
const API_URL = "https://api.escuelajs.co/api/v1/products";

async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export { fetchProducts };
