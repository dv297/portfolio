import React, { Component } from 'react';

import PageLayout from './components/PageLayout/PageLayout';
import { BrowserRouter, Route } from 'react-router-dom';

import Resume from './pages/Resume';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home/Home';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <PageLayout>
            <Route path="/" exact component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </PageLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
