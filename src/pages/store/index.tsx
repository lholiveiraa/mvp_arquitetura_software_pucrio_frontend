import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import {
  BuyButton,
  ProductCard,
  ProductContainer,
  ProductImage,
} from "./styles";
import { ShoppingCart } from "phosphor-react";

interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
}

export function Store() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error("Erro ao buscar produtos da API");
        }
      } catch (error) {
        console.error("Erro ao buscar produtos da API:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <SearchForm />
      <ProductContainer>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} />
            <header>
              <span>{product.title}</span>
            </header>
            <strong>R$ {product.price.toFixed(2)}</strong>
            <BuyButton>
              Comprar <ShoppingCart />
            </BuyButton>
          </ProductCard>
        ))}
      </ProductContainer>
    </div>
  );
}
