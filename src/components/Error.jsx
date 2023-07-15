const Error = ({mensaje}) => {
  return (
    <div>
      <div className=' bg-red-800 text-center text-white p-3 uppercase font-bold mb-3 rounded-md'>
        <p>{mensaje}</p>
      </div>
    </div>
  )
}

export default Error
