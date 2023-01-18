# Ada-Test

Instalação do Node Js
- No navegador pesquisar por NodeJs
- Selecionar a primeira opção
- Baixar a versão de sua preferência (Utilizei a recomendada pelo site)
- Seguir a instalação padrão do Windows

Instalação editor de texto
- Pode ser utilizado o editor da sua preferência, irei utilizar o VS Code
- No navegador pesquisar por VS code
- Selecionar a primeira opção
- Selecionar a opção de download compatível com o computador
- Seguir a instalação padrão do Windows

Criar uma pasta para o teste

No prompt de comando dentro da pasta criada para o teste rodar o seguinte comando:
- npm init -y

Será criado um package.json

Rodar o comando:
- npm install cypress --save-dev

Após a instalação ser concluída abrir o VS Code, pode ser aberto diretamente pelo terminal. Na pasta do teste rodar o comando
- code .

No VS Code, no arquivo package.json, dentro de "scripts"  na linha "test" colocar uma vírgula no final, na linha abaixo colocar o seguinte código:
- "cypress": "cypress open"

Após salvar o arquivo, entrar nas pastas (dentro da pasta do teste):
- node_modules\.bin

Para abrir o Cypress rodar o comando
- npm run cypress

Escolher a opção E2E Testing

Selecionar o browser que for utilizar (no meu caso estou utilizando o chrome)

Após o Cypress abrir um novo navegador, escolher a opção "Create new Spec", será criado um arquivo no VS code com o nome que utilizar ao selecionar a opção mencionada

No arquivo criado no VS Code colocar o código do teste.

Para rodar o teste, no navegador aberto pelo browser, selecionar o arquivo criado
