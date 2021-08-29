const Employee = require("./employee");
const Intern = require("./intern");
const Engineer = require("./engineer");
const Manager = require("./manager");
const { writeFile, copyFile } = require('./utils/generate');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { Console } = require("console");
const employeeArray = [];
const managerQuestions = [{type: 'input',name: 'name',message: "What is the manager's name?"},
{type: 'input',name: 'id',message: "What is the manager's employee ID?"},
{type: 'input',name: 'email',message: "What is the manager's email address?"},
{type: 'input',name: 'officeNumber',message: "What is the manager's office number?"},
{type: 'list',name: 'choice',choices:["Engineer","Intern","Finished"],message: 'Would you like to add another employee to your team?'}
];

const engineerQuestions = [{type: 'input',name: 'name',message: "What is the engineer's name?"},
{type: 'input',name: 'id',message: "What is the engineer's employee ID?"},
{type: 'input',name: 'email',message: "What is the engineer's email address?"},
{type: 'input',name: 'github',message: "What is the engineer's github user name?"},
{type: 'list',name: 'choice',choices:["Engineer","Intern","Finished"],message: 'Would you like to add another employee to your team?'}
];

const internQuestions = [{type: 'input',name: 'name',message: "What is the intern's name?"},
{type: 'input',name: 'id',message: "What is the intern's employee ID?"},
{type: 'input',name: 'email',message: "What is the intern's email address?"},
{type: 'input',name: 'school',message: "What is the intern's school?"},
{type: 'list',name: 'choice',choices:["Engineer","Intern","Finished"],message: 'Would you like to add another employee to your team?'}
];

const nextQuestion = [{type: 'list',name: 'choice',choices:["Engineer","Intern","Finished"],message: 'Would you like to add another employee to your team?'}
];
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
  
         console.log('Page created! Check out index.html in this directory to see it!');
       });
}

function mgrQuestions() {
      inquirer.prompt(managerQuestions).then(answers => { const mgrHTML = answers;
        let manager = new Manager(answers.name,answers.id,answers.email);
        employeeArray.push(manager);
        if (answers.choice === 'Engineer'){
            engQuestions();
        }
        else if (answers.choice === 'Intern'){
            intQuestions();
        }
        else{
            writeFile(generatePage(employeeArray))
            .then(res => {
              console.log(res);
              return copyFile();
            })
            .then(res => {
              console.log(res);
              console.log('All Done!');
            })
            .catch(err => {
              console.log(err);
            });
        }
});
}

function engQuestions() {
    inquirer.prompt(engineerQuestions).then(answers => { const engHTML = answers;
        let engineer = new Engineer(answers.name,answers.id,answers.email, answers.github);
        employeeArray.push(engineer);
        if (answers.choice === 'Engineer'){
            engQuestions();
        }
        else if (answers.choice === 'Intern'){
            intQuestions();
        }
        else{
            writeFile(generatePage(employeeArray))
            .then(res => {
              console.log(res);
              return copyFile();
            })
            .then(res => {
              console.log(res);
              console.log('All Done!');
            })
            .catch(err => {
              console.log(err);
            });
        }
});
}
function intQuestions() {
    inquirer.prompt(internQuestions).then(answers => { const intHTML = answers;
        let intern = new Intern(answers.name,answers.id,answers.email, answers.school);
        employeeArray.push(intern);
        if (answers.choice === 'Engineer'){
            engQuestions();
        }
        else if (answers.choice === 'Intern'){
            intQuestions();
        }
        else{
            writeFile(generatePage(employeeArray))
            .then(res => {
              console.log(res);
              return copyFile();
            })
            .then(res => {
              console.log(res);
              console.log('All Done!');
            })
            .catch(err => {
              console.log(err);
            });
        }
});
}

function promptQuestions() {
    inquirer.prompt(nextQuestion).then(answers => { console.log(answers);
});
}

function init(){
    let ans = mgrQuestions();
    
}
init()

    