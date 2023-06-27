'use client'
import React, { useState, useEffect, useContext } from 'react'
import { UsuarioContext } from '@/context/UsuarioContext';
import { buscaLista } from '@/model/produtos';
import { useRouter } from 'next/navigation';
import Produto from '@/components/Produto';

const Carrinho = () => {

    const router = useRouter();

    const [ usuario, alteraUsuario ] = useContext( UsuarioContext );

    const [ carrinho, alteraCarrinho ] = useState([]);
    const [ produtos, alteraProdutos ] = useState([]);

    const [ quantidade, alteraQuantidade ] = useState(0);
    const [ total, alteraTotal ] = useState(0);

    function limpaCarrinho(){
        localStorage.removeItem("carrinho");
        alteraProdutos([])
        alteraQuantidade(0);
        alteraTotal(0);
    }
    function finalizaCompra(){
        if( usuario == null ){
            alert("Faça lógin para poder finalizar sua compra");
            router.push("/login");
        }else{
            limpaCarrinho();
            alert("Compra realizada com sucesso!");
        }
    }

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

    useEffect(()=> {
        let quantidade = 0;
        let total = 0;
        
        if( produtos == 0 ){ // não roda isso se não tiver produtos
            return;
        }

        carrinho.forEach( itemCarrinho => { // percorre todos os itens do carrinho
            quantidade += parseInt(itemCarrinho.quantidade); // adiciona cada item encontrado no total da quantidade
            produtos.forEach( itemProduto => { // percorre todos os itens dos produtos
                if( itemCarrinho.id == itemProduto.id ){ // verifica se os IDs são iguais, tanto do carrinho quanto do produto
                    total += itemCarrinho.quantidade * itemProduto.preco // se for, soma
                }
            })
        })

        alteraQuantidade( quantidade )
        alteraTotal( total )

    }, [produtos])

    return (
        <div>
            <h1> Carrinho </h1>
            <p> Total de itens no carrinho: <strong> { quantidade  } </strong> </p>
            <p> Valor total do carrinho: R$ <strong> { total } </strong> </p>

            {
                carrinho != 0 &&
                <div>
                    <button onClick={()=>limpaCarrinho()} > Limpar carrinho </button>
                    <button onClick={()=>finalizaCompra()}> Finalizar compra </button>
                </div>
            }

            <div>
                {
                    produtos == 0 ? <p> Seu carrinho está vazio... </p> :
                    produtos.map( item =>
                        <>
                            <Produto produto={item} largura={150} />
                            <hr/>
                        </>
                    )
                }
            </div>

        </div>
    )
}

export default Carrinho