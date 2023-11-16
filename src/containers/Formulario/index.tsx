import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Titulo } from '../ListaDeContatos/styles'
import * as S from './styles'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        telefone,
        email
      })
    )
  }

  return (
    <Container>
      <Titulo>ADICIONAR NOVO CONTATO</Titulo>
      <S.FormContainer onSubmit={cadastrarContato}>
        <S.FormCadastro
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          type="text"
          placeholder="Nome"
        />
        <S.FormCadastro
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          type="number"
          placeholder="Telefone"
        />
        <S.FormCadastro
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="email"
        />
        <S.BotatoAdicionarContato type="submit">
          Adicionar
        </S.BotatoAdicionarContato>
      </S.FormContainer>
    </Container>
  )
}

export default Formulario
