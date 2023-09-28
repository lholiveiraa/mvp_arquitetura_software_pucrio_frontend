// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Trash } from "phosphor-react";
import {
  CartContainer,
  CartContent,
  DeleteButton,
  ProductData,
  ProductImage,
  ProductList,
  QuantityInput,
  UpdateQuantityButton,
} from "./styles";

// interface Product {
//   id: number;
//   title: string;
//   category: string;
//   description: string;
//   price: number;
//   rating: {
//     rate: number;
//     count: number;
//   };
//   image: string;
// }

interface ProductCart {
  produto_id: number;
  preco_unitario: string;
  quantidade: string;
  subtotal: string;
  detalhes_do_produto: {
    nome: string;
    image: string;
  };
}

export function ShoppingCart() {
  const [productsCart, setProductsCart] = useState<ProductCart[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductsCart() {
      try {
        const response = await fetch(
          "http://127.0.0.1:5000/api/carrinho/1/produtos"
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setProductsCart(data.produtos);
        } else {
          console.error("Erro ao buscar produtos da API");
        }
      } catch (error) {
        console.error("Erro ao buscar produtos da API:", error);
      } finally {
        // Definir o estado de carregamento como falso após a conclusão da solicitação
        setLoading(false);
      }
    }

    fetchProductsCart();
  }, []);

  async function ShowProductsCart() {
    try {
      const response = await fetch(
        "http://127.0.0.1:5000/api/carrinho/1/produtos"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setProductsCart(data.produtos);
      } else {
        console.error("Erro ao buscar produtos da API");
      }
    } catch (error) {
      console.error("Erro ao buscar produtos da API:", error);
    } finally {
      // Definir o estado de carregamento como falso após a conclusão da solicitação
      setLoading(false);
    }
  }

  async function handleDeleteProduct(produtoId: number) {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/carrinho/1/remover_produto/${produtoId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        console.log("Produto excluído com sucesso!");

        // Após excluir o produto, atualize a lista de produtos no carrinho
        await ShowProductsCart();
      } else {
        console.error("Erro ao excluir produto do carrinho!");
      }
    } catch (error) {
      console.error("Erro ao deletar produto ", error);
    }
  }
  async function handleUpdateQuantity(
    produtoId: number,
    novaQuantidade: number
  ) {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/carrinho/1/atualizar_quantidade`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            produto_id: produtoId,
            quantidade: novaQuantidade,
          }),
        }
      );

      if (response.ok) {
        console.log("Quantidade do produto atualizada com sucesso!");

        setProductsCart(
          (prevProductsCart) =>
            prevProductsCart.map((product) =>
              product.produto_id === produtoId
                ? { ...product, quantidade: novaQuantidade }
                : product
            ) as ProductCart[]
        );
      } else {
        console.error("Erro ao atualizar a quantidade do produto no carrinho");
      }
    } catch (error) {
      console.error(
        "Erro ao atualizar a quantidade do produto no carrinho:",
        error
      );
    }
  }

  return (
    <div>
      <Header />
      <CartContainer>
        <h1>Carrinho de Compras</h1>
        <CartContent>
          {loading ? (
            <p>Carregando...</p>
          ) : productsCart.length > 0 ? (
            productsCart.map((product) => (
              <ProductList key={product.produto_id}>
                <ProductImage src={product.detalhes_do_produto.image} />
                <ProductData>
                  <p>
                    <strong>Nome do Produto: </strong>
                    <span>{product.detalhes_do_produto.nome}</span>
                  </p>

                  <p>
                    <strong>Preço Unitário: </strong>{" "}
                    <span>R$ {product.preco_unitario}</span>
                  </p>

                  <p>
                    <strong>Quantidade: </strong>{" "}
                  </p>
                  <QuantityInput
                    type="number"
                    value={product.quantidade}
                    onChange={(e) => {
                      const novaQuantidade = parseInt(e.target.value, 10);
                      handleUpdateQuantity(product.produto_id, novaQuantidade);
                    }}
                  />
                  <UpdateQuantityButton
                    onClick={() => {
                      // O componente QuantityInput já lida com a entrada de quantidade
                      // apenas chame a função handleUpdateQuantity com a nova quantidade
                      handleUpdateQuantity(
                        product.produto_id,
                        parseInt(product.quantidade, 10)
                      );
                    }}
                  >
                    Atualizar
                  </UpdateQuantityButton>
                </ProductData>

                <DeleteButton
                  onClick={() => handleDeleteProduct(product.produto_id)}
                >
                  {" "}
                  Excluir <Trash />
                </DeleteButton>
              </ProductList>
            ))
          ) : (
            <p>O carrinho está vazio.</p>
          )}
        </CartContent>
      </CartContainer>
    </div>
  );
}
