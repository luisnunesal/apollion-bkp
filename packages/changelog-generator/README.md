# Changelog Generator

Gerador de changelogs de versão para aplicações da Captalys.

## Como utilizar

São dois scripts: um para o fluxo normal de desenvolvimento, no caso um log por MR / issue. O outro script é para gerar o arquivo `CHANGELOG.md` de fato, e será utilizado somente por um `mantainer` do projeto através das branchs permitidas que são configuradas no `config.json` no campo `allowed-branchs`.

### Como adicionar um novo LOG

O desenvolvedor deverá executar o seguinte comando sem **NENHUM** parâmetro:

```
yarn log
```

O prompt irá perguntar o nome do pacote - caso tenha um arquivo chamado `lerna.json` no root do projeto - (será um select, não precisa digitar), categoria (que também será um select), título para o log e o número da issue. Ele também irá perguntar o autor, que será default o nome do usuário GIT Local e a versão do log, que será default o valor do `version` do `package.json` do pacote escolhido.

Após o arquivo ser gerado, o desenvolvedor deverá adicionar o novo arquivo normalmente como qualquer outro e não precisará fazer mais nada em relação a `CHANGELOG`.

---

O arquivo gerado terá o nome seguindo a nomenclatura:

`|files.length|-|Date.now()|-|branchName|.json`

Então por exemplo, caso exista 100 arquivos de log, e a branch atual se chame `feature/changelog-generator`, o nome do arquivo seria:

`101-1614459743670-feature-changelog-generator.json`

Lembrando que: é feito um `replace` no nome da branch, substituindo todas os `/` por `-` e evitando nomes inválidos para pastas.

Caso seja necessário, o desenvolvedor poderá alterar manualmente o arquivo e fazer o commit de qualquer alteração como um arquivo comum. O arquivo gerado será sempre o ÚLTIMO da pasta, por questão do número de arquivos atualmente ser igual o primeiro caractere do nome do novo arquivo. Dessa maneira fica mais fácil encontrar o arquivo caso necessário.

---

### Como gerar o arquivo `CHANGELOG.md`

Primeiro o desenvolvedor deverá estar dentro das branchs permitidas, que são configuradas dentro do `config.json` no campo `allowed-branchs`, caso o contrário o script é encerrado. Dessa maneira é evitado que seja feito commit de alterações do CHANGELOG em branchs de desenvolvimento, gerando conflito e continuando o problema dos Merge Request.

Depois basta executar o seguinte comando:

```
yarn generate-changelog
```

O script será executado, perguntará a `releaseDate` (sendo por padrão a data da próxima terça - podendo ser o dia atual) e alterará o arquivo `CHANGELOG.md`, e só precisará ser adicionado e enviado o Commit da forma normal.

## Como configurar os templates do changelog

Dentro da pasta `/changelog/templates` deverão existir **obrigatoriamente** 3 arquivos:

### `category-content-template.md`

**Tags obrigatórias do template:**

- `{emojiName}`: emoji que aparecerá no GitLab ao lado do nome da categoria
- `{categoryLabel}`: categoria do log
- `{categoryLogs}`: todos os logs de uma categoria

### `package-template.md`

**Tags obrigatórias do template:**

- `{packageName}`: nome do pacote do log (caso seja monorepo)
- `{projectUrl}`: url do projeto
- `{logVersion}`: versão do log
- `{categoriesContent}`: todas as categorias com seus logs

### `version-template.md`

**Tags obrigatórias do template:**

- `{releaseDate}`: data de release dos logs
- `{packageContent}`: todos os pacotes com todas as categorias e logs

Desde que tenha as tags necessárias com `{}` em volta delas sem espaço, a ordem e disposição pode ser qualquer uma.

## Licença

© 2021 Captalys - Todos os direitos reservados.
