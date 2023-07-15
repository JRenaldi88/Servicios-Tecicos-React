import { useState, useEffect } from 'react'
import Error from './Error';

const Formulario = ({cliente, setCliente, client}) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [numero, setNumero] = useState('');
  const [rs, setRs] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [detalles, setDetalles] = useState('');
  const [fecha, setFecha] = useState('');

  const [error, setError] = useState(false);

  console.log(client)

  useEffect(() => {
    if ( Object.keys(client).length > 0 ){
      setNombre(client.nombre)
      setApellido(client.apellido)
      setNumero(client.numero)
      setRs(client.rs)
      setMarca(client.marca)
      setModelo(client.modelo)
      setDetalles(client.detalles)
      setFecha(client.fecha)
    }
  }, [client])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  
  const handleSubmit = (e) => {
      e.preventDefault();

      if ([nombre, apellido, numero, rs, marca, modelo, detalles, fecha].includes('')){

        setError(true)
        return;
      } 
        setError(false)

        // Objeto de ST
        const objetoST = {
          nombre,
          apellido,
          numero,
          rs,
          marca,
          modelo,
          detalles,
          fecha
        }
        
        if (client.id) {
          // Editando el registro
          objetoST.id = client.id
          console.log('Editando')
          const stActualizado = cliente.map( clientState => clientState.id === client.id ? objetoST : clientState)

          //console.log('Este es el st actu', stActualizado)

          setCliente(stActualizado)

        } else {
          // Nuevo registro
          objetoST.id = generarId()
          setCliente([...cliente, objetoST]);

        }
        
        //setCliente([])

        // Reiniciar el formulario
        setNombre('')
        setApellido('')
        setNumero('')
        setRs('')
        setMarca('')
        setModelo('')
        setDetalles('')
        setFecha('')

  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
        <h2 className='font-black text-3xl text-center'> Seguimiento de Equipos</h2>
        <p className=' text-lg mt-5 text-center mb-10'>
          Añade ST y 
          <span className='text-indigo-600 font-bold'> Administrarlos </span>
        </p>

        <form 
            onSubmit={handleSubmit}
            className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
              { error && <Error mensaje='Todos los campos son obligatorios'/>}
          <div className=' mb-5'>
            <label htmlFor='nombre' className=' block text-gray-700 uppercase font-bold'>
              Nombre
            </label>
            <input 
                  id='nombre'
                  type="text" 
                  placeholder='Nombre del cliente'
                  className='w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md'
                  value={nombre}
                  onChange={ (e) => setNombre(e.target.value) }
            />
          </div>

          <div className='mb-5'>
            <label htmlFor='apellido' className=' block text-gray-700 uppercase font-bold'>
              Apellido
            </label>
            <input 
                  id='apellido'
                  type="text" 
                  placeholder='Apellido del cliente'
                  className='w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md'
                  value={apellido}
                  onChange={ (e) => setApellido(e.target.value) }
            />
          </div>

          <div className='mb-5'>
            <label htmlFor='numero' className=' block text-gray-700 uppercase font-bold'>
              Telefono/Celular
            </label>
            <input 
                  id='numero'
                  type="text" 
                  placeholder='Telefono del cliente'
                  className='w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md'
                  value={numero}
                  onChange={ (e) => setNumero(e.target.value) }
            />
          </div>

          <div className='mb-5'>
            <label htmlFor='rs' className=' block text-gray-700 uppercase font-bold'>
              Instagram
            </label>
            <input 
                  id='rs'
                  type="text" 
                  placeholder='Instagram del cliente *'
                  className='w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md'
                  value={rs}
                  onChange={ (e) => setRs(e.target.value) }
            />
          </div>

          <div className='mb-5'>
            <label htmlFor='marca' className=' block text-gray-700 uppercase font-bold'>
              Marca equipo
            </label>
            <input 
                  id='marca'
                  type="text" 
                  placeholder='Marca del equipo'
                  className='w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md'
                  value={marca}
                  onChange={ (e) => setMarca(e.target.value) }
            />
          </div>

          <div className='mb-5'>
            <label htmlFor='modelo' className=' block text-gray-700 uppercase font-bold'>
              Modelo
            </label>
            <input 
                  id='modelo'
                  type="text" 
                  placeholder='Modelo del equipo'
                  className='w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md'
                  value={modelo}
                  onChange={ (e) => setModelo(e.target.value) }
            />
          </div>

          <div className='mb-5'>
            <label htmlFor='detalles' className=' block text-gray-700 uppercase font-bold'>
              Detalles de que hacerle al equipo
            </label>
            <textarea
              id='detalles'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              placeholder='Descripcion de los detalles'
              value={detalles}
              onChange={ (e) => setDetalles(e.target.value) }
            />
          </div>

          <div className='mb-5'>
            <label htmlFor='fecha' className=' block text-gray-700 uppercase font-bold'>
              Fecha de ingreso
              </label>
            <input 
                  id='fecha'
                  type="date"
                  className='w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md'
                  value={fecha}
                  onChange={ (e) => setFecha(e.target.value) }
            />
          </div>

          <input 
            type="submit"
            className='w-full bg-indigo-600 p-3 text-white uppercase font-bold text-center
            hover:bg-indigo-700 cursor-pointer transition-colors'
            value={ client.id ? 'Editar Cliente' : 'Agregar Cliente'}  
          />
        </form>
    </div>
  ) 
}

export default Formulario
