---
path: "/setting-up-testcafe"
date: "2018-06-08"
title: "Testing React Components with TestCafe"
tags: ["Development"]
---

![TestCafe](testcafe.png)

## Summary
* TestCafe is an E2E testing framework.
* Various benefits
  * Abstracts away the need to handle asynchronous behavior
  * All of the configuration is normal Dev Server configuration
    * No extra configuration files like StoryBook, no duplication/ borrowing of Webpack configurations
  * Works in multiple browsers, even headless browsers
* Various Considerations
  * Is team ready for await/async? It has its learning curve


TestCafe is an end-to-end testing framework that allows you to easily verify the visual behavior of your application.
One of the coolest parts of using it is its API's that abstract away the concept of waiting for elements to appear. With Selenium,
there were often times where you'd have to use a combination of hacks and tricks with setTimeout to see if an element has
appeared on the page before asserting on that element. With TestCafe, however, you can use the await/async features of
ES2015+ along with the TestCafe API's, such as Selector('h1').count, to find your elements. TestCafe will automatically handle waiting for
your expected elements to appear.

TestCafe is often used on full applications, handling interactions between multiple pages. This is what I would consider
a "default" usage of TestCafe. However, I think there is some merit in considering using TestCafe when testing individual
React components, and it is not something I have seen covered. While Jest does a fantastic job handling most testing scenarios, there are some scenarios where it is nice
to be able to test your components from the perspective of an end-user. An average end-user does not have any knowledge about
props, but props are the main way we test in Jest. Getting ourselves out of that environment allows us a higher-level understanding
of workflows and really forces us to figure out how our users test the application.

## Installation
TestCafe is a simple NPM package you can include; No Selenium grids or other environments need to be setup.

```
npm install --save testcafe
```

Once your project has TestCafe installed, add the following script to your package.json

```json
scripts: {
  test: "testcafe chrome src/tests/test.js"
}
```

Let's add a sample test to ensure that our NPM script works correctly. TestCafe conveniently hosts a sample page for
this very purposes! Let's create a file `src/tests/test.js` and add the following content.
```javascript
// File: 'src/tests/test.js'
import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `https://devexpress.github.io/testcafe/example`;  // specify the start page

//then create a test and place your code there
test('My first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button')

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});
```

We can then test everything by running `npm run test`. If you have installed the NPM package, added the NPM script, and
added the test file, you should see the test executing.

### TODO: ADD TEST EXECUTION IMAGE/GIF

## Creating a React Test Fixture
If you notice from the test above, we go to a specific URL to run our tests.
```
fixture `Getting Started`// declare the fixture
    .page `https://devexpress.github.io/testcafe/example`;  // specify the start page
```

This means to test our individual React components, we'll have to have a specific URL that renders that component.
We can do this by using react-router. First, let's install react-router.

```
npm install --save-dev react-router
```

In the root of your Dev Server, render a react-router route.

```jsx
import { HashRouter, Route } from 'react-router-dom';
import FooComponent from './components/FooComponent';

render() {
  return (
    <HashRouter>
        <Route path="/tests/foo-component-test" component={FooComponent} />
    </HashRouter>
  );
}
```

A few notes. I use HashRouter here. HashRouter will just look at any part of the URI after a pound/hash sign.
For example, If your dev server runs on `http://localhost:8080`, to hit the route in the example above, we would go to the URI
`http://localhost:8080/#/tests/foo-component-test`. The other option is a BrowserRouter, which can respond to any possible URI dynamically.
For most applications, you would want to use a BrowserRouter and handle all routes and for any route not handled, send your user to a 404.
However, for us, we are just defining static test fixtures at specific, static URI's, so HashRouter fills this role perfectly.
