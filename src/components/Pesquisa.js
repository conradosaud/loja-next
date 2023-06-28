'use client'
import React, { useState } from 'react'
import { buscaPesquisa } from '@/model/produtos';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

const Pesquisa = () => {

    const router = useRouter();

    const [ pesquisa, alteraPesquisa ] = useState("");

    async function busca(){
        router.push("/?pesquisa="+pesquisa);
    }

    return (
        <div className='my-10' >
            <div className='m-auto flex w-fit border border-slate-800'>
                <input className='px-3 border-r-0 rounded-r-none' placeholder="Pesquisa..." onChange={(e)=>alteraPesquisa(e.target.value)} />
                <button className="border-l border-slate-800 p-1" onClick={()=>busca()} > <Search/> </button>
            </div>
        </div>
    )
}

export default Pesquisa