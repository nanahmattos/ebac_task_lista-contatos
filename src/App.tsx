import { Provider } from 'react-redux'

import EstiloGlobal from './styles'

import store from './store'
import ListaDeContatos from './containers/ListaDeContatos'
import Formulario from './containers/Formulario'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Formulario />
      <ListaDeContatos />
    </Provider>
  )
}

export default App
