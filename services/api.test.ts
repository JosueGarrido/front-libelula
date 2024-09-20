import { getProducts, getProductById } from './api';

global.fetch = jest.fn();

describe('API Service', () => {
  afterEach(() => {
    jest.clearAllMocks(); 
  });

  test('getProducts devuelve una lista de productos correctamente', async () => {
    const mockProducts = [{ id: 1, title: 'Product 1' }, { id: 2, title: 'Product 2' }];
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    });

    const products = await getProducts();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products');
    expect(products).toEqual(mockProducts);
  });

  test('getProducts maneja errores correctamente', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    });

    const products = await getProducts();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(products).toEqual([]); 
  });

  test('getProductById devuelve el producto correctamente', async () => {
    const mockProduct = { id: 1, title: 'Product 1' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockProduct,
    });

    const product = await getProductById('1');

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products/1');
    expect(product).toEqual(mockProduct);
  });

  test('getProductById maneja errores correctamente', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    });

    const product = await getProductById('1');

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(product).toBeNull(); 
  });
});
