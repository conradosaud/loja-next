'use client'
import React, { useContext } from 'react'
import { UsuarioContext } from '@/context/UsuarioContext'
import Link from 'next/link'

import { Home, ShoppingCart } from 'lucide-react'

function Menu() {

  const [ usuario, alteraUsuario ] = useContext( UsuarioContext )

  return (
    <nav>
        <div className="bg-violet-700 text-white p-4 text-lg font-bold" >
            <ul className="flex justify-between">
                <div className="self-center flex-1">
                    <li> <Link href="/" className="flex group "> <Home className="group-hover:scale-125 transition-all" /> <span className="ml-2 underline">Início</span> </Link> </li>
                </div>
                <div className="flex-1 text-xl self-center">
                    <span style={{textShadow: "1px 1px 2px #444"}}>Conradito Store</span>
                </div>
                <div className="flex align-middle items-center gap-x-5">
                    <li className="bg-violet-100 p-2 text-slate-800 rounded-full mr-5 hover:bg-purple-200 transition-all" > <Link href="/carrinho"> <ShoppingCart/> </Link> </li>
                    {
                    usuario == null ?
                    <>
                        <li> <Link className="hover:underline" href="/login">Login</Link> </li>
                        <li className="bg-violet-100 px-3 py-1 text-slate-800 rounded-md hover:bg-purple-200  transition-all" > <Link href="/cadastro">Cadastro</Link> </li>
                    </>
                    :
                    <li className="text-xs" > Você está logado como <strong className='text-base underline'>{ usuario.nome }</strong> <Link href="/logout" className="bg-violet-100 text-slate-800 p-1 rounded-md ml-4">Sair</Link> </li>
                    }
                </div>
            </ul>
        </div>
    </nav>
  )
}

export default Menu