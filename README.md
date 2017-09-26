# ng-customizable-bootstrap

Angular powered Bootstrap 4 components for customizable UIs

# Library

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Contributing

## Development environment

## Creating components

Once you have set up your development environment, you are ready to start creating components.

Creating components involves: 
* Creating a new Git branch
* Using the Angular CLI to generate a module
* Using the Angular CLI to generate a component
* Writing the code for the component
* Exporting the component from the module
* Taking the component for a spin
* Committing to local branch and pushing to remote branch
* Generating a pull request

To illustrate these steps, let us create a "card" component.

### Creating a new Git branch

Checkout a branch called card based on master. The -b flag tells Git to create the branch if it does not already exist.

`git checkout -b card master`

### Using the Angular CLI to generate a module

Generate module "card" via:

`ng generate module modules/card`

### Using the Angular CLI to generate a component

Generate component "card" via:

`ng generate component modules/card`

### Writing the code for the component


### Committing to local branch and pushing to remote branch

`git add .`
`git commit -m “finished card component”`
`git push origin card`

### Generating a pull request


