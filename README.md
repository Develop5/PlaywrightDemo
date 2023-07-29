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

For accessibility:

    Modules to test accessibility: axe-playwright and axe-html-reporter

        Go to e2e and:
        yarn add axe-playwright -D
        yarn add axe-html-reporter -D

    Axe analyzes the application and reports any issue related to accessibility and we need to find ways accessibility can be improved

    yarn add exe-playwright -D

    With accessibility.ts we inject the accessibility engine on the page we desire to analyze

    Fixing some accessibility issues:
    In react-app\public\index.html

    Populate:
    <title></title>
    With:
    <title>Testing Talks Hub</title>

    Because navigating through pages if they do not have titles is very confusing. And hides (as a helmet) other issues
    After fixing this title line, close Visual Code and open it again
    
&nbsp;

*I am here:*
- [ ] Section 21: Accessibility Automation Testing - Playwright + Axe Engine

    Chapter 165. Integrating AXE engine into our automation framework - part 1


    &nbsp;
    Time:       
&nbsp;


Emoji
A simple plugin to insert emoji from the command palette.

Installation
Run ext install emoji in the command palette.

Usage
Open command palette with command/ctrl + p

type > select Emoji: Insert emoji

Run Emoji: Insert emoji or Emoji: Insert emoji unicode in the command palette by hitting enter and select the emoji to insert at the cursor.

Example

[Makdown Guide](https://www.markdownguide.org/basic-syntax)
