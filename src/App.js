import React, { useState } from 'react';

const App = () => {
  const [login, setLogin] = useState(false);
  return (
    <div>
      샘플사이트
      로그인체크 {login ? '로그인됨' : '로그아웃됨'}
    </div>
  )
}

export default App;
