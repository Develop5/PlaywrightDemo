# PlaywrightDemo

## Practices on Plawright by using BDD ##

&nbsp;
### Framework goals ###

**Accomodate team skillsets** – Enable our most technical and lest technical team members
&nbsp;

**Support longevity of use** – Easy to mantain and update overtime
&nbsp;

**Easy to understand** – Low complexity code that is not intimidating to fresh eyes
&nbsp;

**Best Practices** – Enables best practice iterations on framework (architecture and code)
&nbsp;

**Team buy in** – A consistent architecture approach supports training/pairing/skilling up accross the team
&nbsp;

**Reusability** – Low code / easy to reuse
&nbsp;

&nbsp;
### Project editor ###
Settings (left down icon)
Open settings.json (right upper icon)
&nbsp;
```
{
    "cucumberautocomplete.steps": ["./e2e/src/step-definition/**/*.ts"],
    "cucumberautocomplete.syncfeatures": "test/features/*.feature"
}
    
```

&nbsp;

[Application for this demo](https://github.com/TestingTalks/react-app)

&nbsp;

### **Steps** ###
1. Download Node.js
2. System environment variables
&nbsp;

    NODE_HOME = C:\Program Files\nodejs\

3. Check that node is installed, from command line
&nbsp;

    node     (a ">" prompt will appear)

4. Add plugins Cucumber.js and Cucumber+ to Intellij Idea

5. Download and install yarn for Windows. Close any Git Bash terminal before.
6. cd react-app
&nbsp;

    (the web application you want to test, so you probably need to have cloned before) 

7. yarn install
&nbsp;

    (from Git Bash)
8. yarn add react-scripts
&nbsp;

    (because you have cloned a git repo created with an older version of create-react-app or event with another setup)

9. yarn add react-router-dom@5.2.0
&nbsp;

    (it is to downgrade the version of the react-router-dom below V6)

10. yarn start
&nbsp;

    (The browser will launch the application)

&nbsp;
### **Configuring the project** ###
1. Create "e2e" folder under the folder for the application react-app. Go into it.
2. npm init -y

    &nbsp;
    (will create package.json)
&nbsp;

3. npx -p typescript tsc --init
&nbsp;

    (will create tsconfig.json file)


&nbsp;
### Key automation framework and associated packages ###
1. yarn add playwright -D
&nbsp;

    This installs playwright with packages in your devDependencies ("-D")

2. yarn add @playwright/test -D
&nbsp;

    Contains all assertion libraries

3. yarn add @cucumber/cucumber -D

4. yarn add typescript -D

5. yarn add ts-node -D


&nbsp;

**Context**: A context creates a new fresh incognito instance of the brower 
for each test. No cache no cookies, it is fresh browser
A browser context can contain multiple pages

**Page**: Single tab or pop-up window within a browser
Here we will have a single page to run our automation
Then, you can have a single browser with multiple pages or tabs

&nbsp;
### **Dotenv** ###
Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

&nbsp;
### **Dotfiles** ###
A set of Bash configuration files for macOS, Linux and Windows, that you can use to customize your shell and applications. All in one place and ready to use.
&nbsp;

The Dotfiles live right in your home directory, so you can keep them under version control, and you can use them on any computer, anywhere.
&nbsp;

They aggregates a collection of standalone dotfiles combined into a single lib directory located in your home directory ~/.dotfiles/lib. 

They provide convenient aliases, functions, and a few ready-to-use settings built for speed and high performance for your shell.

&nbsp;

### **The twelve-factor app** ###
In the modern era, software is commonly delivered as a service: called web apps, or software-as-a-service. The twelve-factor app is a methodology for building software-as-a-service apps that:
&nbsp;

Use declarative formats for setup automation, to minimize time and cost for new developers joining the project;
&nbsp;

Have a clean contract with the underlying operating system, offering maximum portability between execution environments;
&nbsp;

Are suitable for deployment on modern cloud platforms, obviating the need for servers and systems administration;
&nbsp;

Minimize divergence between development and production, enabling continuous deployment for maximum agility;
&nbsp;

And can scale up without significant changes to tooling, architecture, or development practices.
&nbsp;

The twelve-factor methodology can be applied to apps written in any programming language, and &nbsp;

which use any combination of backing services (database, queue, memory cache, etc).

https://12factor.net/
&nbsp;

https://en.wikipedia.org/wiki/Twelve-Factor_App_methodology

&nbsp;

### **... Further steps** ###

6. 
    ```
    yarn add @babel/cli -D
    ```

    Install babel.
    
    Babel comes with a built-in CLI which can be used to compile files from the command line.

In addition, various entry point scripts live in the top-level package at @babel/cli/bin.

7. 
    ```
    yarn add @babel/preset-env -D
    ```

    A smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!

    Babel will do the necessary completion or transform/rewriting of JS code into TS

8. yarn add dotenv -D
    
    Loads environment variables from .env file

    Storing configuration environments separate from code is based on the twelve-factor app methodology

    Methodologies like the 12 Factor App specify that an application’s code and configuration are separate but combine during deployment to accommodate specific environments.


9. 
    ```
    yarn add cucumber-html-reporter
    ```

10. To run the tests in Windows (initially):

```
    ./run_tests.bat dev
    ./run_tests.bat smoke
    ./run_tests.bat regression
```

11. Running tests with environment included (current)

```
    ./run_tests.bat localhost dev
    ./run_tests.bat localhost regression
    ./run_tests.bat production dev
    ./run_tests.bat production regression
```


&nbsp;

> 
> In case you want to work with the Playwright Inspector:
> PWDEBUG=1
> If you want to track an error to here:

> react-app\src\ContactItem.react.js

> And change:

> full-name-label

> To:

> full-name-labellll

> Just to yield an error
> Then do "Step Into" in Playwright Inspector until you see the error is not green anymore
> but gray. The failure is there.
> Go back to the code and fix it.
> 
> Reference: [PlayWright Inspector](https://playwright.dev/docs/debug)
> 

&nbsp;

Other tips in Playwright Inspector:
- There is a "Pick locator" button that suggests other locators.
    In the same place you can find also Element (?)

&nbsp;

Introduce a typo in the source code

    react-app\src\ContactItem.react.js

Now you go to the page in the browser and you will see an extra "s" at the end of each name
```
Name:<strong className="item-value" data-id="name">{item.name}s</strong>
```
It is openly a bug but when you run the test you will see it is not detected

&nbsp;

You can use the command "debugger" as a line in the .js source code, to make the devtools windows pop up.

&nbsp;

Probably console.log() is almost the most practical tool for showing what is in a variable

&nbsp;

This environment variable guarantees that the report will go online to be share with other people. 
&nbsp;

This will remove the frame that comes at the end of the execution "Share your Cucumber Report wit your team at"
```
CUCUMBER_PUBLISH_QUIET=true
```
But then you need to Authorize SmartBear to enter to [Public Cucumber Reports](https://reports.cucumber.io)
Removed from my example
&nbsp;

Introduce "faker" into package.json

It generates fake data for specific attributes: emails, addresses, names and many more
It is used with the purpose of generating random data for our form fields.

From our e2e folder:

```
    yarn add faker -D
```
After confirm the last stable version in package.json, execute (from e2e folder)

```
    yarn install
```
But if you have still problems with faker, not recognized at import in random-data-helper.ts, go back to this version in package.json
    "faker": "^5.5.3",
&nbsp;

And run again "yarn install"

&nbsp;

***Accessibility:***

Modules to test accessibility: axe-playwright and axe-html-reporter

Go to e2e and:

        yarn add axe-playwright -D
        yarn add axe-html-reporter -D

Axe analyzes the application and reports any issue related to accessibility and we need to find ways accessibility can be improved

```
    yarn add exe-playwright -D
```

With accessibility.ts we inject the accessibility engine on the page we desire to analyze

Fixing some accessibility issues:

***1st accessibility issue*** In react-app\public\index.html

Populate:
```
    <title></title>
```
With:
```
    <title>Testing Talks Hub</title>
```

Because navigating through pages if they do not have titles is very confusing. And hides (as a helmet) other issues
    After fixing this title line, close Visual Code and open it again

***2nd accessibility issue to fix:***     Frames must have an accessible name
    This is fixed in 
    react-app\src\components\BasicIframe.react.js
    by adding attributes to the iFrame

***3rd accessibility issue to fix (issue 4):***     Document should have one main landmark
    We are missing main/main tags surrounding a pages main content
    Sections in pages must be clear

For this, in react-app\src\index.js look for the function renderPlaygroundForm and enclose  the whole className Playground inside a <main></main> block
    

***4th accessibility issue to fix (now issue 2):***   Heading levels should only increase by one
    In the application, elements start with h1 and the next is h6. We need to have h1, then h2, etc. 
    Replace h6 by h3 in renderPlaygroundForm
    Refresh the page, to make sure nothing was broken and inspect headers in playground page.


***5th accessibility issue to fix (now issue 3):***   Links must have discernible text
    Related to header logo not having any text

    
***6th accessibility issue to fix (now issue 2):***   Form elements must have labels
    We need to add aria-labels to all radio-buttons, to make them more descriptive.
    The aria-label attribute can be used to define a string that labels the interactive element on which it is set. This provides the element with its accessible name.

***7th accessibility issue to fix (now issue 1):*** Elements must meet minimum color contrast ratio thresholds
    For example, the blue line in the Index buttons has no enough contrast with the white.

&nbsp;

Create a new folder under the mainn react-app and name it api_e2e

Then, go to this folder and:
```
    npm init
```
And yes (Enter) to all questions

Then,

    npx -p typescript tsc --init

And yes to all.
This creates the tsconfig.json file

Now,

    yarn add @playwright/test

And then create the "src/tests" folder in react-app/api_e2e

We are not going to use Cucumber for the API suite,therefore we will use tsconfig.json
And we will use the playwright native html reporter instead of cucumber-html-reporter


Then, to execute the tests:

    yarn run test

-----
### API tests with Cucumber ###

Till now we have not used cucumber for API. If you plan to do that, follow these steps.

In the api_e2e folder execute:

    npm install @cucumber/cucumber          (see what happens in package.json)

Next install typescript:

    npm install typescript

If you have not done it by now, you need to create the tsconfig.json (npx -p typescript tsc --init). In this project particularly it was done before.


ts-node is a very popular package in Typescrip world. It allows us to run a test and get results without having to worry about file changes and compilation.

    npm install ts-node

Once this module is installed, we can add scripts in package.json (cucumber, in this case)
    
This script indicates where are our features. The ts-node/register inside this script enables us to execute typescript code. Typescript is always compiled to JavaScript on runtime.
This script also indicates where are the step-definitions.


Now, we can execute in our api_e2e folder:

    npm run cucumber


Then, we need to have test results segregated, independently of whether we run 1 or more tests at a time, in parallel.
Cucumber World provides us an isolated context per scenario, exposed to the hooks and steps as this. Enabling you to set and recall some states across the lifecycle of your scenario.
Cucumber world class is accessible via "this" in scenario before, after, when, given and then steps.
It is used to store scenario configuration and current browser. 
Cucumber world enables us to set global configuration for each scenario, meaning all our cucumber scenarios run independently and retain any configuration or variables set before or throughout.
That is why with this, we can execute scenarios in parallel.


Install playwright

    npm install playwright


#### ESLint ####

From our folder api_e2e:

    npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

Now create files

    .eslintrc
    .eslintignore
And add the corresponding script in package.json, for lint to be executed

    npm run lint
This can be launched from the command line, from time to time as well, to ensure the code is still clean.

Create cucumber.js, update package.json and install babel

    npm install @babel/core
    npm install @babel/cli
    npm install @babel/preset-env
    npm install @babel/preset-typescript

Create index.ts
&nbsp;
And now, the test is executed a little differently

    npm run cucumber -- --profile dev


#### Again, environment variable management ####

In the api_e2e folder:

    npm install dotenv

common.env needs to be created

Create files:

    run_tests.sh        (And provide permission: chmod +x ./run_tests.sh) for Linux, Mac
    run_tests.bat       For Windows

And now tests can be executed through this command: 
    ./run_tests.sh dev          
            or
    ./run_tests.bat dev         
Depending whethe you are in Linux or Windows. (Both work for me)


#### Cucumber reporter ####

Create a folder reporter an a cucumber-report.ts inside it

from api_e2e folder, run:

    npm install cucumber-html-reporter


#### Changes in the script "test" ####

This piece was added to "test" which ensures that the folder with transpiled code is cleaned up before calling cucumber-js.

    rimraf dist && 

Now, by running

    npm run test
The complete folder is deleted

&nbsp;

*I am here:*
- [ ] Conclussion




    &nbsp;
    Time:     
&nbsp;

##### Resources #####

Emoji
A simple plugin to insert emoji from the command palette.

Installation
Run ext install emoji in the command palette.

Usage
Open command palette with command/ctrl + p

type > select Emoji: Insert emoji

Run Emoji: Insert emoji or Emoji: Insert emoji unicode in the command palette by hitting enter and select the emoji to insert at the cursor.

&nbsp;

Printing compelling messages:

[Look for emojies here](https://emojipedia.org/firecracker)


    (ex. with Dynamite)

    console.log('  🧨 Lourdes >>>>>>>>  ')
    console.log(` Cell i, j : ${i},    ${i}     Contains: ${expected_response[i][j]}`)
    console.log(' Contains: ')
    console.log('Lourdes >>>>>>>>  🧨 ')

    (An alien monster: 👾)

&nbsp;

For Markdown Syntax:

[Makdown Guide](https://www.markdownguide.org/basic-syntax)
