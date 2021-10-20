import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export default function Message(props) {
  return <p className='text'>{props.text}</p>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);



reportWebVitals();
