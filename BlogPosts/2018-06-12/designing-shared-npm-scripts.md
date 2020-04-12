---
path: '/designing-shared-npm-scripts'
date: '2018-06-19'
title: 'Designing Shared NPM Scripts'
tags: ['Development', 'NPM', 'JavaScript', 'Web']
---

NPM scripts have long taken over the build process of Web projects. While Grunt and Gulp commands are still used by
some, it's very common to see many projects skip this tools and go straight for using NPM scripts to handle linting,
transpilation, and all sorts of project processing tasks.

```json
"scripts": {
    "build": "gatsby build",
    "develop": "gatsby develop",
    "format": "prettier --write 'src/**/*.js'",
    "test": "echo \"Error: no test specified\" && exit 1"
}
```

_A sample NPM script from a Gatsby Project_

Don't know what an NPM script is? Here is a quick primer. Say you want to add linting to your project. A very popular
linting tool is "ESLint". You could install it globally...

```
npm install -g eslint
```

... and then run it using...

```
eslint src
```

...to lint all of the files under "src". But you might work with a team of developers, and getting every developer to
install and maintain a list of global dependencies can get hectic fast!

You could instead opt to install it locally to the project.

```
npm install --save-dev eslint
```

You'll notice a new dev dependency in your package.json. But since it's not a global NPM package anymore, you'll have to
qualify the path if you want to run ESLint directly from your command line.

```
./node_modules/.bin/eslint src
```

Obviously this gets very annoying when you have to consider all the additional flags you might add to ESLint. This is
where NPM scripts come in. In your package.json, you can define a "scripts" section.

```json
"scripts": {
    "lint": "eslint src",
}
```

And then you run it using...

```
npm run lint
```

Because the scripts section is in your package.json, Node.JS will know to look into your `node_modules` folder and use
that copy of ESLint. No more prefixing your commands with `./node_modules`!

I've worked across many projects that are maintained by many teams, and I've learned that NPM scripts are not just a
purely "technical" solution. NPM scripts define the way people work and communicate about a project and good NPM scripts
can have strong social implications for both new and experienced web developers. Here are some tips that I have found
when defining NPM scripts that are going to be shared.

# 1. Define one set of scripts that work across all projects

This one may be fairly obvious when your projects are worked on by one team. But when you have many projects and many
teams working on those projects, the NPM scripts can get a little crazy from project to project if left unsupervised.
How do you start your project? Do you run `npm start`? `npm run develop`? `npm run dev`? The experienced Web developer
will know to go straight to the package.json to find the answer. But for a beginner, there is nothing more frustrating
than picking up a task, getting excited to work on it, and then finding out you have no idea how to build and run the
project.

Here is a set of scripts that has worked well for us while developing React components. I've left out the implementation
of each script to allow the usage of different technologies.

```json
  "scripts": {
    "build": "npm run lint && npm run compile && npm run test",
    "compile": "",
    "lint": "",
    "start": "",
    "test": "",
  },
```

The build command allows one easy command that people can use to make sure their work is in a good state. And the
inclusion of another command for running a development server versus a production server is dependent on the project.
But this should be a good starter for having a discussion around forming standardized list.

# 2. Don't include too many scripts

When I first joined my team, I was very excited to help standardize the way we do web development. Adding automated
linting and testing with flags that automatically fixed issues seemed like a wonderful idea to me. I worked at adding
all these features and adding an NPM script for each feature.

My scripts section began to look like this.

```json
  "scripts": {
    "build": "npm run lint && npm run compile && npm run test",
    "checkall": "npm ci && npm run lint && npm run prepush && npm run test",
    "compile": "npm run compile:clean && npm-run-all --parallel compile:es5 compile:dist-server",
    "compile:clean": "",
    "compile:dist-server": "",
    "compile:es5": "",
    "lint": "npm run lint:js:fix && npm run lint:css:fix",
    "lint:css": "",
    "lint:css:fix": "",
    "lint:css:watch": "",
    "lint:js": "",
    "lint:js:fix": "",
    "lint:js:watch": "",
    "lint:watch": "npm-run-all --parallel lint:css:watch lint:js:watch",
    "prepush": "",
    "start": "npm-run-all --parallel test:jest:watch lint:watch open:src",
    "test": "npm run test:jest && npm run test:testcafe",
    "test:jest": "",
    "test:jest:watch": "",
    "test:testcafe": "",
    "test:testcafe:visual": "",
    "open:dist-server": "",
    "open:src": ""
  },
```

Initially, to me, this looked fantastic! "Power users" could run individual commands as they needed them, but the
average developer could run the more standard commands, like `npm run build` or `npm run lint` for the normal use cases.
But as time passed, I realized that I was the only one using the individual commands. No matter how many times I told
people "You can read the package.json to find individual, faster commands!" and no matter how many times I went to
people's desks to help them with one problem and would casually introduce one of these individual commands, the commands
never stuck. While your experience may vary, I've found that straying far from the list provided in tip #1 often leads
to information overload, so keeping your list short can help reduce frustration.

Another reason I separated out each individual command is because we're always taught that small, single purpose
functions are easier to review. And this is true! To say that the `npm run lint:js:watch` command is just the
`npm run lint:js` command with the watch flag applied made it so easy to reason about! But you have to take a step back
and wonder "Would anyone ever really just run the JavaScript linting on watch mode?" At best, you might have a developer
who uses the "lint:watch" command, which would include linting CSS at the same time. But normally, you'd just have
developers not caring to have linting on watch, opting to just lint before pushing. Keep things simple and your teams
will be much happier.

# 3. Run things in parallel when you can, but beware log collision

Web development is fast! Or at least it should be fast! Our team wanted to reduce the time we spent waiting for build,
so we looked for ways to concurrently run build items. [npm-run-all](https://github.com/mysticatea/npm-run-all/) is a
fantastic NPM package that allows you to run multiple commands in parallel with their --parallel flag.

```json
"start": "npm-run-all --parallel test:jest:watch lint:watch open:src",
```

This works great but it will naively combine the console logs of each process. When something goes wrong, most
developers assume the error is at the bottom of the log. But when running things in parallel, the error may get mixed in
the logs of other tasks. Remember to evaluate this kind of risk and reward when setting up scripts and your team will
thank you!

# Conclusion

There are complex parts of JavaScript development, but we should work to simplify as much of it as we can so we use our
cognitive processing on harder problems. I hope these three tips simplify your development process and help both new and
experienced developers have a more consistent workflow.

_Have comments? More tips and tricks? [Join the conversation for this post on Twitter!]()_
