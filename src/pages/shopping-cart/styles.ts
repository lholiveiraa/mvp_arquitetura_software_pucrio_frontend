
import { styled } from "styled-components";

export const CartContainer = styled.section`
    width: 100%;
    max-width: 1128px;
    margin: 2rem auto;
    padding: 0 1.5rem;

    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    gap: 2rem;
`;


export const CartContent = styled.div`
    margin-top: 2rem;
    background: ${props => props.theme["gray-600"]};
    border-radius: 6px;
    padding: 1rem;
    display: flex;
    flex-direction: column; /* Define uma direção de coluna para alinhar os elementos verticalmente */
`;

export const ProductList = styled.div`
    margin-top: 1rem;
    background: ${props => props.theme["gray-600"]};
    border-radius: 6px;
    border: 1px solid ${props => props.theme["green-300"]}; 
    padding: 1rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);; /* Duas colunas lado a lado */
    gap: 0.25rem;
`;

export const ProductImage = styled.img`
    margin: 0;
    padding: 0;
    width: 200px;
    height: 150px;
    object-fit: cover; /* Corta ou estica a imagem para se ajustar às dimensões fixas */
    border-radius: 10px;
`;

export const ProductData = styled.div`
     margin: 0;
    padding: 0;

`;


export const UpdateButton = styled.button`
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

export const DeleteButton = styled.button`
    margin-left: auto; /* Empurre o botão para o final do card */
    align-self: flex-end; /* Centralize o botão horizontalmente */
    max-width: 100px;
    max-height: 50px;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    padding: 0.75rem;
    background: transparent;
    border: 1px solid ${props => props.theme["red-300"]};
    color: ${props => props.theme.white};
    font-weight: bold;
    border-radius: 6px;
    transition: background-color 0.2s;

    &:hover {
        background: ${props => props.theme["red-300"]};
        border-color: ${props => props.theme["red-300"]};
        color: ${props => props.theme.white};
        transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
`;

export const QuantityInput = styled.input`
    border: 1px solid ${props => props.theme.white};
    color: ${props => props.theme["gray-800"]};
    padding: 0.5rem;
    border-radius: 6px;
    width: 80px;
    margin: 0.5rem 0rem;

`;

export const UpdateQuantityButton = styled.button`
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