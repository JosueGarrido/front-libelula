const API_URL = 'https://fakestoreapi.com/products';

export const getProducts = async () => {
  try {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
};

export const getProductById = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch product details:', error);
    return null;
  }
};
