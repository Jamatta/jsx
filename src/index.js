// import the React and ReactDOm libraries
import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// npm start --reset-cahce

// Create a react component
const App = () => {
    
return (
    <div>Test Project</div>
);
};

//Take the react component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')

);