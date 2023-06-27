# App de _loja virtual_ desenvolvido usando __NextJS__
Este é o repositório de um projeto feito em [NextJS](https://nextjs.org/) de uma loja virtual simples.

Este repositório também serve como um __tutorial__ de funcionamento do _NextJS_.

## Branches
Este repositório está dividido em três _branches_ principais, cada branche adentra em um nível de profundidade de conhecimento diferente. São eles:
- [master](https://github.com/conradosaud/loja-next) - branch principal, onde está todo o conteúdo deste repositório, porém __sem estilização__ do Tailwind ou qualquer outro tipo de CSS. Ele também não conta com o componente _Produto_, afim de simplificar e focar apenas no conteúdo do NextJS.
- [componente-produto](https://github.com/conradosaud/loja-next/tree/componente-produto) - branch idêntica à _master_, porém com o componente de __Produto__ criado na pasta _components_. Não dificulta o entendimento, é uma questão de preferência.
- [app-estilizado](https://github.com/conradosaud/loja-next/tree/app-estilizado) - este é o mesmo app, porém usando todos os recursos disponíveis no [Tailwind](https://tailwindcss.com/) para estilizar toda a página. Essa branch é baseada na branch _componente-produto_.

## Banco de dados
Ainda, este projeto usa um banco de dados baseado no [supabase](https://supabase.com) para conexão simples e dados persistentes.
As intruções de como usar o supabase e como realizar a conexão aparecem na seção [model](#model).

### Dados via JSON
Caso o usuário queira usar o _supabase_ ou nenhuma outra conexão com banco dados, existe o arquivo modelo [produtos.json](./public/produtos.json), localizado no diretório [public](./public/). Ele é uma base que pode ser usada para adicionar os produtos ao site invés realizar uma conexão com um banco. Não será possível usar as operações de __inserir__, pois arquivos _.json_ não podem ser modificados diretamente.

Também será necessário criar um arquivo __usuarios.json__ para que o login possa funcionar. Este arquivo não existe neste projeto, mas basta seguir o mesmo modelo do _produtos.json_, adicionando as colunas de: id, nome, email, senha, created_at.

## Tutorial NextJS

Como citado anteriormente, este repositório também funciona como um tutorial de como usar o NextJS.

Seções:
- [Material de estudo](#material-de-estudo)
- [Introdução ao NextJS](#introdução)
- [Iniciando um novo projeto](#iniciando-um-novo-projeto)
- [Estrutura do NextJS]
- [App Router do NextJS 13]
- [Funções e componentes do Next]
- [Explicação do repositório da loja]

### Material de estudo
Para aperfeiçoar seus estudos além deste repositório, deixo como recomendação os materiais a seguir:
- [Next.js 13 curso completo](https://www.youtube.com/watch?v=wm5gMKuwSYk) (vídeo em inglês, habilite as legendas)
- [Como usar a pasta "app" no Next.js 13](https://www.youtube.com/watch?v=hlZ_qZvL3e8) (vídeo em português)
- [Tudo que você precisa saber do Next 13](https://www.youtube.com/watch?v=0zl72thBKzo) (vídeo em português)
- [Documentação oficial do Next](https://nextjs.org/) (página em inglês)

### Introdução ao NextJS

Em 2013 O Facebook lançou o __React__, uma tecnologia revolucionária que transformou o desenvolvimento web e criou uma infinidade de oportunidades de trabalho até 2023. Surpreendentemente, a documentação oficial do React agora __desaconselha__ o uso simples do React e recomenda a criação de novos aplicativos escolhendo um dos frameworks com tecnologia React. E o primeiro framework recomendado é o __Next.js__.

Você pode consultar essa mudança na documentação
[clicando aqui](https://react.dev/learn/start-a-new-react-project).
Note que o antigo `create-react-app` não é mencionado mais, e sim, seu novo sucessor `create-next-app`.

#### Adoção por Empresas
Se você está se perguntando se as empresas estão migrando para o Next.js e se vale a pena aprender, a resposta para ambas as perguntas é um __"sim"__ enfático. O Node.js recentemente twittou que eles migraram o site do Node.js para o Next.js a longo prazo, indicando que há uma tendência de uso crescente do Next.js entre as empresas ([veja o tweet](https://twitter.com/nodejs/status/1633589879610421249)). Além disso, grandes empresas como Netflix, TikTok, Twitch, Notion e até mesmo a Nike adotaram o Next.js para desenvolver seus sites.

#### Oportunidades de Trabalho
O impulso do Next.js é notável nos próximos meses, e é esperado um aumento significativo nas oportunidades de trabalho relacionadas ao Next.js. Portanto, este é um momento ideal para você adquirir habilidades em Next.js e demonstrar aos potenciais empregadores que você está preparado para aproveitar essas oportunidades.

#### Renderização
O Next.js é um framework que simplifica o processo de desenvolvimento e otimização de aplicativos da web. Uma das principais distinções entre o React e o Next.js é a forma como lidam com a renderização. Enquanto o React renderiza a interface do usuário no __lado do cliente__, o Next.js oferece __flexibilidade__ ao permitir a renderização tanto no lado do cliente quanto no __lado do servidor__, de acordo com as necessidades do projeto.

A renderização do lado do cliente ocorre quando o servidor envia um HTML básico e código JavaScript para o navegador do cliente. O navegador então baixa e executa o código JavaScript, o que resulta na renderização dos componentes e exibição do site. Por outro lado, a renderização do lado do servidor envolve a renderização da página no servidor antes de enviá-la para o dispositivo do cliente. Isso permite uma exibição imediata da página e melhora o desempenho de otimização para mecanismos de busca (SEO).

#### Benefícios do NextJS para SEO
O uso do Next.js resolve um desafio relacionado ao __SEO__, pois os mecanismos de busca têm dificuldade em indexar páginas renderizadas dinamicamente no lado do cliente (como o React faz). Ao pré-renderizar o código e enviá-lo diretamente ao cliente, o Next.js facilita o _rastreamento_ e _indexação_ por parte dos mecanismos de busca, resultando em um SEO aprimorado. Priorizar o SEO oferece benefícios, como aumento do tráfego orgânico, melhor experiência do usuário, maior credibilidade e vantagem competitiva devido a classificações mais altas nos resultados de pesquisa.

#### Roteamento simplificado
No Next.js, o roteamento é tratado de forma simplificada e baseada no sistema de arquivos. Cada pasta no diretório do aplicativo representa uma rota e o nome da pasta é o caminho da rota. Dessa forma, _não é necessário_ instalar pacotes adicionais ou configurar roteamentos complexos. Basta criar arquivos para as rotas desejadas e abri-las diretamente na aplicação. Esse sistema de roteamento baseado em arquivo facilita a criação e navegação entre diferentes rotas de página.

#### Conclusão
Em resumo, o Next.js é um framework prático e poderoso que oferece recursos avançados de roteamento baseado em arquivos, permitindo a criação intuitiva de rotas em um aplicativo web. Além disso, sua flexibilidade na renderização, seja no lado do cliente ou no lado do servidor, proporciona um desempenho otimizado e melhor capacidade de indexação para SEO.

### Iniciando um novo projeto
Para começar um projeto em NextJS, execute o seguinte comando no local que você quer iniciar seu novo projeto:
```npx create-next-app```
É recomendável que use o _CMD_ do Windows ou o terminal do seu novo projeto. O _GitBash_ tem problemas em configurar as perguntas que vem a seguir.
Em seguida, algumas perguntas irão aparecer para você responder e configurar seu projeto em Next, são elas (traduzido):
- _Qual o nome do seu projeto?_ ``./`` para criar um projeto no mesmo local ou digite o nome do projeto que será criado
- _Gostaria de usar __TypeScript__?_ escolha ``No`, este repositório de tutorial usa JavaScript invés de TypeScript.
- _Gostaria de usar __ESLint__?_ escolha ``No``, estamos visando simplificar o aprendizado em Next.
- _Gostaria de usar __Tailwind CSS__?_ escolha ``Yes``, pois vamos usar o _Tailwind_ para estilizar o site no final (está em outra branch)
- _Gostaria de usar __src/directory__?_ escolha ``Yes``, vamos manter a estrutura padrão do React
- _Usar o __App Router__?_ escolha ``Yes``, ele é o recurso mais recente implementado no Next 13
- _Gostaria de customizar o padrão de __import alias__?_ escolha ``No``, vamos entender o que é isso mais tarde

Feito isso, seu projeto em NextJS será instalado. Basta aguardar.

Após instalado, você pode testar rodar a aplicação de demonstração usando o comando:
```npm run dev```
Lembrando que no Next também tem o comando ``npm start`` como faziamos no React, no entanto, este comando no Next serve para rodar o aplicativo na versão de produção, e não de desenvolvimento, então use ``npm run dev`` sempre.

_Continua..._