const inquirer = require('inquirer');
const licenseBadge = require("./utils/licenseBadge");

const { writeFile } = require('fs').promises;

const promptUser = () => {
  return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What would you like to name your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of this project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What License did you use?',
        choices: [
            'Apache',
            'MIT',
            'GNU GPLv3',
            ]
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will this project be used?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can someone contribute to this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What did you use to test?'
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install your project?'
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub Username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email address?'
    }
])};

const generateMarkdown = ({ title, description, license, test ,install, userName, email, contribution, usage }) =>
`# ${title}

  ${description}

  ${licenseBadge}
  
---
## Contents

1. [About](#about)
2. [Installation](#installation)
3. [Usage](#usage)
3. [Contributions](#contributions)
3. [License](#license)
4. [Tests](#tests)
5. [Questions](#authors%20and%20acknowledgment)

---
## About

---
## Usage
    ${usage}

---

## Installation:
  ${install}

  ---

## License
  License used for this project - ${license}
  
---

## Contributing:

    ${contribution}
  
---

## Tests:
  ${test}

---

## Questions
* GitHub Username: ${userName}
* Email: ${email}
`
;
    function init() {
        promptUser()
        
            .then((answers) => writeFile('README.md', generateMarkdown(answers)));
    }

init();
