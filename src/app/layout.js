

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

                <UsuarioProvider>
                    <Menu />
                    <Pesquisa />

                    {children}
                </UsuarioProvider>

                <Rodape/>
            </body>
        </html>
    )
}
