const inquirer = require('inquirer');
const format = require('date-fns/format');
const isValid = require('date-fns/isValid');
const parseISO = require('date-fns/parseISO');

const { getCurrentGitUser } = require('./git.util');
const { getPackageJsonVersion } = require('./file.util');
const { getNextDayOfTheWeek } = require('./date.util');
const { changelogConfig, isMonoRepo } = require('./path.util');

const createNewLogInquirer = async () => {
  const gitUser = await getCurrentGitUser();

  const packageQuestion = {
    name: 'packageName',
    type: 'list',
    message:
      'Package do log. Selecione qual foi o package que a issue foi feita.\n>>',
    choices: changelogConfig.packages,
  };

  const questions = [
    {
      name: 'category',
      type: 'list',
      message: 'Categoria do log. Deve ser igual ao prefixo da sua branch.\n>>',
      choices: changelogConfig.categories.map((category) => category.category),
    },
    {
      name: 'title',
      type: 'input',
      message: 'Titulo do log. Ele ficará do lado do número/link da issue.\n>>',
    },
    {
      name: 'issue',
      type: 'input',
      message:
        'Número da issue. Ele será concatenado junto da URL configurado no package.json do projeto.\n>>',
      validate(value) {
        const valueNumber = +value;
        if (!Number.isNaN(valueNumber)) {
          return true;
        }

        return 'Atualmente o campo issue aceita somente números como identificador.';
      },
    },
    {
      name: 'author',
      type: 'input',
      message:
        '(Opcional) Autor da issue. Será utilizado somente como referência no arquivo de log.\n>>',
      default: gitUser,
    },
    {
      name: 'version',
      type: 'input',
      message:
        '(Opcional) Versão da issue no changelog. Será usado como default a versão atual do package.json.\n>>',
      default: (answer) => getPackageJsonVersion(answer.packageName),
    },
  ];

  if (isMonoRepo) {
    questions.unshift(packageQuestion);
  }

  const values = await inquirer.prompt(questions);

  return {
    ...values,
    package: isMonoRepo ? values.package : '',
  };
};

const createGenerateChangelogInquirer = async () => {
  const questions = [
    {
      name: 'releaseDate',
      type: 'input',
      message: 'Data do release.\n>>',
      default: format(getNextDayOfTheWeek('Tuesday', false), 'dd/MM/yyyy'),
      validate(value) {
        const splitDate = value.split('/');
        const date = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
        if (isValid(parseISO(date))) {
          return true;
        }

        return 'A data passada não é válida';
      },
    },
  ];

  return inquirer.prompt(questions);
};

module.exports = {
  createNewLogInquirer,
  createGenerateChangelogInquirer,
};
