import { Link } from "react-router-dom";
import { HeaderContainer, HeaderContent, ShoppingCartButton } from "./styles";

import Logo from "../../assets/logo-pegga.png";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <img src={Logo} alt="Logo da Pegga" />
        </Link>
        <Link to="/cart">
          <ShoppingCartButton>Carrinho de Compras</ShoppingCartButton>
        </Link>
      </HeaderContent>
    </HeaderContainer>
  );
}
