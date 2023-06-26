import Link from 'next/link'
import React from 'react'

function Menu() {
  return (
    <nav>
        <div>
            <ul>
                <li> <Link href="/">Início</Link> </li>
                <li> <Link href="/carrinho">Carrinho</Link> </li>
                <li> <Link href="/login">Login</Link> </li>
            </ul>
        </div>
        <div>
            Conradito Blog
        </div>
    </nav>
  )
}

export default Menu