import './App.scss';


import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.component';

import '../src/fonts/Butler-Black.woff'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>



      </Route>
    </Routes>
  );
}

export default App;
