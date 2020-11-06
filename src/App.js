import React, { useState } from 'react';
import Login from './Components/Login';

const App = () => {
  const [login, setLogin] = useState(false);
  const onLogin = () => {
    setLogin(true);
  }
  return (
    <div className="app">
      {login ? '로그인됨됨됨':<Login onLogin={onLogin} />}
    </div>
  )
}

export default App;
