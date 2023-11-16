import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  background-color: #fff;
  box-shadow: -2px 4px 6px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-bottom: 4px;
`
export const NomeContato = styled.p`
  background-color: #fff;
  color: #000;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  margin: 5px;
  padding: 13px 19px;
`
export const InfoContato = styled.input`
  background-color: #fff;
  width: 100%;
  padding: 13px 19px;
  margin: 5px;
  border: none;
  resize: none;
  color: #000;
  font-size: 15px;
  font-weight: bold;
`

export const Menu = styled.span`
  position: relative;
  margin: 25px 5px 5px 0;
  background-color: #fff;
  color: #9762c0;
  font-size: 30px;
  font-weight: bold;
`
export const BotoesContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 5px;
`

export const BotaoEditar = styled.button`
  font-weight: bold;
  font-size: 12px;
  padding: 8px 26px;
  background-color: #fff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: #9762c0;
`
export const BotaoCancelarRemover = styled(BotaoEditar)`
  padding: 8px 11px;
  background-color: #f45555;
  margin-left: 5px;
  color: #fff;
`
export const BotaoSalvar = styled(BotaoEditar)`
  background-color: #4eaa4d;
  color: #fff;
`
