import { useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoClientes from './components/ListadoClientes'

function App() {

  const clienteLS = JSON.parse(localStorage.getItem('cliente')) ?? []
  const [cliente, setCliente] = useState(clienteLS)
  const [client, setClient] = useState({})

  useEffect (() => {
    localStorage.setItem('cliente', JSON.stringify(cliente))
  }, [cliente])

  const eliminarCliente = id => {
    const clienteActualizado = cliente.filter( cliente => cliente.id !== id)
    setCliente(clienteActualizado)
  } 
  
  return (
      <div className='container mx-auto mt-20' >
        <Header />
        
        <div className=' mt-12 md:flex'>
          <Formulario
            cliente={cliente}
            setCliente={setCliente}
            client={client}
          />
          <ListadoClientes
            cliente={cliente}
            setClient={setClient}
            eliminarCliente={eliminarCliente}
          /> 
        </div>
      </div>
  )
}

export default App 
