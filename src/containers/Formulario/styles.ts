import styled from 'styled-components'
import { BotaoEditar } from '../../components/Contato/styles'

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 5px;
`

export const FormCadastro = styled.input`
  background-color: #fff;
  width: 100%;
  padding: 13px 19px;
  border: none;
  resize: none;
  border-radius: 10px;
  color: #000;
  font-size: 15px;
  font-weight: bold;
  box-shadow: -2px 4px 6px 0px rgba(0, 0, 0, 0.2);
`
export const BotatoAdicionarContato = styled(BotaoEditar)`
  background-color: #4eaa4d;
  color: #fff;
`
