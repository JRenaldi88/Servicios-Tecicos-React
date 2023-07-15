import React from "react";


const Header = (props) => {

    console.log(props)
    return (
        <h1 className=" font-black text-5xl text-center md:w-1/2 mx-auto">
            Equipos de clientes para
            <span className=" text-indigo-600">{" Servicios Tecnicos"}</span>
        </h1>
    )
}


export default Header