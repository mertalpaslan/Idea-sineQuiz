import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Welcome to sineQuiz</h1>
        <p>Create quizes and select one to solve!</p>
      </div>
    );
  }
}
