# Apollion

Este é o projeto do Design System da Captalys, onde estão centralizadas todas as necessidades de UI da empresa. Por não possuir regras de negócio, está disponível para uso público. A documentação oficial se encontra [neste link](https://apollion.captalysplatform.io/docs/getting-started-installation).

## Configurando o ambiente

### Pré-Requisitos

Antes de começar será preciso instalar o Node.js >= 10.18.1 e um gerenciador de pacotes (NPM/Yarn).

Veja mais em: [Node.js](https://nodejs.org/pt-br/) e [Yarn](https://yarnpkg.com/pt-BR/).

### Instalando as dependências

Para instalar os pacotes, rodar na raiz do projeto:

`npm install` ou `yarn`

### Para desenvolver localmente

Para iniciar o servidor de desenvolvimento, rodar na raiz do projeto:

`npm start` ou `yarn start`

### Para gerar o `build`

Para compilar para produção utilize:

`npm build` ou `yarn build`

O código compilado estará na pasta **_dist_**.

### Descrição dos ambientes

Atualmente existem 3 ambientes principais:

- `master`: Representa o ambiente de produção, ou seja, o ambiente no qual o código está mais maduro e possui usuários finais utilizando diariamente.
- `sandbox`: Representa o ambiente de homologação, no qual usuários realizam testes e o código está aguardando para subir para produção.
- `staging`: Representa o ambiente de testes, ou seja o ambiente no qual outros desenvolvedores podem testar as novas funcionalidades.

> :information_source: [Clique aqui](https://captalys.atlassian.net/wiki/spaces/ENGCRED/pages/56885339/Utiliza%2Bo%2Bde%2BAmbientes%2B2) para informações detalhadas sobre a utilização dos ambientes.

## Fluxo de desenvolvimento

1. Partindo da branch `sandbox` criamos uma nova branch com o comando `git checkout -b <nome-da-nova-branch>`

   > :warning: Lembrando que o nome da branch deve conter o prefixo da atividade que estamos fazendo, podendo ser `fix`, que representa a correção de um bug, `feature` que representa a adição de uma nova funcionalidade ou `housekeeping`, que representa alguma refatoração de código. Após o prefixo adicionamos o character `/`, seguido do número da atividade gerado pelo Jira, seguido do nome da tarefa.

   > Exemplo: `fix/INTFE-140-criar-pagina-de-login`

2. Após o desenvolvimento é necessário realizar o commit. É recomendável utilizar o comando `git add -p`, que ajudará a selecionar as porções de códigos referentes à cada commit.

3. Após selecionar as porções de código, utilizar o comando `git commit -m <titulo-do-commit>`. Repita a operação até que todo o código esteja dentro de algum commit.

4. Antes de finalizar, executar `yarn log` para gerar o changelog, preenchendo as informações referentes às mudanças realizadas. Ao finalizar, realize o commit do arquivo de log utilizando `git add .` e `git commit -m <titulo-do-commit>`.

5. Quando todos os commit estiverem prontos, subir a tarefa no repositório remoto com o comando `git push origin <nome-da-branch>`.

   > :information_source: Para mais informações sobre boas práticas no uso do Git, [clique aqui](https://captalys.atlassian.net/wiki/spaces/ENGCRED/pages/407928896/Boas%2Bpr%2Bticas)

6. Abrir um `Merge Request (MR)` para `sandbox`. Para isso, basta utilizar o link gerado no final do processo do comando anterior ou seguir os passos do [seguinte link](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html).

   > :warning: Não se esqueça de utilizar o template definido no campo `description`, preencha todos os campos e indique duas pessoas para realizar o code review.

7. Faça o merge da sua tarefa em `staging` para que os desenvolvedores tenham acesso ao código desenvolvido, para isso, mude para a branch de `staging`, e faça o merge da nova funcionalidade com o comando `git merge --no-ff <nome-da-branch>`.

   > :warning: Certifique-se de sempre estar trabalhando com a branch atualizada!

## Estrutura do projeto

- `packages`

  - `changelog-generator`: Gerador de changelog de versão. [Pacote NPM](https://www.npmjs.com/package/@captalys-platform/changelog-generator)
  - `core`: Base de componentes do Apollion. [Pacote NPM](https://www.npmjs.com/package/@captalys-platform/core)
  - `eslint-config-captalys-platform`: Configurações padrão do ESLint para projetos Captalys. [Pacote NPM](https://www.npmjs.com/package/@captalys-platform/eslint-config-captalys-platform)
  - `relay`: Intermediário entre o Front e o Middle da Captalys utilizando Relay. [Pacote NPM](https://www.npmjs.com/package/@captalys-platform/relay)
  - `scripts`: Interface de linha de comando com scripts para criação, geração de build, entre outros. [Pacote NPM](https://www.npmjs.com/package/@captalys-platform/scripts)

- `website`: Website que contém a documentação para o usuário final, construído utilizando o [Docusaurus](https://docusaurus.io/).

> :information_source: A apresentação da estrutura do projeto pode ser encontrada [neste link](https://captalys.atlassian.net/wiki/spaces/ENGCRED/pages/114197791/Apollion).

## Style-guide

O guia de estilos deste projeto pode ser encontrado [neste link](https://captalys.atlassian.net/wiki/spaces/ENGCRED/pages/139526347/Estrutura+de+C+digo).

## Testes

Os testes unitários foram construídos com [Jest](https://jestjs.io/pt-BR/docs/getting-started). Para manter o conceito e a implementação do Apollion Design System, testes unitários são implementados em todo novo componente, visando manter a consistência destes, mesmo quando forem implementadas novas funcionalidades. Existem dois métodos de testes unitários:

- **Snapshots:** Garante que o componente irá renderizar como esperado em sua forma original (HTML/CSS). Qualquer nova mudança causará a falha dos testes, portanto a pessoa que desenvolver deverá atualizar o arquivo `.snap` manualmente

- **Props:** Garante que a lógica do componente irá se comportar de acordo com as propriedades que receber.

Para rodar os testes execute o comando `npm test` ou `yarn test`.

## Tarefas e prioridades

O board de tarefas pode ser encontrado [nesse link](https://captalys.atlassian.net/browse/INTFE). As tarefas geralmente são ordenadas por ordem de prioridade, considerando o topo como mais prioritárias. Entretanto é importante estar atento na propriedade `prioridade` de cada tarefa e nas reuniões de planejamento para estar atento às prioridades do projeto.

## Bugs

Para reportar um bug é possível utilizar o [board de Bugs.](https://captalys.atlassian.net/browse/BUGS) É recomendável conversar com o tech lead previamente afim de garantir que realmente se trata de um bug, e que é necessário abrir uma atividade de bug.

## Dúvidas

Caso persistam as dúvidas, é possível buscar por informações na [documentação do confluence](https://captalys.atlassian.net/wiki/spaces/ENGCRED/pages/74678618/Interfaces) e em último caso, procurar por algum colega do time ou o tech lead. [SQUAD Front End](https://captalys.atlassian.net/wiki/spaces/ENGCRED/pages/114197658/Interfaces+Squads#SQUAD-Front-End)

## Licença

© 2021 Captalys - Todos os direitos reservados.
