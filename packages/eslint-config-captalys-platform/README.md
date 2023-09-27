# Captalys Platform ESLint Config

Este é um projeto com as configurações padrão de ESLint para os projetos da Captalys.

## Modo de Utilização

Rodar o comando `yarn add --dev @captalys-platform/eslint-config-captalys-platform` no projeto desejado e adicionar a seguinte configuração no `package.json`:

```json
"eslintConfig": {
  "extends": "@captalys-platform/eslint-config-captalys-platform"
}
```

## Modo de Desenvolvimento

Rodar o comando `yarn link` no root deste projeto.

Rodar o comando `yarn link @captalys-platform/eslint-config-captalys-platform` e adicionar a seguinte configuração no `package.json` do projeto desejado:

```json
"eslintConfig": {
  "extends": "@captalys-platform/eslint-config-captalys-platform"
}
```

Também é necessário instalar as `peerDependencies` no projeto pai.

```bash
$ yarn add --dev @typescript-eslint/eslint-plugin	@typescript-eslint/parser eslint
$ eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jest
$ eslint-plugin-jsx-a11y eslint-plugin-prettier	eslint-plugin-react eslint-plugin-react-hooks
```

## EditorConfig

Até o momento, não é possível extender o arquivo `.editorconfig` para outros projetos da mesma forma que fazemos com o `@captalys-platform/eslint-config-captalys-platform`, porém, o eslint tem praticamente as mesmas responsabilidades do `editorconfig`.

## Hacks de Produtividade

Instalar a extensão `dbaeumer.vscode-eslint` no VSCode, e colocar as propriedades abaixo no seu arquivo `.vscode/settings.json`. Dessa forma, muitas coisas boas acontecerão na sua vida!

```json
{
	"eslint.format.enable": true,
	"editor.defaultFormatter": "dbaeumer.vscode-eslint",
	"editor.formatOnPaste": true,
	"editor.formatOnSave": true,
	"editor.codeActionsOnSave": {
		"source.fixAll": true,
		"source.organizeImports": true
	}
}
```

> **P.S**: O único arquivo relevante nesse projeto é o `index.js`. `.editorconfig` e `.prettierrc` estão aqui apenas por questões de histórico.

Happy Coding :smile:

## Licença

© 2021 Captalys - Todos os direitos reservados.
