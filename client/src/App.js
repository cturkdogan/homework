import 'react-app-polyfill/ie11';
import React from 'react';
import './App.css';

const App = ({children}) => (  
    <div className='App'>
      {children}
    </div>
);

export default App;
