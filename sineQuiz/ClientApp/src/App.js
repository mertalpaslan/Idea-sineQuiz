import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { AddQuiz } from './components/AddQuiz';
import { Quiz } from './components/Quiz';
import { Quizzes } from './components/Quizzes';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/addquiz' component={AddQuiz} />
        <Route path='/quizzes' component={Quizzes} />
        <Route path='/quiz/:id' component={Quiz} />


      </Layout>
    );
  }
}
