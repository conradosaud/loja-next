'use client'
import React from 'react'

import { notFound, redirect, useRouter } from 'next/navigation'

const Produto = () => {

  //notFound();               // Emite o erro 404
  redirect('/');            // usado fora de componentes
  //const router = useRouter(); // Permite tratamentos dentro do código, usado dentro de componentes
  //router.push("/")

  return (
    <div>
        <h1> Págin inválida </h1>
        <p> Produtos precisa de um parâmetro </p>
    </div>
  )
}

export default Produto