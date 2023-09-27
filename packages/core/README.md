# Apollion

Estes são os componentes da implementação do Apollion Design System, a solução completa de UI da Captalys. Você pode encontrar a documentação completa [neste link](https://apollion.captalysplatform.io/docs/getting-started-installation).

## Tecnologias

- [React](https://reactjs.org/blog/2017/09/26/react-v16.0.html)
- [Typescript](https://www.typescriptlang.org/)
- [Styled-Components](https://www.styled-components.com/)
- [Relay](https://relay.dev/)
- [Jest](https://jestjs.io/)

## Iniciando

### Instalação

Na pasta raiz do seu projeto, execute o seguinte comando:

```bash
$ npm install --save @captalys-platform/core
# ou
$ yarn add @captalys-platform/core
```

### Utilização

Para que os componentes funcionem corretamente é necessário fazer uso do `ApollionProvider` por volta da sua aplicação:

```typescript
import React from 'react';
import { render } from 'react-dom';
import { ApollionProvider } from '@captalys-platform/core';
import { App } from './app';

render(
	<React.StrictMode>
		<ApollionProvider>
			<App />
		</ApollionProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
```

## Licença

© 2021 Captalys - Todos os direitos reservados.
