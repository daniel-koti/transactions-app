import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionsButton = styled.button`
  border: 0;
  background-color: ${(props) => props.theme['green-100']};
  height: 50px;
  color: ${(props) => props.theme['gray-800']};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
    transition: filter 0.2s;
  }
`
