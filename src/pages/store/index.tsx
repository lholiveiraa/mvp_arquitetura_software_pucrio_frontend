import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { useNavigate } from "react-router-dom";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

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

  async function criarCarrinho() {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/carrinho", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cliente_id: 1, // Substitua pelo ID do cliente adequado
          data_compra: new Date().toISOString(),
          status: "A", // Defina o status do carrinho conforme necessário
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return data.carrinho_id;
      } else {
        console.error("Erro ao criar carrinho");
        const data = await response.json();
        return data.carrinho_id;
      }
    } catch (error) {
      console.error("Erro ao criar carrinho:", error);
      return null;
    }
  }

  async function adicionarProdutoAoCarrinho(
    produtoId: number,
    quantidade: number,
    precoUnitario: number
  ) {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/carrinho/1/adicionar_produto`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            produto_id: produtoId,
            quantidade: quantidade,
            preco_unitario: precoUnitario,
          }),
        }
      );

      if (response.ok) {
        console.log("Produto adicionado ao carrinho com sucesso!");
        setIsModalOpen(true);
        setModalMessage("Produto adicionado ao carrinho com sucesso!");
        navigate("/cart");
      } else {
        console.error("Erro ao adicionar produto ao carrinho");
        setIsModalOpen(true);
        setModalMessage("Erro ao adicionar produto ao carrinho.");
      }
    } catch (error) {
      console.error("Erro ao adicionar produto ao carrinho:", error);
      setIsModalOpen(true);
      setModalMessage("Erro ao adicionar produto ao carrinho.");
    }
  }

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
            <BuyButton
              onClick={async () => {
                const carrinhoId = await criarCarrinho();
                if (carrinhoId !== null) {
                  adicionarProdutoAoCarrinho(product.id, 1, product.price);
                }
              }}
            >
              Comprar <ShoppingCart />
            </BuyButton>
          </ProductCard>
        ))}
      </ProductContainer>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>{modalMessage}</p>
            <button onClick={() => setIsModalOpen(false)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}
