import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  nome,
  telefone: telefoneOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
      setTelefone(telefoneOriginal)
    }
  }, [emailOriginal, telefoneOriginal])

  function cancelaEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <>
      <S.Card>
        <S.NomeContato>{nome}</S.NomeContato>
        <S.InfoContato
          disabled={!estaEditando}
          onChange={(evento) => setTelefone(evento.target.value)}
          value={telefone}
        />
        <S.InfoContato
          disabled={!estaEditando}
          onChange={(evento) => setEmail(evento.target.value)}
          value={email}
        />
        <S.Menu>...</S.Menu>
      </S.Card>
      <S.BotoesContainer>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    telefone,
                    email,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover
              title="Cancelar edição"
              onClick={cancelaEdicao}
            >
              X
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.BotaoEditar onClick={() => setEstaEditando(true)}>
              Editar
            </S.BotaoEditar>
            <S.BotaoCancelarRemover
              onClick={() => dispatch(remover(id))}
              title="Remover contato"
            >
              X
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BotoesContainer>
    </>
  )
}

export default Contato
