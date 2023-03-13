import { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import About from './routes/about/about.component';
import All from './routes/all/all.component';
import ProjectView from './routes/project-view/project-view.component';
import Loader from './components/loader/loader.component';
import CustomCursor from 'custom-cursor-react';

import '../src/fonts/Butler-Black.woff';
import './App.scss';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6500);

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

      <div className="App" onScroll={handleScroll} onWheel={handleScroll}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<All />} />
            <Route path="/works/:projectId" element={<ProjectView />} />
          </Route>
        </Routes>
      </div>


      <div>
        <CustomCursor
          targets={['.link', 'a', 'Link', 'button', 'section', 'img']}
          customClass='custom-cursor'
          dimensions={50}
          fill='#FFF'
          smoothness={{
            movement: 0.05,
            scale: 0.2,
            opacity: 0.2,
          }}
          targetOpacity={0.4}
          targetScale={3}
        />
      </div>
    </>
  );
}

export default App;
