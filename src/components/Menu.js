'use client'
import React, { useContext } from 'react'
import { UsuarioContext } from '@/context/UsuarioContext'
import Link from 'next/link'

function Menu() {

  const [ usuario, alteraUsuario ] = useContext( UsuarioContext )

  return (
    <nav>
        <div>
            <ul>
                <li> <Link href="/">Início</Link> </li>
                <li> <Link href="/carrinho">Carrinho</Link> </li>
                {
                  usuario == null ?
                  <>
                    <li> <Link href="/cadastro">Cadastro</Link> </li>
                    <li> <Link href="/login">Login</Link> </li>
                  </>
                  :
                  <li> Você está logado como <strong>{ usuario.nome }</strong> <Link href="/logout">Sair</Link> </li>
                }
            </ul>
        </div>
        <div>
            Conradito Store
        </div>
    </nav>
  )
}

export default Menu