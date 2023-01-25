import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: min(1120px, 100%);
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  /* Border-collapse nos permite definir espaçamentos entre as linhas  lateral | cima/baixo */
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  margin-top: 1.5rem;
  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-radius: 6px 0 0 6px;
    }

    &:last-child {
      border-radius: 0 6px 6px 0;
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  display: flex;
  align-items: center;

  gap: 0.2rem;

  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-100']
      : props.theme['red-300']};
`
