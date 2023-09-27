import { styled } from "styled-components";

export const ProductContainer = styled.section`
    width: 100%;
    max-width: 1128px;
    margin: 2rem auto;
    padding: 0 1.5rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
`;

export const ProductCard = styled.div`
    margin-top: 2rem;
    background: ${props => props.theme["gray-600"]};
    border-radius: 6px;
    padding: 1rem;
    display: flex;
    flex-direction: column; /* Define uma direção de coluna para alinhar os elementos verticalmente */

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${props => props.theme["gray-300"]};
        margin-top: 1rem;
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 1.25rem;
    }
`;

export const BuyButton = styled.button`
    margin-top: auto; /* Empurre o botão para o final do card */
    align-self: flex-end; /* Centralize o botão horizontalmente */
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    padding: 0.75rem;
    background: transparent;
    border: 1px solid ${props => props.theme["green-500"]};
    color: ${props => props.theme.white};
    font-weight: bold;
    border-radius: 6px;
    transition: background-color 0.2s;

    &:hover {
        background: ${props => props.theme["green-500"]};
        border-color: ${props => props.theme["green-500"]};
        color: ${props => props.theme.white};
        transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
`;

export const ProductImage = styled.img`
    margin: 0;
    padding: 0;
    width: 300px;
    height: 250px;
    object-fit: cover; /* Corta ou estica a imagem para se ajustar às dimensões fixas */
    border-radius: 10px;
`;
