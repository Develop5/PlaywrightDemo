# PlaywrightDemo

Practices on Plawright by using BDD

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

### Steps ###
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
### Configuring the project ###
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

    This installs playwright with packages in your devDependencies

2. yarn add @playwright/test -D
&nbsp;

    Contains all assertion libraries

3. yarn add @cucumber/cucumber -D

4. yarn add typescript -D

5. yarn add ts-node -D


&nbsp;

Context: A context creates a new fresh incognito instance of the brower 
for each test. No cache no cookies, it is fresh browser
A browser context can contain multiple pages

Page: Single tab or pop-up window within a browser
Here we will have a single page to run our automation
Then, you can have a single browser with multiple pages or tabs

&nbsp;

### ... More steps ###

6. yarn add @babel/cli -D

    Install babel.
    
    Babel comes with a built-in CLI which can be used to compile files from the command line.

In addition, various entry point scripts live in the top-level package at @babel/cli/bin.

7. yarn add @babel/preset-env -D

    A smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!

    Babel will do the necessary completion or transform/rewriting of JS code into TS








&nbsp;

I am here:

- [ ] Section 22. Dynamic test configuration - A more flexible cucumber.js - part 2

    &nbsp;
    Time: 6:21
&nbsp;

By now, we continue with this at the command line:
export UI_AUTOMATION_BROWSER=firefox
Exactly like that.

&nbsp;

[Makdown Guide](https://www.markdownguide.org/basic-syntax)
