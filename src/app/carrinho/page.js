'use client'
import { buscaLista } from '@/model/produtos';
import React, { useState, useEffect } from 'react'

const Carrinho = () => {

    const [ carrinho, alteraCarrinho ] = useState([]);
    const [ produtos, alteraProdutos ] = useState([]);

    useEffect(()=> {
        let carrinhoLocal;
        carrinhoLocal = localStorage.getItem("carrinho");
        if( carrinhoLocal == null ){
            return;
        }
        carrinhoLocal = JSON.parse(carrinhoLocal);
        alteraCarrinho(carrinhoLocal);
        carrinhoLocal = carrinhoLocal.map( item => item.id );

        async function data(){
            const resposta = await buscaLista( carrinhoLocal )
            alteraProdutos( resposta.data )
        }
        data();

    }, [])

    return (
        <div>
            <h1> Carrinho </h1>
            <p> Total de itens no carrinho: <strong>0</strong> </p>
            <p> Valor total do carrinho: R$ <strong>0</strong> </p>

            <div>
                {
                    produtos == 0 ? <p> Seu carrinho está vazio... </p> :
                    produtos.map( item =>
                        <div key={item.id}>
                            <h1> { item.nome } </h1>
                            <p> { item.preco } </p>
                            <p> Quantidade: { carrinho.map( i => i.id == item.id ? i.quantidade : null ) } </p>
                            <img src={item.imagem} />
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default Carrinho