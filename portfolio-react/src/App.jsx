import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Intro from './components/Intro';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';

    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }

    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setShowIntro(false);
      window.scrollTo(0, 0);
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
