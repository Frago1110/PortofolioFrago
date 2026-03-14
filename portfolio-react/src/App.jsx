import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Intro from './components/Intro';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Home />
      <Intro show={showIntro} />
    </>
  );
}

export default App;
