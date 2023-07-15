import Cliente from './Cliente'

const ListadoClientes = ({cliente, setClient, eliminarCliente}) => {

    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll'>

            {cliente && cliente.length ? (
                <>
                <h2 className='text-center font-black text-3xl'>Listado de Servicios Tecnicos</h2>
                <p className='text-xl mt-5 mb-10 text-center'>
                    Administra tus {""}
                    <span className='text-indigo-600 font-bold'>Equipos y ST</span>
                </p>
    
                { cliente.map( (cliente) => (
                        <Cliente
                            key= {cliente.id}
                            cliente={cliente}
                            setClient={setClient}
                            eliminarCliente={eliminarCliente}
                        />
                ))}
                </>
            ) : (
                <>
                    <h2 className='text-center font-black text-3xl'>No hay Servicios Tecnicos</h2>
                    <p className='text-xl mt-5 mb-10 text-center'>
                    Comienza Administrando tus {""}
                        <span className='text-indigo-600 font-bold'>Equipos y ST</span>
                    </p>
                </>
            )}
            
            
            
        </div>
    )
}

export default ListadoClientes
