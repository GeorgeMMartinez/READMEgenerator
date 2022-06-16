// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'What is the name of your GitHub repo?',
    name: 'repo',
  },
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Write a description of your project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Explain the steps needed to install your project.',
    name: 'installation',
  },
  {
    type: 'input',
    message: "Provide instructions and examples of your project in use.",
    name: 'usage',
  },
  {
    type: 'input',
    message: "Provide guidelines on how others can contribute to your project.",
    name: 'contributing',
  },
  {
    type: 'input',
    message: "How can you test your project?",
    name: 'tests',
  },
  {
    type: 'list',
    message: "Choose a license for your project.",
    choices: ['None', 'GNU GPL 3.0', 'Apache License 2.0', 'MIT License'],
    name: 'license',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    } else {
    console.log("Success! Your READ.ME has been generated.")
    }
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function (data) {
      console.log(data);
      var fileContent = generateMarkdown(data);
      writeToFile(fileContent)
    });
}

// Function call to initialize app
init();
