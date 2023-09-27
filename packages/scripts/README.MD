# Apollion Scripts

Interface de linha de comando, contendo o template para iniciar, desenvolver e fazer o build de uma aplicação com Apollion Design System.

## Desenvolvimento

### Criando um novo projeto

Você pode iniciar um novo projeto usando a nossa `CLI` com o comando a seguir:

```bash
$ npx @captalys-platform/scripts create project-name
$ cd project-name
$ yarn start
# ou
$ npm start
```

Você não precisa instalar ou configurar ferramentas como `webpack` e `babel`, ambos já vem configurados para que você possa focar no código. Além disso o template inclui `eslint`, `prettier`, `jest`, `commitLint` e `Typescript`. O template tem a seguinte estrutura:

```
project-name
├── node_modules
├── package.json
├── tsconfig.json
├── jest.config.js
├── commitlint.config.js
├── .eslintrc.js
├── .editorconfig.js
├── .gitignore
├── .prettierrc.js
├── public
│   ├── index.html
└── src
    ├── index.tsx
    ├── App.tsx
    ├── App.test.tsx
```

### Projetos existentes

1. Para projetos existentes, você pode usar nossa `CLI` da seguinte forma (na raiz do projeto)

```bash
$ npm install @captalys-platform/scripts --save-dev
# ou
$ yarn add @captalys-platform/scripts --dev
```

2. Você deve atualizar o campo `scripts` do `package.json`

```json
{
  "scripts": {
    "dev": "scripts dev",
    "build": "scripts build",
    "test": "scripts test"
  }
}
```

3. Para a aplicação funcionar é necessário utilizar a estrutura de pasta a seguir

```
project-name
├── package.json
├── public
│   ├── index.html
└── src
    ├── index.tsx
```

## Comandos

Estes são os comandos disponíveis no nosso template

- `yarn start` ou `npm start`

  Roda o projeto em um servidor de desenvolvimento, com reload automático, em http://localhost:3000/.

- `yarn build` ou `npm build`

  Cria o projeto para ser distribuído para produção, na pasta **build**.

- `yarn test` ou `npm test`

  Roda os testes com `jest --watch` nos arquivos alterados a partir do ultimo commit.

## Licença

© 2021 Captalys - Todos os direitos reservados.
