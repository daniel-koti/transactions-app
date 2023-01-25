import * as Dialog from '@radix-ui/react-dialog'
import { HeaderContainer, HeaderContent, NewTransactionsButton } from './styles'
import { NewTransactionModal } from '../NewTransactionModal'

import logoImg from '../../assets/logo.svg'
import { useState } from 'react'

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function toggleModal() {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root open={isModalOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionsButton onClick={toggleModal}>
              New transaction
            </NewTransactionsButton>
          </Dialog.Trigger>

          <NewTransactionModal onCloseModal={toggleModal} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
