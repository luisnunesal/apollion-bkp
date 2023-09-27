# CHANGELOG Jovian

## Release Date - 29/06/2021

### [@captalys-platform/core](https://jovian.sandbox.captalysplatform.io) - v2.4.6

##### :house: housekeeping

- [#458](https://captalys.atlassian.net/browse/INTFE-458) Utilizar ShouldForwardProp nos componentes
- [#176](https://captalys.atlassian.net/browse/INTFE-176) README.MD refactor/creation

##### :rocket: feature

- [#368](https://captalys.atlassian.net/browse/INTFE-368) Adiciona o hook pre push ao projeto junto com a pasta /scripts
- [#341](https://captalys.atlassian.net/browse/INTFE-341) Adicionar prefixo R$ no inputCurrency

##### :bug: fix

- [#459](https://captalys.atlassian.net/browse/INTFE-459) Corrigir 'opcionaText' no componente Field
- [#444](https://captalys.atlassian.net/browse/INTFE-444) InputSelect do mapa de processos não está sendo resetado

### [@captalys-platform/eslint-config-captalys-platform](https://jovian.sandbox.captalysplatform.io) - v0.5.2

##### :rocket: feature

- [#368](https://captalys.atlassian.net/browse/INTFE-368) Adicionar o hook pre-push junto com a pasta /scripts

##### :house: housekeeping

- [#481](https://captalys.atlassian.net/browse/INTFE-481) Adicionar o eslint do SonarQube dentro do scripts do Apollion

### [@captalys-platform/relay](https://jovian.sandbox.captalysplatform.io) - v0.22.1

##### :rocket: feature

- [#368](https://captalys.atlassian.net/browse/INTFE-368) Adicionar o hook pre-push junto com a pasta /scripts

### [@captalys-platform/scripts](https://jovian.sandbox.captalysplatform.io) - v0.4.1

##### :rocket: feature

- [#368](https://captalys.atlassian.net/browse/INTFE-368) Adiciona o hook pre-push junto com a pasta /scripts

# CHANGELOG Apollion

## Release Date - 01/06/2021

### [@captalys-platform/core](https://jovian.sandbox.captalysplatform.io) - v2.3.4

##### :bug: fix

- [#304](https://captalys.atlassian.net/browse/INTFE-304) Corrigir Apollion fazendo o build tanto do esm quanto do cjs
- [#291](https://captalys.atlassian.net/browse/INTFE-291) InputCurrency recebe string & number
- [#281](https://captalys.atlassian.net/browse/INTFE-281) Link causando reload da página

##### :house: housekeeping

- [#365](https://captalys.atlassian.net/browse/INTFE-365) Adicionar tratamento a função currencyToNumber

### [@captalys-platform/relay](https://jovian.sandbox.captalysplatform.io) - v0.20.1

##### :rocket: feature

- [#289](https://captalys.atlassian.net/browse/INTFE-289) Modificar o header das mutations para passar o partner definido pela aplicação

### [@captalys-platform/scripts](https://jovian.sandbox.captalysplatform.io) - v0.3.1

##### :rocket: feature

- [#307](https://captalys.atlassian.net/browse/INTFE-307) Corrigir o webpackTitle no front da rede e da OdontoPrev

## Release Date - 18/05/2021

### [@captalys-platform/core](https://jovian.sandbox.captalysplatform.io) - v2.2.3

##### :rocket: feature

- [#271](https://captalys.atlassian.net/browse/INTFE-271) Criar componente InputCurrency

##### :bug: fix

- [#228](https://captalys.atlassian.net/browse/INTFE-228) Corrige a implementação do Link quando passado o `onClick` e também corrige a chamada do touch event listener no InputRange

##### :house: housekeeping

- [#180](https://captalys.atlassian.net/browse/INTFE-180) Aplicar padrões de script no package.json

## Release Date - 04/05/2021

### [@captalys-platform/changelog-generator](https://jovian.sandbox.captalysplatform.io) - v1.0.1

##### :rocket: feature

- [#5](https://captalys.atlassian.net/browse/INTFE-5) Primeira versão do pacote de gerador de changelog

### [@captalys-platform/core](https://jovian.sandbox.captalysplatform.io) - v2.1.2

##### :house: housekeeping

- [#194](https://captalys.atlassian.net/browse/INTFE-194) Alterar o nome de todos os tokens para factory
- [#33](https://captalys.atlassian.net/browse/INTFE-33) Substituir Rollup por esbuild

# Release Date - 27/04/2021

### [@captalys-platform/core](https://apollion.sandbox.captalysplatform.io) - v2.0.6

##### :house: Housekeeping

- [#136](https://captalys.atlassian.net/browse/INTFE-136) DataTable: Adicionar exemplo no DataTable para a última linha com o botão de carregar mais.
- [#204](https://captalys.atlassian.net/browse/INTFE-204) DataTable: Documentar props `emptyTitle`, `emptyIcon` e `emptyDescription`.

##### :bug: Bug Fix

- [#211](https://captalys.atlassian.net/browse/INTFE-211) Input: Corrigir o clique do botão Enter apagando o conteúdo do campo.
- [#212](https://captalys.atlassian.net/browse/INTFE-212) Input: Remover a possibilidade de limpar o campo quando ele for `readOnly`.

# Release Date - 20/04/2021

### [@captalys-platform/core](https://apollion.sandbox.captalysplatform.io) - v2.0.4

##### :rocket: Features

- [#91](https://captalys.atlassian.net/browse/INTFE-91) DataTable: Adicionar a possibilidade de chamar a fn onSelectRow sem selectable como true.
- [#92](https://captalys.atlassian.net/browse/INTFE-92) DataTable: Tornar a linha inteira clicável quando onSelectRow estiver declarado.
- [#93](https://captalys.atlassian.net/browse/INTFE-93) DataTable: Adicionar atributo que permite customizar a funcionalidade do campo de busca.
- [#94](https://captalys.atlassian.net/browse/INTFE-94) DataTable: Adicionar a possibilidade de passar um botão de carregar mais para dentro do DataTable.

##### :house: Housekeeping

- [#135](https://captalys.atlassian.net/browse/INTFE-135) Avatar: Criar teste para.
- [#87](https://captalys.atlassian.net/browse/INTFE-87) FontFactory **[BREAKING CHANGE]**: Renomear prop `align` para `textAlign`.
- [#8](https://captalys.atlassian.net/browse/INTFE-8) InputDate: Criado documentação do `InputDate`.
- [#38](https://captalys.atlassian.net/browse/INTFE-38) Documentação:
  - Adicionado mais conteudo na documentação `useMediaQuery`.
  - Adicionado documentação do hook `useClipboard`.

##### :bug: Bug Fix

- [#52](https://captalys.atlassian.net/browse/INTFE-52) Field: Corrigido readOnly não está sendo passado para baixo dentro do formulário.

# Release Date - 06/04/2021

### [@captalys-platform/core](https://apollion.sandbox.captalysplatform.io) - v2.0.0

##### :bug: Bug Fix

- [#795](https://captalys.atlassian.net/browse/DJOV-795) TableCell: Corrigir font family.
- [#599](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/599) Fix: token interface

# Release Date - 30/03/2021

### [@captalys-platform/core](https://apollion.sandbox.captalysplatform.io) - v1.48.x

##### :rocket: Features

- [#592](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/592) UploadCard: Upgrade no onChange e correções de erros
- [#770](https://captalys.atlassian.net/browse/DJOV-770) Display: Adicionado componente `Display`;

##### :bug: Bug Fix

- [#787](https://captalys.atlassian.net/browse/DJOV-787) Button: corrigir problema da props `isLoading`

# Release Date - 23/03/2021

### [@captalys-platform/core](https://apollion.sandbox.captalysplatform.io) - v1.48.7

##### :rocket: Features

- [#580](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/580) Label: Desenvolvido componente label;
- [#751](https://captalys.atlassian.net/browse/DJOV-751) ContainerFactory: Adicionado prop `truncate`;

##### :bug: Bug Fix

- [#712](https://captalys.atlassian.net/browse/DJOV-712) Typography: Tokens do Typography não substituem valores do token variant
- [#702](https://captalys.atlassian.net/browse/DJOV-702) Slider: Adicionar eventos de touch.
- [#578](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/578) Alteração no `InputMask` causou erro no teste e foi corrigido nesse fix
- [#619](https://captalys.atlassian.net/browse/DJOV-619) InputSelect: Corrigir height sendo alterado pela abertura.

##### :house: Housekeeping

- Documentação: Tradução e padronização da tabela de propriedades/parâmetros.
- [#716](https://captalys.atlassian.net/browse/DJOV-716) Melhorar o processo de `precommit` do apollion para evitar erros de build.
- [#698](https://captalys.atlassian.net/browse/DJOV-698) Card: Atualizado implementacão do componente.
- [#752](https://captalys.atlassian.net/browse/DJOV-752) ContainerFactory: Removido padding quando utilizar prop `container`.;

# Release Date - 16/03/2021

### [@captalys-platform/core](https://apollion.sandbox.captalysplatform.io) - v1.47.x

##### :rocket: Features

- [#571](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/571) UploadCard: Adicionado prop `readOnly` no `UpoloadCard`.

##### :bug: Bug Fix

- [#1084](https://captalys.atlassian.net/browse/ADSDEV-1084) InputMask: Gera mascara do valor ao renderizar o componente
- [#680](https://captalys.atlassian.net/browse/ADSDEV-680) Tabela: corrigir e melhorar a implementação da tabela

##### :house: Housekeeping

- [#573](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/573) Atualização da documentação do Input Select
- [#570](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/570) Atualização da documentação do Dynamic Form
- [#574](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/574) Adição de documentação do ApollionProvider e GlobalStyle.

### @captalys-platform/eslint-config-captalys-platform@0.4.x

##### :house: Housekeeping

- [#1083](https://captalys.atlassian.net/browse/ADSDEV-1083) Implementa React Hooks Exhaustive Deps no ESLint

### @captalys-platform/scripts@0.3.0

##### :rocket: Features

- [#675](https://captalys.atlassian.net/browse/DJOV-675) Adicionar a opção de alterar a pasta de output no comando build

# Release Date - 09/03/2021

### [@captalys-platform/core](https://apollion.sandbox.captalysplatform.io) - v1.46.x

##### :house: Housekeeping

- [#564](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/564) Atualizada a página de documentação dos tokens
- [#563](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/563) Corrigir variantes de neutral e grayscale do BgColorsType
- [#560](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/560) Fazer com que o tipo `BgColorsTypes` seja dinâmico
- [#559](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/559) Atualização da documentação do Basic Form

##### :rocket: Features

- [#554](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/554) Token **[BREAKING CHANGE]**: Criado `FlexFactory`.
- [#315](https://captalys.atlassian.net/browse/ATLDEV-315) Notification: Adição da propriedade `pagePosition` e alteração do estilo quando mobile.

##### :bug: Bug Fix

- [#295](https://captalys.atlassian.net/browse/ATLDEV-295) InputSelect: Adição de fontFamily default.
- [#568](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/563)
  - [Token] Adição de propriedade `cursor`.
  - [Avatar] Corrigido impossibilidade de extender o componente.
  - [Notification] Adicionado timer padrão de 5 segundos no Desktop.

## Release Date - 02/03/2021

### [@captalys-platform/core](https://apollion.sandbox.captalysplatform.io) - v1.45.x

##### :rocket: Features

- [#554](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/554) Token **[BREAKING CHANGE]**: Criado `FlexFactory`.

##### :bug: Bug Fix

- [#281](https://captalys.atlassian.net/browse/ATLDEV-281) Tabs: onChange chamado indevidamente.

## Release Date - 23/02/2021

### [@captalys-platform/core](https://apollion.sandbox.captalysplatform.io) - v1.44.x

##### :house: Housekeeping

- [#293](https://captalys.atlassian.net/browse/ATLDEV-293) Grid: Atualização da documentação.

##### :bug: Bug Fix

- [#551](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/551)
  - [Field] Corrigido label do field de acordo com o design do figma.
  - [Form] Corrigido interface Form grid não aceitando children.

### @captalys-platform/scripts@0.2.1

#### :bug: Bug Fix

- [#552](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/552) Scripts: Corrigido obrigatoriedade do `relay`.

## Release Date - 16/02/2021

### [@captalys-platform/core](https://apollion.sandbox.captalysplatform.io) - v1.43.x

##### :rocket: Features

- [#548](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/548) Form: Adicionado callback `onError`.
- [#548](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/548):
  - [Form] - Adicionado callback `onError`.
  - [InputSelect] - Possibilitar a alteração do value a partir de um componente externo
- [#544](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/544) Token: Adicionado propriedade `zIndex`.

##### :bug: Bug Fix

- [#546](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/546)
  - Atualizado documentação de SVG
  - Adicionada a propriedade `dimensions` para trabalhar com proporções;
  - Corrigido quando não passamos a propriedade `size`, o componente estava forçando um tamanho quadrado de `1em`

##### :house: Housekeeping

- [#545](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/545) BorderColor: Alterar tipo.
- [#547](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/547) ColorFactory: Alterar tipo.
- [#549](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/549) GlobalStyle: Remover propriedade background-color.

## 09/02/2021

### [@captalys-platform/scripts](https://apollion.sandbox.captalysplatform.io) - v0.2.x

#### :bug: Bug Fix

- [#542](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/542) Scripts
  - Corrigido Hot Reload.
  - `FastRefresh` ativo por padrão.
  - Desabilitado ação de abrir o navegador automaticamente.

### @captalys-platform/core@1.42.0

#### :house: Interno

- [#541](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/541)
- [#543](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/543)
  - Implementado `BaseText`
  - Renomeado `Typography` para `Text`
  - `Typography` agora é um alias para `Text`

## 02/02/2021

### @captalys-platform/relay@0.2.0

#### :rocket: Features

- [#531](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/531)
  - Adicionado suporte a `cookies` para armazenar variáveis de ambiente
  - Adicionada documentação do `Relay Core`
  - Refatorado Interface da classe `RelayEnvironment`
  - Removida a lógica para re-autenticação devido a inutilidade da mesma

### @captalys-platform/scripts@0.2.1

#### :bug: Bug Fix

- [#525](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/525) Scripts: Corrigido configuração do webpack.

### @captalys-platform/core@1.41.0

#### :rocket: Features

- [#526](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/526) Adição do componente Avatar

#### :house: Interno

- [#536](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/536) Input Range Multiple: tradução da documentação.
- [#530](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/530) Checkbox: tradução da documentação.
- [#535](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/535) AppLayout: Alteração do rowGap do componente para os itens ficarem 'colados' no Atlas.
- [#528](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/528) UploadCard: Tradução e update da documentação.
- [#529](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/529) Radio: Tradução da documentação.
- [#524](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/527) ProgressBar: Alteração da propriedade `variant` para `color` e melhora na documentação.
- [#532](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/532) Spacing: Tradução da documentação de espaçamento.
- [#537](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/537) Skeleton: Tradução da documentação do Skeleton.
- [#539](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/539) Skeleton: Tradução da documentação do Skeleton.

#### :bug: Bug Fix

- [#534](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/534) InputSelect: Correção do Generic Type

## 26/01/2021

### @captalys-platform/scripts@0.2.0

#### :house: Interno

- [#524](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/524) Scripts: Adicionado Possibilidade de extender e importar em outros projetos.

### @captalys-platform/core@1.40.0

#### :bug: Bug Fix

- [#523](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/523) GlobalStyle: adicionado `neutral.10` como background do body.
- [#522](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/522) InputRange: removido prop `inputLabel` & tooltip label aparece quando em **hover** ou **active**.

## 19/01/2021

### @captalys-platform/core@1.39

#### :rocket: Features

- [#512](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/512) Button: nova prop `iconPosition`.
- [#511](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/512) Theme **[BREAKING CHANGE]**: nova tema agora deve ser criado usando `createTheme`.

#### :rocket: Features

- [#519](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/519) UploadCard: pode ser resetado.
- [#519](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/519) Notification: recebe componente no `message`.
- [#512](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/512) Button: nova prop `iconPosition`.
- [#511](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/511) Theme **[BREAKING CHANGE]**: novo tema agora deve ser criado usando `createTheme`.

#### :house: Interno

- [#516](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/516) Dropdown: Alterado Implementação e Atualizado documentação.
- [#514](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/514) Tooltip: Alterado Implementação e Atualizado documentação.
- [#517](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/517) TextArea: Atualizado documentação.
- [#517](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/517) Field: Atualizado documentação.
- [#514](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/514) Popover: Atualizado documentação.
- [#511](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/511) Colors: Atualizado documentação.
- [#512](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/512) Input: Atualizado documentação.
- [#512](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/512) InputMask: Atualizado documentação.

#### :bug: Bug Fix

- [#518](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/518) Tabela: Ellipsis não precisa mais de um tamanho para funcionar (`columnSize`), agora ele coloca um tamanho fixo, caso passe desse tamanho o ellipsis é ativado.

## 12/01/2021

### @captalys-platform/core@1.38.0

#### :rocket: Features

- [#507](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/507) Paper: Adicionado props `noShadow` e `square`.
- [#502](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/502) Tabela: Adicionado possibilidade de alinhamento individual por coluna.

#### :house: Interno

- [#500](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/500) Notification **[BREAKING CHANGE]**: Atualizado documentação e alteração na API.
- [#506](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/506) Flex: Atualizado documentação.
- [#506](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/506) Paper: Atualizado documentação.
- [#506](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/506) Image: Atualizado documentação.
- [#506](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/506) DataTable: Atualizado documentação.
- [#500](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/500) Notification **[BREAKING CHANGE]**: Atualizado documentação e alteração na API.
- [#501](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/500) List: Atualizado documentação.
- [#501](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/500) Modal: Atualizado documentação.
- [#501](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/500) Scroll: Atualizado documentação.
- [#501](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/500) Icon: Adicionado ícone `search`.
- [#503](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/503) Spinner **[BREAKING CHANGE]**: Atualizado documentação e alteração na API.
- [#510](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/510) Docs: Refatorada a Home do Apollion.

#### :bug: Bug Fix

- [#507](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/507) Grid: Corrigido `padding`e `margin`.
- [#500](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/500) Theme: Corrigido cores ao customizar o tema.
- [#505](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/505) Tabela: Corrigido scroll da tabela e adicionado props alternativas `overflowX` e `overflowY` no Flex.
- [#504](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/504) Tabela: Corrigido bgColor, agora é opcional e está passando as cores corretamente para `TableCell` e `TableHeaderCell`.

## 05/01/2021

### @captalys-platform/core@1.37.0

#### :house: Interno

- [#496](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/496) Docusaurus: Tradução de labels no header e no footer.
- [#493](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/493) Tabs **[BREAKING CHANGE]**: Refatorado para ser um componente do tipo `controlled`.
- [#494](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/494) Button: Alterado `width` para `fit-content` por padrão.
- [#494](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/494) Link: Atualizado Pagina de `Link`.
- [#494](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/494) Icon: Atualizado Pagina de `Icon`.
- [#494](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/494) IconButton: Atualizado Pagina de `IconButton`.
- [#494](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/494) Typography: Atualizado Pagina de `Typography`.
- [#495](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/495) Tabs: Melhorias na documentação, adcionado mais exemplos e revisão nas informações das propriedades.
- [#499](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/499) Icons **[BREAKING CHANGE]**: Removido `Icons` antigos que usava componente `SVG`.

### @captalys-platform/eslint-config-captalys-platform@0.3.0

#### :rocket: Features

- [#497](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/497) Eslint: adicionado `eslint-plugin-simple-import-sort` para organizar os `imports`.

## 22/12/2020

### @captalys-platform/core@1.36.0

#### :house: Interno

- [#492](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/492) Button: Atualizado documentação.
- [#489](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/489) Tabs: Aplicado o content e melhorando a doc.
- [#488](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/488) Content: Aplicado `Content` nos componentes `Modal` e `Notification`.
- [#487](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/487) SuperTable: Alterado a nomenclatura para `Table` junto de seus subcomponentes.
- [#487](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/487) Table: Exclusão do `Table` antigo.
- [#487](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/487) SuperTable: Corrigido condensado/expandido.
- [#487](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/487) SuperTable: Botão de tamanho de linha agora é opcional.
- [#487](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/487) SuperTable: Corrigido Ellipsis na tabela.
- [#487](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/487) SuperTable: Aplicado component de `Content` na tabela.
- [#486](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/486) Atualizado dependencias.

## 15/12/2020

### @captalys-platform/core@1.35.0

#### :house: Interno

- [#483](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/483) Grid: Adicionado Tokens no Componente `Grid`.
- [#478](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/478) SuperTable: Mudança na prop `textAlign` para `align` e agora é possível alinhar qualquer componente ou texto (se couber dentro de `td` e `th`). Novo padrão de alinhamento é `center`.
- [#480](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/480) Tabs: Agora a prop `tabTitle` também pode receber um elemento JSX `ReactNode` além de uma `string`, além disso foram feitas melhorias na documentação.

#### :rocket: Features

- [#482](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/482) Content: novo componente `Content`.
- [#479](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/479) Tabs: alterar tab atual quando o index passado como props alterar.
- [#476](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/476) FonToken: Adicionado `textAlign` e `textDecoration`.
- [#477](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/477) Tokens: Adicionado `SizeFactory`.

#### :bug: Bug Fix

- [#485](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/485) Input: Corrigido `Icon` não recendo estilos do `Input`.
- [#484](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/484) Popover: Corrigido erro na documentação do `Popover`.

## 08/12/2020

### @captalys-platform/core@1.34.0

#### :house: Interno

- [#469](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/469) SuperTable: ColumnSum agora é opcional, assim carregando o estilo do footer quando ele também não é passado como prop.
- [#473](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/473) Test: Adicionado minimo aceitável de testes.

#### :rocket: Features

- [#472](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/472) Icons: Adicionados novos icones.
- [#471](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/471) Tokens: Tokens recebem props.

#### :bug: Bug Fix

- Relay Core: Hotfix para tratamento de erros quando autentica o usuário. Foi adicionada uma nova propriedade no `Environment` para controlar se a aplicação vai usar o redirect padrão do `Core` do Relay.

## 01/12/2020

### @captalys-platform/core@1.33.0

#### :house: Interno

- [#470](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/470) Input: Corrigido reset no InputDate.
- [#465](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/465) Checkbox: recebe um componente como label.
- [#464](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/464) Scripts: adicionado instruções de uso.
- [#460](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/460) Prettier: Ajuste na configuração.
- [#466](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/466) Link: Aparência de Botão.

#### :rocket: Features

- [#471](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/471) Tokens: Tokens recebem props.

## 01/12/2020

### @captalys-platform/core@1.33.0

#### :house: Interno

- [#467](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/467) Tests: Corrigido erros que impedia os testes de rodarem.
- [#465](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/465) Checkbox: recebe um componente como label.
- [#464](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/464) Scripts: adicionado instruções de uso.
- [#460](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/460) Prettier: Ajuste na configuração.
- [#466](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/466) Link: Aparência de Botão.

## 24/11/2020

### @captalys-platform/core@1.32.0

#### :rocket: Features

- [#454](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/454) ApollionProvider: Componente centralizando os providers internos.

#### :house: Interno

- [#452](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/452) **Removed**: Removido componente `Text`.
- [#452](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/452) Typography: Adicionado cor padrão.
- [#457](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/457) Relay: setup de testes.

#### :bug: Bug Fix

- [#456](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/456) SuperTable: Correção de scroll quando não tem resultados.
- [#455](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/455) Tabs: Correção da linha que ficava abaixo do texto ocasinando duas linhas no nome e no botão.

## 17/11/2020

### @captalys-platform/core@1.31.0

#### :rocket: Features

- [#447](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/447) Scripts: Notificação de atualização.
- [#443](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/443) Scripts: Adicionado **CommitLint** hook.
- [#446](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/446) Tokens: Adicionado novo token de bgColor **BackgroundColorFactory**.

#### :house: Interno

- [#445](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/445) Apollion: Adicionado `.nvmrc`.
- [#444](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/444) Relay: Remoção do redirect quando ocorrer erro fetch.
- [#439](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/439) Tokens: Aplicado BackgroundColorFactory nos Components Elegíveis.
- [#448](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/448) Tokens: Aplicado Deep Token nos Components Elegíveis.

#### :bug: Bug Fix

- [#442](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/442) DeepSemantic: Corrigido implementação.
- [#446](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/446) Paper: Correção BgColor contemplando todas as cores
- [#446](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/446) Input: Correção BgColor contemplando todas as cores

## 10/11/2020

### @captalys-platform/core@1.30.0

#### :rocket: Features

- [#434](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/434) Select & TextArea: Adicionado prop **size**.
- [#437](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/437) Novo **Package**: Comandos `apollion-script`.

#### :house: Interno

- [#439](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/439) Tokens: Aplicado Border Token nos Components Elegíveis.

#### :bug: Bug Fix

- [#438](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/438) ESlint: Corrigido dependencias.

### @captalys-platform/relay@0.15.3

#### :bug: Bug Fix

- [#436](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/436) Corrigido bug do 'redirect' quando falha a autenticação.

### @captalys-platform/scripts@0.1.0

> Liberada primeira versão para testes! \o/

## 3/11/2020

### @captalys-platform/core@1.29.0

#### :rocket: Features

- [#431](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/431) Tokens: Implementado **Border Round type**.
- [#432](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/432) Input: Adicionado nova prop **size**.
- [#420](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/420) Tokens: Implementado **Deep Level**.

#### :house: Interno

- [#420](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/420) Tokens: Correções de design no Deep.

#### :bug: Bug Fix

- [#433](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/433) SuperTable: Removido paginação obrigatoria.

## 27/10/2020

### @captalys-platform/core@1.28.0

#### :rocket: Features

- [#426](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/426) Tokens: Implementado Tokens de Borda.

#### :bug: Bug Fix

- [#424](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/424) SuperTable: Correção de espaçamento entre as colunas.

#### :house: Interno

- [#423](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/423) Tokens: Aplica Tokens(Font, Color, Spacing) nos componentes e documentação.
- [#425](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/425) Tokens: Documentação do uso dos Tokens.

## 20/10/2020

### @captalys-platform/core@1.27.0

#### :rocket: Features

- [#406](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/406) Card: Adicionado novo componente de Card.
- [#420](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/420) Deep (Depth) Semantic: Adicionado nova semantica de deep (depth) nos novos padrões dos tokens.

#### :house: Interno

- [#417](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/417) Tokens: Implementado Tokens de Espaçamento.
- [#418](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/418) ThemeColors: Implementado as cores **Deep** e **Complementary**.
- [#419](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/419) ThemeColors: Implementado geração do **JSON** das cores na documentação.

## 13/10/2020

### @captalys-platform/core@1.26.0

#### :rocket: Features

- [#407](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/407) Docs: Adicionado editor online com live preview na documentação.
- [#414](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/414) UploadCard: UploadCard agora pode ser customizado.
- [#413](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/413) Tokens: Implementado estrutura para Design Tokens! Começando pelos tokens de Tipografia.

#### :bug: Bug Fix

- [#408](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/408) Checkbox: Ajustado layout do Checkbox.
- [#411](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/411) Icon: Não atualizando ao alterar as props.
- [#410](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/410) Radio: Ajustado layout do Input Radio.
- [#412](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/412) Dropdown: adicionado key quando utilizado options **prop**.
- [#416](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/416) Notification: Ajustado Animação de saida..

#### :house: Interno

- [#413](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/413) Docs: Adicionado documentação conceitual do projeto em português

## 22/09/2020

### @captalys-platform/core@1.25.0

#### :bug: Bug Fix

- [#484](https://gitlab.com/Captalys/interface/apollion/-/issues/484) InputMask: Agora é um componente controlled.

#### :house: Interno

- [#487](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/487) Rollup: atualizado configurações do rollup e romovido dependencias não utilizadas.
- [#488](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/488) Audit: Adicionado script **audit-dependencies**.

#### :rocket: Features

- [#480](https://gitlab.com/Captalys/interface/apollion/-/issues/480) DataTable: Adicionado Footer.
- [#470](https://gitlab.com/Captalys/interface/apollion/-/issues/470) Form: Form dinamico.
- [#483](https://gitlab.com/Captalys/interface/apollion/-/issues/483) DataTable: Dropdown de espaçamento.
- [#480](https://gitlab.com/Captalys/interface/apollion/-/issues/480) DataTable: Adicionado Footer.
- [#483](https://gitlab.com/Captalys/interface/apollion/-/issues/483) DataTable: Dropdown de espaçamento.
- [#458](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/458) DataTable: **preview** Componente de data grid.
- [#459](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/459) Popover: Novo componente.
- [#436](https://gitlab.com/Captalys/interface/apollion/-/issues/436) SuperTable: Desenvolver base componente de Tabela.
- [#437](https://gitlab.com/Captalys/interface/apollion/-/issues/437) SuperTable: Desenvolver base componente de célula da tabela.
- [#438](https://gitlab.com/Captalys/interface/apollion/-/issues/438) SuperTable: Desenvolver base componente de Header da tabela.
- [#454](https://gitlab.com/Captalys/interface/apollion/-/issues/454) SuperTable: Adicionado Tooltip quando o conteudo tiver ellipsis.
- [#457](https://gitlab.com/Captalys/interface/apollion/-/issues/457) SuperTable: Adicionado Hover como prop.
- [#452](https://gitlab.com/Captalys/interface/apollion/-/issues/452) SuperTable: Alterado estrutura de thead com caption aria e add nova estrutura.
- [#453](https://gitlab.com/Captalys/interface/apollion/-/issues/453) SuperTable: Agora o width do columnSize aceita number
- [#455](https://gitlab.com/Captalys/interface/apollion/-/issues/455) SuperTable: Implementado Layout de tabela sem dados.
- [#456](https://gitlab.com/Captalys/interface/apollion/-/issues/456) SuperTable: ImplementadoSelect(checkbox) das linhas e estilo.
- [#478](https://gitlab.com/Captalys/interface/apollion/-/issues/478) SuperTable: Implementado Dropdown no header.
- [#479](https://gitlab.com/Captalys/interface/apollion/-/issues/479) SuperTable: Implementado paginação no header.
- [#482](https://gitlab.com/Captalys/interface/apollion/-/issues/482) SuperTable: Implementado soma no footer.

### @captalys-platform/core@1.24.0

#### :bug: Bug Fix

- [#477](https://gitlab.com/Captalys/interface/apollion/-/issues/477) Scroll: corrigido bug no MacOS quando usado sem mouse externo.
- [#388](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/388) Theme: Grayscale must respect 'baseDark' color;

## 08/09/2020

### @captalys-platform/core@1.23.0

#### :house: Interno

- [#451](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/451) Tooltip: Atualizado estilo do componente.

#### :bug: Bug Fix

- [#467](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/467) InputSelect: ajustado altura quando houver seleção multipla.
- [#468](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/468) Input: fix input clear.
- [#472](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/472) Dropdown: fix hover bug.

## 25/08/2020

### @captalys-platform/core@1.22.0

#### :house: Interno

- [#366](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/366) Package: Atualizando os snapshots de testes no projeto.
- [#445](https://gitlab.com/Captalys/interface/apollion/-/issues/445) Image: Separado funcionalidade de lazyLoad em outro componente `ImageLazy`.

#### :rocket: Features

- [#430](https://gitlab.com/Captalys/interface/apollion/-/issues/430) Icon: Adicionado novos `icons`.
- [#443](https://gitlab.com/Captalys/interface/apollion/-/issues/443) InputRange: Agora o mesmo é _controlled_.

#### :bug: Bug Fix

- [#449](https://gitlab.com/Captalys/interface/apollion/-/issues/449) Flex: corrigir `padding` do Container
- [#446](https://gitlab.com/Captalys/interface/apollion/-/issues/446) Button: Corrigir width dentro do style do botão
- [#445](https://gitlab.com/Captalys/interface/apollion/-/issues/445) Image: Corrigido altura do componente duplicada no lazyLoad.
- [#447](https://gitlab.com/Captalys/interface/apollion/-/issues/447) Button: removido box-shadow na variant **linked**, e substituido por `text-decoration: underline`.

## 18/08/2020

### @captalys-platform/core@1.21.0

#### :rocket: Features

- [#422](https://gitlab.com/Captalys/interface/apollion/-/issues/422) Tooltip: Atualizar posição do tooltip no scroll da pagina.
- [#432](https://gitlab.com/Captalys/interface/apollion/-/issues/432) Icon: adicionado prop src.

#### :bug: Bug Fix

- [#439](https://gitlab.com/Captalys/interface/apollion/-/issues/439) Typography: remover @import Muli do createGlobalStyles
- [#427](https://gitlab.com/Captalys/interface/apollion/-/issues/427) Typography: Reset margin/padding no elementos padrões.

#### :house: Interno

- [#424](https://gitlab.com/Captalys/interface/apollion/-/issues/424) Spacing: Adicionado docstring no `theme.spacing`.
- [#425](https://gitlab.com/Captalys/interface/apollion/-/issues/425) Spacing: Adicionado documentação dinamica do espaçamento.
- [#428](https://gitlab.com/Captalys/interface/apollion/-/issues/428) Typography: Refatoração do Typography.

## 11/08/2020

### @captalys-platform/core@1.20.0

#### :rocket: Features

- [#401](https://gitlab.com/Captalys/interface/apollion/-/issues/401) Typography: Adicionado opção para aceitar todas as cores do Apollion.
- [#405](https://gitlab.com/Captalys/interface/apollion/-/issues/405) Icon: Novo compoente `Icon`.
- [#410](https://gitlab.com/Captalys/interface/apollion/-/issues/410) Tooltip: Adicionado prop `interactive`, possibilita hover no tooltip.
- [#411](https://gitlab.com/Captalys/interface/apollion/-/issues/411) Upload Card: Adicionada opção para passar um texto _custom_ para o botão de enviar arquivos.
- [#414](https://gitlab.com/Captalys/interface/apollion/-/issues/414) Paper: Adicionado regra de depth para o paper.

#### :bug: Bug Fix

- [#403](https://gitlab.com/Captalys/interface/apollion/-/issues/403) Tabs: Removido box-shadow no focus e underline no hover.
- [#409](https://gitlab.com/Captalys/interface/apollion/-/issues/409) Modal: Corrigido scroll no Chrome.
- [#412](https://gitlab.com/Captalys/interface/apollion/-/issues/412) InputSelect: Corrigido o `width` que não estava sendo passado para baixo.
- [#419](https://gitlab.com/Captalys/interface/apollion/-/issues/419) UploadCard: Corrigido tamanho da imagem preview.
- [#406](https://gitlab.com/Captalys/interface/apollion/-/issues/406) Form: Corrigido espaçamento na documentação.

#### :house: Interno

- [#400](https://gitlab.com/Captalys/interface/apollion/-/issues/400) InputFile: removido.
- [#409](https://gitlab.com/Captalys/interface/apollion/-/issues/409) Lint agora roda no Jenkins também.

## 04/08/2020

### @captalys-platform/core@1.19.0

#### :rocket: Features

- [#155](https://gitlab.com/Captalys/interface/apollion/-/issues/155) Input: Adicionado opção de limpar conteudo do input.
- [#395](https://gitlab.com/Captalys/interface/apollion/-/issues/395) Grid: Add regras de espaçamento as propriedades rowGap e CollumnGap.
- [#399](https://gitlab.com/Captalys/interface/apollion/-/issues/399) Form: Adicionar forma de inferir o tipo dos objetos para construção de formulários.

#### :bug: Bug Fix

- [#155](https://gitlab.com/Captalys/interface/apollion/-/issues/155) Input: Removido padding horizontal quando não há icone.
- [#305](https://gitlab.com/Captalys/interface/apollion/-/issues/155) InputSelect: Corrigido erros de interface.
- [#391](https://gitlab.com/Captalys/interface/apollion/-/issues/391) Checkbox: Corrigido Icone e add flex-shrik:0.
- [#396](https://gitlab.com/Captalys/interface/apollion/-/issues/396) Modal: Corrigido scroll não funcional do Modal.
- [#397](https://gitlab.com/Captalys/interface/apollion/-/issues/397) Form: Corrigido bug que não atualizado os fields dentro do formulário.

## 28/07/2020

### @captalys-platform/core@1.18.0

#### :house: Interno

- [#380](https://gitlab.com/Captalys/interface/apollion/-/issues/380) Radius: Aplicado regra de Radius no components do Apollion.
- [#388](https://gitlab.com/Captalys/interface/apollion/-/issues/388) InputMask: Função de criar mascaras movido para pasta utils.
- [#392](https://gitlab.com/Captalys/interface/apollion/-/issues/392) Modal: Correção do alinhamento do header quando possui ícone no título.

#### :rocket: Features

- [#359](https://gitlab.com/Captalys/interface/apollion/-/issues/384) Typography: Adicionado 'colorVarint' nas props possibilitando alterar tonalidade da cor selecionada na prop 'Color'.
- [#378](https://gitlab.com/Captalys/interface/apollion/-/issues/378) UploadCard: Ajuste de layout.
- [#382](https://gitlab.com/Captalys/interface/apollion/-/issues/382) Tooltip: Novo componente de Tooltip.

- [#376](https://gitlab.com/Captalys/interface/apollion/-/issues/376) InputRangeMultiple: Adicionado novo component de inputRangeMultiplo, feito como outro component devido a tamanho do codigo e caracteriscas do proprio component.

#### :bug: Bug Fix

- [#379](https://gitlab.com/Captalys/interface/apollion/-/issues/379) Input: Resolvido warning de input uncontrolled.
- [#385](https://gitlab.com/Captalys/interface/apollion/-/issues/385) Input: Removido setas no type='number'.
- [#394](https://gitlab.com/Captalys/interface/apollion/-/issues/394) Flex: Corrigido o margin e o padding quando for um `container`.

#### :memo: Documentação

- Typography: Melhoria na doc adicionando as novas props.
- Form: Melhoria na doc adicionando como usar o 'date'.

## 21/07/2020

### @captalys-platform/core@1.17.0

#### :house: Interno

- Rollback do Text Component - DEPRECATED

## 21/07/2020

### @captalys-platform/core@1.17.0

#### :rocket: Features

- [#359](https://gitlab.com/Captalys/interface/apollion/-/issues/368) InputRange: Implementado funcionamento, estilos e estados basicos, atualizado doc.
- [#359](https://gitlab.com/Captalys/interface/apollion/-/issues/373) Radius: Implementado regra de border-radius no themes.
- Text: Criado um alias Text do Typography.
- [#367](https://gitlab.com/Captalys/interface/apollion/-/issues/367) UploadCard: novo componente de UploadCard.

## 14/07/2020

### @captalys-platform/core@1.16.0

#### :rocket: Features

- [#359](https://gitlab.com/Captalys/interface/apollion/-/issues/359) Modal: Implementar novo Modal.
- [#360](https://gitlab.com/Captalys/interface/apollion/-/issues/360) Depth: Implementado regra de profundidade(shadows) no themes.
- [#361](https://gitlab.com/Captalys/interface/apollion/-/issues/361) Depth: Aplicado regra de profundidade(shadows) no Buttons.
- [#362](https://gitlab.com/Captalys/interface/apollion/-/issues/362) Depth: Aplicado regra de profundidade(shadows) no Form.
- [#363](https://gitlab.com/Captalys/interface/apollion/-/issues/363) Form: Chamar onSubmit fora do form.

## 07/07/2020

### @captalys-platform/core@1.15.0

#### :house: Interno

- [#320](https://gitlab.com/Captalys/interface/apollion/-/issues/320) Implementado React.forwardRef em componentes chaves.
- [#327](https://gitlab.com/Captalys/interface/apollion/-/issues/327) Form: children pode ser um função permitindo validação customizado do submit button.
- [#352](https://gitlab.com/Captalys/interface/apollion/-/issues/352) Notification: Toast notification context.
- [#353](https://gitlab.com/Captalys/interface/apollion/-/issues/353) CLI: Removido da estrutura.
- [#354](https://gitlab.com/Captalys/interface/apollion/-/issues/354) Text: Removido da estrutura e do docs.
- [#355](https://gitlab.com/Captalys/interface/apollion/-/issues/355) Typography: Ajustado para manter somente os estilos referente as tags de texto, para o outros elementos os estilos foram movidos para os respectivos componentes.

#### :bug: Bug Fix

- [#357](https://gitlab.com/Captalys/interface/apollion/-/issues/357) Bug tabs e modal: Corrigido problema ao tirar ao substituir o component Text pelo Typography.

## 24/06/2020

### @captalys-platform/core@1.14.0

#### :rocket: Features

- [#345](https://gitlab.com/Captalys/interface/apollion/-/issues/345) Implementado componente `<Typography />`.
- [#333](https://gitlab.com/Captalys/interface/apollion/-/issues/333) Implementado Espaçamento.
- [#282](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/282) Refatorando o componente de `<Tabs />`

#### :bug: Bug Fix

- [#334](https://gitlab.com/Captalys/interface/apollion/-/issues/334) QA Notification: Corrigido tamanho do botão de fechar e adionado estilos hover e active.
- [#335](https://gitlab.com/Captalys/interface/apollion/-/issues/335) QA Notification: Corrigido lugar do botão mais a esquerda no tipo 'block' e 'page'.
- [#336](https://gitlab.com/Captalys/interface/apollion/-/issues/336) Corrigido documentação do componente Notification.
- [#337](https://gitlab.com/Captalys/interface/apollion/-/issues/337) QA Notification: Corrigido notificação tipo 'toastr' agora é fixed
- [#338](https://gitlab.com/Captalys/interface/apollion/-/issues/338) QA Notification: Corrigido botão que quebrava passando o tamanho fixo e impedindo do tipo 'toastr' ter botão.
- [#339](https://gitlab.com/Captalys/interface/apollion/-/issues/339) Atualizado lógica do componente ProgressBar / Adicionado animations no Theme.
- [#340](https://gitlab.com/Captalys/interface/apollion/-/issues/340) QA Notification: Corrigido notificação tipo 'page' agora o component fica no topo da pagina e empurra o conteudo para baixo.
- [#341](https://gitlab.com/Captalys/interface/apollion/-/issues/341) QA Notification: Corrigido margins no component, evidentes no tipo 'page'.
  e aceita variarios elementos passando um array de notificações. - [#351](https://gitlab.com/Captalys/interface/apollion/-/issues/351) MVP Input Range

      	#### :memo: Documentação

- [#347](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/347) Criado README.md para hand-off

## 17/06/2020

### @captalys-platform/core@1.13.0

#### :rocket: Features

- [#326](https://gitlab.com/Captalys/interface/apollion/-/issues/326) Implementado Tipografia: Agora seguindo o as diretrizes da area de design com tamanhos multiplos de 4 automaticamente.

#### :bug: Bug Fix

- [#321](https://gitlab.com/Captalys/interface/apollion/-/issues/321) Corrigido função & regras de espacamento no Theme.
- [#328](https://gitlab.com/Captalys/interface/apollion/-/issues/328) Alinhado checkbox com label

## 10/06/2020

### @captalys-platform/core@1.12.0

#### :bug: Bug Fix

- [#312](https://gitlab.com/Captalys/interface/apollion/-/issues/312) Corrigido Feedback Form: Agora quando os campos do formulário retornam um erro, sucesso ou qualquer outra mensagem de feed o form nao empurra mais os conteudos para baixo.
- [#236](https://gitlab.com/Captalys/interface/apollion/-/issues/236) Corrigido InputFile: Agora é possivel passar a estilização ao estender o componente.
- [#313](https://gitlab.com/Captalys/interface/apollion/-/issues/313) Corrigido bug ao omitir form validation
- [#314](https://gitlab.com/Captalys/interface/apollion/-/issues/314) Removido cores obrigatórias do componente ThemeProvider

## 03/06/2020

### @captalys-platform/core@1.11.0

#### :rocket: Features

- [#284](https://gitlab.com/Captalys/interface/apollion/-/issues/264) Implementado Notifications: Adicionado com todas as props do design,testes e documentação.
- [#300](https://gitlab.com/Captalys/interface/apollion/-/issues/300) Implementado ProgressBar

#### :bug: Bug Fix

- [#295](https://gitlab.com/Captalys/interface/apollion/-/issues/295) Corrigido Button Link Layout
- [#316](https://gitlab.com/Captalys/interface/apollion/-/issues/316) Corrigido Flex Gap sendo adicionado desnecessariamente

## 20/05/2020

### @captalys-platform/core@1.10.0

#### :rocket: Features

- [#284](https://gitlab.com/Captalys/interface/apollion/-/issues/284) Implementado Input: Adicionado icones, propriedade de tamanho, novos testes e documentação.
- [#285](https://gitlab.com/Captalys/interface/apollion/-/issues/285) Implementado TextArea
- [#304](https://gitlab.com/Captalys/interface/apollion/-/issues/304) Implementado FieldGroup: Funcional para checkbox e radios. Deve ser utilizado junto com o componente Form.

#### :bug: Bug Fix

- [#286](https://gitlab.com/Captalys/interface/apollion/-/issues/286) Refatorado Checkbox

#### :house: Interno

- [#245](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/245) Rollup build

#### :hammer: Testes

- Implementado Testes do Radio Input

## 13/05/2020

### @captalys-platform/core@1.9.4

#### :rocket: Features

- [#284](https://gitlab.com/Captalys/interface/apollion/-/issues/284) Implementado ícones com seus estados e adicionado propriedade de tamanho, além de novos testes no componente de Input.

#### :rocket: Features

- [#238](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/238) Implementado Skeleton

#### :bug: Bug Fix

- [#273](https://gitlab.com/Captalys/interface/apollion/-/issues/273) Corrigido interface do componente Form
- [#275](https://gitlab.com/Captalys/interface/apollion/-/issues/275) Alterado a estrutura do componente Field para se adequar ao layout desenvolvido pelo time de UI.
- [#276](https://gitlab.com/Captalys/interface/apollion/-/issues/276) Ajustes no Input padrão para se adequar ao layout do design e testes básicos no component.

#### :memo: Documentação

- [#249](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/249) Adicionado CHANGELOG no Apollion

#### :house: Interno

- [#238](https://gitlab.com/Captalys/interface/apollion/-/merge_requests/238) Instalado @types da lib para corrigir typescript

---

## 06/05/2020

### @captalys-platform/core@1.9.3

#### :bug: Bug Fix

- [#254](https://gitlab.com/Captalys/interface/apollion/-/issues/254) Alterado cor "danger" no tema
- [#259](https://gitlab.com/Captalys/interface/apollion/-/issues/259) Corrigido estados e cores do componente Button
- [#262](https://gitlab.com/Captalys/interface/apollion/-/issues/262) Corrigido cores do botão em estado desabilitado
- [#263](https://gitlab.com/Captalys/interface/apollion/-/issues/263) Esconde ícone do botão quando estado de loading está habilitado
- [#264](https://gitlab.com/Captalys/interface/apollion/-/issues/264) Mantem o tamanho do botão quando estado de loading está habilitado

#### :memo: Documentação

- [#260](https://gitlab.com/Captalys/interface/apollion/-/issues/260) Fix Button line-height
- [#261](https://gitlab.com/Captalys/interface/apollion/-/issues/261) Removido casos de uso ruins da documentação do Botão (Icons)
- [#265](https://gitlab.com/Captalys/interface/apollion/-/issues/265) Changed interactive demo select component in order to accept label/value options

#### :house: Interno

- [#266](https://gitlab.com/Captalys/interface/apollion/-/issues/266) Ajustes na documentação, exclusão e troca de diretórios dos componentes.

---

## 30/04/2020

### @captalys-platform/core@1.9.2

#### :bug: Bug Fix

- [#244](https://gitlab.com/Captalys/interface/apollion/-/issues/244) Minor fix no CSS do componente InputFile
- [#244](https://gitlab.com/Captalys/interface/apollion/-/issues/244) Corrigido problemas de layout e estado do componente Checkbox
- Corrigido useDropdown para renderizar menu apenas após a renderização do DOM

#### :memo: Documentação

- [#244](https://gitlab.com/Captalys/interface/apollion/-/issues/244) Melhorado documentação do componente Checkbox
- [#241](https://gitlab.com/Captalys/interface/apollion/-/issues/241) Removido habilidade de definir cor complementar / Configurado cor complementar para se basear na cor "main"

#### :house: Interno

- [#244](https://gitlab.com/Captalys/interface/apollion/-/issues/244) Refatorado arquitetura dos componentes de exemplo para seguirem a estrutura do sidebar
- [#241](https://gitlab.com/Captalys/interface/apollion/-/issues/241) Adicionado função para gerar cor complementar automaticamente
- [#230]<https://gitlab.com/Captalys/interface/apollion/-/issues/230> Corrigido problemas de tipagem no componente Form

---

## 22/04/2020

### @captalys-platform/core@1.9.1

#### :rocket: Features

- [#229](https://gitlab.com/Captalys/interface/apollion/-/issues/229) Tipografia - Implementado fonte Muli!

#### :bug: Bug Fix

- [#243](https://gitlab.com/Captalys/interface/apollion/-/issues/243) Patronizado layout do component Tabs
- add width and height to Content Loader component;!
- Minor changes on InputRange!
- [#244](https://gitlab.com/Captalys/interface/apollion/-/issues/244) Minor fix no CSS do componente InputFile
- [#244](https://gitlab.com/Captalys/interface/apollion/-/issues/244) Corrigido problemas de layout e estado do componente Checkbox
- Corrigido useDropdown para renderizar menu apenas após a renderização do DOM

#### :memo: Documentação

- add random image src to doc;
- [#244](https://gitlab.com/Captalys/interface/apollion/-/issues/244) Melhorado documentação do componente Checkbox
- [#241](https://gitlab.com/Captalys/interface/apollion/-/issues/241) Removido habilidade de definir cor complementar / Configurado cor complementar para se basear na cor "main"

#### :house: Interno

- Correção de scripts no package.json dos projetos (lib -> build)!
- [#244](https://gitlab.com/Captalys/interface/apollion/-/issues/244) Refatorado arquitetura dos componentes de exemplo para seguirem a estrutura do sidebar
- [#241](https://gitlab.com/Captalys/interface/apollion/-/issues/241) Adicionado função para gerar cor complementar automaticamente
- [#230]<https://gitlab.com/Captalys/interface/apollion/-/issues/230> Corrigido problemas de tipagem no componente Form

---

## 16/04/2020

### @captalys-platform/core@1.9.0

v1.9.0 é uma release que inclui diversas melhorias internas como correção do processo de linting e também a adição de novos componentes seguindo o padrão desenvolvido pelo time de UX

#### :rocket: Features

- Implementado novo componente Button
- Implementado novo componente IconButton
- Implementado novo componente Link

#### :house: Interno

- Corrigido prettier & linting
- Melhorado processo de validação da aplicação ao "commitar" & "pushar"

#### :hammer: Testes

- Configurado ambiente de testes
- Adicionado Cypress & criado smoke test (esse teste não está inserido no processo de build)
- Adicionado Enzyme
- Criado testes unitários para o componente Button
- Criado testes unitários para o componente IconButton
- Criado testes unitários para o componente Link

#### :memo: Documentação

- Adicionado showcase do componente Button
- Adicionado showcase do componente IconButton
- Adicionado showcase do componente Link

#### :warning: Pontos de Atenção

- Infelizmente não é possível extender o arquivo `.editorconfig`da mesma forma que fazemos com o `prettier` e `eslint`, por isso, existe um comando no `package.json` root chamado `link:editorconfig`. É uma boa prática executar esse comando em qualquer projeto que tenha como dependência o pacote `@captalys-platform/eslint-config-captalys-platform`. Dessa forma é possível manter a consistência da aplicação.
- É muito importante configurar o comando `json "editor.defaultFormatter": "esbenp.prettier-vscode"` no seu arquivo `.vscode/extensions.json`. Dessa forma o `prettier` será igual para todos! =)

---

## 08/04/2020

### @captalys-platform/core@1.8.0

v1.8.0 é uma release que inclui diversas melhorias, principalmente relacionadas ao **tema e cores**.

#### :bug: Bug Fix

Tema

- Melhorado arquitetura das cores no tema padrão
- Corrigido cores neutras no tema padrão
- Replicado mudanças nos componentes dependentes
- Adicionado funções padrões getColor, getColorContrast e getBgAndColor

#### :house: Interno

- Corrigido problemas para rodar o Apollion com o lerna. A partir de agora, apenas rodando yarn start core faz o projeto `website` e @captalys-platform/core` é suficiente.
- Adicionado linting no pacote root (vscode).
- Atualizado versão do React & React DOM para correção de problemas de linting/interface.
- Corrigido validação do husky para rodar o prettier antes do push.
- Adicionado validação para garantir que o processo de build do core & docs não irão quebrar ao dar push.

#### :warning: Pontos de Atenção

##### Cores

O tema da aplicação pode ser acessado via console através da variavel `theme`.
É **muito importante** que a partir de agora utilizemos as cores neutras dentro da propriedade `neutral`, assim como `grayscale`. Dessa forma conseguiremos padronizar o acesso de propriedades via `chaves []`. Não removi a forma antiga por questões de retrocompatibilidade.

##### Documentação

Devido ao processo de build (SSR) do Docusaurus, precisamos validar se todas as variaveis globais do browser existem. Por isso, é **muito importante** utilizar e centralizar todas essas regras na variavel `$window` disponibilizada em `src/entities/window`.

---

## 25/03/2020

### @captalys-platform/core@1.7.0

v1.7.0 é uma release de manutenção que inclui correção de bugs, atualização da documentação.

#### :bug: Bug Fix

- [#170](https://gitlab.com/Captalys/interface/apollion/-/issues/170) <List />, problema com interface 'content'
- [#193](https://gitlab.com/Captalys/interface/apollion/-/issues/193) Remover o <Text /> de dentro do TableCell
- [#192](https://gitlab.com/Captalys/interface/apollion/-/issues/192) Atributo 'max-width' no Modal fixado em 500px
  - [#215](https://gitlab.com/Captalys/interface/apollion/-/issues/215) Atributo `max-width` do flexContainer fixado em 1366px

#### :rocket: Features

- [#136](https://gitlab.com/Captalys/interface/apollion/-/issues/136) novo componente: <InputAsyncSelect />

#### :memo: Documentação

- [#127](https://gitlab.com/Captalys/interface/apollion/-/issues/127) <List /> multipleList não salva selecionados

#### :house: Interno

- [#188](https://gitlab.com/Captalys/interface/apollion/-/issues/188) Adicionado checkagem de lint no processo de desenvolvimento & deploy
