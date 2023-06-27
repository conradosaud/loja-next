'use client'
import React, { useState } from 'react'
import { insere } from '@/model/usuarios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Cadastro = () => {

    const router = useRouter();
    
    const [ nome, alteraNome ] = useState("");
    const [ email, alteraEmail ] = useState("");
    const [ senha, alteraSenha ] = useState("");
    
    async function submit(e){
        e.preventDefault();
        
        const resposta = await insere(nome, email, senha)
        
        if( resposta.status == 201 ){
            alert("Usuário cadastrado com sucesso!\nFaça login para continuar...");
            router.push('/login') // router invés de redirect, pois redirect funciona apenas dentro de componentes
        }else{
            alert("Ops... algo errado ocorreu ao criar seu usuário")
        }

    }

    return (
        <div>
            <h1>
                Cadastro de usuários
            </h1>
            <p> Já tem uma conta? <Link href="/login">Clique aqui</Link>. </p>
            <form onSubmit={(e)=>submit(e)}>
                <input placeholder="Digite seu nome" onChange={(e)=>alteraNome(e.target.value)} />
                <input placeholder="Digite seu email" onChange={(e)=>alteraEmail(e.target.value)} />
                <input placeholder="Digite sua senha" onChange={(e)=>alteraSenha(e.target.value)} />
                <button> Cadastrar </button>
            </form>
        </div>
    )
}

export default Cadastro;