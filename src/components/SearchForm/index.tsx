import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer, SearchFormContent } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContent>
      <SearchFormContainer>
        <input type="text" placeholder="Pesquise o produto que deseja" />

        <button type="submit">
          <MagnifyingGlass size={20} />
          Buscar
        </button>
      </SearchFormContainer>
    </SearchFormContent>
  );
}
