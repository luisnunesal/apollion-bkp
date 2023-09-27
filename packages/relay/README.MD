# Apollion Relay

Este projeto contém a lógica que transforma as requisições dos produtos Captalys para o formato que o Middle é capaz de compreender.

## Tecnologias

- [React](https://reactjs.org/blog/2017/09/26/react-v16.0.html)
- [Typescript](https://www.typescriptlang.org/)
- [Relay](https://relay.dev/)
- [Jest](https://jestjs.io/)

## Iniciando

### Instalação

Na pasta raiz do seu projeto, execute o seguinte comando:

```bash
$ npm install --save @captalys-platform/relay
# ou
$ yarn add @captalys-platform/relay
```

### Utilização

1. Você deve criar uma variável para o ambiente Relay na aplicação conforme o código abaixo

```typescript
import { CreateRelayEnvironment } from '@captalys-platform/relay';

export const { Environment } = new CreateRelayEnvironment({
  url: 'https://api.example.com',
});
```

2. Utilizando a variável `Environment` como o ambiente relay, você pode utilizar as funções deste pacote.

## Licença

© 2021 Captalys - Todos os direitos reservados.
