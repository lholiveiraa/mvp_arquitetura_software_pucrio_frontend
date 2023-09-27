import { HeaderContainer, HeaderContent, ShoppingCartButton } from "./styles";

// import * as Dialog from '@radix-ui/react-dialog';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h2>Pegga</h2>
        <ShoppingCartButton>Carrinho de Compras</ShoppingCartButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
