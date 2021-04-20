// Declaring the dependencies and variables
const fs = require("fs");
const inquirer = require("inquirer");

// generateReadme function populating the README.md
function generateReadme (answers) {
    return `
# ${answers.projectTitle}

## Description 
    
${answers.description}
    
## Table of Contents
    
* [Description](#description)
* [Installation](#installation)
* [Preview](#preview)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
    
## Installation
    
${answers.installation}
    
## Preview 
    
![alt text](assets/screenshot.jpg)


## Usage

${answers.usage}
    
    
## License
    
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
    
    
## Contributing
    
${answers.contributing}


## Tests
    
${answers.tests}


## Questions
${answers.questions}<br />
<br />
Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
Email me with any questions: ${answers.email}<br /><br />`
};

return inquirer.prompt([
    {
        type: "input",
        name: "projectTitle",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process if any: ",
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project usage for?"
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors of this projects?"
    },
    {
        type: "input",
        name: "tests",
        message: "Is there a test included?"
    },
    {
        type: "input",
        name: "questions",
        message: "What do I do if I have an issue? "
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }
])
    .then(function (answer) {

        fs.open('README.md', 'w', function (err, file) {
            if (err) throw err;
            console.log('Created!');
        });

        fs.appendFile('README.md', generateReadme(answer), function (err) {
            if (err) throw err;
        });
    });