import { styled } from "styled-components";

export const SearchFormContent = styled.div`
    width: 100%;
    max-width: 1128px;
    margin: 0 auto;
    padding: 0 1.5rem;
    align-items: center;
    margin-top: 1rem;
`;


export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        border-radius: 6px;
        border: 0;
        background: ${props => props.theme["gray-600"]};
        color: ${props => props.theme["gray-300"]};
        padding: 1rem;

        &::placeholder {
            color: ${props => props.theme["gray-500"]};
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        border: 0;
        padding: 1rem;
        background: transparent;
        border: 1px solid ${props => props.theme["gray-300"]};
        color: ${props => props.theme ["green-300"]};
        font-weight: bold;
        border-radius: 6px;
    

    &:hover {
        background: ${props => props.theme["green-500"]};
        border-color: ${props => props.theme["green-500"]};
        color: ${props => props.theme.white};
        transition: baackground-color 0.2s, color 0.2s, border-color 0.2s;
    }
}

`;