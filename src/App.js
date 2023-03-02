import './App.scss';


import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';

import '../src/fonts/Butler-Black.woff'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>

        <Route index element={<Home />} />

      </Route>
    </Routes>
  );
}

export default App;
