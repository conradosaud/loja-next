import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>
            Login de usuários
        </h1>
        <p> Ainda não tem um cadastro? <Link href="/cadastro">Clique aqui</Link>. </p>
        <form>
            <input placeholder="Digite seu email" />
            <input placeholder="Digite sua senha" />
            <button> Entrar </button>
        </form>
    </div>
  )
}

export default Login