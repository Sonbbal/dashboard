import React, { useState } from 'react';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';

const App = () => {
  const [login, setLogin] = useState(true);
  const onLogin = () => {
    setLogin(true);
  }
  return (
    <div className="app">
      {login ? <Dashboard />:<Login onLogin={onLogin} />}
    </div>
  )
}

export default App;
