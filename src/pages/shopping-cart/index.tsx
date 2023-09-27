// import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { CartContainer } from "./styles";

export function ShoppingCart() {
  //   useEffect(() => {
  //     async function fetchProducts() {
  //       try {
  //         const response = await fetch("https://fakestoreapi.com/products");
  //         if (response.ok) {
  //           const data = await response.json();
  //           setProducts(data);
  //         } else {
  //           console.error("Erro ao buscar produtos da API");
  //         }
  //       } catch (error) {
  //         console.error("Erro ao buscar produtos da API:", error);
  //       }
  //     }

  //     fetchProducts();
  //   }, []);

  return (
    <div>
      <Header />
      <CartContainer>
        <h1>Carrinho de Compras</h1>
      </CartContainer>
    </div>
  );
}
