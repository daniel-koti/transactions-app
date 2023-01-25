import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }

    :focus {
      border: 1px solid ${(props) => props.theme['green-100']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme['green-100']};
    color: ${(props) => props.theme['green-100']};
    font-weight: bold;
    border-radius: 6px;

    cursor: pointer;

    &:not(:disabled):hover {
      border-color: ${(props) => props.theme['green-100']};
      background: ${(props) => props.theme['green-100']};
      color: ${(props) => props.theme['gray-900']};
      transition: background 0.2s, color 0.2s, border-color 0.2s;
    }

    &:disabled {
      cursor: not-allowed;
      filter: brightness(0.5);
    }
  }
`
