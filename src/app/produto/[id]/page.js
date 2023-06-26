'use client'
import React, { useState, useEffect } from 'react'
//import axios from 'axios'
import { busca } from '@/model/produtos'

const ProdutoID = ( props ) => {

    const [ produto, alteraProduto ] = useState( null )
    const [ quantidade, alteraQuantidade ] = useState(1);
    const [ total, alteraTotal ] = useState(0);

    function adicionaProduto( quantidade ){
        alteraQuantidade(quantidade);
        alteraTotal( quantidade * parseFloat(produto.preco) )
    }

    function adicionaCarrinho(){

        let carrinho;

        carrinho = localStorage.getItem("carrinho"); // pega os itens do localStorage
        carrinho = JSON.parse(carrinho) // converte a string em um objeto javascript

        if(carrinho == null){ // verifica se nunca ouve esse localStorage antes
            carrinho = []; // se nunca houve, ele cria primeiro um array
        }

        const item = { id: produto.id, quantidade: quantidade }; // cria o item que será adicionado
        //carrinho = carrinho.map( produto => produto.id == item.id ? {...produto, quantidade: produto.quantidade+item.quantidade } : produto )
        carrinho.push(item); // adiciona objeto do carrinho que agora está convertido em javascript
        
        carrinho = JSON.stringify(carrinho) // converte o carrinho em string para armazenar no localstorage
        localStorage.setItem("carrinho", carrinho)
        
    }

    useEffect(() => {
        async function dados(){
            const response = await busca( props.params.id );
            const produto = response.data.filter( i => i.id == props.params.id );
            alteraProduto( produto[0] )
            alteraTotal( produto[0].preco )
        }
        dados();
    }, [])

    return (
        <div>
            { 
                produto == null ? <h1> Este produto não existe </h1>: 
                <div>
                    <h1> { produto.nome } </h1>
                    <p> { produto.descricao } </p>
                    <p> { produto.preco } </p>
                    <img src={ produto.imagem } />

                    <br/>
                    <label>
                        Quantidade
                        <input type="number" min={1} value={quantidade} onChange={(e)=>adicionaProduto(e.target.value)} />
                    </label>
                    <p> Total: R$ <strong>{total}</strong> </p>
                    <br/>
                    <button onClick={()=>adicionaCarrinho()} > Comprar </button>

                </div>
            }
        </div>
    )
}

export default ProdutoID