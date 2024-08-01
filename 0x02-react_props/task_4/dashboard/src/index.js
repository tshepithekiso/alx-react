// task_5/dashboard/src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Ensure this file exists

const App = () => {
  return (
    <div>
      <h1>Hello, React Intro!</h1>
      <p>Welcome to your React dashboard!</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

