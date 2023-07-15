

const Clientes = ({cliente, setClient, eliminarCliente}) => {

    const handleEliminar = () => {
        const respuesta = confirm('Eliminar cliente? ')

        if(respuesta) {
            eliminarCliente(cliente.id)
        }

    }

    return (
        
        <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Nombre: {""}
                <span className=' font-normal normal-case'>{cliente.nombre}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Apellido: {""}
                <span className=' font-normal normal-case'>{cliente.apellido}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Telefono/Celular: {""}
                <span className=' font-normal normal-case'>{cliente.numero}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Instagram: {""}
                <span className=' font-normal normal-case'>{cliente.rs}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Marca Equipo: {""}
                <span className=' font-normal normal-case'>{cliente.marca}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Modelo Equipo: {""}
                <span className=' font-normal normal-case'>{cliente.modelo}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Detalles: {""}
                <span className=' font-normal normal-case'>{cliente.detalles}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Fecha: {""}
                <span className=' font-normal normal-case'>{cliente.fecha}</span>
            </p>

            <div className="flex justify-between">
                <button
                    type=""
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={ () => setClient(cliente)}
                >Editar</button>
            
                <button
                    type=""
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Clientes
