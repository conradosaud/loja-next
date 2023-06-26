'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

import { useRouter } from 'next/navigation';
import { buscaTodos } from '@/model/produtos';

export default function Home() {

    const router = useRouter();
    
    const [ produtos, alteraProdutos ] = useState( [] );

    useEffect(()=> {
        async function busca(){
            const resposta = await buscaTodos();
            alteraProdutos( resposta.data )
        }
        busca();
    }, [])

    return (
        <main>
            
            {
                produtos.map( produto =>
                    <div onClick={()=>router.push("/produto/"+produto.id)} >
                        <img src={ produto.imagem } />
                        <p> { produto.nome } </p>
                        <p> { produto.preco } </p>
                    </div>
                )
            }

        </main>
    )
}
