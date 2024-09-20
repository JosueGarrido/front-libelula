import { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import Image from 'next/image';
import SearchBar from '../components/SearchBar';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(''); // Estado para la búsqueda

  useEffect(() => {
    async function fetchProducts() {
      const productList = await getProducts();
      setProducts(productList);
    }
    fetchProducts();
  }, []);

  // Filtrar los productos basados en la búsqueda del usuario
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Explora Nuestros Productos</h1>
        
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="contain"
                    className="p-4"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                  <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
                  <a
                    href={`/products/${product.id}`}
                    className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 transition-colors"
                  >
                    Ver Detalle
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-4">No se encontraron productos.</p>
          )}
        </div>
      </div>
    </>
  );
}
