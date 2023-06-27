import { useRouter } from "next/navigation"

export default function Produto( {produto, largura = 200, clicavel = true} ){

    const router = useRouter();

    return(
        <div key={produto.id} onClick={()=> clicavel && router.push("/produto/"+produto.id)} >
            <img src={ produto.imagem } width={largura} />
            <p> { produto.nome } </p>
            <p> { produto.preco } </p>
        </div>
    )
}