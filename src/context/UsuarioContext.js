'use client'
import React, { createContext, useState } from 'react';

export const UsuarioContext = createContext();

export function UsuarioProvider( props ){

    const [ usuario, alteraUsuario ] = useState(null);

    return (
        <UsuarioContext.Provider value={ [usuario, alteraUsuario] } >
            {props.children}
        </UsuarioContext.Provider>
    )
}