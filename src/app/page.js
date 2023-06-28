'use client'
import { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';
import { buscaPesquisa, buscaTodos } from '@/model/produtos';
import Produto from '@/components/Produto';

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
        <div className='grid grid-cols-[300px_300px_300px] place-content-center gap-10'>

            {
                produtos.map( produto =>
                    <div 
                        key={produto.id} onClick={()=>router.push("/produto/"+produto.id)} 
                        className="border border-slate-200 rounded-md shadow-lg hover:scale-105 transition-all cursor-pointer hover:shadow-slate-400 hover:rounded-xl"
                    >
                        <img className="" src={ produto.imagem } width="100%" />
                        <div className="p-2 text-center ">
                            <p className="text-lg font-bold text-slate-600"> { produto.nome } </p>
                            <p className=""> <span className="text-sm">R$</span> { produto.preco } </p>
                        </div>
                    </div>
                )
            }

        </div>
    )
}
