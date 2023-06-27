'use client'
import { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';
import { buscaPesquisa, buscaTodos } from '@/model/produtos';

export default function Home( props ) {

    const router = useRouter();
    
    const [ produtos, alteraProdutos ] = useState( [] );

    useEffect(()=> {
        async function busca(){
            const resposta = await buscaTodos();
            alteraProdutos( resposta.data )
        }
        busca();
    }, [])

    useEffect(()=> {
        if( props.searchParams.pesquisa == undefined ){
            return;
        }
        async function pesquisa(){
            const resposta = await buscaPesquisa( props.searchParams.pesquisa );
            if( resposta.data == 0 ){
                alert("Nenhum item foi encontrado");
                const todos = await buscaTodos();
                alteraProdutos( todos.data )
            }else{
                alteraProdutos( resposta.data );
            }
        }
        pesquisa();
    }, [props.searchParams])

    return (
        <main>

            {
                produtos.map( produto =>
                    <div key={produto.id} onClick={()=>router.push("/produto/"+produto.id)} >
                        <hr/>
                        <img src={ produto.imagem } width={200} />
                        <p> { produto.nome } </p>
                        <p> { produto.preco } </p>
                    </div>
                )
            }

        </main>
    )
}
