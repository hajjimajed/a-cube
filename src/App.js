import { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import About from './routes/about/about.component';
import Loader from './components/loader/loader.component';

import '../src/fonts/Butler-Black.woff';
import './App.scss';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    animateScroll.scrollTo(window.innerHeight, {
      duration: 1500,
      delay: 100,
      smooth: true, // Increase duration to slow down scrolling
    });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="App" onWheel={handleScroll}>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
