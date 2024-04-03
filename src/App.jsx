import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { MainView } from './components/main-view/main-view';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <MainView></MainView>
      </div>
    </>
  );
}

export default App;
