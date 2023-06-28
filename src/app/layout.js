import "./globals.css"
import { UsuarioProvider } from '@/context/UsuarioContext'

import Menu from '@/components/Menu'
import Pesquisa from '@/components/Pesquisa'
import Rodape from '@/components/Rodape'

export const metadata = {
  title: 'Conradito Store',
  description: 'Os melhores produtos de A a Z você encontra aqui!',
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <main className="min-h-screen">
                    <UsuarioProvider>
                        <Menu />
                        <Pesquisa />

                        {children}
                    </UsuarioProvider>

                    <Rodape  />
                </main>
            </body>
        </html>
    )
}
