'use client'
import React, { useState } from 'react'
import { buscaPesquisa } from '@/model/produtos';
import { useRouter } from 'next/navigation';

const Pesquisa = () => {

    const router = useRouter();

    const [ pesquisa, alteraPesquisa ] = useState("");

    async function busca(){
        router.push("/?pesquisa="+pesquisa);
    }

    return (
    <div>
        <input placeholder="Pesquise uma palavra-chave" onChange={(e)=>alteraPesquisa(e.target.value)} />
        <button onClick={()=>busca()} > Pesquisar </button>
    </div>
    )
}

export default Pesquisa