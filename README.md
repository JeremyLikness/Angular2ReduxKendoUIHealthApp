# Telerik (Kendo UI) Redux Angular 2 Health App 

The intent of this project is to show a very basic use of Redux in combination with Angular 2.

![Build Status](https://jeremylikness.visualstudio.com/_apis/public/build/definitions/94df79fc-c8e5-40dc-a66d-652d49089871/8/badge)

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.20-4.

Authored by [@JeremyLikness](https://twitter.com/jeremylikness). 

## Related Links

* Visit the [Demo App](http://jrldocker.cloudapp.net:8111)
* Read about [using Redux with Angular 2 and TypeScript](http://developer.telerik.com/topics/web-development/improving-state-app-redux/)
* Learn how this project integrated [Angular 2 unit tests with Visual Studio Team Services](http://csharperimage.jeremylikness.com/2016/12/integrating-angular-2-unit-tests-with.html) 
* Read how this project was set up for [Continuous Deployment with Visual Studio Team Services and Docker](https://ivision.com/blog/devops-docker-containers-deployment-visual-studio-team-services/)

## Docker Run 

Run the latest [docker container](https://hub.docker.com/r/jlikness/ng2kendouireduxapp/) for this. 

`docker run --name webapp -d -p 80:80 jlikness/ng2kendouireduxapp`

## Quick start 

Here are the steps to get started working locally. 

### Associate the Progress repository (requires a Telerik login)

`npm login --registry=https://registry.npm.telerik.com/ --scope=@progress`

The username is your login to the Telerik site. If you use an email, just enter everything before the email (i.e. foo@acme.com you will enter foo). Your full email will be prompted for as well.

### Clone the repo 

`git clone https://github.com/JeremyLikness/Angular2ReduxKendoUIHealthApp.git` 

### Install dependencies 

Go to the root `Angular2ReduxKendoUIHealthApp` directory.

`npm install` 

### Quick run (Angular-CLI)

`ng serve`

### Quick run (Docker - requires Docker Linux host installed and running)

This will build an image, run it, and open the browser to the running app: 

`npm run-script docker-start` 

This will stop and remove the container: 

`npm run-script docker-stop` 

This will stop, remove the container, and remove the image: 

`npm run-script docker-cleanup` 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
