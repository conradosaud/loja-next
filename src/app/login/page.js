'use client'
import React, { useContext, useState } from 'react'
import { UsuarioContext } from '@/context/UsuarioContext'
import { autentica } from '@/model/usuarios'
import Link from 'next/link'

const Login = () => {

    const [ usuario, alteraUsuario ] = useContext( UsuarioContext );
    const [ email, alteraEmail ] = useState("");
    const [ senha, alteraSenha ] = useState("");

    async function submit(e){
        e.preventDefault();
        const resposta = await autentica(email, senha);
        if( resposta.data == 0 ){
            alert("Usuário não encontrado")
        }else{
            alert("Autenticação realizada com sucesso!")
            alteraUsuario( resposta.data[0] )
        }
    }

    return (
        <div>
            <h1>
                Login de usuários
            </h1>
            <p> Ainda não tem um cadastro? <Link href="/cadastro">Clique aqui</Link>. </p>
            <form onSubmit={(e)=>submit(e)} >
                <input placeholder="Digite seu email" onChange={(e)=>alteraEmail(e.target.value)} />
                <input placeholder="Digite sua senha" onChange={(e)=>alteraSenha(e.target.value)} />
                <button> Entrar </button>
            </form>
        </div>
    )
}

export default Login