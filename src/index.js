import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WeatherProvider from './contexts/WeatherContext';


ReactDOM.render(
  <React.StrictMode>
    {/* Wrap the App with Weather Context Wrapper. So any
    component children of App can use the context */}
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
