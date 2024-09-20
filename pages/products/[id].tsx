import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getProductById } from '../../services/api';
import Image from 'next/image';
import LoadingSpinner from '@/components/LoadingSpinner';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export default function ProductDetail() {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const productDetails = await getProductById(id as string);
        setProduct(productDetails);
      };
      fetchProduct();
    }
  }, [id]);

  if (!product) return <LoadingSpinner/>;

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg p-8">
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
            <div className="relative h-96 w-full">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
            <p className="text-xl text-gray-600 mb-6">${product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 hover:shadow-lg transform transition hover:scale-105">
              Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
