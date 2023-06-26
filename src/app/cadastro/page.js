import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>
            Cadastro de usuários
        </h1>
        <p> Já tem uma conta? <Link href="/login">Clique aqui</Link>. </p>
        <form>
            <input placeholder="Digite seu nome" />
            <input placeholder="Digite seu email" />
            <input placeholder="Digite sua senha" />
            <button> Cadastrar </button>
        </form>
    </div>
  )
}

export default Login