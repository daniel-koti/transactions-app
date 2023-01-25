import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      outline: none;
      border-radius: 6px;
      border: 0;
      background-color: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      height: 58px;
      border: 0;
      border-radius: 6px;
      background: ${(props) => props.theme['green-100']};
      color: ${(props) => props.theme['gray-800']};
      font-weight: 700;
      padding: 0 1.25rem;
      margin-top: 1.5rem;

      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
        filter: brightness(0.8);
      }

      &:not(:disabled):hover {
        filter: brightness(0.8);
        transition: filter 0.2s;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  border: none;
  background-color: transparent;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;

  line-height: 0;
  color: ${(props) => props.theme['gray-500']};
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  background: ${(props) => props.theme['gray-700']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;

  cursor: pointer;
  border: 0;
  color: ${(props) => props.theme['gray-300']};

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-100']
        : props.theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme['gray-600']};
    transition: background 0.2s;
  }

  &[data-state='checked'] {
    color: ${(props) =>
      props.variant === 'income' ? props.theme['gray-800'] : props.theme.white};

    background-color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-100']
        : props.theme['red-300']};

    svg {
      color: ${(props) =>
        props.variant === 'income'
          ? props.theme['gray-900']
          : props.theme.white};
    }
  }
`
